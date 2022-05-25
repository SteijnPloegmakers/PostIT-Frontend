import React from "react";
import GoogleLogin from "react-google-login";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";

const axios = require("axios");
const api = axios.create({baseURL: "http://localhost:8080/"})

function GoogleForm (){
    const [cookies, setCookies] = useCookies(["GoogleAuthCookie"]);
    const history = useHistory()

    function responseGoogle(response){
        const formData = new FormData();
        formData.append("name", response.profileObj.name)
        formData.append("email", response.profileObj.email)
        formData.append("googleId", response.profileObj.googleId)

        api.post('api/login/oauth2/google', formData
        ).then(response => {
            setCookies("GoogleAuthCookie", response.data)
        })
        history.push("/home")
    }

    return(
        <div><br/>
            <h1>Login</h1>

            <GoogleLogin
                clientId="936924763528-87g9944mu9oekrtrd2qj34ur29d77lfs.apps.googleusercontent.com"
                buttonText="Login with Google"
                cookiePolicy={'single_host_origin'}
                onSuccess={responseGoogle}
            />
        </div>
    )
}

export default GoogleForm