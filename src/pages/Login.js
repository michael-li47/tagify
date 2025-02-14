import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/posts";
import { CLIENT_ID, FRONTEND_URI, SPOTIFY_RESPONSE_TYPE, SPOTIFY_SCOPE } from "../constants/SpotifyConstants";
import { generateRandomString } from "../utils/utils"

function Login() {

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const response = await api.get('/testEndpoint');
                console.log(response.data);
            } catch (err) {
                console.log(`${err.message}`);
            }
        }
        
        fetchPosts();
    }, [])

    const path = "https://accounts.spotify.com/authorize?" +
                "&client_id=" + CLIENT_ID +
                "&response_type=" + SPOTIFY_RESPONSE_TYPE +
                "&redirect_uri=" + FRONTEND_URI +
                "&state=" + generateRandomString(16) +
                "&scope=" + SPOTIFY_SCOPE;

    return (
      <div>
        <h1>Login</h1>
        <a href={path}>Login to Spotify</a>
      </div>
    );
}

export default Login;