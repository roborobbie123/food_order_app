import { useEffect, useState } from "react"

export default function Meals({ cart, add, remove, meals }) {
    

    return (
        <div id="meals">
            {meals?.map((meal, index) => <div className="meal-item" key={index}>

                <article>
                    <h3>{meal.name}</h3>
                    <div className="meal-item-price">${meal.price}</div>
                    <img src={`http://localhost:3000/${meal.image}`}></img>
                    <div className="meal-item-description">{meal.description}</div>
                    <button className="button" onClick={() => add(meal.id)}>Add to cart</button>
                </article>


            </div>)}
        </div>
    )
}