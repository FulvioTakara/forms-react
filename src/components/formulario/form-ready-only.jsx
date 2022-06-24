import React from "react";

class FileInput extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event){
        event.preventDefault();
        alert(
            `Arquivo selecionado - ${this.fileInput.current.files[0].name
            }`
        );
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:"column", maxWidth: "20%", margin: "20%"}}>
                <label>
                    Upload de arquivo:
                    <input type="file" ref={this.fileInput} /> 
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default FileInput;