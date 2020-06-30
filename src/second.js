import React from 'react';

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isLoggedIn: false};
    }

    handleLoginClick = () => {
        this.setState((state)=>({
            isLoggedIn: true
        }));
    };
    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick = {this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick = {this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    };
}


function Second() {    
    return <div><LoginControl /></div>
  }
  export default Second;