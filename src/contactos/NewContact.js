import React, { useState, useEffect } from 'react';
import './contact.css';
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import SaveIcon from '@material-ui/icons/Save';

const NuevoContacto = () => {

    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({
        cotcli_codigo: '',
        cot_nombre: '',
        cot_email: '',
        cot_telefono: ''
    });

    const server = 'http://localhost:8000/api/';

    useEffect(() => {
        setTimeout(() => {
            fetch(server + 'clientes')
                .then(res => res.json())
                .then(data => setClientes(data))
        }, 1000);
    }, []);

    const handleInputCliente = (e, value) => {
        setCliente({
            ...cliente,
            cotcli_codigo: value.cli_cod
        });
    };

    const handleInputs = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        };
        fetch(server + 'contactos/altaContacto', requestOptions)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    };


    return (

        <div className="contactos_main">
            <div className="contactos_header">
                <h2>Contactos</h2>
            </div>
            <div className="contactos-registration">
                <div className="contactos-registration-form">
                    <h4>Nuevo Contacto</h4>
                    <form>
                        <div>
                            <Autocomplete
                                id="combo-box-demo"
                                options={clientes}
                                getOptionLabel={option => option.cli_razsoc}
                                onChange={handleInputCliente}
                                renderInput={(params) => <TextField {...params} size="small" className="contactos-registration-form-field-input" label="Empresa" />}
                            />
                        </div>

                        <div className="contactos-registration-form-field">
                            <TextField
                                autoComplete="off"
                                className="contactos-registration-form-field-input"
                                id="standar-basic"
                                label="Nombre"
                                name="cot_nombre"
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="contactos-registration-form-field">
                            <TextField
                                autoComplete="off"
                                className="contactos-registration-form-field-input"
                                id="standar-basic"
                                label="Email"
                                name="cot_email"
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="contactos-registration-form-field">
                            <TextField
                                autoComplete="off"
                                className="contactos-registration-form-field-input"
                                id="standar-basic"
                                label="Telefono"
                                name="cot_telefono"
                                onChange={handleInputs}
                            />
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ float: "right", margin: "1em auto" }}
                            startIcon={<SaveIcon />}
                            onClick={handleSubmit}

                        >
                            {"Guardar"}
                        </Button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default NuevoContacto;