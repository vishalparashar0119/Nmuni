import React, { useEffect , useState } from 'react'
import './LoginPage.css'
import googlelogo from '../images/googlelogo.png'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { googleSignIn, user, checkSignIn } = UserAuth();
  const navigate = useNavigate();


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
  }, [ user]);

  // finction for signin

  const handelSignIn = async (e) => {
    e.preventDefault();
      setError('');
      try {
        await checkSignIn(email , password);
        navigate('/home')
      } catch (e) {
        setError(e.message)
         console.log(e.message);
        window.alert('user id or password is incorrect')
      }
  }


  return (
    <div className='main__div'>

      <div className='main__div__1'>

        <h1> N Muni</h1>
      </div>
      <div className='main__div__2'>
        <form onSubmit={handelSignIn}  >
          <label id='label__1' htmlFor="">Login Email</label>
          <input  onChange={(e) => {setEmail(e.target.value); console.log(e.target.value) }} className='form__input' />

          <label  id='label__2' htmlFor="">Login Password</label>
          <input className='form__input' onChange={(e) => {setPassword(e.target.value); console.log(e.target.value) }} type="password" />

          <button style={{cursor:"pointer"}} id='submit'> Login</button>
        </form>
        <div className=' google__signup'>


          <div >
            <hr />
            or
            <hr />
          </div>


          <img onClick={handleGoogleSignIn} src={googlelogo} alt="" />




          <div className='signup__div'>
            <p>Don't have any account? <Link style={{ textDecoration: 'none' }} to="/signup"><span>signup</span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
