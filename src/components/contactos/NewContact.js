import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './contact.css';
import {TextField, Button} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import SaveIcon from '@material-ui/icons/Save';
import {conexApi} from '../config.js';

const AddContact = () => {
    
    const [clientes, setClientes] = useState([]);
    const [contacto, setContacto] = useState({
        cotcli_codigo: '',
        cot_nombre: '',
        cot_email: '',
        cot_telefono: ''
    });    
    
//Carga los cliente a mostrar en el componente Autocomplete
    useEffect(() => {
        setTimeout(() => {            
                fetch(conexApi + 'clientes')
                    .then(res => res.json())
                    .then(data => setClientes(data))            
        }, 1000);     
    }, []);
    
// Captura el codigo de cliente del componente Autocomplete
    const handleInputCliente = (e, value) =>{        
        if (value !== null){
            setContacto({
                ...contacto,
                cotcli_codigo: value.cli_cod                
            });            
        };   
    };
// Captura los datos de los input
    const handleInputs = (e) =>{  
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        });
    }; 

// Reglas inputs


// Blanquea los campos
const cleanInputs = () =>{
    setContacto({
        cotcli_codigo: '',
        cot_nombre: '',
        cot_email: '',
        cot_telefono: ''
    });
}

//Envia los datos y vacia los campos
    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contacto)
        };
        fetch(conexApi + 'contactos/altaContacto', requestOptions)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(function(response){
                if (response===201){
                    cleanInputs();
                    alert("El contacto fue dado de alta exitosamente")
                };
            });
    };

    
    return (        
                <div 
            className="contactos-registration"
                >
                    <div className="contactos-registration-form">
                        <h4>Nuevo Contacto</h4>
                        <form>
                            <div>
                                <Autocomplete
                                    options={clientes}
                                    getOptionLabel={option => option.cli_razsoc}                                   
                                    onChange={handleInputCliente}                                
                                    renderInput={(params) => <TextField {...params} size="small" className="contactos-registration-form-field-input" label="Empresa"/>}
                                />                     
                            </div>
                            
                            <div className="contactos-registration-form-field">
                                <TextField
                                    autoComplete="off"
                                    className="contactos-registration-form-field-input"
                                    label="Nombre"
                                    name="cot_nombre"
                                    value={contacto.cot_nombre}                                    
                                    onChange={handleInputs}                                                                   
                                />
                            </div>
                            <div className="contactos-registration-form-field">
                                <TextField
                                    autoComplete="off"
                                    className="contactos-registration-form-field-input"
                                    label="Email"
                                    name="cot_email"
                                    value={contacto.cot_email}
                                    onChange={handleInputs}
                                />
                            </div>                            
                            <div className="contactos-registration-form-field">
                                <TextField
                                    autoComplete="off"
                                    className="contactos-registration-form-field-input"
                                    label="Telefono"
                                    name="cot_telefono"
                                    value={contacto.cot_telefono}
                                    onChange={handleInputs}
                                />
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{float: "right", margin: "1em auto"}}
                                startIcon={<SaveIcon />}
                                onClick={handleSubmit}
                                
                            >
                                {"Guardar"}
                            </Button>
                        </form>
                    </div>                   
                </div>
    );
}
const mapStateToProps = (state) => {
    return {
        sdBarState: state
    }
}

export default connect(mapStateToProps)(AddContact);