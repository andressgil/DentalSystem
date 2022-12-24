import React, { useTransition, useState, useEffect } from 'react';
import History from './History';
import Navbarhome from '../../components/ui/Navbarhome';




import "./HistoryQuotes.css"

function HistoryQuotes() {

  async function fetchdata(name){
    const res = await fetch("http://localhost:8080/history/")
    const documents = await res.json()
    setDocuments(documents)
  }
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchdata("")
  }, []);

    return ( 
        <section className='history'>
            <Navbarhome></Navbarhome>
            <div className='container'>
                <div className='balance card flex'>
                    <h1 className='value'>Historial de Citas</h1>
                </div>

                <div className='quotes card'>
                    <h2>Citas Agendadas</h2>
                    <div className='transaction flex card'>
                        {documents.map((element) =>{<History data={element}/>})}
                    </div>

                </div>
            </div>
        </section>
     );
}

export default HistoryQuotes;