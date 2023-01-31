import React, {useState} from 'react'
import AuthOptions from '../../Components/Auth/AuthOptions'
import LoginForm from '../../Components/Auth/LoginForm'
import RegisterForm from '../../Components/Auth/RegisterForm'

import "./Auth.scss"

export default function Auth() {
  const [selectedForm, setSelectedForm] = useState(null);
  const handlerForm = () => {
    switch (selectedForm) {
      case "login": 
      return <LoginForm setSelectedForm={setSelectedForm}/>;
      case "register": 
      return <RegisterForm setSelectedForm={setSelectedForm}/>;
      default:
      return <AuthOptions setSelectedForm={setSelectedForm}/>;
    }
  }
  return (
    <div className='auth' style={{backgroundcolor: '#ffff'}}>
      <div className='auth__dark'/>
      <div className='auth__box'>
        {handlerForm()}
      </div>
    </div>
  )
}
