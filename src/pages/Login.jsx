import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../redux/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import Register from "./Register";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const userData = useSelector((state) => state.basket.userData);
    const email = userData ? userData.email : null;
    const password = userData ? userData.password : null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginEmail === email && loginPassword === password) {
            dispatch(setUserData(userData));
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else if (loginEmail !== email && loginPassword === password) {
            console.log("Email is Incorrect!!!");
        } else {
            console.log("Email and Password are Incorrect!!!");
        }
    };

    return (
        <div className="flex h-screen justify-center items-center bg-black text-white">
            <form
                onSubmit={handleSubmit}
                className="p-7 mx-5 rounded-2xl shadow-xl w-[400px] max-w-full bg-dark-gray"
            >
                <h1 className="text-3xl font-bold mb-5 text-center text-red-500">
                    🔥 Login 🔥
                </h1>
                <div className="mb-5">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl">Email</span>
                    </label>
                    <input
                        onChange={(e) => setLoginEmail(e.target.value)}
                        type="text"
                        className="input input-bordered w-full bg-gray-800 text-white"
                        value={loginEmail}
                        required
                    />
                </div>
                <div className="mb-7">
                    <label className="label">
                        <span className="label-text text-red-500 text-xl">
                            Password
                        </span>
                    </label>
                    <input
                        onChange={(e) => setLoginPassword(e.target.value)}
                        type="password"
                        className="input input-bordered w-full bg-gray-800 text-white"
                        value={loginPassword}
                        required
                    />
                </div>
                <button className="btn btn-primary w-full mb-4 bg-blood-red">Submit</button>
                <p className="text-center font-medium">If you don`t have any account <Link className="text-cyan-400" to="/register">SignUp</Link> </p>
            </form>
        </div>
    );
}

export default Login;