import bloop from "../assets/bloop.webp"

const Header = () => {
  return (
    <div className="flex-1 flex justify-between items-center gap-5 bg-bloop-primary-dark px-5 py-2">
      <h1 className="text-2xl text-white mt-0">Bloop</h1>
      <img 
        src={bloop} alt="Bloop, mascote da aplicação"
        className="w-10"/>
    </div>
  )
}

export { Header }