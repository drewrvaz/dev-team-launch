import React, { useState, useEffect } from 'react';
import { Row, Container, CardGroup, ListGroup, Button, Card, CardColumns } from 'react-bootstrap';
import Select from 'react-select';

import Auth from '../utils/auth';
import { searchGoogleBooks } from '../utils/API';
import { saveBookIds, getSavedBookIds } from '../utils/localStorage';

import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';

const ProfilePage = () => {
  // create state for holding returned google api data
  // const [searchedBooks, setSearchedBooks] = useState([]);
  // // create state for holding our search field data
  // const [searchInput, setSearchInput] = useState('');
  // // create state to hold saved bookId values
  // const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  // const [saveBook, { error }] = useMutation(SAVE_BOOK);

  // // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  // useEffect(() => {
  //   return () => saveBookIds(savedBookIds);
  // });

  // // create method to search for books and set state on form submit
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput) {
  //     return false;
  //   }

  //   try {
  //     const response = await searchGoogleBooks(searchInput);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     const { items } = await response.json();

  //     const bookData = items.map((book) => ({
  //       bookId: book.id,
  //       authors: book.volumeInfo.authors || ['No author to display'],
  //       title: book.volumeInfo.title,
  //       description: book.volumeInfo.description,
  //       image: book.volumeInfo.imageLinks?.thumbnail || '',
  //     }));

  //     setSearchedBooks(bookData);
  //     setSearchInput('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // // create function to handle saving a book to our database
  // const handleSaveBook = async (bookId) => {
  //   // find the book in `searchedBooks` state by the matching id
  //   const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await saveBook({
  //       variables: { newBook: {...bookToSave } },
  //     });

  //     // if book successfully saves to user's account, save book id to state
  //     setSavedBookIds([...savedBookIds, bookToSave.bookId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  
    const optionListS = [
      {value: "HTML", label: "HTML" },
      {value: "CSS", label: "CSS" },
      {value: "JavaScript", label: "JavaScript" },
      {value: "Node", label: "Node" },
      {value: "Express", label: "Express" },
      {value: "MySQL", label: "MySQL" },
      {value: "MongoDB", label :"MongoDB" },
      ];
  
  //update user profile for skills
  function handleSelectSkills(data) {
   // e.prevent.default();
   // setSavedSkills(data) = useMutation(UPDATE_SKILL);
   
     };
  
  //availability dropdown
  //const [savedAvailability, setSavedAvailability] = useState();
  const optionListA = [
     {value: "low", label: "low" },
     {value: "medium", label: "medium" },
     {value: "high", label:  "high" },
      ];
    function handleSelectAvailability(data) {
    //    e.prevent.default();
    //    setSavedAvailability(data) = useMutation(UPDATE_AVAILABILITY);
        };
  
  //experience dropdown
  //const [savedExperience, setSavedExperience] = useState();
  const optionListE = [
    {value: "low", label: "low" },
    {value: "medium", label: "medium" },
    {value: "high", label: "high" },
      ];
      function handleSelectExperience(data) {
     //   e.prevent.default();
    //    setSavedExperience(data)= useMutation(UPDATE_EXPERIENCE);
      };
  
  //avatar dropdown
  //const [savedAvatar, setSavedAvatar] = useState();
  const optionListAvatar = [
    {value: "bird", label: "bird" },
    {value: "dog", label: "dog" },
    {value: "cat", label: "cat" },
      ];
      function handleSelectAvatar(data) {
     //   e.prevent.default();
    //    setSavedAvatar(data)= useMutation(UPDATE_AVATAR);
      };
  
    return (  
      <div className="UserProfile">  
      <h2 style={{textAlign: "center", marginBottom: "5px"}}>My Profile</h2> 
      <Container fluid className = "align-items-center" style={{height: "90vh", alignContent: "center"}}> 
      <Row>
        <CardGroup>
        <Card  className="card-border-dark" style={{height: "12rem", width: "10rem", background: "#71B48D", padding: "3px", margin: "5px"}}>
          <Card.Title className="mb-0 text-center">Skills</Card.Title>
          <Card.Body className="mb-0">
              <ListGroup>
           <ListGroup.Item> userSkill1  </ListGroup.Item>
           <ListGroup.Item>  userSkill2  </ListGroup.Item>
             <ListGroup.Item> userSkill3   </ListGroup.Item> 
             <ListGroup.Item> userSkill4  </ListGroup.Item>
           <ListGroup.Item>  userSkill5 </ListGroup.Item>
             <ListGroup.Item> userSkill6   </ListGroup.Item>   
            </ListGroup>
            </Card.Body>
            <Card.Footer>
              <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                  <Select id="dropdown-skill"
                     placeholder="Update"
                  options={optionListS}
                 value={"HTML" }
                 onChange={handleSelectSkills}
                 isMulti
               />
               </div>
            </Card.Footer>
          </Card>
    
          <Card className="card-border-dark" style={{height: "12rem", width: "10rem", background: "#71B48D", padding: "3px", margin: "5px"}}>
            <Card.Title className="mb-0 text-center">Experience</Card.Title>
            <Card.Body className="mb-0">
            <  ListGroup>
          <ListGroup.Item> user.experience </ListGroup.Item>
              </  ListGroup>
            </Card.Body>
            <Card.Footer> <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                  <Select
                     placeholder="Update"
                   options={optionListE}
                    value={"low" }
                  onChange={handleSelectExperience}                        
               />
               </div>
            </Card.Footer>
            </Card>
      
            <Card className="card-border-dark" style={{height: "12rem", width: "10rem", background: "#71B48D", padding: "3px",  margin: "5px"}}>
              <Card.Title className="mb-0 text-center">Availability</Card.Title>
              <Card.Body className="mb-0">
              <  ListGroup>
             <ListGroup.Item> user.availability 
              </ListGroup.Item>
              </  ListGroup>
              </Card.Body>
              <Card.Footer>
               <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                  
                  <Select
                     placeholder="Update" 
                     options={optionListA}
                     value={"low" }
                     onChange={handleSelectAvailability}                        
                  /></div>
              </Card.Footer>
              </Card>
  
              <Card className="card-border-dark" style={{height: "12rem", width: "10rem", background: "#71B48D", padding: "3px",  margin: "5px"}}>
                <Card.Title className="mb-0 text-center">Avatar</Card.Title>
                <Card.Body className="mb-0">
                <  ListGroup>
              <ListGroup.Item> user.userAvatarId </ListGroup.Item> 
              </  ListGroup>
                </Card.Body>
                <Card.Footer>
                <div className="dropdown-container" style={{width: "10rem", height: "8rem"}}>
                  <Select
                     placeholder="Update" 
                     options={optionListAvatar}
                     value={"eagle" }
                     onChange={handleSelectAvatar}                        
                /></div>
                </Card.Footer>
                </Card>
      
                </CardGroup>
                </Row>
      </Container>  
      </div>  
    );  
  }  
  
  
    
export default ProfilePage;
