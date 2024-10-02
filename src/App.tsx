// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppRoutes from './users/components/routes/Routes'
import { ConnectedUsersProvider } from './users/hooks/ConnectedUsersContext'
import { DiscussionProvider } from './users/hooks/DiscussionContext'

function App() {

  return (
    <>
    <ConnectedUsersProvider>
      <DiscussionProvider>
        <AppRoutes/>
      </DiscussionProvider>
      </ConnectedUsersProvider>
    </>
  )
}

export default App
