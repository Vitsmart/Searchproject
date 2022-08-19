import React from "react";

const Searchbox = ({ searchchange}) => {
    return (
        <div className="pa2">
        <input className="pa3 ba bg-light-green bw2" type="search" onChange={searchchange} placeholder="search robots" />
        </div>
    );
}
export default Searchbox;