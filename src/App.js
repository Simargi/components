import React from 'react';
import Tabs from "./components/Tabs";
import TabPanel from "./components/TabPanel";
import Loader from "./components/Loader";
import Button from "./components/Button";

export default class App extends React.Component {
    state = {
        isLoading: true
    };
    change = () => {
        console.log(1)
    }
    render() {
        return(
            <div className='app'>
                <Button text={'Click'} btnSize={'sm'} />
                {/*<Loader time={5} />*/}
                {/*<Tabs selected={1} >*/}
                    {/*<TabPanel label={'Tab-1'}>*/}
                        {/*<p>Tab-1 content</p>*/}
                    {/*</TabPanel>*/}
                    {/*<TabPanel label={'Tab-2'}>*/}
                        {/*<p>Tab-2 content</p>*/}
                    {/*</TabPanel>*/}
                    {/*<TabPanel label={'Tab-3'}>*/}
                        {/*<p>Tab-3 content</p>*/}
                    {/*</TabPanel>*/}
                {/*</Tabs>*/}
            </div>
        )
    }
}