import React, { useEffect, useState } from 'react'; 
import { useQuery, gql } from '@apollo/client';
import { LOAD_CLASSES } from '../GraphQl/Queries';

//simple functional component to render all the users in our application
function GetClasses() {
    const {error, loading, data} = useQuery(LOAD_CLASSES)
    const {users, setUsers} = useState ([])
    useEffect(()=> {
        console.log(data)
        //recieve our data
        if (data) {
            // console.log(data.getAllUsers[0])
        // setUsers(data.getAllUsers[0]);
        }
    }, [data])
    return (
        
            <div>
                Please open the console
              {/* {" "}
              {users.map((val) => {
                return <h1> {val.firstName}</h1>;
              })} */}
            </div>
          );
}
export default GetClasses