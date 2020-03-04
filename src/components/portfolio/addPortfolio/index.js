import React, {useState} from "react";

const AddPortfolio = props => {

    const [name, setName] = useState("");
    const onSubmit = event => {
        event.preventDefault();
        props.addPortfolioAction(name);
    };
    return (
        <>
            <h2>Add Portfolio</h2><br/>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Saisir un nom"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    required/>
                <input type="submit" value="créer"/>
            </form>
        </>
    );
};
export default AddPortfolio;