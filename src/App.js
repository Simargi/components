import React from 'react';
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import TabPanel from "./components/TabPanel";
import Loader from "./components/Loader";
import TableContainer from "./components/TableContainer";

export default class App extends React.Component {
    state = {
        value: '',
        isLoading: true
    }
    change = () => {
      console.log(1)
    }
    componentWillMount() {
        setTimeout(()=>{
            this.setState({isLoading: false})
        }, 500);
    }
    changeName = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return(
            <div className='app'>
                <Button text={'Click'} btnSize={'sm'} />
                { this.state.isLoading && <Loader/> }
                <TableContainer theadData={['id','name','version']} tbodyData={[{id:1, name: 'A', version: '1'}]}/>
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
                <Input onHandler={this.changeName}/>
                <p>{this.state.value}</p>
                {/*<Modal typeModal={'fail'} errorReqMessage={'bad fetch request'} />*/}
            </div>
        )
    }
}