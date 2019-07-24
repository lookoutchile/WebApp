import React from 'react'
import {ListGroup, ListGroupItem } from 'react-bootstrap'
import formatText from '../functions/formatText'


const ConfirmUser = ({data}) => { 
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>Nombre:{" "+formatText(data.name)}</ListGroupItem>
                    <ListGroupItem>Apellido: {" " + formatText(data.lastName)}</ListGroupItem>
                    <ListGroupItem>Contraseña: {" "+formatText((data.password || "********"))}</ListGroupItem>
                    <ListGroupItem>Nombre Empresa: {" " + formatText(data.company)}</ListGroupItem>
                    <ListGroupItem>Correo Empresa: {" " + formatText(data.mail)}</ListGroupItem>
                    <ListGroupItem>Rut Empresa: {" " + formatText(data.rut)}</ListGroupItem>
                    <ListGroupItem>Rubro: {" "+formatText(data.typeIndustryName)}</ListGroupItem>
                    <ListGroupItem>Tipo de Usuario: {" "+formatText(data.typeUser)}</ListGroupItem>
                </ListGroup>          
                
            </div>
        )
    }

export default ConfirmUser