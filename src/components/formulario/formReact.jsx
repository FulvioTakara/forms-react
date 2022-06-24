import React from "react";

class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('O nome enviado foi:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} style={{display: "flex", flexDirection: "column", maxWidth: "30%", margin: "20%", justifyContent: "space-between"}}>
                <label>
                    Nome:
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;