"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterForm from "../../components/layout/RegisterForm";

function Register() {

  const [msg, setMsg]= useState("")
  const [saved, setSaved]= useState(false)

  async function handleSubmit(e, data) {
    e.preventDefault();
    console.log(data);

    const formData = new URLSearchParams();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // eslint-disable-next-line no-async-promise-executor
    const savedUser = new Promise(async (resolve, reject) => {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      
      if (response.ok) {
        resolve();
        const user = await response.json();
        console.log(user);
        setMsg(user.message)
        console.log(msg);
        setSaved(true)
        
      } else {
        reject();
        throw new Error("une erreur est survenue");
      }
    });

    toast.promise(savedUser, {
      loading: "inscription en cours...",
      success: "inscription reussie",
      error: "Une erreur est survenue",
    });
  }

  return (
    <section>
      <Header />
      <div className="mt-32 mb-10">
        <h1 className="text-[50px] font-semibold text-center text-blue-700">
          Inscrivez-vous
        </h1>

        <RegisterForm onSubmit={handleSubmit} />

        {
          saved && <h1 className="bg-green-400 max-w-sm mx-auto text-black font-semibold text-lg rounded-lg h-20 px-2 py-1 text-center">{msg}!Un email a été envoyé sur votre compte. veuillez comfirmer votre compte </h1>
        }
        <p className="text-center text-lg">
          Vous avez déjà un compte?{" "}
          <Link
            to={"/connexion"}
            className="underline  text-blue-700 font-semibold"
          >
            Connectez-vous
          </Link>{" "}
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default Register;
