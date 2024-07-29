import React, {useState, useContext} from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName, password})
    }

  return (
    <div className=''>
        <h2>Login</h2>
        <input type='text' placeholder='name' value={userName} onChange={(e) => setUserName(e.target.value)}></input> {" "}
        <input type='text' placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}></input> {" "}
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login