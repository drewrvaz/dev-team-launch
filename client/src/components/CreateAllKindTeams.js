import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const CreateAllKindTeams = () => {
    const optionListE = [
        {value: "low", label: "low" },
        {value: "medium", label: "medium" },
        {value: "high", label: "high" },
          ];
          function handleSelectExperience(data) {
         //   e.prevent.default();
        //    setSavedExperience(data)= useMutation(UPDATE_EXPERIENCE);
          };
    return (
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Generate a Team button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Random</a></li>
    <Select
                     placeholder="Update"
                   options={optionListE}
                    value={"low" }
                  onChange={handleSelectExperience}                        
               />
    <li><a className="dropdown-item" href="#">Criteria Based</a></li>
    <li><a className="dropdown-item" href="#">Manual</a></li>
  </ul>
</div>
    )
};

export default CreateAllKindTeams;