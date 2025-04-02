import { useEffect, useState } from "react"

export default function Meals() {
    const [meals, setMeals] = useState();

    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');
        if (!response.ok) return;
        const data = await response.json();
        setMeals(data);
    }

    useEffect(() => {
        fetchMeals();
    }, [])

    return (
        <div id="meals">
            {meals?.map((meal, index) => <div className="meal-item" key={index}>

                <article>
                    <h3>{meal.name}</h3>
                    <div className="meal-item-price">{meal.price}</div>
                    <button className="button">Add to cart</button>
                    <img src={`http://localhost:3000/${meal.image}`}></img>
                    <div className="meal-item-description">{meal.description}</div>
                    
                </article>


            </div>)}
        </div>
    )
}