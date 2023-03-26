import { useState } from "react";

const Login = () => {

    const [formType, setFormType] = useState('signup')

    const Signup = () => {
        return(
            <div className="m-2 flex flex-col bg-gray-200 w-auto items-center">
                <form className= "flex flex-col w-1/2 m-3">
                    <input type="text" placeholder="username" className="my-3 p-2 text-center rounded-lg"/>
                    <input type="password" placeholder="password" className="my-3 p-2 text-center box-border rounded-lg" />
                    <button className="my-3 p-2 text-center rounded-lg bg-gray-500 text-white">SIGN UP</button>
                </form>
                <p>Already have an account? <button onClick={() => {setFormType('signin')}}>Sign in</button></p>
            </div>
        )
    }
    
    const Signin = () => {
        return(
            <div className="m-2 flex flex-col bg-gray-200 w-auto items-center">
                <form className= "flex flex-col w-1/2 m-3">
                    <input type="text" placeholder="username" className="my-3 p-2 text-center rounded-lg"/>
                    <input type="password" placeholder="password" className="my-3 p-2 text-center box-border rounded-lg" />
                    <button className="my-3 p-2 text-center rounded-lg bg-gray-500 text-white">SIGN IN</button>
                </form>
                <p>Don't have an account? <button onClick={() => {setFormType('signup')}}>Sign up</button></p>
            </div>
        )
    }
    
    return(
        formType == 'signup' ? <Signup/> : <Signin/>      
    )
}

export default Login