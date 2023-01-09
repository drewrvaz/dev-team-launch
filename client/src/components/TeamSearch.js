import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
import Table from 'react-bootstrap/Table';

import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';

import { GET_USER } from '../utils/queries';
import { ADD_SEARCH_TEAMS } from '../utils/mutations';

import Auth from '../utils/auth';

const divStyle = {
    maxWidth: '500px',
    fontFamily: 'Arial',
};

const TeamSearch = () =>  {

    const [teamData, setTeamData] = useState({
        teams: []
      });


    const [teamName, setTeamName] = useState({
        name: ""
    });


    const [teamSearch, { teamSearchError, teamsearchData }] = useMutation(ADD_SEARCH_TEAMS);
    const handleTeamNameChange = (event) => {
        const { value } = event.target;
        setTeamName({ name: value });
        // console.log(value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setTeamData({teams: []});
    
        try {

            const { data } = await teamSearch({
                variables: { name: teamName.name },
            });

            console.log( data );
            setTeamData({teams: data.searchTeams});
    
        } catch (err) {
          console.error(err);
        }
    
        
        setTeamName({ name: "" });

      };

    return (
    <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Form>
        <div className="justify-content-center fs-3">Seach for Team</div>
            <Form.Group className="mb-3" controlId="formBasicInput">
            <Container fluid className="d-flex inline p-0">
                <Col className='col-10'>
                <Form.Control type="Text" placeholder="Enter Team Name" value={teamName.name} onChange={handleTeamNameChange}/>
                </Col>
                <Col>
                <Button variant="primary" type="submit" onClick={handleFormSubmit}>Search</Button>
                
                </Col>
            </Container>
            
            
            </Form.Group>
            
        </Form>
        <Col>
        {teamData.teams.map(data => 
        
        <Row>
            {data.name}
        </Row>
      )}
        </Col>
        
    </Container>
    )
}

export default TeamSearch;