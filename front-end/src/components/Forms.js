import React, { Component } from 'react'
// const axios = require('axios').default;

export default class Forms extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        email:
                        <input type="email" name="email"/>
                    </label><br />
                    <label>
                        Telefone:
                        <input type="number" name="telefone"/>
                    </label><br />
                    <label>
                        Data de Nascimento:
                        <input type="date" name="dataDeNascimento"/>
                    </label><br />
                    <label>
                        Peso:
                        <input type="number" name="peso"/>
                    </label><br />
                    <button type="submit">
                        Enviar
                    </button><br /><br />
                </form>
            </div>
        )
    }
}
