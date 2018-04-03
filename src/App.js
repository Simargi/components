import React from 'react';
import Textarea from './components/Textarea';
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";

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
                <Textarea maxlength={10} disable={false} />
                <Button btnSize={'sm'} value={10} />
                <Input onHandler={this.changeName}/>
                <p>{this.state.value}</p>
                <Modal typeModal={'fail'} errorReqMessage={'bad fetch request'} />
            </div>
        )
    }
}