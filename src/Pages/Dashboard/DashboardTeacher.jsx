
import { HomeIcon, ListIcon, Newspaper, NotebookIcon } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";


function DashboardTeacher() {
  return (
    <section className="min-h-screen bg-black flex">
      <div className="bg-black w-[300px] lg:w-[400px] ">
        <Header className="text-white bg-black font-bold text-3xl py-4 px-4 text-center mx-auto">
          <Link to={'/'}>FAST/UAC</Link>
        </Header>
        <div className="flex flex-col gap-2 bg-black">
          <NavLink to={"/Dashboard/MenuPrincipal"} className="item">
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
      <section className="ml-1 bg-slate-100 w-full">
        <Header className="flex text-black bg-white/45 items-center border-b border-black/30">
          <h1 className="text-2xl">Bienvenue Mr ...</h1>
        </Header>
        <Content >
          <Outlet />
        </Content>
      </section>
    </section>
  );
}

export default DashboardTeacher;
