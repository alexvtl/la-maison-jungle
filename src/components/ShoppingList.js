import { plantList } from "../datas/plantList"
import { useState } from "react"
import '../styles/ShoppingList.css'
import Categories from "./Categories"
import PlantItem from "./PlantItem"

function ShoppingList({cart,updateCart}) {
	const [activeCategory,setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	function addCart(name, price){
		const currentPlanSaved = cart.find((plant) => plant.name === name)
		if(currentPlanSaved){
			const cardFilterdCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cardFilterdCurrentPlant,
				{name,price,amount: currentPlanSaved.amount + 1}
			])
		} else {
			updateCart([...cart, {name,price,amount:1}])
		}
	}
	return (
		<div>
			<Categories categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory} />

            <ul className="lmj-plant-list">
        {plantList.map(({id,cover,name,water,light,price,category}) => (
			!activeCategory || activeCategory === category ? (
			<div key={id}>
            <PlantItem
			cover={cover}
			name={name}
			water={water}
			light={light}
			/>
			<button onClick={() => addCart(name,price)}>Ajouter</button>
			</div>) : null
        ))}
    </ul>
    </div>
    )
}

export default ShoppingList