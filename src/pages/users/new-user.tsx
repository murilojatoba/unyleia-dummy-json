import axios from "axios";

import { useState } from "react";
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";

import { User } from "../../shared/models";

import './new-user.css'

export default function NewUser() {
  const URL_BASE = 'https://dummyjson.com/users/add';

  const navigate = useNavigate();

  const [user, setUser] = useState({} as User);

  function resetForm() {
    const userEmpty = {} as User;
    setUser(userEmpty);
  }

  async function cadastrar() {
    if (!isValido()) {
      alert('Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await axios.post(URL_BASE, user);
      setUser(response.data);
      
      alert('Usuário cadastrado com sucesso');
      navigate('/users');

    } catch (err) {}
  }

  function isValido(): boolean {
    if (!user.firstName || !user.lastName || !user.email || !user.username || !user.password || !user.role) {
      return false;
    }

    return true;
  }

  return (
    <div>
      <Header />
      <div className="container new-user">
        <h1>Cadastro de Usuário</h1>
        <div className="container-form">
          <div className="form">
            <p>
              <input type="text" placeholder="Login*" value={user.username} onChange={e => setUser({...user, username: e.target.value})} />
              <input type="text" placeholder="Nome*" value={user.firstName} onChange={e => setUser({...user, firstName: e.target.value})} />
              <input type="text" placeholder="Sobrenome*" value={user.lastName} onChange={e => setUser({...user, lastName: e.target.value})} />
            </p>
            <p>
            <input type="text" placeholder="E-mail*" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
            <input type="password" placeholder="Senha*" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
              <select name="" value={user.role} onChange={e => setUser({...user, role: e.target.value})}>
                <option value="">Perfil*</option>
                <option value="admin">admin</option>
                <option value="moderator">moderator</option>
                <option value="user">user</option>
              </select>
            </p>
          </div>
          <div className="botoes">
            <button className="btn primary" onClick={() => { cadastrar() }}>Salvar</button>
            <button className="btn secondary" onClick={() => resetForm()}>Limpar</button>
            <button className="btn secondary" onClick={() => navigate('/users')}>Voltar</button>
          </div>
        </div>
      </div>
    </div>
  )
}