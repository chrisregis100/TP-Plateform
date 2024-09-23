import {
  HomeIcon,
  ListIcon,
  LogOut,
  Newspaper,
  NotebookIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";


function Menu() {
  return (
    <section className="bg-blue-950 min-h-full h-screen flex flex-col items-center justify-between pb-4 min-w-72 text-white">
    <div className="flex flex-col w-full   gap-10">
      <NavLink to={"/"} className=" divide-solid divide-white py-4 mx-auto ">
        <h1 className="text-3xl font-bold hover:scale-75 hover:text-blue-700 hover:ease-in-out hover:transition-all text-center">
          FAST/UAC <span className="text-blue-700">.</span>
        </h1>
      </NavLink>
      <div className="flex flex-col mx-10 gap-4 text-lg">
        <NavLink  to={"/Dashboard"} className="item">
          <HomeIcon />
          <p>Accueil</p>
        </NavLink>
        <NavLink to={"/Dashboard/ManageTP"} className="item">
          <Newspaper />
          <p>Gérer les TP</p>
        </NavLink>
        <NavLink to={"/Dashboard/ListeStudents"} className="item">
          <ListIcon />
          <p>Liste des Etudiants</p>
        </NavLink>
        <NavLink to={"/Dashboard/Notes"} className="item">
          <NotebookIcon />
          <p>Notes Etudiants</p>
        </NavLink>
      </div>
    </div>
      <div>
        <LogOut />
        <p>Déconnexion</p>
      </div>
  </section>
  )
}

export default Menu