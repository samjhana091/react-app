import React, { Component } from 'react';

class body extends Component {
    render() {
        return (
            <div> 
                 First name: <input type="text" name="firstname" value={this.props.firstname} / >
                 Last name: <input type="text" name="lastname" value={this.props.lastname} / > 
                <img src="https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?cs=srgb&dl=adorable-animal-animal-photography-259803.jpg&fm=jpg" alt="Smiley face" height="100" width="142" / >


            </div>
        )
    }
}

export default body;
