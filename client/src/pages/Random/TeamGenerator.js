import { useState } from "react";
import { shuffle } from "./helper";

function TeamGenerator(props) {
  const [numberOfTeams, setNumberOfTeams] = useState();
  const [teams, setTeams] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handleGenerateBtnClick = () => {
    setErrorMessage("Please select a number of teams!");

    //Logic for selecting random people here...
    const shuffledArray = shuffle(props.list);
    //split the array into multiple teams

    //if no teams or number of teams < 0, set to an empty array
    if (!numberOfTeams || numberOfTeams < 0) {
      setTeams([]);
    } else {
      //Lets us know how many people we can have in one team
      const numberOfPeoplePerTeam = shuffledArray.length / numberOfTeams;
      //split people into teams based on number of people per team
      const result = [];

      for (let i = 0; i < numberOfTeams; i++) {
        //make it dynamic by i * numberOfPeoplePerTeam
        result.push(
          shuffledArray.slice(
            i * numberOfPeoplePerTeam,
            (i + 1) * numberOfPeoplePerTeam
          )
        );
      }
      setTeams(result);
      console.log(result);
    }
  };
  return (
    <>
      <input
        type="number"
        onChange={(event) => {
          setNumberOfTeams(event.target.value);
        }}
      />

      <button onClick={handleGenerateBtnClick}>Generate Teams</button>
      {errorMessage && <p className="error"> {errorMessage} </p>}
      {/*displaying the teams in a list format*/}
      {teams.map((team, index) => {
        return (
          <ul key={index}>
            {team.map((member, index) => {
              return <li key={index}>{member}</li>;
            })}
          </ul>
        );
      })}
    </>
  );
}

export default TeamGenerator;
