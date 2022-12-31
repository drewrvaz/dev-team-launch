import { useState } from 'react';
import { shuffle } from './helper';

function RandomHumanPicker(props) {
    const [numberOfHumansToSelect, setNumberOfHumansToSelect] = useState();
    const [randomHumans, setRandomHumans] = useState([]);

    const handlePickBtnClick = () => {
        //Logic for setting random people
        const shuffledArray = shuffle(props.list);
        console.log(shuffledArray);
        const slicedArray = shuffledArray.slice(0, numberOfHumansToSelect);
        console.log(slicedArray);
    }

    return (
        <>
        <input type ='number' onChange={(event) => {
            setNumberOfHumansToSelect(event.target.value);
        }}/>
        <button onClick={handlePickBtnClick}>Pick</button>
        <div>
            {randomHumans.join(',')}
        </div>
        </>
    )
}

export default RandomHumanPicker;