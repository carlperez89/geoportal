import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="header">

                <div className="logo-udec">
                    <img src="/assets/udec.png" alt=""/>
                </div>
                <div className="titulo">
                    <h1>Plataforma de Información Glaciológica de Chile Central</h1>
                    <p>Universidad de Concepción - Mountain GeoScience Group</p>
                </div>

                <div className="logo-udec">
                    <img src="/assets/mgsg.png" alt=""/>
                </div>
                
            </header>



        )
    }
}
