import "./loginPage.css"

export default function LoginPage(){
    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="enter your username" />
            <input type="password" placeholder="enter your password" />
            <button>Login</button>
        </div>
    )
}