import { useEffect, useState } from "react"

export default function Register(){

// const [user, setUser] = useState({});

// useEffect(() => {
//     (async () => {
//         const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
//     })
// })

// const formSubmitHandler = (e) => {
//     e.preventDefault();

// }
    return (
        <form onSubmit="">
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            name="password"
            placeholder="********" 
            id="password" />
        </div>
        <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
        <input 
        type="password" 
        name="password" 
        placeholder="********" 
        id="password" />
        </div>
        <div>
        <input type="submit" value="Register" />
        </div>
        
    </form>
    )
}