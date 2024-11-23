import axios from "axios";

import { useState } from "react";
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";

import { Task } from "../../shared/models";

import './new-task.css'

export default function NewTask() {
  const URL_BASE = 'https://dummyjson.com/todos/add';

  const navigate = useNavigate();

  const [task, setTask] = useState({} as Task);

  function resetForm() {
    const taskEmpty = {} as Task;
    taskEmpty.id = 0;
    taskEmpty.todo = '';
    taskEmpty.userId = '';
    taskEmpty.completed = false;

    setTask(taskEmpty);
  }

  async function cadastrar() {
    if (!isValida()) {
      alert('Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await axios.post(URL_BASE, task);
      setTask(response.data);
      
      alert('Tarefa cadastrada com sucesso');
      navigate('/tasks');

    } catch (err) {}
  }

  function isValida(): boolean {
    if (!task.todo || !task.userId) {
      return false;
    }

    return true;
  }

  return (
    <div>
      <Header />
      <div className="container new-task">
        <h1>Cadastro de Tarefa</h1>
        <div className="container-form">
          <div className="form">
              <input type="text" placeholder="Tarefa*" value={task.todo} onChange={e => setTask({...task, todo: e.target.value})} />
              <input type="number" placeholder="Id do Usuário*" value={task.userId} onChange={e => setTask({...task, userId: e.target.value})} />
          </div>
          <div className="botoes">
            <button className="btn primary" onClick={e => { cadastrar() }}>Salvar</button>
            <button className="btn secondary" onClick={e => resetForm()}>Limpar</button>
            <button className="btn secondary" onClick={e => navigate('/tasks')}>Voltar</button>
          </div>
        </div>
      </div>
    </div>
  )
}