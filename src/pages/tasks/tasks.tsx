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
      width: '5%',
      center: true,
    },
    {
      name: 'Tarefa',
      selector: (row: Task) => row.todo,
      width: '75%',
    },
    {
      name: 'Concluída?',
      selector: (row: Task) => row.completed ? 'Sim' : 'Não',
      width: '10%',
      center: true,
    },
    {
      name: 'Id do Usuário',
      selector: (row: Task) => row.userId,
      width: '10%',
      center: true,
    },
  ];

  const customStyles = {
    table: {
      style: {
        borderRadius: '4px',
        overflow: 'hidden',
      },
    },
    headRow: {
      style: {
        background: 'var(--verde-escuro)',
      },
    },
    headCells: {
      style: {
        fontWeight: 'bold',
        color: 'var(--branco)',
        fontSize: '1rem',
      },
    },
    rows: {
      style: {
        '&:not(:last-of-type)': {
          border: '1px solid var(--cinza)',
        },
        '&:hover': {
          background: 'var(--verde-claro)',
        },
        fontSize: '1rem',
      },
    },
  };

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
            <button className="btn primary" onClick={() => { obterResponseTask() }}>Pesquisar</button>
            <button className="btn secondary" onClick={() => navigate('/tasks/new')}>Nova</button>
            <button className="btn secondary" onClick={() => resetForm()}>Limpar</button>
          </div>
        </div>
      </div>
      <div className="container tasks-grid">
        <h1>Tarefas Cadastradas</h1>

        {isLoading ? <p>Carregando...</p> :

          !responseTask || !responseTask.todos || !responseTask.todos.length ? <p>Não há usuários cadastrados</p> :
            <DataTable 
              columns={columns} 
              data={responseTask.todos} 
              paginationComponentOptions={paginationComponentOptions} 
              customStyles={customStyles} 
              pagination 
              striped />
        }
      </div>
    </div>
  )
}