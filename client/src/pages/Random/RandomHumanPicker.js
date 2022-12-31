import { useState } from "react";
import { shuffle } from "./helper";

function RandomHumanPicker(props) {
  const [numberOfHumansToSelect, setNumberOfHumansToSelect] = useState();
  const [randomHumans, setRandomHumans] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handlePickBtnClick = () => {
    setErrorMessage("Please choose a number of people!");

    //Logic for selecting random people
    const shuffledArray = shuffle(props.list);

    //return an empty array if no number is selected [NEED AN ERROR MESSAGE]
    if (numberOfHumansToSelect === undefined || numberOfHumansToSelect < 0) {
      setRandomHumans([]);
      
      
    } else {
      const slicedArray = shuffledArray.slice(0, numberOfHumansToSelect);
      setRandomHumans(slicedArray);
    }
  };

  return (
    <>
      {/* getting the number of people to pick from the user input */}
      <input
        type="number"
        onChange={(event) => {
          setNumberOfHumansToSelect(event.target.value);
        }}
      />
      <button onClick={handlePickBtnClick}>Pick People</button>
      {errorMessage && <p className="error"> {errorMessage} </p>}

      {/*choosing a person from the index and dispaying as a list element*/}
      <ul>
        {randomHumans.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
}

export default RandomHumanPicker;
