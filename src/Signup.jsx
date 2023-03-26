const Signup = () =>{
    return(
        <div className="h-screen flex justify-center items-center">
            <div className="p-2 rounded-xl bg-teritiary w-72 h-96 flex flex-col items-center">
                <h1 className="text-2xl m-4">
                    Sign Up
                </h1>
                <form className="flex flex-col items-center m-2 h-full w-full justify-center">
                    <input type="username" name="username" placeholder="Username" className="rounded-lg bg-secondary w-3/4 m-2 h-10 px-3 text-sm" />
                    <input type="password" name="password" placeholder="Password" className="rounded-lg bg-secondary w-3/4 m-2 h-10 px-3 text-sm" />
                    <button className="rounded-full bg-Mint w-1/3 m-8 h-10 hover:bg-Crayola transition-all text-sm">
                        Sign Up
                    </button>
                    <p className="text-secondary text-sm hover:underline underline-offset-2 hover:cursor-pointer">Have an account? Sign in.</p>
                </form>
            </div>
        </div>
    )
}

export default Signup