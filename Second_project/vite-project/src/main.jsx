import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props:{
//       href: 'https://reactjs.org',
//       target: '_blank'
//   },
//   children: 'Click me to visit this page'
// }
 
const anotherUser = "Another User name is Nitin"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://reactjs.org', target: '_blank'
  },
  'Click me to visit this page',
  anotherUser
)

const anotherElement = (
  <a href="https://www.google.com">Visit Google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  reactElement
)
