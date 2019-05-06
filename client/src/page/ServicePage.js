import React, { Component } from 'react';
import {connect} from 'react-redux'
class ServicePage extends Component {
    state = {
        id:''
    }
    componentDidMount(){
        if (this.props.auth.user) {
            if (this.props.auth.user.role) {
                if (this.props.auth.user.role === 'mechanic') {
                    console.log(this.props.location.state.id)
                    this.setState({id:this.props.location.state.id})
                }
            }
        }
    }
    render() {
        

        return (
            <div>
                service page {this.state.id}
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    mechanic: state.mechanic,
    auth: state.auth
})

export default connect(mapStateToProps)(ServicePage);