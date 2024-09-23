import gsap from "gsap";
import { useEffect, useRef } from "react";
import Divide from "../ui/Divide";

function About() {

  const scienceRef = useRef();

  useEffect(() => {
    gsap.to(scienceRef.current, {
     rotate:360, duration:2
    });
  }, []);

  return (
    <section className=" font-serif text-lg ">
      <div className="flex items-center">
        <Divide />
        <h1 className="text-3xl text-center font-bold my-4">
          A propos du Site de Gestion de TP
        </h1>
        <Divide />
      </div>
      <section className="mx-32">
        <div className="lg:flex items-center text-center ">
          <p>
             <span className="text-3xl text-blue-700 font-bold text-center">Nous avons conçu ce site avec une vision claire </span> 
          <p  className="text-xl font-semibold  text-center lg:w-1/2 w-full my-4">
            simplifier et
            améliorer l&apos;organisation des travaux pratiques, tout en favorisant
            une collaboration efficace entre tous les étudiants et les professseurs au sein de notre entité.
          </p>
          </p>
           
          <img
            src="/public/femmeScience.png"
            alt="femme de science"
            className="image-about"
            ref={scienceRef}
          />
        </div>

        <h1 className=" text-3xl font-bold my-8 text-center">Quelques fonctionnalités Clés</h1>
        <div className="flex gap-10 flex-wrap">
        <div className="feature">
          <h1 className="feature-title">Inscription Simplifié </h1>
          <p className="feature-description">
            Les étudiants et les professeurs peuvent s&apos;inscrire facilement
            en fournissant les informations essentielles, comme le numéro de
            matricule, l&apos;email, et un mot de passe sécurisé.
          </p>
        </div>
        <div className="feature">
          <h1 className="feature-title">Gestion des Travaux Pratiques</h1>
          <p className="feature-description">
            Les professeurs peuvent créer, assigner, et corriger les travaux
            pratiques, tandis que les étudiants peuvent soumettre leurs rapports
            et recevoir des feedbacks et autres informations directement sur la
            plateforme.
          </p>
        </div>
        <div className="feature">
          <h1 className="feature-title">Organisation des Groupes</h1>
          <p className="feature-description">
            La plateforme permet aux professeurs de former des groupes
            d’étudiants et des polynômes pour travailler sur les différents
            projets de cours. Cette fonctionnalité encourage la collaboration et
            l’apprentissage par le travail d’équipe.
          </p>
        </div>
        <div className="feature">
          <h1 className="feature-title">Support et Documentation </h1>
          <p className="feature-description">
            Pour garantir une utilisation sans faille, notre site propose une
            section d’aide complète avec une FAQ, des tutoriels, et un support
            technique accessible via soumission de tickets.
          </p>
        </div>

        </div>
      </section>

      <section>

        <p className="font-semibold text-center">
          Nous nous engageons à améliorer continuellement notre site en fonction
          des retours des utilisateurs et des évolutions technologiques. Notre
          objectif est de devenir l’outil de référence pour la gestion des
          travaux pratiques, non seulement dans notre faculté, mais aussi dans
          les autres universités.
        </p>
      </section>
    </section>
  );
}

export default About;
