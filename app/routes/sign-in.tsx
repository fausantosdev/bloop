import type { Route } from "./+types/sign-in"
import { Link } from "react-router"

import bloop from "../assets/bloop.webp"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Entrar no Bloop - Conecte-se à sua rede." },
    { name: "description", content: "Faça login no Bloop e continue compartilhando ideias, momentos e interações com a comunidade. Acesse sua conta com rapidez e segurança." },
  ]
}

export default function SignIn() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 px-5">
      <span className="absolute top-0 left-0 p-5">
        <Link to="/" className="text-center underline text-bloop-primary-dark text-2xl">
          ← Voltar
        </Link>
      </span>
      <div className="flex-1 flex flex-col items-center gap-5 max-w-[400px]">
        <img 
          src={bloop} alt="Bloop, mascote da aplicação"
          className="w-24"/>
        <p className="text-gray-600 text-center">
          Que bom te ver por aqui de novo! Entre e continue compartilhando com o mundo.
        </p>
        <form className="w-[100%] flex flex-col gap-5">
          <h1 className="text-3xl text-bloop-primary-dark mt-0 text-center font-semibold">Entrar no Bloop</h1>
          <input 
            type="email" 
            placeholder="johndoe@mail.com"
            className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark"/>
          <input 
            type="password" 
            placeholder="********"
            className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark"/>
          <button type="submit" className="flex-1 text-center bg-bloop-primary p-3 rounded-md text-white cursor-pointer">
            Entrar
          </button>
          <Link to="/sign-up" className="text-center underline text-bloop-primary-dark">
            Criar uma conta
          </Link>
        </form>
      </div>
    </main>
  )
}
