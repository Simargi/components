import React from 'react';
import Textarea from './components/Textarea';

export default class App extends React.Component {
    render() {
        return(
            <div className='app'>
                <Textarea maxlength={this.props.maxLength} disable={this.props.disableTextarea}/>
            </div>
        )
    }
}