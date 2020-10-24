import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import OptionMenuParam from './OptionParam.js';
import OptionMenuContact from './OptionContacts.js';
import { conexApi } from '../config.js'


const EditArea = (props) => {

    const server = conexApi + "contactos/empresa/cliCod/"

    const [info, setInfo] = useState(false);
    const [contacts, setContacts] = useState([]);

    console.log(contacts)


    const ticket = props.ticketSelected
    const cliCod = ticket.tik_clientecod;

    const ColorButton = withStyles((theme) => ({
        root: {
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
        },
    }))(Button);

    const estado = (st) => {
        switch (st) {
            case 'A': return "Abierto"
            case 'V': return "Pendiente"
            case 'D': return "Derivado Bs.As."
            case 'C': return "Cerrado"
            default: return "Estado"
        }
    }

    // const [ticketSelected, setTicketSelected] = useState({
    //     tik_id: '',
    //     tik_fechacreacion: '',
    //     tik_fechamodif: '',
    //     tik_cliente: '',
    //     tik_clientecod: '',
    //     tik_abonado: '',
    //     tik_contacto: '',
    //     tik_tel: '',
    //     tik_email: '',
    //     tik_estado: '',
    //     tik_usu: '',
    //     tik_tipo: '',
    //     tik_modulo: '',
    //     tik_tema: '',
    //     tik_notes: ''
    // });

    useEffect(()=>{
        if (cliCod.length > 0) {
            fetch(server + cliCod)
                .then(res => res.json())
                .then(function (data) {
                    setContacts(data)                  
                })
        }
    }, [server, cliCod])    
    

    // const handleContacto = () => {

    // }


    return (

        <div className="tickets-modi-bg">
            {info &&
                <div className="tickets-modi-fcreacion">
                    <input contentEditable="false" value={ticket.tik_fechacreacion} disabled></input>
                    <input contentEditable="false" value={ticket.tik_fechamodif} disabled></input>
                </div>
            }
            <div className="tickets-modi-conteiner">
                <div className="tickets-modi-stateArea">
                    <div className="tickets-modi-emp">
                        <input contentEditable="false" value={ticket.tik_id} disabled />
                        <input 
                        contentEditable="false" 
                        value={ticket.tik_cliente || "Empresa"} 
                        disabled 
                        />
                        <input contentEditable="false" value={ticket.tik_abonado} disabled />
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
                        contactName={ticket.tik_contacto || "Contacto"} 
                        contactPhone={ticket.tik_tel || "Telefono"} 
                        contactEmail={ticket.tik_email || "Email"}  
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
                        ]} inheritedTitle={estado(ticket.tik_estado)} />

                        <OptionMenuParam options={[
                            "Soporte",
                            "Esteban",
                            "Pablo",
                            "Federico",
                            "Sebastian",
                            "Patricia",
                            "Rosana",
                            "Ivonne"
                        ]} inheritedTitle={ticket.tik_usu || "Usuario"} />

                        <OptionMenuParam options={[
                            "Tecnica",
                            "Funcional"
                        ]} inheritedTitle={ticket.tik_tipo || "Consulta"} />

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
                        ]} inheritedTitle={ticket.tik_modulo || "Modulo"} />
                    </div>


                </div>
                <div className="tickets-modi-subTitle">
                    <hr></hr>
                    <p>Tema</p>
                    <hr></hr>
                </div>
                <div className="tickets-modi-data">
                    <textarea value={ticket.tik_tema}></textarea>
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
                    <ColorButton
                        variant="contained"
                        color="primary"
                        size="small"
                    >
                        {"Nuevo"}
                    </ColorButton>
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