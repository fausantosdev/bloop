import { Header } from "~/components/header"
import type { Route } from "./+types/feed"

import { Link } from "react-router"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "" },
    { name: "description", content: "" },
  ]
}

export default function Feed() {
  return (
    <div>
      <Header />
      <main className="flex flex-col">
        

      </main>
    </div>
  )
}
