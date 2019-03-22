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
    0: "propertyType",
    1: "propertyName",
    2: "propertyAddress",
    3: "purchasePrice"
}

class InputContainer extends React.Component {
    constructor() {
        super()
        this.state={
            click:0,
            pageNumber: 1,
            page: ["propertyType"]
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
        this.setState(prevState => {
            return {
                click: prevState.click + 1
            }
        })
        this.setState(prevState => {
            const updatePageList = prevState.page.slice()
            for(let i=this.state.click; i<prevState.page.length; i++) {
                updatePageList.push(pages[prevState.page.length])
            }

            return ({
                pageNumber: prevState.pageNumber + 1,
                page: updatePageList
            })
        })
    }

    render() {
        return (
            <section className="property-description-container">
                <span>
                    <div className="input-container">
                        <Typography 
                            variant="h4"
                            style={{
                                paddingBottom: '60px'
                            }}
                            color="textPrimary">

                            {this.questionText(this.state.page[this.state.pageNumber - 1])}
                            
                        </Typography>
                    <ContinueButton func={this.updatePage} props={this.state}/>
                    </div>
                </span>
            </section>
        )
    }
}

export default InputContainer