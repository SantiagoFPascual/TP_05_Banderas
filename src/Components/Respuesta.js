import React from 'react';


function Respuesta({ comrobarRespuesta, Ayuda }){
    return (
        <form className='form' onSubmit={(e) => comrobarRespuesta(e)}>
            <input type="text" name="pais" className="input-Text" autoComplete="off" placeholder="" required />
            <div className='buttons'>
                <button type="submit" className="boton-Enviar">Enviar</button>    
                <button type="button" className="boton-Ayuda" onClick={() => Ayuda()}>Ayuda</button>   
            </div>                
        </form>
    );
}

export default Respuesta;