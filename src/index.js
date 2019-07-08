import React from 'react';
import ReactDOM from'react-dom';



class App extends React.Component {
    constructor(props){
         super(props); //super props will call the parent constr witch is super from react components
        
     //this is the only time we do dirrect assigmernt to this state
        this.state = { name: 'Marinella', lat: null, errorMessage:''};
        // console.log(this.state);
        // window.navigator.geolocation.getCurrentPosition(
        //     pos => {
        //         //we call setstate for updating my state
        //         console.log(pos);
        //         this.setState({ lat: pos.coords.latitude});
                
        //     },
        //     err => {
        //         console.log(err);
        //         this.setState({errorMessage:err.message});
        //     }
            
        // ); the same as in the DidMount
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        pos => this.setState({ lat: pos.coords.latitude}),
        err => {
            this.setState({errorMessage:err.message});
        }
     );

    }
    
    //react says we have to define render
    render() {

           if(this.state.lat && !this.state.errorMessage){
                return <div>latitude: {this.state.lat}</div>
            }
            if(!this.state.lat && this.state.errorMessage){
                return <div>Error: {this.state.errorMessage}</div>
            }
            else if(!this.state.lat && !this.state.errorMessage){
                return<div>Loading:</div>
            }
    };
}
ReactDOM.render(<App />,document.querySelector("#root"));