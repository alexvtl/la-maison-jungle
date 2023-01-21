import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleValue(e){
        setInputValue(e.target.value)
    }
    function checkvalue(){
        if(!inputValue.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }else{
            console.log(inputValue)
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type={'email'} value={inputValue} onBlur={checkvalue} onChange={handleValue} />
		</footer>
	)
}

export default Footer