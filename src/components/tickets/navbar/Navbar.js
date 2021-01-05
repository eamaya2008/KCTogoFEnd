import React from 'react'
import { Button } from '@material-ui/core';

function Navbar() {
    

    const hadleFilterClick = () => {
    }


    return (
        <div className="tickets-navbar" >
        <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ margin: "0.5rem" }}
            onClick={hadleFilterClick}
        >
            {"Filtros"}
        </Button>
        <div className="tickets-navbar-division">
            <hr></hr>
        </div>
    </div>
    )
}

export default Navbar
