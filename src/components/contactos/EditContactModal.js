import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { conexApi } from '../../assets/conexConfig.js';

const EditContactModal = (props) => {

    const server = conexApi + 'contactos'

    const { editableContact, openModal, setOpenModal, hadleFetchResponse}=props

    const [contact, setContact] = useState({
        cli_razsoc: '',
        cot_codigo: '',
        cot_nombre: '',
        cot_email: '',
        cotcli_codigo: '',
        cot_telefono: ''
    })

    //Actualiza el contacto con los datos de las props
    useEffect(()=>{
        setContact(editableContact)       
    }, [editableContact])



    //Manejador de modificacion de valores en la edicion de contacto
    const handleInputs = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    //Guardar contacto
    const saveContact = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        }

        fetch(server + '/modiContacto', requestOptions)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(function (response) {
                hadleFetchResponse(response)
            })
        setOpenModal(false)
    }

    return(

        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
        >

            <div
                className="contactos-registration"
            >
                <div className="contactos-registration-form">
                    <h4>Editar Contacto</h4>
                    <form>

                        <div className="contactos-registration-form-field">
                            <TextField
                                disabled
                                className="contactos-registration-form-field-input"
                                id="standar-basic"
                                variant="filled"
                                label="Empresa"
                                value={contact.cli_razsoc}
                            />
                        </div>
                        <div className="contactos-registration-form-field">
                            <TextField
                                autoComplete="off"
                                className="contactos-registration-form-field-input"
                                id="standar-basic"
                                label="Nombre"
                                name="cot_nombre"
                                value={contact.cot_nombre}
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
                                value={contact.cot_email}
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
                                value={contact.cot_telefono}
                                onChange={handleInputs}
                            />
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ float: "right", margin: "1em auto" }}
                            startIcon={<SaveIcon />}
                            onClick={saveContact}

                        >
                            {"Guardar"}
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default EditContactModal;





