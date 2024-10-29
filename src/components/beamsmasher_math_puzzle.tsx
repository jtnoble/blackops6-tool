import bs_0 from '../assets/beamsmasher_0.png'
import bs_10 from '../assets/beamsmasher_10.png'
import bs_11 from '../assets/beamsmasher_11.png'
import bs_20 from '../assets/beamsmasher_20.png'
import bs_21 from '../assets/beamsmasher_21.png'
import bs_22 from '../assets/beamsmasher_22.png'
import styles from '../styles/beamsmasher_math_puzzle.module.css'

let x = 0;
let y = 0;
let z = 0;

const data = [
    {image: bs_0, value: 0},
    {image: bs_11, value: 11},
    {image: bs_10, value: 10},
    {image: bs_22, value: 22},
    {image: bs_21, value: 21},
    {image: bs_20, value: 20}
]

const setLetter = (letter: String, index: any) => {
    switch (letter) {
        case 'x':
            x = data[index].value;
            break;
        case 'y':
            y = data[index].value;
            break;
        case 'z':
            z = data[index].value;
            break;
        default:
            console.log("An error has occurred...")
    }
}

const BeamsmasherMathPuzzle: React.FC = () => {
    
    return (
        <>
        <table className={styles.table}>
            <tbody>
            <tr>
                <td>X: </td>
                <td><div className={styles.imgOverlay}><img src={data[0].image} alt={data[0].value.toString()} onClick={() => setLetter('x', 0)}/></div></td>
                <td><img src={data[1].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[2].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[3].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[4].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[5].image} alt={data[0].value.toString()} /></td>
            </tr>
            
            <tr>
                <td>Y: </td>
                <td><img src={data[0].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[1].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[2].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[3].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[4].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[5].image} alt={data[0].value.toString()} /></td>
            </tr>
            <tr>
                <td>Z: </td>
                <td><img src={data[0].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[1].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[2].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[3].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[4].image} alt={data[0].value.toString()} /></td>
                <td><img src={data[5].image} alt={data[0].value.toString()} /></td>
            </tr>
            </tbody>
        </table>
        <p>Output: {x}, {y}, {z}</p>
        </>
    )
}

export default BeamsmasherMathPuzzle;