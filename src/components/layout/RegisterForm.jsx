/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function RegisterForm({ onSubmit }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [matricule, setmatricule] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <form
      action=""
      className="flex flex-col max-w-sm mx-auto"
      onSubmit={e => onSubmit(e, { nom, prenom, matricule, email, password })}
    >
      <div className="space-y-1">
        <Label htmlFor="nom">Nom</Label>
        <Input
          type="text"
          placeholder="Ex: Jane"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required={true}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="nom">Prénom</Label>
        <Input
          type="text"
          placeholder="Ex: Doe"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required={true}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="matricule">Numéro matricule</Label>
        <Input
          type="text"
          placeholder="Ex:000000"
          value={matricule}
          onChange={(e) => setmatricule(e.target.value)}
          required={true}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
      </div>
      <button className="mt-4 mb-4 w-full" type="submit">
        S&apos;inscrire
      </button>
    </form>
  );
}

export default RegisterForm;
