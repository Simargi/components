import React from 'react';

class Input extends React.Component {
    checkInputValue = (e) => {
        e.target.value = e.target.value.replace(/\d/,'')
    };
    render() {
        return(
            <input type="text" placeholder="Enter topic here..."
                   onChange={this.checkInputValue}
            />
        )
    }
}

export default Input