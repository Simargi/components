import React from 'react';
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import TabPanel from "./components/TabPanel";
import Loader from "./components/Loader";
import TableContainer from "./components/TableContainer";
import Textarea from "./components/Textarea";
import FormInput from "./components/FormInput";

export default class App extends React.Component {
	state = {
		value: '',
		isLoading: true
	}
	ckeckBtnEvent = (e) => {
		console.log(1)
	}
	changeName = (e) => {
		this.setState({
			value: e.target.value
		})
	}
	render() {
		return(
      <div className='app'>
				{/*{ this.state.isLoading && <Loader/> }*/}
        <Button text={'Click Me'} btnSize={'sm'} onClick={this.ckeckBtnEvent} />
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
        <Textarea maxLength={12} onChange={this.changeName} name="textarea"/>
				<Input onHandler={this.changeName} />
	      <FormInput name="name"/>
        <p>{this.state.value}</p>
				{/*<Modal typeModal={'fail'} modalText="Error" errorReqMessage="Bad req" show={true} />*/}
      </div>
		)
	}
}