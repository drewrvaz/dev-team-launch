import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { CREATE_RANDOM } from '../utils/mutations';
import ToggleButton from 'react-bootstrap/Button';

function CreateAllKindTeams () {
   
    return (
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Generate a Team button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Random</a></li>
    <li><a className="dropdown-item" href="#">Criteria Based</a></li>
    <li><a className="dropdown-item" href="#">Manual</a></li>
  </ul>
</div>
    )
};

export default CreateAllKindTeams;