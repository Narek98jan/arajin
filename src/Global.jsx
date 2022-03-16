import React,{Component} from "react"

class Global extends Component {
    constructor(props) {
        super();
        this.state = {
            caunt: 0,
        }
        this.increment = this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.riset=this.riset.bind(this)
    }

    increment() {
        this.setState({caunt:this.state.caunt + 5})
    }
    decrement(){
        this.setState({caunt:this.state.caunt - 5})
    }
    riset(){
        this.setState({caunt:this.state.caunt * 5})
    }

        render(){
            return (
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.riset}>*</button>
                    {this.state.caunt}
                </div>
            )

        }

    }

export default Global;