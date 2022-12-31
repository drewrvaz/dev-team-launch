// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
// import Profile from './pages/Profile';
// import Class from './pages/Class';

import Login from './pages/Login';
import Signup from './pages/Signup';
import { FaRocket } from 'react-icons/fa';

import Random from './pages/Random/Random';


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
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              {/* <Route path='/profile' element={<Profile />} />
              <Route path='class' element={<Class />} /> */}

              {<Route path='/random' element={<Random />} />
              }
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
