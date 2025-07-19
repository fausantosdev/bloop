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
      <div className="flex-1 flex flex-col items-center gap-5 max-w-[400px]">
        <img 
          src={bloop} alt="Bloop, mascote da aplicação"
          className="w-24"/>
        <h1 className="text-3xl text-bloop-primary-dark mt-0">Bloop</h1>
        <p className="text-gray-600 text-center">
          Entre na conversa, compartilhe seus momentos.
        </p>
        <form className="w-[100%] flex flex-col gap-5">
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
          <Link to="#" className="text-center underline text-bloop-primary-dark">
            Criar uma conta
          </Link>
        </form>
      </div>
    </main>
  )
}
