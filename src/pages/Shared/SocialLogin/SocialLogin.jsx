import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">Or Login Using</div>
      <div className="flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center bg-slate-300 px-4 py-2 rounded-lg mb-5"
        >
          <img
            className="h-12 w-12"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            alt=""
          />
          <h1 className="text-4xl font-semibold">oogle</h1>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
