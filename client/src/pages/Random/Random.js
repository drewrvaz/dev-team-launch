import { useState } from 'react';
import HumanListInput from './HumanListInput';
import RandomHumanPicker from './RandomHumanPicker';

function Random() {
    const [humanList, setHumanList] = useState([]);
    return (
        <div className='Random'>
            <HumanListInput onChange={setHumanList}/>
            <RandomHumanPicker list ={humanList}/>
        </div> 
    );
};

export default Random;