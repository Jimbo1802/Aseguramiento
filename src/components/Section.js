import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'


import PersonForm from './section/PersoForm'
import VendedoForm from './section/VendedorForm'
import LocalForm from './section/LocalForm'
import ProductForm from './section/ProductoForm'
import ProveForm from './section/ProvedorForm'
export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/regAPerson" component={PersonForm} exact  />
                    <Route path="/regAVendedor" component={VendedoForm} exact  />
                    <Route path="/regALocal" component={LocalForm} exact  />
                    <Route path="/regAProduct" component={ProductForm} exact  />
                    <Route path="/regAProvedor" component={ProveForm} exact  />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default Section
