import React from "react"
import Button from "@material-ui/core/Button"

class Submit extends React.Component {
    render() {
        return(
            <div className="submit-wrap">
                <div className="submit-button">
                    <form>
                        <Button variant="contained" color="secondary">Let's go</Button>
                        {/* <input 
                            type="text"
                            name="propertyName"
                            value={this.state.propertyName}
                            onChange={this.handleChange}
                            autoCorrect="off"
                            autoComplete="off"
                            spellCheck="off"
                            placeholder="PROPERTY NAME">
                        </input> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default Submit