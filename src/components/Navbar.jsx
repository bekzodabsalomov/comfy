import { BsCart4, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link, NavLink, } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/features/basketSlice";
import { setUserData } from "../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";
import Register from "../pages/Register";

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const mode = useSelector((state) => state.basket.mode);
  const userData = useSelector((state) => state.basket.userData);
  const numItemsInCart = useSelector((state) => state.basket.numItemsInCart)

  const handleMode = () => {
    dispatch(toggleMode())
  }

  const handleLogOut = () => {
    dispatch(setUserData(null));
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <nav className="bg-base-200 dark:bg-[#F0F6FF]">
      <div className="bg-neutral text-neutral-content">
      {!userData && (
          <div className="max-w-6xl px-5 py-2 mx-auto flex gap-5 justify-end top">
            <Link to={"/login"} className="link link-hover text-xc sm:text-sm">
              Login
            </Link>
            <Link
              to={"/register"}
              className="link link-hover text-xc sm:text-sm"
            >
              SignUp
            </Link>
          </div>
        )}
      {!userData && (
          <div className="max-w-6xl px-5 py-2 mx-auto flex gap-5 justify-end top"> 
          </div>
        )}
        {userData && (
          <div className="max-w-6xl px-5 py-2 mx-auto flex gap-5 justify-end top">
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-error"
            >
              Log Out
            </button>
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={userData.image} alt="User Avatar" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="align-element pt-2 pb-2 flex items-center justify-between">
        <Link
          aria-current="page"
          className="hidden lg:flex btn btn-primary text-3xl items-center"
          to="/">
          С
        </Link>

        <div className="flex gap-7 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/chekout">Checkout</NavLink>
        </div>

        <div className="flex items-center">
          <button onClick={handleMode} className="dark:text-white hover:border-x-black">
            {mode == 'dark' ? <BsSunFill /> : <BsMoonFill />}
          </button>
          <NavLink to="cart" className="btn btn-ghost btn-info btn-md ml-4">
            <div className="indicator w-[20px]">
              <BsCart4 className="h-6 w-6" />
              <span className="badge badge-success badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar