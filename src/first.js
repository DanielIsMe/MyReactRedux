import React from 'react';

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {count: 0};
    }
    increment = (e,v) => {        
        e.preventDefault();    
        var n = parseInt(v);
        this.setState((state)=>({
            count: state.count + n
        }));
        
        console.log(this.state.count)
    }
    render(){
        return (
            <div>
                <input type="button" onClick={(e) => this.increment(e,2)} value="hit me" />
                <label>{this.state.count}</label>
            </div>
        );
    }

}

class Clock extends React.Component{
    constructor(){
        super();
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
    componentWillUnmount() {clearInterval(this.timerID);}
    tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        );
    }
}

function Frist() {    
  return <div>{element}<Clock /><Counter /></div>
}
export default Frist;
