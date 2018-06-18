import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h3 style={{color: 'red'}}>{this.props.text}</h3>
            </div>
        )
    }
}

export default Header;