import Nav from "./nav"

export default function Header() {
  return (
    <header className="mx-4 my-4 lg:mx-auto lg:max-w-5xl">
      <div className="flex items-center justify-between rounded-xl border-2 px-4 py-2">
        <p className="text-lg font-bold">BRAND</p>
        <Nav />
      </div>
    </header>
  )
}

