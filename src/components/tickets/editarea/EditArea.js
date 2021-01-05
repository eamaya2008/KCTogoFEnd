import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
// import { green } from '@material-ui/core/colors';
// import { withStyles } from '@material-ui/core/styles';
import OptionMenuParam from './OptionParam.js';
import OptionMenuContact from './OptionContacts.js';
import OptionMenuVendedor from './OptionVendedor.js';
import { conexApi } from '../../../assets/conexConfig.js';


const EditArea = ({ ticketSelected, handleUpdateTicket }) => {

    const [info, setInfo] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [cliCod, setCliCod] = useState('');

    useEffect(() => {
        setCliCod(ticketSelected.tik_clientecod)
    }, [ticketSelected])


    // const ColorButton = withStyles((theme) => ({
    //     root: {
    //         backgroundColor: green[500],
    //         '&:hover': {
    //             backgroundColor: green[700],
    //         },
    //     },
    // }))(Button);

    const estado = (st) => {
        switch (st) {
            case 'A': return "Abierto"
            case 'V': return "Pendiente"
            case 'D': return "Derivado Bs.As."
            case 'C': return "Cerrado"
            default: return "Estado"
        }
    }


    useEffect(() => {
        if (cliCod.length > 0) {
            fetch(conexApi + "contactos/cliCod?clicod=" + cliCod)
                .then(res => res.json())
                .then(function (data) {
                    setContacts(data)
                })
        }
    }, [cliCod])

    // const handleContacto = () => {

    // }

    const handleVendedorInput = (venCod) => {
        handleUpdateTicket(venCod)
    }

    const handleTema = () => {

    }

    return (

        <div className="tickets-modi-bg">
            {info &&
                <div className="tickets-modi-fcreacion">
                    <input contentEditable="false" value={ticketSelected.tik_fechacreacion} disabled></input>
                    <input contentEditable="false" value={ticketSelected.tik_fechamodif} disabled></input>
                </div>
            }
            <div className="tickets-modi-conteiner">
                <div className="tickets-modi-stateArea">
                    <div className="tickets-modi-emp">
                        <input contentEditable="false" value={ticketSelected.tik_id} disabled />
                        <input
                            contentEditable="false"
                            value={ticketSelected.tik_cliente || "Empresa"}
                            disabled
                        />
                        <input contentEditable="false" value={ticketSelected.tik_abonado} disabled />
                        <i
                            className="fas fa-info-circle"
                            onMouseEnter={() => setInfo(true)}
                            onMouseLeave={() => setInfo(false)}
                        ></i>
                    </div>


                    <div className="tickets-modi-subTitle">
                        <hr></hr>
                        <p>Contacto</p>
                        <hr></hr>
                    </div>

                    <OptionMenuContact
                        options={contacts}
                        contactName={ticketSelected.tik_contacto || "Contacto"}
                        contactPhone={ticketSelected.tik_tel || "Telefono"}
                        contactEmail={ticketSelected.tik_email || "Email"}
                    />

                    <div className="tickets-modi-subTitle">
                        <hr></hr>
                        <p>Parametros</p>
                        <hr></hr>
                    </div>

                    <div className="tickets-modi-param">

                        <OptionMenuParam options={[
                            "Abierto",
                            "Cerrado",
                            "Pendiente",
                            "Derivado Bs.As."
                        ]} inheritedTitle={estado(ticketSelected.tik_estado)} />

                        <OptionMenuVendedor
                            inheritedTitle={ticketSelected.tik_usu || "Usuario"}
                            handleVendedorInput={handleVendedorInput}
                        />

                        <OptionMenuParam options={[
                            "Tecnica",
                            "Funcional"
                        ]} inheritedTitle={ticketSelected.tik_tipo || "Consulta"} />

                        <OptionMenuParam options={[
                            "Migrar Server",
                            "Instalar Flex",
                            "Instalar Baco",
                            "Flex/IVA",
                            "CG/ConfBalances",
                            "Bodega",
                            "Desarrollo/MAM",
                            "Produccion",
                            "SJ/RRHH"
                        ]} inheritedTitle={ticketSelected.tik_modulo || "Modulo"} />
                    </div>


                </div>
                <div className="tickets-modi-subTitle">
                    <hr></hr>
                    <p>Tema</p>
                    <hr></hr>
                </div>
                <div className="tickets-modi-data">
                    <textarea value={ticketSelected.tik_tema} onChange={handleTema}></textarea>
                </div>
                <div className="tickets-modi-subTitle">
                    <hr></hr>
                    <p>Notas Internas</p>
                    <hr></hr>
                </div>
                <div className="tickets-modi-notaInterna">
                    <textarea></textarea>
                </div>
                <div className="tickets-modi-buttons">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                    >
                        {"Nuevo"}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                    >
                        {"Guardar"}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                    >
                        {"Eliminar"}
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default EditArea;