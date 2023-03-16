import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(character) {
        super(character);
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to="/about"><h3>ABOUT</h3></Link>
                <Link to="/home"><h3>HOME</h3></Link>
                <Link to="/detail/:detailId"><h3>DETAIL</h3></Link>
            </div>
        )
    }
}
export default Nav;