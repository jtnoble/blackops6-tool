import { useState } from 'react';
import bs_0 from '../assets/beamsmasher_0.png';
import bs_10 from '../assets/beamsmasher_10.png';
import bs_11 from '../assets/beamsmasher_11.png';
import bs_20 from '../assets/beamsmasher_20.png';
import bs_21 from '../assets/beamsmasher_21.png';
import bs_22 from '../assets/beamsmasher_22.png';
import styles from '../styles/beamsmasher_math_puzzle.module.css';

const data = [
    { image: bs_0, value: 0 },
    { image: bs_11, value: 11 },
    { image: bs_10, value: 10 },
    { image: bs_22, value: 22 },
    { image: bs_21, value: 21 },
    { image: bs_20, value: 20 }
];

const PuzzleItem: React.FC<any> = ({ index, isSelected, onSelect }: any) => {
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

const PuzzleRow: React.FC<any> = ({ rowCharacter, selectedIndex, onSelect }: any) => {
    const rowElements = data.map((_, index) => (
        <PuzzleItem
            key={index}
            index={index}
            isSelected={selectedIndex === index}
            onSelect={onSelect}
        />
    ));

    return (
        <tr>
            <td>{rowCharacter}: </td>
            {rowElements}
        </tr>
    );
};

const BeamsmasherMathPuzzle: React.FC = () => {
    const [xSelected, setXSelected] = useState<number | null>(null);
    const [ySelected, setYSelected] = useState<number | null>(null);
    const [zSelected, setZSelected] = useState<number | null>(null);

    // Helper functions to compute outputs based on selected values
    const calculateXOutput = (x: number) => (2 * x) + 11;
    const calculateYOutput = (y: number, z: number) => ((2 * z) + y) - 5;
    const calculateZOutput = (x: number, y: number, z: number) => Math.abs((y + z) - x);

    // Get the values from selected indices
    const xInput = xSelected !== null ? data[xSelected].value : 0;
    const yInput = ySelected !== null ? data[ySelected].value : 0;
    const zInput = zSelected !== null ? data[zSelected].value : 0;

    // Calculate outputs based on the selected inputs
    const xOutput = calculateXOutput(xInput);
    const yOutput = calculateYOutput(yInput, zInput);
    const zOutput = calculateZOutput(xInput, yInput, zInput);

    const puzzleRows = [
        <PuzzleRow
            key="X"
            rowCharacter="X"
            selectedIndex={xSelected}
            onSelect={(index: number) => setXSelected(index)}
        />,
        <PuzzleRow
            key="Y"
            rowCharacter="Y"
            selectedIndex={ySelected}
            onSelect={(index: number) => setYSelected(index)}
        />,
        <PuzzleRow
            key="Z"
            rowCharacter="Z"
            selectedIndex={zSelected}
            onSelect={(index: number) => setZSelected(index)}
        />,
    ];

    return (
        <>
            <table className={styles.table}>
                <tbody>{puzzleRows}</tbody>
            </table>
            <p><b>Solution: X = {xOutput}, Y = {yOutput}, Z = {zOutput}</b></p>
        </>
    );
};

export default BeamsmasherMathPuzzle;
