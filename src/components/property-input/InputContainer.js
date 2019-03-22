import React from "react"
import { Route, BrowserRouter, Redirect } from "react-router-dom"

import "./PropertyInput.css"

import InputName from "./InputName"
import InputType from "./InputType"
import Submit from "./Submit"
import { Typography, TextField, Button } from "@material-ui/core"

import { 
        WHATS_THE_NAME_OF_THE_PROPERTY, 
        WHAT_TYPE_OF_PROPERTY,
        WHATS_THE_ADDRESS_OF_THE_PROPERTY,
        WHATS_THE_PURCHASE_PRICE, 
        ERROR 
        } from "../../common/Constants"

import ContinueButton from "./ContinueButton"

const pages = {
    a: "propertyType",
    b: "propertyName",
    c: "propertyAddress",
    d: "purchasePrice"
}

class InputContainer extends React.Component {
    constructor() {
        super()
        this.state={
            page: pages.a
        }
        this.updatePage = this.updatePage.bind(this)
    }

    questionText(page){
        switch(page) {
            case 'propertyType':
                return WHAT_TYPE_OF_PROPERTY
            case 'propertyName':
                return WHATS_THE_NAME_OF_THE_PROPERTY
            case 'propertyAddress':
                return WHATS_THE_ADDRESS_OF_THE_PROPERTY
            case 'purchasePrice':
                return WHATS_THE_PURCHASE_PRICE
            default:
                return ERROR
        }
    }

    updatePage(){
        const arrayOfPages = Object.keys(pages).map(function(i) {
            return pages[i]
        })
        this.setState({
            page: arrayOfPages
        })
    }

    render() {
        return (
            <section className="property-description-container">
                <span>
                    <div className="input-container">
                        <Typography 
                            variant="h4"
                            onClick={this.updatePage}
                            style={{
                                paddingBottom: '60px'
                            }}
                            color="textPrimary">

                            {this.questionText(this.state.page)}
                            
                            <h1>{this.state.page}</h1>
                        </Typography>
                        {/* <BrowserRouter>
                            <Route path="/start/0" component={InputType}/>    
                            <Route path="/start/1" component={InputName} />
                            <Route path="/start/2"  />       
                        </BrowserRouter> */}
                    <ContinueButton/>
                    </div>
                </span>
            </section>
        )
    }
}

export default InputContainer