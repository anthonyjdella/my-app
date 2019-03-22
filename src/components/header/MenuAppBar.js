import React from "react"
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { withStyles } from '@material-ui/core/styles'
import "./MenuAppBar.css"

const styles = {
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
  }

class MenuAppBar extends React.Component {
    
    render() {
        const {classes} = this.props
        return (
            <header className="header-wrap" >
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" color="inherit">
                        REINDEER
                    </Typography>
                </Toolbar>
            </AppBar>
            </header>
        )
    }
}

export default withStyles(styles)(MenuAppBar)