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
import { ADD_SEARCH_USERS } from '../utils/mutations';

import Auth from '../utils/auth';

const divStyle = {
    maxWidth: '500px',
    fontFamily: 'Arial',
};

const UserSearch = () =>  {

    const [userData, setUserData] = useState({
        username: ""
    });

    const [userNames, setUserNames] = useState({
        usernames: []
    });


    const [userSearch, { userSearError, userSearchData }] = useMutation(ADD_SEARCH_USERS);
    const handleUsernameChange = (event) => {
        const { value } = event.target;
        setUserData({ username: value });
        // console.log(value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {

            console.log(userData.username);

            const { data } = await userSearch({
                variables: { username: userData.username },
            });

            console.log( data );
            setUserNames({usernames: data.searchUsers});
    
    
        } catch (err) {
          console.error(err);
        }
    
        setUserData({
          username: ""
        });
    

      };

    return (
    <Container className="mt-1 p-3 border border-dark rounded bg-light " style={divStyle}>
        <Form>
        <div className="justify-content-center fs-3">Seach for User</div>
            <Form.Group className="mb-3" controlId="formBasicInput">
                <Container fluid className="d-flex inline p-0">
                    <Col className='col-10'>
                    <Form.Control type="Text" placeholder="Enter Username" value={userData.username} onChange={handleUsernameChange}/>
                    </Col>
                    <Col>
                    <Button variant="primary" type="submit" onClick={handleFormSubmit}>Search</Button>
                    
                    </Col>
                </Container>
            </Form.Group>
        </Form>

        <Col>
        {userNames.usernames.map(data => 
        
        <Row>
            {data.username}
        </Row>
      )}
        </Col>
        
        </Container>
    )
}

export default UserSearch;