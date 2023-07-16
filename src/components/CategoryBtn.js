import React from 'react'

const CategoryBtn = (props) => {
    return (
        <div className={`category-div ${props.pClass}`} style={ props.selected&&{backgroundColor:"#eeeeee"}}>
            <img src={props.img} alt={props.name} className={`svg-icon ${props.class}`} />
            <span className="category-name">{props.name}</span>
        </div>
    )
}

export default CategoryBtn