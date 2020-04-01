import React from "react";

export default function ItemPortfolio(props) {
    const {name, updatedAt, id, createdAt} = props.portfolio;
    return (<table>
        <tbody>
        <tr>
            <td>{name}</td>
            <td>{updatedAt}</td>
            <td>{createdAt}</td>
            <td>{id}</td>
        </tr>
        </tbody>
    </table>);
}