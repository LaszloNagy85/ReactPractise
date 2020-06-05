import React from "react";

function Product(props) {
    const item = props.item;
    return(
        <div>
            <h4>Product name: {item.name}</h4>
            <ul>
                <li>Price: {Math.round(item.price).toLocaleString("hu-HU", 
                { style: "currency", currency: "HUF", minimumFractionDigits: 0 })}</li>
                <li><button onClick={()=> alert(`Description: ${item.description}`)}>See Description!</button>
                </li>
            </ul>
        </div>
    )
}

export default Product;