import React from 'react';
import Textarea from './components/Textarea';
import Button from "./components/Button";
import Input from "./components/Input";
import SuccessModal from "./components/SuccessModal";
import ErrorModal from "./components/ErrorModal";
import Modal from "./components/Modal";
import FormContainer from "./components/FormContainer";

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
                <FormContainer formTitle={'Registration'} />
                <Textarea maxlength={10} disable={false} />
                <Button btnSize={'sm'} value={10}/>
                <Input onHandler={this.changeName}/>
                <p>{this.state.value}</p>
                <Modal typeModal={'succ'/*'fail'*/} /*closeBtn={false}*/ showModal={false} errorReqMessage={'bad fetch request'} />
                {/*<SuccessModal closeBtn={false} showModal={false}/>*/}
                {/*<ErrorModal closeBtn={true} errorReq={'bad request'} showModal={true}/>*/}
            </div>
        )
    }
}