import React from 'react';

class App extends React.Component {
    constructor(){
        super()
        this.state = {astros: ""}
    }
  
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => this.setState({astros: data.number}) )
    }

    render() { 
        return ( 
            this.state.astros
         );
    }
}
 
export default App;