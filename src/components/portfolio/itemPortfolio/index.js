import React from "react";

export default function ItemPortfolio(props) {
    const{ name, lastupdate}=props.portfolio;
    return (<div>
        <tr>
            <td>{name}</td>
            <td>{lastupdate}</td>
        </tr>
    </div>);
}