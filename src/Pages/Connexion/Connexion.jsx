/* eslint-disable no-async-promise-executor */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Connexion() {
  const [matricule, setmatricule] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const [msg, setMsg] = useState("");
  const [afficher, setAfficher] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { matricule, email, password };

    const formData = new URLSearchParams();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    console.log(data);

    const connexion = new Promise(async (resolve, reject) => {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      const data = await response.json();
      console.log(data);
      setAfficher(true);
      setMsg(data.message);
      localStorage.setItem("token", data.passToken)

      if (response.ok) {
        resolve();
        navigate("/Dashboard")

      } else {
        reject();
        throw new Error("une erreur est survenue");
      }
    });

    toast.promise(connexion, {
      loading: "connexion en cours...",
      success: "connexion reussie",
      error: "erreur lors de l'inscription",
    });
  }

  return (
    <section>
      <Header />
      <div className="mt-32 mb-10">
        <h1 className="text-[50px] font-semibold text-center text-blue-700 ">
          Connexion
        </h1>
        <form
          action=""
          className="flex flex-col max-w-sm mx-auto"
          onSubmit={handleSubmit}
        >
          <Label htmlFor="matricule">Numéro matricule</Label>
          <Input
            type="text"
            placeholder="Ex: 99999999"
            value={matricule}
            onChange={(e) => setmatricule(e.target.value)}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-4 mb-4" type="submit">
            Se connecter
          </button>
        </form>
        {afficher && (
          <h1 className="bg-green-400 max-w-sm mx-auto text-black font-semibold text-lg rounded-lg h-20 px-2 py-1 text-center">
            {msg}
          </h1>
        )}
        <p className="text-center text-lg">
          Vous n&apos;avez pas un compte?{" "}
          <Link
            to={"/inscription"}
            className="underline text-blue-700 font-semibold"
          >
            S&apos;inscrire
          </Link>{" "}
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default Connexion;
