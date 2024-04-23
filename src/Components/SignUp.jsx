
const SignUp = () =>{
    return(
        <section className="signup-container">
            <div className="signup">
                <h2 className="signup-title">Ready to get started? Sign up now!</h2>
                <div className="signup-input">
                    <input className="email" type="email" placeholder="Email address" required/>
                    <button className="btn">Submit</button>
                </div>
            </div>
        </section>
    )
}
export default SignUp;