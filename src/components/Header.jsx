import { Link } from "react-router-dom";
import MenuIcon from "../ui/MenuIcon";

function Header() {
  return (
    <header className=" font-sans flex justify-around items-center fixed top-0 bg-black/80 w-full text-white h-[80px]">
      <Link to={'/'}>
        <h1 className="text-3xl font-bold hover:scale-75 hover:text-blue-700 hover:ease-in-out hover:transition-all">
          FAST/UAC <span className="text-blue-700">.</span>
        </h1>
      </Link>

      <div className="justify-center gap-4 text-lg hidden md:flex ">
        <Link>Accueil</Link>
        <Link>A propos</Link>
        <Link>FAQ</Link>
      </div>
      <div className="flex gap-4">
        <Link to={'/connexion'}  className="text-2xl text-white border border-blue-700 rounded-xl px-2 py-1 my-2">Connexion</Link>
        <Link to={'/register'} className="text-2xl text-white bg-blue-700 rounded-xl px-2 py-1 my-2">
          Inscription
        </Link>
      </div>

      <button className="border-2 border-blue-700 rounded-lg md:hidden ">
        <MenuIcon />
      </button>
    </header>
  );
}

export default Header;
