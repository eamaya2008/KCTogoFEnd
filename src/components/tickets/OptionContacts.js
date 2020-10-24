import React, { useEffect, useState } from 'react';

const OptionMenuContact = (props) => {

    const [optionSelect, setOptionSelect] = useState(false);
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const { options, contactName, contactPhone, contactEmail } = props;

    useEffect(() => {
        setTitle(contactName)
        setPhone(contactPhone)
        setEmail(contactEmail)
    }, [contactName, contactPhone, contactEmail])

    const handleSelect = (opt) => {
        setOptionSelect(false);
        setTitle(opt.cot_nombre)
        setPhone(opt.cot_telefono)
        setEmail(opt.cot_email)
    }


    return (
        <div className="tickets-modi-contacto">
            <div onClick={() => setOptionSelect(!optionSelect)}>
                <input contentEditable="false" value={title} disabled />
                {optionSelect &&
                    <div className="options-menu" >
                        {options.map((opt, index) => (
                            <option key={index} value={opt} onClick={() => handleSelect(opt)}>{opt.cot_nombre}</option>
                        ))}
                        <option id="tickets-modi-add-contact">{"Agregar contacto"}</option>
                    </div>
                }
            </div>
            <input contentEditable="false" value={phone || "Telefono"} disabled></input>
            <input contentEditable="false" value={email || "Email"} disabled></input>
        </div>
    )
}

export default OptionMenuContact;