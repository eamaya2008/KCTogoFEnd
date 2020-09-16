import React, { useState, useRef, useEffect } from 'react';
import './tickets.css'
import { Pagination } from '@material-ui/lab'

const Tickets = () => {

    const server = 'http://localhost:8000/api/contactos'
    const defaultUrl = server + '/list?page='

    const [contact, setContact] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [contactData, setContactData] = useState([])
    const [url, setUrl] = useState(defaultUrl)
    const [loading, setLoading] = useState(true)

    const icliente = useRef()
    const icontacto = useRef()

    useEffect(() => {
        fetch(url + pageNumber)
            .then(res => res.json())
            .then(function (data) {
                setContact(data)
                setContactData(data.data)
            })
    }, [url, pageNumber])

    useEffect(() => {
        if (contactData.length > 0) {
            setLoading(false)
        }
    }, [contactData])

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

    const handleChangePage = (e, value) => {
        setPageNumber(value)
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
                    <div className="contactos-data-header">
                        <div id="nombreHeader">Fecha Creacion</div>
                        <div id="emailHeader">Cliente</div>
                        <div id="telefonoHeader">Tema</div>
                        <div id="clienteHeader">Usuario</div>
                        {/* <div id="clienteHeader">Estado</div> */}
                    </div>
                    {contactData.map((contacto, index) => {
                        return (
                            <div
                                key={index}
                                className={index % 2 === 0 ? "contactos-data-list bgLine" : "contactos-data-list"}
                            >
                                <div id="nombre">{contacto.cot_Nombre}</div>
                                <div id="email">{contacto.cot_Email}</div>
                                <div id="telefono">{contacto.cot_telefono}</div>
                                <div id="cliente">{contacto.cli_razsoc}</div>
                            </div>

                        )
                    })}
                </div>
                {loading && (
                    <h4 id="load-msg">Cargando...</h4>
                )}
            </div>
    );
}

export default Tickets;
