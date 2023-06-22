import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Bandera() {
   const [flags, setFlag] = useState([]);



    useEffect(() => {
        const getFlag = async () => {
            try {
                const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
                const paises = response.data.data;
                let randomNum = Math.floor(Math.random()*paises.length)
                let paisRandom = paises[randomNum];
            setFlag(paisRandom);
            } catch (error) {
            console.log('Error:', error);
            }
        };
        getFlag();      
    }, []);

    


    return (
        <>
        {flags ? (
            <div>
                <h1 className='Titulo'>Nombre: {flags.name}</h1>
                <img width={250} src={flags.flag} alt='Bandera'/>
            </div>
        ) : (
            <p>Cargando...</p>
        )
        }
        </>
    );
}

export default Bandera;