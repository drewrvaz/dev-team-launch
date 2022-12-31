import { useState } from 'react';
import HumanListInput from './HumanListInput';
import RandomHumanPicker from './RandomHumanPicker';
import TeamGenerator from './TeamGenerator';

function Random() {
    const [humanList, setHumanList] = useState([]);
    return (
        <div className='Random'>
            <HumanListInput onChange={setHumanList}/>
            <RandomHumanPicker list ={humanList}/>
            <TeamGenerator list = {humanList}/>
        </div> 
    );
};

export default Random;