import React, { Component } from 'react';
class SearchBar extends Component {
    state = { search_text : "" }


    handleChange = (event) => {
        this.setState({search_text: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() { 
        return ( 
        <div className="container">
            <div className="search-wrapper">
                <div className="search-row">
                    <form className="from-search" onSubmit={this.handleSubmit}>
                        <input className="search_input" placeholder={"ค้นหาชื่อร้านหรืออู่"} type="text" value={this.state.search_text} onChange={this.handleChange} />
                        <button className="submit_btn" type="submit"  value="Submit"><i className="fa fa-search" aria-hidden="true"></i> Find Mechanic</button>
                    </form>
                </div>
            </div>
        </div> );
    }
}
 
export default SearchBar;