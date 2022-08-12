import './signUp.css';


export default function SignUp(){

    return(
        <div className='signUpContainer'>
            <div className='signUpBox'>
                <div className='signUpText'>
                    <h2>Call to action! It's time!</h2>
                    <p>Sign up for our product by clicking that button right over there!</p>
                </div>
                <div className='signUpBox'>
                    <button className='signInBtn'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}