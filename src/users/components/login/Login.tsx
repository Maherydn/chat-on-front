import React from 'react'
import { LoginForm } from './LoginForm'

export const Login:React.FC = () => {
  return (
    <main className="h-screen overflow-hidden flex items-center justify-center">
    <div className="bg-blue-400 h-screen w-full overflow-hidden flex items-center justify-center">
  <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-lg shadow-slate-600/50 shadow-xl">
    <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
      </svg>
    </div>
    <LoginForm />
  </div>
 </div>
</main>
  )
}
