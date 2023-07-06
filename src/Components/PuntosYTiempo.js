import React from 'react';


function PuntosYTiempo({puntos, tiempo}) {
    return (
        <>
            <div className='datos'>
                <h2>Puntaje:{puntos}</h2>
                <h2>Tiempo: {tiempo} segundos</h2>
            </div>
        </>
    );
}
export default PuntosYTiempo;