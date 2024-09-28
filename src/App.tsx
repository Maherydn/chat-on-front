// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppRoutes from './users/components/routes/Routes'
import { DiscussionProvider } from './users/hooks/DiscussionContext'

function App() {

  return (
    <>
      <DiscussionProvider>
        <AppRoutes/>
      </DiscussionProvider>
    </>
  )
}

export default App
