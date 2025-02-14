import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react';
import axios from 'axios';

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {

      axios.get('/auth/getToken', {
        headers: {
            'code': code,
        }
      }).then(function (response) {
        const json = response.json();
        setToken(json.access_token);
      });
    }

    getToken();

  }, []);


  return (
    <>
        { (token === '') ? <Login/> : <HomePage token={token} /> }
    </>
  );
}

export default App;
