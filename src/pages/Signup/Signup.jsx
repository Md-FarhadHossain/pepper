import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";


const Signup = () => {
  const { signup, signinWithGoogle } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/update-heading";
  const handleSignup = (e) => {
    e.preventDefault();
    const userInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(userInfo);
    signup(userInfo.email, userInfo.password)
      .then((result) => {
        console.log(result);
        toast.success('Signup Successfully!')
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleSignin = (e) => {
    e.preventDefault();
    signinWithGoogle().then((result) => {
      console.log(result);
      toast.success('Signup Successfully!')
      navigate(from, { replace: true });
    });
  };
  document.title = "Sign Up";
  return (
    <div className="h-[85vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6 font-bold">Signup Now</h1>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSignup} className="card-body">

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
                Already have an accout?{" "}
                <Link to="/login" className="link">
                  Login Here
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
      <div className="my-4 w-[24rem]">
        <button
          onClick={handleGoogleSignin}
          className="btn btn-secondary w-full"
        >
          Sing up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;