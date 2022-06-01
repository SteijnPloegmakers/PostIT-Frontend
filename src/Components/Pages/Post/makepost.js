import React, {useState} from "react";
import {useHistory} from "react-router-dom";
const axios = require("axios");
const api = axios.create({baseURL: "http://localhost:8080/"})

function UploadPost() {

    const [title, setTitle] = useState({})
    const [description, setDescription] = useState({})
    const [userId, setUser] = useState({})
    const [channelId, setChannel] = useState({})
    const history = useHistory()

    function submitPost(e){
        const formData = new FormData();
        formData.append("title", title)
        formData.append("description", description)
        formData.append("userId", userId)
        formData.append("channelId", channelId)

        api.post("/api/post/save", formData, {
            headers: {"Content-Type": "multipart/form-data"}
        }).then(response => {
            console.log(response.data)
        })
        history.push("/home")

    }

    const handleTitle = e =>{
        setTitle(e.target.value)
    }
    const handleDescription = e =>{
        setDescription(e.target.value)
    }
    const handleUser = e =>{
        setUser(e.target.value)
    }
    const handleChannel= e =>{
        setChannel(e.target.value)
    }

    return(
        <div>
            <h1>Upload Post</h1><br/>
            <input
                onChange={handleTitle}
                id="title"
                type="text"
                placeholder="Title"
            /><br/>
            <input
                onChange={handleDescription}
                id="description"
                type="text"
                placeholder="Description"
            /><br/>
            <input
                onChange={handleUser}
                id="userId"
                type="text"
                style={{visibility: "hidden"}}
            /><br/><br/>
            <input
                onChange={handleChannel}
                id="channelId"
                type="text"
                style={{visibility: "hidden"}}
            /><br /><br/>
            <button onClick={submitPost}>Upload Post</button>
        </div>
    )
}

export default UploadPost;