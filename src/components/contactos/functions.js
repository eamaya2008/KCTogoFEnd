export const handleInputsContactos = (e) => {
    setContacto({
        ...contacto,
        [e.target.name]: e.target.value
    });
}; 