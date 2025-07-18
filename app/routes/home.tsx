import type { Route } from "./+types/home"

import bloop from "../assets/bloop.webp"
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
        <main className="flex items-center justify-center pt-16 pb-4 px-5">
      <div className="flex-1 flex flex-col items-center gap-5 max-w-[700px]">
        <img 
          src={bloop} alt="Bloop, mascote da aplicação"
          className="w-32"/>
        <h1 className="text-5xl text-bloop-primary-dark mt-0">Bloop</h1>
        <p className="text-gray-600 text-center">
          Bem-vindo ao Bloop!  
          Compartilhe momentos, ideias ou o que quiser — e descubra o que o mundo tem a dizer.  
          Curta, comente, interaja.
        </p>
        <div className="w-[100%] flex flex-col md:flex-row gap-5">
          <Link to="/" className="flex-1 text-center bg-bloop-primary p-3 rounded-md text-white">
            Entrar
          </Link>
          <Link to="/" className="flex-1 text-center bg-bloop-primary-light p-3 rounded-md text-gray-800">
            Criar conta
          </Link>
          <Link to="/" className="flex-1 text-center bg-gray-100 p-3 rounded-md text-bloop-primary-dark border border-bloop-primary-dark">
            Explorar como visitante
          </Link>
        </div>
      </div>
    </main>
  )
}
