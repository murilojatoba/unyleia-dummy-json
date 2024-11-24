import { SiJson } from "react-icons/si";
import { FaUsersLine } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import './header.css'

export default function Header() {

  const navigate = useNavigate();

  function navegar(link: string) {
    navigate(link);
  }

  return (
    <div className="header">
      <span className="item-menu" onClick={() => navegar('/')}>
        <SiJson size='32px' color='var(--verde-escuro)' />
        <h1>Dummy Json UI</h1>
      </span>
      <ul className="menu">
        <li><span className="item-menu" onClick={() => navegar('/users')}><FaUsersLine color='var(--verde-escuro)' />Usuários</span></li>
        <li><span className="item-menu"onClick={() => navegar('/tasks')}><FaTasks color='var(--verde-escuro)' />Tarefas</span></li>
        {/* <li><span className="item-menu" onClick={e => navegar('/products')}><LuPackage2 color='var(--verde-escuro)' />Produtos</span></li> */}
      </ul>
    </div>
  )
}