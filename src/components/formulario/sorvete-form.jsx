import React from "react";

class SorveteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sabor: 'Uva',
            casquinha: true,
            guardanapos: 'sim'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        const{sabor, casquinha, guardanapos} = this.state;
        alert('Seu sabor escolhido foi' + sabor + ', guardanamos' + guardanapos + ', casquinha' + casquinha)
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection: "column", maxWidth: '30%', margin: "20%"}}>
                <label>
                    Escolha o sabor:
                    <select name="sabor" value={this.state.sabor} onChange={this.handleInputChange}>
                        <option value="uva">Uva</option>
                        <option value="limao">Limão</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="morango">Morango</option>
                        <option value="flocos">Flocos</option>
                        <option value="baunilha">Baunilha</option>
                        <option value="coco">Coco</option>
                        <option value="milho">Milho</option>
                    </select>
                </label>
                <label>
                    <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleInputChange} />
                        Colocar casquinha?
                </label>
                <label>
                    Guardanapos?
                    <div className="radio">
                        <label>
                            <input type="radio" id="guardanapos" name="guardanapos" value="sim" checked={this.state.guardanapos === "sim"} onChange={this.handleInputChange}/>
                                sim
                        </label>
                        <label>
                            <input type="radio" id="guardanapos" name="guardanapos" value="nao" checked={this.state.guardanapos === "nao"} onChange={this.handleInputChange}/>
                                não
                        </label>
                    </div>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default SorveteForm;