import React, { Component } from 'react';
import ApiListItem from '../component/ApiDoc/ApiListItem'
class ApiDoc extends Component {
    state = {
        list: [{
            path: '/api/customer/register',
            service: 'customers',
            desc: 'register customer'
        },{
            path: '/api/customer/register',
            service: 'customers',
            desc: 'register customer'
        }]
    }
    render() {
        const data = this.state.list.map((item) =>
            <ApiListItem data={item} />
        )
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="">
                        <h1>Api Gateway</h1>
                        <p>Group 6 : Payangonline.me</p>
                    </div>
                </div>
                <div style={{width:'100%', textAlign:'center', marginBottom:'1em'}}><h3>List of Api end-point</h3></div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">End point</th>
                            <th scope="col">Service</th>
                            <th scope="col">Decription</th>
                        </tr>
                    </thead>
                    <tbody>{data}</tbody>
                    
                </table>
                
            </div>
                );
            }
        }
        
export default ApiDoc;