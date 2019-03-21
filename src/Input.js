import React from "react"

class Input extends React.Component {

    constructor() {
        super()
        this.state={
            propertyName:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <div className="input-container">
                <h3>What's the name of this property?</h3>
                <div className="property-name-form">
                    <form autoComplete="off">
                        <input 
                            type="text"
                            name="propertyName"
                            value={this.state.propertyName}
                            onChange={this.handleChange}
                            autoCorrect="off"
                            autoComplete="off"
                            spellCheck="off"
                            placeholder="PROPERTY NAME">
                        </input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Input