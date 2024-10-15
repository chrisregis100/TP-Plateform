function About() {
  //const scienceRef = useRef();
  {
    /* 
  useEffect(() => {
    gsap.to(scienceRef.current, {
     rotate:360, duration:2
    });
  }, []);
*/
  }

  return (
    <section className=" font-serif ">
      <div className="color-font px-8 text-white lg:h-[450px] my-4 h-[350px] rounded-br-[50%] rounded-tl-[40%]  ">
    
          <div className="flex justify-center items-center gap-5 ">
            <h1 className=" text-xl md:text-3xl font-bold  text-center">
              A Propos de la plateforme
            </h1>
            <img
              src="/public/about.png"
              alt="femme de science"
              className="image-about"
            />
          </div>
          <p className="md:text-xl font-semiboldss text-lg lg:max-w-3xl max-w-xl mx-auto ">
            Le site a été conçu pour simplifier et améliorer l&apos;organisation
            des travaux pratiques, tout en favorisant une collaboration efficace
            entre tous les étudiants et les professseurs au sein de notre
            entité.
          </p>

      </div>
      <section className="lg:mx-auto mb-8 px-8 md:px-16 lg:w-[70%] mx-auto ">
 
        <div>
          <div className="flex items-center justify-center gap-5 ">
            <img
              src="/public/features.png"
              alt="fonctionnalités"
              className="image-about"
            />
            <h1 className=" text-xl md:text-3xl font-bold  text-center">
              Quelques fonctionnalités Clés
            </h1>
          </div>

          <div className="flex gap-10 flex-wrap">
            <div className="feature color-font">
              <h1 className="feature-title">Inscription Simplifié </h1>
              <p className="feature-description">
                Les étudiants et les professeurs peuvent s&apos;inscrire
                facilement en fournissant les informations essentielles, comme
                le numéro de matricule, l&apos;email, et un mot de passe
                sécurisé.
              </p>
            </div>
            <div className="feature color-font">
              <h1 className="feature-title">Gestion des Travaux Pratiques</h1>
              <p className="feature-description">
                Les professeurs peuvent créer, assigner, et corriger les travaux
                pratiques, tandis que les étudiants peuvent soumettre leurs
                rapports et recevoir des feedbacks et autres informations
                directement sur la plateforme.
              </p>
            </div>
            <div className="feature color-font">
              <h1 className="feature-title">Organisation des Groupes</h1>
              <p className="feature-description">
                La plateforme permet aux professeurs de former des groupes
                d’étudiants et des polynômes pour travailler sur les différents
                projets de cours. Cette fonctionnalité encourage la
                collaboration et l’apprentissage par le travail d’équipe.
              </p>
            </div>
            <div className="feature color-font">
              <h1 className="feature-title">Support et Documentation </h1>
              <p className="feature-description">
                Pour garantir une utilisation sans faille, notre site propose
                une section d’aide complète avec une FAQ, des tutoriels, et un
                support technique accessible via soumission de tickets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
