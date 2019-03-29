import React from "react"
import { Typography, Button } from "@material-ui/core";

import MenuAppBar from "../../components/header/MenuAppBar"

const titleStyle = {
    marginLeft: "350px",
    marginRight: "350px"
}

class Launch extends React.Component{
    render() {
        return(
            <div className="launch-container">
                <MenuAppBar/>
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    color="textPrimary"
                    style={titleStyle}>
                    Is this property a good investment?
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    color="textSecondary">
                    Analyze a property. Quickly.
                </Typography>
                <Button
                    variant="contained"
                    align="center" 
                    color="primary">
                    Get Started
                </Button>
            </div>
        )
    }
}

export default Launch