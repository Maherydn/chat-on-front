// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { DiscussionProvider } from './users/hooks/DiscussionContext'
import { Home } from './users/pages/Home'

function App() {

  return (
    <>
      <DiscussionProvider>
        <Home/>
      </DiscussionProvider>
    </>
  )
}

export default App
