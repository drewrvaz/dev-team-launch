import { useState } from "react";
import { shuffle } from "./helper";
import "./randomStyle.css";

function RandomHumanPicker(props) {
  const [numberOfHumansToSelect, setNumberOfHumansToSelect] = useState();
  const [randomHumans, setRandomHumans] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handlePickBtnClick = () => {
    setErrorMessage("Please select a number to pick!");

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
    <div className="random-human-picker-outer-container">
      <h3>Select Random People</h3>
      <div className="random-human-picker-container">
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
      </div>
    </div>
  );
}

export default RandomHumanPicker;
