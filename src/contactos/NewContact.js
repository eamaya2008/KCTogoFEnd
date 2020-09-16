import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './contact.css';
import {TextField, Button} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import SaveIcon from '@material-ui/icons/Save';

const AddContact = (props) => {
    
    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({
        cotcli_codigo: '',
        cot_nombre: '',
        cot_email: '',
        cot_telefono: ''
    });    
    
    const server = 'http://localhost:8000/api/'; 

//Carga los cliente a mostrar en el componente Autocomplete
    useEffect(() => {
        setTimeout(() => {            
                fetch(server + 'clientes')
                    .then(res => res.json())
                    .then(data => setClientes(data))            
        }, 1000);     
    }, []);
    
// Captura el codigo de cliente del componente Autocomplete
    const handleInputCliente = (e, value) =>{        
        if (value !== null){
            setCliente({
                ...cliente,
                cotcli_codigo: value.cli_cod                
            });            
        };   
    };
// Captura los datos de los input
    const handleInputs = (e) =>{  
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    }; 

// Reglas inputs


// Blanquea los campos
const cleanInputs = () =>{
    setCliente({
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
            body: JSON.stringify(cliente)
        };
        fetch(server + 'contactos/altaContacto', requestOptions)
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
            className={props.sdBarState ? "contactos-registration ctr-large" : "contactos-registration ctr-shrink"}                
                >
                    <div className="contactos-registration-form">
                        <h4>Nuevo Contacto</h4>
                        <form>
                            <div>
                                <Autocomplete
                                    id="combo-box-demo"
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
                                    id="standar-basic"
                                    label="Nombre"
                                    name="cot_nombre"
                                    value={cliente.cot_nombre}                                    
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
                                    value={cliente.cot_email}
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
                                    value={cliente.cot_telefono}
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