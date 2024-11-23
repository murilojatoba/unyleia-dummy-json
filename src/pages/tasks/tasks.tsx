import axios from "axios";

import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import { ResponseTask, Task } from "../../shared/models";

import './tasks.css'

export default function Tasks() {
  const URL_BASE = 'https://dummyjson.com/todos';
  const PAGE_SIZE_BASE = 0;
  const PAGE_NUMBER_BASE = 0;

  const navigate = useNavigate();

  const columns = [
    {
      name: 'Id',
      selector: (row: Task) => row.id,
    },
    {
      name: 'Tarefa',
      selector: (row: Task) => row.todo,
    },
    {
      name: 'Concluída?',
      selector: (row: Task) => row.completed ? 'Sim' : 'Não',
    },
    {
      name: 'Id do Usuário',
      selector: (row: Task) => row.userId,
    },
  ];

  const paginationComponentOptions = {
    noRowsPerPage: false,
    rowsPerPageText: 'Tarefas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

  const [isLoading, setIsLoading] = useState(true);
  const [responseTask, setResponseTask] = useState({} as ResponseTask);

  const [userId, setUserId] = useState('');

  useEffect(() => {
    obterResponseTask();
  },
    []);

  async function obterResponseTask() {
    setIsLoading(true);

    let url = userId ?
      `${URL_BASE}/user/${userId}` :
      `${URL_BASE}?limit=${PAGE_SIZE_BASE}&skip=${PAGE_NUMBER_BASE}`;

    try {
      const response = await axios.get<ResponseTask>(url);

      if (response?.data) {
        setResponseTask(response.data);
        setIsLoading(false);
      }

    } catch (err) {
      alert('Houve erro ao obter tarefass');
    }
  }

  function resetForm() {
    setUserId('');
  }


  return (
    <div>
      <Header />
      <div className="container tasks-search">
        <h1>Pesquisa de Tarefas</h1>
        <div className="container-form">
          <div className="form">
            <input type="number" placeholder="Id do Usuário" value={userId} onChange={e => setUserId(e.target.value)} />
          </div>
          <div className="botoes">
            <button className="btn primary" onClick={e => { obterResponseTask() }}>Pesquisar</button>
            <button className="btn secondary" onClick={e => navigate('/tasks/new')}>Nova</button>
            <button className="btn secondary" onClick={e => resetForm()}>Limpar</button>
          </div>
        </div>
      </div>
      <div className="container tasks-grid">
        <h1>Tarefas Cadastradas</h1>

        {isLoading ? <p>Carregando...</p> :

          !responseTask || !responseTask.todos || !responseTask.todos.length ? <p>Não há usuários cadastrados</p> :
            <DataTable columns={columns} data={responseTask.todos} pagination paginationComponentOptions={paginationComponentOptions} />
        }
      </div>
    </div>
  )
}