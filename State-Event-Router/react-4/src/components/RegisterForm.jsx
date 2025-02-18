import { useState } from 'react'

const RegisterForm = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, age, password)
    }

    return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" 
                value={username}
                onChange = {(event) => {
                    setUsername(event.target.value)
                }}
            />
        </fieldset>

        <fieldset>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" 
                value={age}
                onChange = {(event) => {
                    setAge(event.target.value)
                }}
            />
        </fieldset>

        <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" 
                value={password}
                onChange = {(event) => {
                    setPassword(event.target.value)
                }}
            />
        </fieldset>

        <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default RegisterForm