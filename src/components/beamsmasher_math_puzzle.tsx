import placeholderLogo from '../assets/100x100.svg'

let x = 0;
let y = 0;
let z = 0;

const data = [
    {image: placeholderLogo, value: 21},
    {image: placeholderLogo, value: 22},
    {image: placeholderLogo, value: 23},
    {image: placeholderLogo, value: 24},
    {image: placeholderLogo, value: 25},
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
        <table>
            <tr>
                <td><img src={data[0].image} alt="X" onClick={() => setLetter('x', 0)}/>0</td>
                <td><img src={data[1].image} alt="X" />1</td>
                <td><img src={data[2].image} alt="X" />2</td>
                <td><img src={data[3].image} alt="X" />3</td>
                <td><img src={data[4].image} alt="X" />4</td>
            </tr>
            <tr>
                <td><img src={data[0].image} alt="Y" />0</td>
                <td><img src={data[1].image} alt="Y" />1</td>
                <td><img src={data[2].image} alt="Y" />2</td>
                <td><img src={data[3].image} alt="Y" />3</td>
                <td><img src={data[4].image} alt="Y" />4</td>
            </tr>
            <tr>
                <td><img src={data[0].image} alt="Z" />0</td>
                <td><img src={data[1].image} alt="Z" />1</td>
                <td><img src={data[2].image} alt="Z" />2</td>
                <td><img src={data[3].image} alt="Z" />3</td>
                <td><img src={data[4].image} alt="Z" />4</td>
            </tr>
        </table>
        </>
    )
}

export default BeamsmasherMathPuzzle;