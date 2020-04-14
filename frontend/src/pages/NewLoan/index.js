import React from 'react';
import { FiCalendar, FiShare2, FiFileText } from 'react-icons/fi';
import { BsTools } from 'react-icons/bs';

import './styles.css';

export default function NewLoan() {
  return (
    <div className="container">
      <div className="content">
        <h1>BMB Tools</h1>

        <section >
          <form>
            <p>Novo empréstimo</p>


            <div className="inputWithIcon">
              <BsTools /> <input placeholder="Ferramenta" />
            </div>
            <div className="inputWithIcon">
              <FiCalendar /> <input placeholder="data" type="date" />
            </div>
            <div className="inputWithIcon">
              <FiShare2 /> <input placeholder="Requerente" />
            </div>
            <div className="inputWithIcon">
              <FiFileText type="textarea" /> <textarea placeholder="Descrição" />
            </div>

            <button className="button" type="">Emprestar</button>
          </form>
        </section>
      </div>
    </div>
  )
}