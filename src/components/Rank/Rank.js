import React from 'react';
import 'tachyons'

class Rank extends React.Component {
    constructor() {
        super();
        this.state = {
            emoji: ''
        }
    }

    componentDidMount() {
        this.generateEmoji(this.props.entries)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.entries === this.props.entries && prevProps.name === this.props.name){
            return null
        }
        this.generateEmoji(this.props.entries)
    }

    generateEmoji = (entries) => {
        fetch(`https://j6wp3gpshl.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
        .then(response => response.json())
        .then(data => {
            this.setState({emoji: data.input})
        }).catch(console.log('error with emoji'));
    }

    render() {
        return (
            <div>
                <div className='green f3'>
                    {`${this.props.name}, your current entry count is...`}    
                </div>
                <div className='red f1'>
                    {this.props.entries}    
                </div>
                <div className='blue f1'>
                    {`Rank Badge: ${this.state.emoji}`}    
                </div>
            </div>
        );
    }  
}

export default Rank;