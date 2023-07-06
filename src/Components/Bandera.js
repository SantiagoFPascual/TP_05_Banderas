import React from "react";


function Bandera({pais, ayuda}) {
    return (
        <>
        {pais ? (
                    <div>
                        <img className='Bandera' src={pais.flag} alt="bandera" />         
                        <h1 className="ayuda">{ayuda}</h1>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )
            }         
        </>
    )
}
export default Bandera;