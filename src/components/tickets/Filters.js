import React from 'react';
import { Button } from '@material-ui/core';

const Filters = () => {

    return (

        <div className="tickets-filter-conteiner">
            <h4>Filtros</h4>
            <ul>
                <li>
                    <div>
                        {"ID"}
                        <input placeholder="Buscar" type="number" />
                    </div>
                </li>
                <li>
                    <div>

                        {"Estado"}
                        <select>
                            <option>Abierto</option>
                            <option>Cerrado</option>
                            <option>Pendiente</option>
                            <option>Derivado Bs.As.</option>
                        </select>
                    </div>
                </li>
                <li>
                    <div>
                        {"Cliente"}
                        <input placeholder="Buscar" />

                    </div>
                </li>
                <li>
                    <div>
                        {"Tema"}
                        <input placeholder="Buscar" />

                    </div>
                </li>
                <li>
                    <div>
                        {"Usuario"}
                        <input placeholder="Buscar" />

                    </div>
                </li>
            </ul>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ float: "right", marginRight: "1em" }}
            >
                {"Aplicar"}
            </Button>
        </div>

    )
}

export default Filters;