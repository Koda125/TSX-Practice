import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'

function App() {
  

  return (
    <>
      <header className='app-header'>
        <Header />
      </header>
      <body>
        <Main />
      </body>
      
    </>
  )
}

export default App
