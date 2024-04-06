import React, { useState ,useEffect } from 'react'
import './LoginPage.css'
import googlelogo from '../images/googlelogo.png'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUpPage = () => {
    const [email , setEmail]  = useState('');
    const [password , setPassword]  = useState('');
    const [error , setError]  = useState('');
    //context file
    const {createUser , googleSignIn ,  user} = UserAuth();
    // navigation to another page
    const navigate = useNavigate();
    // handle submit function for handelling submit 
    
    
    const handleSubmitFunction = async (e) => {
      e.preventDefault();
      setError('');
      try {
        console.log(' email -',email +'password', password)
        await createUser(email, password);
        navigate('/home')
      } catch (e) {
        setError(e.message);
        console.log(error);
      }
    };
    // google sign in 
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      if (user != null) {
        navigate('/home');
      }
    }, [user]);
        

  return (
    <div className='main__div'>

    <div className='main__div__1'>

      <h1> N Muni</h1>
    </div>
    <div className='main__div__2'>
      <form  onSubmit={handleSubmitFunction}>
        <label id='label__1' htmlFor="">SignUp Email</label>
        <input  onChange={(e) => {setEmail(e.target.value); console.log(e.target.value) }}  className='form__input' type="email" />
        <label id='label__2' htmlFor="">SignUp Password</label>
        <input  onChange={(e)=> {setPassword(e.target.value); console.log(e.target.value) }}  className='form__input' type="password" />
        <button style={{cursor:"pointer"}} id='submit'> SignUp</button>
      </form>
      <div className=' google__signup'>

        
        <div >
           <hr />
           or
           <hr />
        </div>

        <img onClick={handleGoogleSignIn} src={googlelogo} alt="" />

        

        <div className='signup__div'>
          <p>Do have any account? <Link style={{textDecoration:'none'}} to="/"><span>Login</span></Link>
</p>
        </div>
      </div>
    </div>
</div>
)
}

export default SignUpPage