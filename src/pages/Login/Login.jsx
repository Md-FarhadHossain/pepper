import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'

const Login = () => {


    const {login, signout,signinWithGoogle} = useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleGoogleSignin = (e)  => {
      e.preventDefault()
      signinWithGoogle()
      .then(result => {
        console.log(result)

        console.log(result)
            const user = result.user
            const currentUser = {
              email: user.email,
            }
            

        // Jwt Authentication
        fetch('https://wildife-grapher.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => {
          if(res.status === 401 || res.status === 403) {
           return signout()
          }
          return res.json()
        })
        .then(data => {
          console.log(data)
          // set the value in local storage
          localStorage.setItem('token', data.token)
          navigate(from, {replace: true})
        })
      })
    }
    
    const handleLogin = (e) => {
        e.preventDefault()
        const userInfo = {
            email: e.target.email.value,
            password: e.target.password.value,
            
        }
        console.log(userInfo)
        login(userInfo.email, userInfo.password)
        .then(result => {

          setTimeout(() => {
            navigate(from, {replace: true})
          }, 1000);

            console.log(result)
                  
        })
        .catch(err => console.log(err))
    }
    document.title = 'Login'
  return (
    <div className="h-[75vh] flex flex-col items-center justify-center">
    <h1 className="text-4xl mb-6 font-bold">Login Here</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <span href="#" className="label-text-alt ">
             Donn't have an accout?
              <Link to="/signup" className="link">
                Signup Now
              </Link>
            </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      
    </div>
    <div className="my-4 w-[24rem]">
          <button onClick={handleGoogleSignin}  className='btn btn-secondary w-full'>Sing up with Google</button>
        </div>
  </div>
  )
}

export default Login