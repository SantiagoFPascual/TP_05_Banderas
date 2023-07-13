import React from "react";
/*import { PaisShape } from "../shapes";
import {string} from 'prop-types'*/


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

/*Bandera.prototype = {
    pais: PaisShape,
    ayuda: ArrayOf(string)
}*/

export default Bandera;