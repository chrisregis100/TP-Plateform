import { Button, Flex } from "antd";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <section className="mt-10 flex flex-col items-start px-2 lg:mx-32 ">
      <div className="flex items-center gap-5 flex-wrap lg:gap-10 ">
        <div className="overview-div">
          <p>Nombres d&apos;étudiants inscrits</p>
        </div>
        <div className="overview-div">
          <p>Statistique des résultats</p>
        </div>
        <div className="overview-div">
          <p>Rappel sur les omissions</p>
          <Link>Consulter</Link>
        </div>
        <div className="overview-div">
          <p>Statistique des résultats</p>
        </div>
      </div>
      <Flex className="gap-4 mt-8 ">
        <Button type="primary" className="h-32">
          <PlusIcon /> Créer un nouveau TP
        </Button>
        <Button className="h-32">
          <PlusIcon /> Programmer un TP
        </Button>
        <Button className="h-32">
          <PlusIcon /> Organiser les TP
        </Button>
      </Flex>
    </section>
  );
}

export default Accueil;
