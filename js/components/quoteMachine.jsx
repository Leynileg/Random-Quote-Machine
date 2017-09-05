import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMachine extends React.Component {
    constructor(props){
        super(props);
        this.state={
            container: [],
            quote: '',
            author: ''
        }
    }
    
    getData() {
        fetch('https://random-quote-generator.herokuapp.com/api/quotes/')
        .then( response => {
            if (response.ok) {
                return response.json();
            } else {throw new Error('Błąd sieci!')};
        })
        .then( obj => {            
            this.setState({container: obj})
        });
    }
    
    handleClick=()=>{
        let num = Math.floor(Math.random() * this.state.container.length-1);
        this.setState({quote: this.state.container[num].quote})
        this.setState({author: this.state.container[num].author})
    }

    componentDidMount(){
        this.getData();
    }
    
    render(){
        return (
            <div className="row">
                <div className="col-12-12">
                    <div className="quoteMachine">
                        <h1>Random Quote Machine</h1>
                        <button onClick={this.handleClick}>New Quote</button>
                        <div className="quote">
                            <p className="quoteText">{this.state.quote}</p>
                            <h2 className="quoteAuthor">{this.state.author}</h2>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}
export {QuoteMachine};