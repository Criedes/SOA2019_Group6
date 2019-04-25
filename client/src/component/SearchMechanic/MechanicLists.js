import React, { Component } from 'react';
import MechanicListItem from './MechanicListItem'
class MechanicLists extends Component {
    state = {  }
    render() { 
        const lists = this.props.list
        const content = lists.map((list, index)=>
            <MechanicListItem list={list} key={list._id}/>
        )
        return ( 
            <div>
                <ul>{content}</ul>
            </div>
         );
    }
}
 
export default MechanicLists;