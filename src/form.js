import React from 'react';
import ReactDOM from 'react-dom';



class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={inputValue: '',selectValue:'coconut'};
    }

    handleChange = (e) => {
        const currentInput = this.state.inputValue
        const currentSelect = this.state.selectValue
        const target = e.target;
        
        if(target.name === 'a'){            
            this.setState({inputValue: target.value,selectValue: currentSelect});
        }else{            
            this.setState({inputValue: currentInput,selectValue: target.value});
        }
        

        e.preventDefault();
    }   
    handleSubmit = (e) =>{
        const currentInput = this.state.inputValue
        const currentSelect = this.state.selectValue
        this.setState({inputValue: currentInput,selectValue: currentSelect});
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label>
                    name
                    <input name="a" type="text" value={this.state.inputValue} onChange={(e)=>this.handleChange(e)} />
                </label>
                <label>
                    <FlavorForm name='b' value ={this.state.selectValue} onChange={(e) => this.handleChange(e)} />
                </label>
                <div>
                    {this.state.inputValue}
                </div>                     
                <div>
                    {this.state.selectValue}    
                </div>          
                <input type="submit" value="submit" />
            </form>
        );
    }
}

class FlavorForm extends React.Component{
    constructor(props){
        super(props)
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    render(){
        return (
            <select value={this.props.value} onChange={(e) => this.props.onChange(e)}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        );
    }

}

function FormCon() {    
    return (<div><NameForm /></div>);
  }
  export default FormCon;