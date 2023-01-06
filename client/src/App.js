// import logo from './logo.svg';
// import './App.css';
// import InstructorDashboard from './InstructorDashboard.js';
// import StudentDashboard from './StudentDashboard.js';
// import Project from './pages/Project';


//Avatars + Font Awesome Icons stored here:
import Avatars from "./components/Avatars";

//Create teams *example pages displayed here
import CreateRandom from "./pages/CreateRandom";
import CreateAllKindTeams from "./components/CreateAllKindTeams";

// get users, classes, teams API endpoints
import GetUsers from './components/GetUsers';
import GetClasses from './components/GetClasses';
import GetTeams from './components/GetTeams';
//This form is responsive and unstyled!!!!!!!!!!!!!

// *Add user* need to change it, don't want to confuse with the sign up (is just a paceholder for now form API endpoint
import ManualForm from './components/ManualForm';

//Import everything needed to use the 'useQuery' hook
import { useQuery } from '@apollo/client';

//Random Generator Page for a quick pick, no need to call the API
import Random from './pages/Random/Random';

//Work on setting up a classes callback function/endpoint
import {Classes} from './components/Classes';

import gql from "graphql-tag";
// import Random from './pages/random/Random';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='devTeamPage'>
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/profile' element={<Profile />} />   
              <Route path='/project' element={<Project />} />      
              {/* {<Route path='/random' element={<Random />} /> */}
              <Route path='/avatars' element={<Avatars />} />
              <Route path="/getclasses" element={<GetClasses />} />
              <Route path="/getteams" element={<GetTeams />} />
              <Route path='*' element={<h1>Wrong page!</h1>} />
            </Routes>
          </>
        </div>
        <footer class='navbar navbar-light bg-success-subtle justify-content-center'>
          <h1>Dev Team <FaRocket /></h1>
        </footer>
      </Router>
    </ApolloProvider>
  );
}

export default App;
