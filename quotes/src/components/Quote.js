import React, { Component } from 'react';
import quotations from "./quotations";
import 'tachyons'

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote:[quotations[this.number].quote],
            author:[quotations[this.number].author],
            color:[345]
        }
    }

    number = Math.floor(Math.random() * 93)
    handleQuote (num) {
        const number = Math.floor(Math.random() * num)
        this.setState({quote:[quotations[number].quote]})
        this.setState({author:[quotations[number].author]})

        const colorNum = Math.floor(Math.random() * 999)
        this.setState({color:colorNum})
        console.log(this.state.color);
        
    }
    
    render() {
        document.body.style.backgroundColor = `#${this.state.color}`
        return (
            <div className='quoteDiv'>
                <h1 style={{color:`#${this.state.color}`}} className='tl pa2'>{this.state.quote}</h1>
                <p style={{color:`#${this.state.color}`}} className='tr pa3'>{this.state.author}</p>
                <button style={{backgroundColor:`#${this.state.color}`}} onClick={() => this.handleQuote(93)}>New Quote</button>
            </div>
        );
    }
}
export default Quote;