import React, { useState, useRef, useEffect } from 'react';
import './contact.css';
import { Pagination } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const Contacto = () => {

    const server = 'http://localhost:8000/api/contactos'
    const defaultUrl = server + '/list?page='

    //Variables de parametro
    const [contact, setContact] = useState([])
    const [contactData, setContactData] = useState([])
    const [cliRazSoc, setCliRazSoc] = useState("")
    const [editableContact, setEditableContact] = useState({
        cot_codigo: '',
        cot_nombre: '',
        cot_email: '',
        cot_telefono: ''
    });

    //Variables auxiliares
    const [url, setUrl] = useState(defaultUrl)
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [openModal, setOpenModal] = useState(false)

    const icliente = useRef()
    const icontacto = useRef()

    // Fetch de las busquedas
    useEffect(() => {
        fetch(url + pageNumber)
            .then(res => res.json())
            .then(function (data) {
                setContact(data)
                setContactData(data.data)
            })
    }, [url, pageNumber])

    // Mensaje de cargando
    useEffect(() => {
        if (contactData.length > 0) {
            setLoading(false)
        }
    }, [contactData])


    // Buscador por nombre de contacto
    const handleSearchContacto = (e) => {
        e.preventDefault()
        let cotNombre = icontacto.current.value
        if (cotNombre.length !== 0) {
            setUrl(server + '/nombre/' + cotNombre + '?page=')
            setPageNumber(1)
        } else {
            setUrl(defaultUrl)
            setPageNumber(1)
        }
    }
    // Buscador de empresas por razon social
    const handleSearchEmpresa = (e) => {
        e.preventDefault()
        let cliRazSoc = icliente.current.value
        if (cliRazSoc.length !== 0) {
            setUrl(server + '/empresa/' + cliRazSoc + '?page=')
            setPageNumber(1)
        } else {
            setUrl(defaultUrl)
            setPageNumber(1)
        }
    }

    //Maneja el cambio de pagina
    const handleChangePage = (e, value) => {
        setPageNumber(value)
    }

    const editContact = (cotCli) => {
        fetch(server + '/codigo/' + cotCli)
            .then(res => res.json())
            .then(function (data) {
                setEditableContact({
                    cot_codigo: data[0].cot_codigo,
                    cot_nombre: data[0].cot_nombre,
                    cot_email: data[0].cot_email,
                    cot_telefono: data[0].cot_telefono
                })
                setCliRazSoc(data[0].cli_razsoc)
                setOpenModal(true)
            })
    }

    const handleInputs = (e) => {
        setEditableContact({
            ...editableContact,
            [e.target.name]: e.target.value
        })
    }

    const saveContact = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editableContact)
        }

        fetch(server + '/modiContacto', requestOptions)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(function (response) {
                if (response === 201) {
                    alert("El contacto fue modificado")
                    setPageNumber(0)
                }
            })
        setOpenModal(false)
        setPageNumber(1)
    }


    return (
        <div className="contactos-data">
            <div className="contactos_header_search">
                <div className="search-input-contacto">
                    <form
                        onSubmit={handleSearchContacto}
                    >
                        <input
                            type="text"
                            placeholder="Contacto"
                            ref={icontacto}
                        />
                        <button className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
                <div className="search-input-empresa">
                    <form
                        onSubmit={handleSearchEmpresa}
                    >
                        <input
                            type="text"
                            placeholder="Empresa"
                            ref={icliente}
                        />
                        <button className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
            <div className="contactos-data-bg">
                <Pagination
                    count={contact.last_page}
                    id="contactos-pagination"
                    variant="outlined"
                    color="primary"
                    shape="rounded"
                    page={pageNumber}
                    onChange={handleChangePage}
                />
                <table>
                    <tr className="contactos-data-header">
                        <th id="nombreHeader">Nombre</th>
                        <th id="emailHeader">Email</th>
                        <th id="telefonoHeader">Telefono</th>
                        <th id="clienteHeader">Empresa</th>
                        <th id="modificarHeader"><AddIcon color="primary" id="contactos-add-button" /></th>
                    </tr>

                    {/*Render del listado de contactos */}

                    {contactData.map((contacto, index) => {
                        return (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? "contactos-data-list bgLine" : "contactos-data-list"}
                            >

                                <td id="nombre">{contacto.cot_nombre}</td>
                                <td id="email">{contacto.cot_email}</td>
                                <td id="telefono">{contacto.cot_telefono}</td>
                                <td id="cliente">{contacto.cli_razsoc}</td>
                                <td id="modificar"
                                    onClick={() => editContact(contacto.cot_codigo)}
                                >
                                    <EditIcon id="contactos-edit-button" />
                                </td>
                            </tr>
                        )
                    }, this)}
                </table>
            </div>

            {loading && (
                <h4 id="load-msg">Cargando...</h4>
            )}

            {/* Modal editar contacto */}

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
                                    value={cliRazSoc}
                                />
                            </div>
                            <div className="contactos-registration-form-field">
                                <TextField
                                    autoComplete="off"
                                    className="contactos-registration-form-field-input"
                                    id="standar-basic"
                                    label="Nombre"
                                    name="cot_nombre"
                                    value={editableContact.cot_nombre}
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
                                    value={editableContact.cot_email}
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
                                    value={editableContact.cot_telefono}
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
        </div>
    );
}

export default Contacto;
