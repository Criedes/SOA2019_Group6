import React, { Component } from 'react';
class ApiListItem extends Component {
    state = {}
    render() {
        const data = this.props.data
        return (
                <tr>
                    <td><a href={`https://payangonline.me${data.path}`}>{data.path}</a></td>
                    <td>{data.service}</td>
                    <td>{data.desc}</td>
                </tr>
           
        );
    }
}

export default ApiListItem;