import { Link } from "react-router-dom";
import furniture1 from "../assets/furniture1.webp";
import furniture2 from "../assets/furniture2.webp";
import furniture3 from "../assets/furniture3.webp";
import furniture4 from "../assets/furniture4.webp";
import Materials from "../components/Materials";


const furniture = [furniture1, furniture2, furniture3, furniture4];

function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-10 text-white">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-slate-200">
            <span className="dark:text-slate-200x">We are</span> <br />
            changing the way people shop.
          </h1>
          <p className="mt-4 lg:mt-6 text-lg leading-7 text-gray-700">
          Eee xulas Comfy site lorem ishlame qolodi qolda xayolimga kegan narsalarni yozdim shuncha xarakat qildim Ahror aka 7 oyda imtxonga yaxshi bal qoyib berin please
            <em>          HOME PAGE DA CARUSEL BORLIGI TUFAYLI RESPONSE QILOLMADIM QOLGAN PAGE LARDA BOR</em>
          </p>
          <div className="mt-8">
            <Link to="products" className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 dark:dark-btns">
              OUR PRODUCTS
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:flex lg:justify-center">
          <div className="lg:carousel carousel-center p-4 bg-gray-800 rounded-box gap-4">
            {furniture.map((image, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={image}
                  alt={`furniture-${index + 1}`}
                  className="rounded-box h-64 lg:h-80 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Materials />
    </div>
  );
}

export default Home;