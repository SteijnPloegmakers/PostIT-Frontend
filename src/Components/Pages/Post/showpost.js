import {Card, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

function ShowPost(){

    const [pData, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts').then(res => {
            let incData = res.data;
            console.log(pData)
            setData(incData)
        })
    },[])

    return (<div>
        <h1>All Posts</h1>
        {pData.map(x => <div className="postCard">
            <Card className={"post"}>
                <Card.Body>
                    <Card.Title style={{fontWeight: 1000}}>{x.title}</Card.Title>
                    <Card.Text>
                        {x.description}
                    </Card.Text>
                    <Button>Go to post</Button>
                </Card.Body>
            </Card>
        </div>)})
    </div>)
}

export default ShowPost;