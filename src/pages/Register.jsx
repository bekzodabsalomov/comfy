import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/features/basketSlice";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.length > 0 && email.length > 0 && password.length > 0) {
            const formData = {
                userName,
                email,
                password,
                image,
            };
            setUserName("");
            setEmail("");
            setPassword("");
            setImage("");
    
            localStorage.setItem("userData", JSON.stringify(formData));
            dispatch(setUserData(formData)); 
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } else {
            console.log("Fill All Inputs");
        }
    };

    return (
        <div className="flex h-screen justify-center items-center bg-black text-white">
            <form
                onSubmit={handleSubmit}
                className="p-7 mx-5 rounded-2xl shadow-xl w-[400px] max-w-full bg-dark-red border-4 border-solid border-blood-red"
            >
                <h1 className="text-3xl font-bold mb-5 text-center text-yellow-400">
                    🔥 SignUp 🔥
                </h1>
                <div className="mb-5">
                    <label className="label">
                        <span className="label-text">Username:</span>
                    </label>
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        className="input input-bordered w-full bg-dark-red text-gray-800"
                        value={userName}
                    />
                </div>
                <div className="mb-5">
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="input input-bordered w-full bg-dark-red text-gray-800"
                        value={email}
                    />
                </div>
                <div className="mb-5">
                    <label className="label">
                        <span className="label-text">Password:</span>
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="input input-bordered w-full bg-dark-red text-gray-800"
                        value={password}
                    />
                </div>
                <div className="mb-5">
                    <label className="label">
                        <span className="label-text">Image URL:</span>
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        className="input input-bordered w-full bg-dark-red text-gray-800"
                        value={image}
                    />
                </div>
                <button type="submit" className="btn btn-blood-red w-full mb-3">
                    SignUp
                </button>
            </form>
        </div>
    );
}

export default Register;