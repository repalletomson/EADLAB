import {useState,React} from 'react'
import './App.css'
function App() {

  const [password,setpassword]=useState('')
  const [strength,setStrength]=useState('')
  
  function handlePassword(event){
const newpassword=event.target.value ;
setpassword(newpassword)
    let strength;
    const criteria = [
      { regex: /.{8,}/ },
      { regex: /[^A-Za-z0-9]/ },    // At least one special character
      { regex: /[A-Z]/ },           // At least one uppercase letter
      { regex: /[a-z]/ },           // At least one lowercase letter
      { regex: /[0-9]/ }            // At least one digit
    ];
   const passwordCriteria=criteria.filter((criterion)=>criterion.regex.test(newpassword))
    switch (passwordCriteria.length){
      case 5:
        strength="very Strong"
        break
      case 4 :
        strength="strong"
        break
      case 3 :
        strength="medium"
        break
      default :
        strength="weak please give strong password"
        break;
      }
      setStrength(strength)
  }
  return (
    <div>
      <h1 className='bg-black text-[100px] '>Check Your password strength :</h1>
      <input type='password' value={password} onChange={handlePassword} name='password' aria-label='enter your password'>
      </input>
      <h2  >Password Strength:{strength}</h2>

    </div>
  )
}

export default App