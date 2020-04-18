import React, { useState } from 'react';
import { FiCalendar, FiShare2, FiFileText } from 'react-icons/fi';
import { BsTools } from 'react-icons/bs';

import './styles.css';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function NewBorrow() {
  const [toolName, setToolName] = useState('');
  const [date, setDate] = useState('');
  const [requester, setRequester] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();

  const userId = localStorage.getItem('userId');

  async function handleNewBorrow(e) {
    e.preventDefault();

    const data = {
      toolName,
      date,
      requester,
      description,
    }

    try {
      await api.post('tools', data, {
        headers: {
          Authorization: userId,
        }
      });

      history.push('/borrows');
    } catch (err) {
      alert('Erro ao emprestar a ferramenta! Tente novamente.')
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h1>BMB Tools</h1>

        <section >
          <form onSubmit={handleNewBorrow}>
            <p>Novo empréstimo</p>

            <div className="inputWithIcon">
              <BsTools /> 
              <input 
                placeholder="Ferramenta" 
                value={toolName}
                onChange={e => setToolName(e.target.value)}
              />
            </div>
            <div className="inputWithIcon">
              <FiCalendar /> 
              <input 
                placeholder="data" 
                type="date" 
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className="inputWithIcon">
              <FiShare2 /> 
              <input 
                placeholder="Requerente" 
                value={requester}
                onChange={e => setRequester(e.target.value)}
              />
            </div>
            <div className="inputWithIcon">
              <FiFileText type="textarea" /> 
              <textarea 
                placeholder="Descrição" 
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <button className="button" type="submit">Emprestar</button>
          </form>
        </section>
      </div>
    </div>
  )
}