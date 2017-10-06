import React, { Component } from 'react'
class Tick extends Component {
    render() {
        return ( < div >
            <
            h1 > The present time in texas { new Date().toLocaleTimeString() }. <
            /h1> <
            / div>
        )
    }

}

export default Tick