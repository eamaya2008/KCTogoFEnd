import React, { useState, useRef, useEffect } from 'react';
import './contact.css';
import { Pagination } from '@material-ui/lab';
import AddIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import EditContactModal from './EditContactModal.js'
import NewContactModal from './NewContactModal.js'
import { conexApi } from '../config.js';

const Contacto = () => {

    //Variables de conexion
    const server = conexApi + 'contactos'
    const defaultUrl = server + '/list?page='

    //Variables de parametro
    const [contact, setContact] = useState([])
    const [contactData, setContactData] = useState([])
    const [editableContact, setEditableContact] = useState({});

    //Variables auxiliares
    const [url, setUrl] = useState(defaultUrl)
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openNewModal, setOpenNewModal] = useState(false)

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

    //Manejador de cambio de pagina
    const handleChangePage = (e, value) => {
        setPageNumber(value)
    }
    const handleNewContact = () =>{
        setOpenNewModal(true)
    }

    //Manejador de edicion de contacto(pasa los datos al modal y lo abre)
    const handleEditContact = (contactToEdit) => {
        setEditableContact(contactToEdit)
        setOpenEditModal(true)
    }

    const hadleFetchResponseEditContact = (response) => {
        if (response === 201) {
            alert("El contacto fue modificado")
            setPageNumber(0)
        }
    }

    return (
        <div className="contactos-data">
            <div className="contactos_header_search">

                {/* BUSCADOR CONTACTO */}
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

                {/* BUSCADOR EMPRESA */}
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

            {/* PAGINACION */}
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

                {/* TICKETS */}
                <table>
                    <thead>
                        <tr className="contactos-data-header">
                            <th id="nombreHeader">Nombre</th>
                            <th id="emailHeader">Email</th>
                            <th id="telefonoHeader">Telefono</th>
                            <th id="clienteHeader">Empresa</th>
                            <th id="modificarHeader">
                                <AddIcon 
                                color="primary" 
                                id="contactos-add-button" 
                                    onClick={handleNewContact}
                                />
                                </th>
                        </tr>
                    </thead>
                    {/*Render del listado de contactos */}

                    <tbody>
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
                                        onClick={() => handleEditContact(contacto)}
                                    >
                                        <EditIcon id="contactos-edit-button" />
                                    </td>
                                </tr>
                            )
                        }, this)}
                    </tbody>
                </table>
            </div>

            {loading && (
                <h4 id="load-msg">Cargando...</h4>
            )}

            {/* Modal editar contacto */}

            <EditContactModal
                editableContact={editableContact}
                openModal={openEditModal}
                setOpenModal={setOpenEditModal}
                hadleFetchResponse={hadleFetchResponseEditContact}
            />

            {/* Modal nuevo contacto */}

            <NewContactModal
                openModal={openNewModal}
                setOpenModal={setOpenNewModal}
            />


        </div>
    );
}

export default Contacto;
