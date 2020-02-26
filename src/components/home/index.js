import React from "react";

export default function Home(props) {
    console.log(props);
    return (
        <div style={{
            backgroundColor: props.bgColor,
            height: '50vh'
        }}
             onClick={
                 props.toggleColor
             }><h2>Home</h2></div>
    );
}