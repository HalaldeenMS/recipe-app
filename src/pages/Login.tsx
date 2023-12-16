import UserAuthForm from "../components/UserAuthForm";





export default function LoginPage () : JSX.Element
{

    const isLoginForm : boolean = true;
    const signUpUrl : string = "/signup"

    return (    
        <div>
            <UserAuthForm  isLoginForm={isLoginForm} signUpUrl={signUpUrl}  />
        </div>


    );
}
