import type { Route } from "./+types/sign-in"
import { Link } from "react-router"

import bloop from "../assets/bloop.webp"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Criar Conta no Bloop - Junte-se à conversa" },
    { name: "description", content: "Cadastre-se no Bloop e comece a compartilhar ideias, curtir postagens e interagir com pessoas em uma rede leve, divertida e acolhedora." },
  ]
}

export default function SignUp() {

  function rendersYearOptions() {
    const options = []
    const currentYear = new Date().getFullYear()
    const startYear = currentYear - 100

    for (let year = currentYear; year >= startYear; year--) {
      options.push(<option value={year}>{year}</option>)
    }

    return options
  }

  return (
    <main className="flex justify-center pt-16 pb-4 px-5">
      <div className="flex-1 flex flex-col items-center gap-5 max-w-[400px]">
        <img 
          src={bloop} alt="Bloop, mascote da aplicação"
          className="w-24"/>
        <p className="text-gray-600 text-center">
          Entre na conversa, compartilhe seus momentos.
        </p>
        <h1 className="text-3xl text-bloop-primary-dark mt-0">Crie sua conta no Bloop</h1>
        <form className="w-[100%] flex flex-col gap-5">
          <input 
            type="text" 
            placeholder="Nome completo"
            className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark"/>
          <input 
            type="text" 
            placeholder="Apelido"
            className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark"/>
          <input 
            type="email" 
            placeholder="E-mail"
            className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark"/>
          <div>
            <p className="text-bloop-primary-dark">Data de nascimento</p>
            <div className="flex gap-5">
              <select id="day" className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark flex-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select id="month" className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark flex-1">
                <option value="1">Jan</option>
                <option value="2">Fev</option>
                <option value="3">Mar</option>
                <option value="4">Abr</option>
                <option value="5">Mai</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Ago</option>
                <option value="9">Set</option>
                <option value="10">Out</option>
                <option value="11">Nov</option>
                <option value="12">Dez</option>
              </select>
              <select id="month" className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark flex-1">
                {rendersYearOptions()}
              </select>
            </div>
          </div>
          <input 
            type="password" 
            placeholder="Senha"
            className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark"/>
          <input 
            type="confirm-password" 
            placeholder="Confirme sua senha"
            className="p-3 rounded-md border border-bloop-primary focus:outline-bloop-primary-dark"/>  
          <button type="submit" className="flex-1 text-center bg-bloop-primary p-3 rounded-md text-white cursor-pointer">
            Criar conta
          </button>
          <p className="text-center">
            Já possui uma conta?&nbsp;
            <Link to="/sign-in" className="underline text-bloop-primary-dark">
              Faça login.
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}
