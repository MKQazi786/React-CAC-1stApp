let render = (reactElement, container) => {
   /* let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement); */ // long form code 

    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    let key = Object.keys(reactElement.props)
    for (let i = 0; i < key.length; i++) {
        let keys = key[i]
        if (keys === 'children') continue;
        domElement.setAttribute(keys, reactElement.props[keys])
    } // for loop code 

    // for (let props in reactElement.props) {
    //     if (props === 'children') continue;
    //     domElement.setAttribute(props,reactElement.props[props])
    // } for in loop code 
    container.appendChild(domElement);
}

let reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

let container = document.getElementById("root")

render(reactElement,container)