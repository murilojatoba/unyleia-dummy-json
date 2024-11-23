import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import { ResponseUser, User } from "../../shared/models";
import './users.css'

export default function Users() {

  const URL_BASE = 'https://dummyjson.com/users';
  const PAGE_SIZE_BASE = 0;
  const PAGE_NUMBER_BASE = 0;

  const navigate = useNavigate();

  const columns = [
    {
      name: 'Id',
      selector: (row: User) => row.id,
    },
    {
      name: 'Login',
      selector: (row: User) => row.username,
    },
    {
      name: 'Nome',
      selector: (row: User) => `${row.firstName}  ${row.lastName}`,
    },
    {
      name: 'E-mail',
      selector: (row: User) => row.email,
    },
    {
      name: 'Perfil',
      selector: (row: User) => row.role,
    },
  ];

  const paginationComponentOptions = {
    noRowsPerPage: false,
    rowsPerPageText: 'Usuários por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const [isLoading, setIsLoading] = useState(true);
  const [responseUser, setResponseUser] = useState({} as ResponseUser);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    obterResponseUser();
  },
    []);

  async function obterResponseUser() {
    setIsLoading(true);

    const searchString = getSearchString();
    let url = searchString ?
      `${URL_BASE}/${searchString}&limit=${PAGE_SIZE_BASE}&skip=${PAGE_NUMBER_BASE}` :
      `${URL_BASE}?limit=${PAGE_SIZE_BASE}&skip=${PAGE_NUMBER_BASE}`;

    try {
      const response = await axios.get<ResponseUser>(url);

      if (response?.data) {
        setResponseUser(response.data);
        setIsLoading(false);
      }

    } catch (err) {
      alert('Houve erro ao obter usuários');
    }
  }

  function getSearchString() {
    const prefix = 'filter?';
    const filterPattern = 'key=#key#&value=#keyValue#'
    const keys: string[] = [];

    if (username) {
      keys.push(filterPattern.replace('#key#', 'username').replace('#keyValue#', username));
    }

    if (firstName) {
      keys.push(filterPattern.replace('#key#', 'firstName').replace('#keyValue#', firstName));
    }

    if (lastName) {
      keys.push(filterPattern.replace('#key#', 'lastName').replace('#keyValue#', lastName));
    }

    if (role) {
      keys.push(filterPattern.replace('#key#', 'role').replace('#keyValue#', role));
    }

    if (keys.length) {
      return prefix + keys.reduce((acum, key) => acum += acum === '' ? key : '&' + key, '');
    }
    return;
  }

  function resetForm() {
    setUsername('');
    setFirstName('');
    setLastName('');
    setRole('');
  }

  return (
    <div>
      <Header />
      <div className="container users-search">
        <h1>Pesquisa de Usuáros</h1>
        <div className="container-form">
          <p>Informe apenas um filtro por vez</p>
          <div className="form">
            <input type="text" placeholder="Login" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder="Nome" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.target.value)} />
            <select name="" value={role} onChange={e => setRole(e.target.value)}>
              <option value="">Perfil</option>
              <option value="admin">admin</option>
              <option value="moderator">moderator</option>
              <option value="user">user</option>
            </select>
          </div>
          <div className="botoes">
            <button className="btn primary" onClick={e => { obterResponseUser() }}>Pesquisar</button>
            <button className="btn secondary" onClick={e => navigate('/users/new')}>Novo</button>
            <button className="btn secondary" onClick={e => resetForm()}>Limpar</button>
          </div>
        </div>
      </div>
      <div className="container users-grid">
        <h1>Usuários Cadastrados</h1>

        {isLoading ? <p>Carregando...</p> :

          !responseUser || !responseUser.users || !responseUser.users.length ? <p>Não há usuários cadastrados</p> :
            <DataTable columns={columns} data={responseUser.users} pagination paginationComponentOptions={paginationComponentOptions} />
        }
      </div>
    </div >
  )
}