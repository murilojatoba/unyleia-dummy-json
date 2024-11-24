import Header from "../../components/header/header";

import './home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container home">
        <h1>Bem-vindo!</h1>
        <div className="bem-vindo">
          <p>Seja bem-vindo ao Dummy JSON UI, sua interface de acesso à API Dummy JSON!</p>
          <p>Utilize o menu superior para ter acesso aos recursos disponíbilizados.</p>
        </div>
      </div>
    </div>
  )
}