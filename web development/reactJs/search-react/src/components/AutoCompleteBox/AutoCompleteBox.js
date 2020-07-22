import React from 'react';
import './AutoCompleteBox.css';

let items = ["hello","aman","jain","world","India","Earth","hell","Ohhell"];
let counter = 1;

class AutoCompleteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestions:[],
            isHidden:false,
            text:""
        }
    }

    textChanged = (e) => {
        let value = e.target.value;

        this.setState({
            "text":value
        })

        if(value.trim().length > 0 ) {
            let regex = new RegExp(`${e.target.value}`,"ig");
            let newSuggestions = items.sort().filter((item) => {
                return regex.test(item);
            });
    
            this.setState({
                suggestions:newSuggestions
            })
        }else {
            this.setState({
                suggestions:[]
            })
        }
        
    }

    fillSuggestion = (suggestion) => {
        this.setState({
            text:suggestion,
            suggestions:[]
        })
    }

    render() {
        return (
            <div className="autoCompleteBoxContainer">
                <input type="text" value={this.state.text} onChange={this.textChanged} />
                <ul>
                    {this.state.suggestions.map((suggestion) => {
                        return (
                            <li key={++counter} onClick={() => this.fillSuggestion(suggestion)}>{suggestion}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default AutoCompleteBox;