import '../styles/Cart.css'
import {useState,useEffect} from 'react'

function Cart({cart,updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    
	const total = cart.reduce(
		(acc, item) => acc + item.amount * item.price,
		0
	)
    function supp(name){
			const cardFilterdPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cardFilterdPlant
			])
	}
    useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

return isOpen ? (
    <div className='lmj-cart'>
        <button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
        </button>
        {cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
                                <button className='icon_supp_button' onClick={()=> supp(name)}><i className="fa-solid fa-trash"></i></button>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
        <div className='lmj-cart-closed'>
                <button className='lmj-cart-toggle-button' onClick={()=> setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
    )
}
export default Cart