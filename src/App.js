import React from 'react';
import Textarea from './components/Textarea';
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import TabPanel from "./components/TabPanel";

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
                <Tabs selected={1} >
                    <TabPanel label={'Tab-1'}>
                        <p>Tab-1 content</p>
                    </TabPanel>
                    <TabPanel label={'Tab-2'}>
                        <p>Tab-2 content</p>
                    </TabPanel>
                    <TabPanel label={'Tab-3'}>
                        <p>Tab-3 content</p>
                    </TabPanel>
                </Tabs>
                <Textarea maxlength={10} disable={false} />
                <Button btnSize={'sm'} value={10} />
                <Input onHandler={this.changeName}/>
                <p>{this.state.value}</p>
                {/*<Modal typeModal={'fail'} errorReqMessage={'bad fetch request'} />*/}
            </div>
        )
    }
}