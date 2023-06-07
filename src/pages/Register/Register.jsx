import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    if (data.password !== data.conform) {
      setErr("Password Not Matched");
      return;
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>LensMasters | Register</title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="md:w-1/2 max-w-sm ">
          <h1 className="text-5xl font-bold text-center my-4">
            Please Register
          </h1>
          <div className="card shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
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
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}

                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase and one special character.
                  </p>
                )}
                <p className="text-red-600">{err}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Conform Password</span>
                </label>
                <input
                  type="password"
                  name="conform"
                  placeholder="Conform Password"
                  {...register("conform", { required: true })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-center mb-4">
              <small>
                Already have an account ?
                <Link to="/login">
                  <span className="text-blue-600"> Login</span>
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div className="text-center md:w-1/2 lg:text-left">
          <img
            className="rounded"
            src="https://quicklaunch.io/wp-content/uploads/2019/10/user-registration.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;