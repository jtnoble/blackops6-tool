import { useState } from 'react'
import bs_0 from '../assets/beamsmasher_0.png'
import bs_10 from '../assets/beamsmasher_10.png'
import bs_11 from '../assets/beamsmasher_11.png'
import bs_20 from '../assets/beamsmasher_20.png'
import bs_21 from '../assets/beamsmasher_21.png'
import bs_22 from '../assets/beamsmasher_22.png'
import styles from '../styles/beamsmasher_math_puzzle.module.css'

const data = [
    { image: bs_0, value: 0 },
    { image: bs_11, value: 11 },
    { image: bs_10, value: 10 },
    { image: bs_22, value: 22 },
    { image: bs_21, value: 21 },
    { image: bs_20, value: 20 }
]

const PuzzleItem: React.FC<any> = ({ index, rowCharacter, isSelected, onSelect }: any) => {
    const handleClick = () => {
        onSelect(index);
    };

    return (
        <td>
            <div className={styles.imgOverlay}>
                <img
                    src={data[index].image}
                    alt={data[index].value.toString()}
                    onClick={handleClick}
                    className={isSelected ? styles.selected : ''}
                />
                {isSelected && (
                    <div className={styles.selectedOverlay}>
                        <span>Selected</span>
                    </div>
                )}
            </div>
        </td>
    );
};


const PuzzleRow: React.FC<any> = ({ rowCharacter }: any) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    };

    const rowElements = data.map((item, index) => (
        <PuzzleItem
            key={index}
            index={index}
            rowCharacter={rowCharacter}
            isSelected={selectedIndex === index}
            onSelect={handleSelect}
        />
    ));

    return (
        <tr>
            <td>{rowCharacter}: </td>
            {rowElements}
        </tr>
    );
}

const BeamsmasherMathPuzzle: React.FC = () => {
    const [xSelected, setXSelected] = useState<number | null>(null);
    const [ySelected, setYSelected] = useState<number | null>(null);
    const [zSelected, setZSelected] = useState<number | null>(null);

    const puzzleRows = [
        <PuzzleRow
            rowCharacter="X"
            onSelect={(index: number) => setXSelected(index)}
        />,
        <PuzzleRow
            rowCharacter="Y"
            onSelect={(index: number) => setYSelected(index)}
        />,
        <PuzzleRow
            rowCharacter="Z"
            onSelect={(index: number) => setZSelected(index)}
        />,
    ];

    const xOutput = xSelected !== null ? data[xSelected].value : 0;
    const yOutput = ySelected !== null ? data[ySelected].value : 0;
    const zOutput = zSelected !== null ? data[zSelected].value : 0;

    return (
        <>
            <table className={styles.table}>
                <tbody>{puzzleRows}</tbody>
            </table>
            <p>Output: {xOutput}, {yOutput}, {zOutput}</p>
        </>
    );
}

export default BeamsmasherMathPuzzle;
