import React from "react";

function Item(props) {
    return (
            <div 
                onClick={() => {
                        props.onChecked(props.id);
                 }}
            >
            <h1>{props.itemName}</h1>

            </div>
        
    )
}

export default Item;