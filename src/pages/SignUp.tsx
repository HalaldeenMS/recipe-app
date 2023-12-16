import UserAuthForm from "../components/UserAuthForm";





export default function SignUpPage () : JSX.Element
{

    const isLoginForm : boolean = false;
    

    return (    
        <div>
            <UserAuthForm isLoginForm={isLoginForm} />
        </div>


    );
}
