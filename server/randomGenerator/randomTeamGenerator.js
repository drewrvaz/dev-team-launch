import { useState } from 'react';
import { shuffle } from './helper';

function RandomUserChooser(props) {
  const [numPeopleToSelect, setNumPeopleToSelect] = useState();
  const [randomPeople, setRandomPeople] = useState([]);
  console.log(propslist)

  const handleChooseBtnClick = () => {
    //Logic for selecting random people here
    const shuffledArray = shuffle(props.list);
    console.log(shuffledArray);
  }
}
