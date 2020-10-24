import React, { useEffect, useState } from 'react';
import { conexApi } from '../config.js'

const OptionMenuVendedor = (props) => {

    const [vendedores, setVendedores] = useState([]);
    const [optionSelect, setOptionSelect] = useState(false);
    const [title, setTitle] = useState('');
    const { inheritedTitle, handleVendedorInput } = props;

    useEffect(() => {
        fetch(conexApi + "vendedores/activos")
            .then(res => res.json())
            .then(function (data) {
                setVendedores(data)
            })
    }, [])


    useEffect(() => {
        setTitle(inheritedTitle)
    }, [inheritedTitle])

    const handleSelect = (vendedor) => {
        setOptionSelect(false);
        setTitle(vendedor.ven_desc)
        handleVendedorInput(vendedor.ven_cod)
    }

    return (
        <div onClick={() => setOptionSelect(!optionSelect)}>
            <input contentEditable="false" value={title} disabled />
            {optionSelect &&
                <div className="options-menu" >
                    {vendedores.map((vendedor, index) => (
                        <option key={index} value={vendedor.ven_cod} onClick={() => handleSelect(vendedor)}>{vendedor.ven_desc}</option>
                    ))}
                </div>
            }

        </div>
    )
}

export default OptionMenuVendedor;