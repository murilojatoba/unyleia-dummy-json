import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import { ResponseUser, User } from '../../shared/models';

import './user-detail.css';

interface UserDetail extends User {
  maidenName: string;
  age: number;
  gender: string;
  phone: string;
  birthDate: string;
  height: number;
  weight: number;
  eyeColor: string;
  university: string;
}

export default function UserDetail() {

  const URL_BASE = 'https://dummyjson.com/users';

  const navigate = useNavigate();

  const params = useParams();
  const id = params['id'];

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({} as UserDetail);

  useEffect(() => {
    obterUser();
  },
    []);

  async function obterUser() {
    setIsLoading(true);

    let url = `${URL_BASE}/${id}`;

    try {
      const response = await axios.get<UserDetail>(url);

      if (response?.data) {
        setUser(response.data);
        setIsLoading(false);
      }

    } catch (err) {
      alert('Houve erro ao obter detalhes do usuário');
    }
  }

  return (
    <div>
      <Header />
      <div className="container user-detail">
        <h1>Detalhes do Usuário</h1>

        {isLoading ? <p>Carregando...</p> :

          !user ? <p>Usuário não encontrado</p> :
            <div className="container-form">
              <div className="form">
                <div className="input">
                  <label>Id:</label>
                  <input type="text" placeholder="Id" value={user.id} />
                </div>
                <div className="input">
                  <label>Login:</label>
                  <input type="text" placeholder="Login" value={user.username} />
                </div>
                <div className="input">
                  <label>Nome:</label>
                  <input type="text" placeholder="Nome" value={user.firstName} />
                </div>
                <div className="input">
                  <label>Sobrenome:</label>
                  <input type="text" placeholder="Sobrenome" value={user.lastName} />
                </div>
                <div className="input">
                  <label>Idade:</label>
                  <input type="text" placeholder="Idade" value={user.age} />
                </div>
                <div className="input">
                  <label>Sexo:</label>
                  <input type="text" placeholder="Sexo" value={user.gender} />
                </div>
                <div className="input">
                  <label>Telefone:</label>
                  <input type="text" placeholder="Telefone" value={user.phone} />
                </div>
                <div className="input">
                  <label>Data de Nascimento:</label>
                  <input type="text" placeholder="Data de Nascimento" value={user.birthDate} />
                </div>
                <div className="input">
                  <label>Altura (cm):</label>
                  <input type="text" placeholder="Altura (cm)" value={user.height} />
                </div>
                <div className="input">
                  <label>Peso:</label>
                  <input type="text" placeholder="Peso" value={user.weight} />
                </div>
                <div className="input">
                  <label>Cor dos Olhos:</label>
                  <input type="text" placeholder="Cor dos Olhos" value={user.eyeColor} />
                </div>
                <div className="input">
                  <label>Nome de Solteiro(a):</label>
                  <input type="text" placeholder="Nome de Solteiro(a)" value={user.maidenName} />
                </div>
                <div className="input">
                  <label>Universidade:</label>
                  <input type="text" placeholder="Universidade" value={user.university} />
                </div>
              </div>
              <div className="botoes">
                <button className="btn primary" onClick={e => navigate('/users')}>Voltar</button>
              </div>
            </div>
        }
      </div>
    </div>
  )
}