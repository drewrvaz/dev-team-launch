// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
// import Profile from './pages/Profile';
// import Class from './pages/Class';

import Login from './pages/Login';
import Signup from './pages/Signup';
<<<<<<< HEAD
import InstructorDashboard from './InstructorDashboard.js';
import StudentDashboard from './StudentDashboard.js';
=======
import { FaRocket } from 'react-icons/fa'
>>>>>>> 09b904e749b64becde35f30d3e72ffaecc2583c1

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
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
<<<<<<< HEAD
              <Route path='/' element={<StudentDashboard />} />
      
=======
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              {/* <Route path='/profile' element={<Profile />} />
              <Route path='class' element={<Class />} /> */}
>>>>>>> 09b904e749b64becde35f30d3e72ffaecc2583c1
              <Route path='*' element={<h1>Wrong page!</h1>} />
            </Routes>
          </>
        </div>
        <footer>
          <h1>Dev Team <FaRocket /></h1>
        </footer>
      </Router>
    </ApolloProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
