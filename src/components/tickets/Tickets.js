import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import './tickets.css';
import EditArea from './editarea';
import Card from './Card.js';
import Navbar from './navbar/Navbar.js';
import Footer from './footer/Footer.js'
import { Button } from '@material-ui/core';

const Tickets = (props) => {

    const {ownTickets, otherUserTickets, getOtherUserTickets, getOwnTickets, updateTicketUserById} =  props

    const [myUser, setMyUser] = useState('Esteban')
    const [otherUser, setOtherUser] = useState('Soporte')
    const [dragOut, setDragOut] = useState(false)
    

    useEffect(() => {
        getOtherUserTickets(otherUser)   
    }, [otherUser, dragOut, getOtherUserTickets])

    useEffect(() => {
        getOwnTickets(myUser)     
    }, [myUser, dragOut, getOwnTickets])


    const handleOnDragEnd = (e) => {
        if (e.destination && e.destination !== null) {

            let destinationZone = e.destination.droppableId;
            let id = e.draggableId;
            let sourceZone = e.source.droppableId;
            if (sourceZone === 'zone1' && destinationZone === 'zone2') {
                updateTicketUserById(id, myUser)
                setDragOut((dragOut) => !dragOut)
            }
            if (sourceZone === 'zone2' && destinationZone === 'zone1') {
                updateTicketUserById(id, otherUser)
                setDragOut((dragOut) => !dragOut)
            }
        }
    }
    


    return (

        <div className="tickets-conteiner">

            <Navbar />

            <div className="tickets-content" >

                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Card tickets={otherUserTickets} droppableId={"zone1"} />
                    <Card tickets={ownTickets} droppableId={"zone2"} />
                </DragDropContext>

                <EditArea />

            </div>

            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ margin: "0.5rem" }}
                >
                    {"Soporte"}
                </Button>
            </div>

            <Footer />

        </div >
    )
}

export default Tickets;