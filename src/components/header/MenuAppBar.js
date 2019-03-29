import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"

import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import "./MenuAppBar.css"

import lowPoly from "../../images/lowPoly.png"
import reindeerTextGrey from "../../images/reindeerTextGrey.png"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: pink,
        error: red,
    },
  });

class MenuAppBar extends React.Component {

    constructor() {
        super()
        this.state= {
            onLaunchPage: true
        }
    }
    
    render() {
        const {classes} = this.props
        return (
            <MuiThemeProvider theme={theme}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    {this.state.onLaunchPage ? 
                    <div
                        style={{width: 200,}}>
                        <img
                            src={lowPoly}
                            alt="REINDEER"
                            style={{
                                height: 75,
                                width: 75
                            }}
                    />
                    <img
                        src={reindeerTextGrey}
                        alt="REINDEER"
                        style={{
                            float: "right",
                            height: 50,
                            width: 120,
                            paddingTop: 15
                        }}
                    />
                    </div>
                    : 
                    <div>FALSE</div>}
                </Toolbar>
            </AppBar>
            </MuiThemeProvider>
        )
    }
}

export default MenuAppBar