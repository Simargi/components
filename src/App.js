import React from 'react';
import Textarea from './components/Textarea';
import Button from "./components/Button";
import Input from "./components/Input";

export default class App extends React.Component {
    state = {
        value: ''
    }
    changeName = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return(
            <div className='app'>
                <Textarea maxlength={10} disable={false}/>
                <Button btnSize={'gfg'} value={10}/>
                <Input onHandler={this.changeName}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}