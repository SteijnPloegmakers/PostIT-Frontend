import React, {useState} from "react";
import {useHistory} from "react-router-dom";
const axios = require("axios");
const api = axios.create({baseURL: "http://localhost:8080/"})

function UploadChannel() {

    const [cTitle, setCTitle] = useState({})
    const [cDescription, setCDescription] = useState({})
    const history = useHistory()

    function submitChannel(e){
        const formData = new FormData();
        formData.append("title", cTitle)
        formData.append("description", cDescription)

        api.post("/api/channel/save", formData, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then(response => {
            console.log(response.data)
        })
        history.push("/home")

    }

    const handleCTitle = e =>{
        setCTitle(e.target.value)
    }
    const handleCDescription = e =>{
        setCDescription(e.target.value)
    }


    return(
        <div>
            <h1>Upload Channel</h1><br/>
            <input
                onChange={handleCTitle}
                id="title"
                type="text"
                placeholder="Title"
            /><br/>
            <input
                onChange={handleCDescription}
                id="description"
                type="text"
                placeholder="Description"
            /><br/><br/>
            <button onClick={submitChannel}>Upload Channel</button>
        </div>
    )
}

export default UploadChannel;