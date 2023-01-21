
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({scaleValue,careType}){
    const niveau = {
        1:"Peu",
        2:"modéremment",
        3:"beaucoup"
    }
    const range =[1,2,3]
    const scaleType = careType === 'light' ? <img src={Sun}  alt='sun-icon'/> : <img src={Water} alt='water-icon' />

    return (
    <div onClick={() => alert(
        `Cette plante requiert ${niveau[scaleValue]} ${careType === 'light' ? "de lumière" : "d'arrosage"}`
    )}>
        {range.map((rangeElem) => scaleValue >= rangeElem ?( <span key={rangeElem.toString()}>{scaleType}</span>): null)}
        </div>
    )
}

export default CareScale