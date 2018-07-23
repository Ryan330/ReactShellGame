import React from "react"
import ShellImage from "./imgNutShell.png"


//Shell Class
class Shell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correctShell: props.correctShell
        }
    }


    choose = (event) => {
        this.props.shellClick(this.props.id);
    };


    render() {
        return (
            <div>

                <img src={ShellImage} className="shell" onClick={() => {this.props.shellClick(this.props.id)}} alt="Nutshell"/>
                {this.props.id}
                {this.props.correctShell}
            
            </div>
        )
    }
}


export default Shell;