import React from 'react'

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
         

            <form >
                <div>
                    <input type="text" placeholder='email' className='text-black '/>
                </div>
                <div>
                      <input type="text" placeholder='password' className='text-black' />
                </div>
              
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default SignUp
