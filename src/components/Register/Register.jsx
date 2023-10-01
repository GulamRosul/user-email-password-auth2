import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters"
      );
      return;
    } else if (!accepted) {
      setRegisterError("please accept our terms and conditions!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError("error.message");
      });
  };
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full  py-2 px-4 rounded"
            type="email"
            name="email"
            placeholder="Email Address"
            required
            id=""
          />
          <br />
          <input
            className="mb-4 w-full py-2 px-4 rounded"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            id=""
          />
          <span
            className="absolute mt-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </span>
          <br />
          <div className="mt-6">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our terms and <a href=""> terms and condition</a>
            </label>
          </div>
          <br />
          <input
            className=" btn btn-secondary  w-full mb-4 "
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-800">{registerError}</p>}
        {success && <p className="bg-green-600">{success}</p>}
        <p>
          Already have an account? Please <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
