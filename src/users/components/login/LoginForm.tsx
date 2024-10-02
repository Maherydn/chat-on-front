import React, { FormEvent, useState } from 'react'
import { LoginInputForm } from './LoginInputForm'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/UserLoginServices'
import { jwtDecode } from 'jwt-decode'

export const LoginForm:React.FC = () => {

    const [ username, setUsername ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true); // Activer l'indicateur de chargement

      const data = {
          username: username,
          password: password,
      };

      try {
          const res = await login(data);
          const token = res.token;
          const refreshToken = res.refresh_token;

          // Stocker les tokens
          localStorage.setItem('accessToken', token);
          localStorage.setItem('refreshToken', refreshToken);

          const decodedToken: string = jwtDecode(token);
          console.log(decodedToken);
          

           navigate('/home')
          
      } catch (error) {
          console.error(error);
      } finally {
          setLoading(false); // Désactiver l'indicateur de chargement
      }
  };

  return (
  <form className="p-12 md:p-24" onSubmit={handleSubmit}>
    <div className="flex items-center text-lg mb-6 md:mb-8">
      <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
        <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
      </svg>
        <LoginInputForm 
            type='text'
            id='username'
            placeholder='Usernamme'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
        />
    </div>
    <div className="flex items-center text-lg mb-6 md:mb-8">
      <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
        <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
      </svg>
        <LoginInputForm 
            type='password'
            id='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
    </div>
    <button className="bg-gradient-to-b from-blue-700 to-blue-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-lg hover:scale-105 duration-300 ">{loading ? 'Connexion en cours...' : 'Se connecter'}</button>
  </form>
  )
}
