import SearchBar from "../SearchBar/SearchBar";
import React from "react";

class Nav extends React.Component {
    constructor(character) {
        super(character);
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
            </div>
        )
    }
}
export default Nav;