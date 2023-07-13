import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Bandera from './Components/Bandera';
import Respuesta from './Components/Respuesta';
import PuntosYTiempo from './Components/PuntosYTiempo';


function App() {

  const [paises, setPaises] = useState([]);
  const [pais, setPais] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [tiempo, setTiempo] = useState(15);
  const [ayuda, setAyuda] = useState('');
  const [letrasAyuda, setLetrasAyuda] = useState([]);

  //Crear array de paises
  useEffect(() => {
    const getPaises = async () => {
        try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
            const listpaises = response.data.data;
            setPaises(listpaises);
            
        } catch (error) {
        console.log('Error:', error);
        }
    };
    getPaises();      
  }, []);

  //Agarrar un pais random del array
  let getPaisRandom = () => {
    let numRandom = Math.floor(Math.random() *paises.length);
    return paises[numRandom];
  }

  //Agregar el país random al setPais()
  useEffect(() => {
    if(paises.length > 0)
      setPais(getPaisRandom());
  }, [paises])


  //Función que comprueba que la respuestasea correcta, sume puntos y llama a cambiar datos
  let comrobarRespuesta = (e) => {
    e.preventDefault();
    if (e.target.pais.value.toLowerCase() === pais.name.toLowerCase()) {
      setPuntos(puntos + 10 + (tiempo > 0 ? tiempo : 0));
    } else {
      setPuntos(puntos - 1);
    }    
    e.target.pais.value = '';
    proxBandera(2000);
  }

  //Funcion que cambia los datos al del proximo pais
  let proxBandera = () => {
      setPais(getPaisRandom());
      setTiempo(pais.name.length * 2)
      setAyuda('_____')
      setLetrasAyuda([])
  };


  //Funcion que revisa la cantidad de letras del pais, y muesta las letras en pantalla de forma random
  function Ayuda() {

    let cantAyudas =  cantLetrasAyuda(pais.name);

    if(cantAyudas > letrasAyuda.length){
      let letraRandom;
      do {
        letraRandom = pais.name[Math.floor(Math.random() * pais.name.length)]
      } while (letrasAyuda.includes(letraRandom));

      setLetrasAyuda([...letrasAyuda, letraRandom]);

      let guiones = '';
      for (let i = 0; i < pais.name.length; i++) {
        if (pais.name[i] === ' ') {
          guiones += ' ';
        } else if (letrasAyuda.includes(pais.name[i])) {
          guiones += pais.name[i];
        } else {
          guiones += '_ ';
        }
      }
      setAyuda(guiones);
      setTiempo(tiempo - 2);
    }
    
  }


  function cantLetrasAyuda(nombre) { 
    let arrLetras = new Set();
    for (let i = 0; i < nombre.length; i++) {
      arrLetras.add(nombre[i]);
    }
    return arrLetras.size;
  }

  // Funcion que hace que pase el tiempo
  useEffect(() => {
      const intervalo = setInterval(() => {
        if (tiempo > 0) {
          setTiempo(tiempo - 1)
        } else if(tiempo <= 0){
          setPuntos(puntos - 1);
          proxBandera();
        }
      }, 1000);
      return () => clearInterval(intervalo);
  });
  return (
  <>
    <div className='center'>
      <PuntosYTiempo puntos={puntos} tiempo={tiempo}/>
      <Bandera pais={pais} ayuda={ayuda}/>
      <Respuesta comrobarRespuesta={comrobarRespuesta} Ayuda={Ayuda}/>
    </div>
  </>
  );
  }

export default App;
