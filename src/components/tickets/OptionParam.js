import React, { useEffect, useState } from 'react';

const OptionMenuParam = (props) => {

    const [optionSelect, setOptionSelect] = useState(false);
    const [title, setTitle] = useState('');
    const { options, inheritedTitle  } = props;

    useEffect(()=>{
        setTitle(inheritedTitle)
    }, [inheritedTitle])

    const handleSelect = (e) => {
        setOptionSelect(false);
        setTitle(e.target.value)
    }    

    return (
        <div onClick={() => setOptionSelect(!optionSelect)}>
            <input contentEditable="false" value={title} disabled />
            {optionSelect &&
                <div className="options-menu" >
                    {options.map((opt, index) => (
                        <option key={index} value={opt} onClick={handleSelect}>{opt}</option>
                    ))}
                </div>
            }

        </div>
    )
}

export default OptionMenuParam;

