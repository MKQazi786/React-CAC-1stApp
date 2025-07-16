import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



// let MyApp = ()=>{
//   return(
//     <div>
//       <h1>custom App</h1>
//     </div>
//   )
// }

// let reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

let Khubaib = "Muhamad khubaib Buhat pyara ladka hai"
 
// let AnotherElement = (
//   <a href="https://google.com" target='_blank'> Visit Google</a>
// )

let reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  Khubaib
)

createRoot(document.getElementById('root')).render(
  reactElement
  // <App/>
)
