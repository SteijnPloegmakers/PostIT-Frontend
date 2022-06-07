import {Card, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import "./channelcard.css"


function ShowChannel() {

    const [cData, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/channels').then(res => {
            let incData = res.data;
            console.log(cData)
            setData(incData)
        })
    },[])

    return (<div>
        <h1>All Channels</h1>
        {cData.map(x => <div className="channelCard">
            <Card className={"channel"}>
                <Card.Body>
                    <Card.Title style={{fontWeight: 1000}}>{x.title}</Card.Title>
                    <Card.Text>
                        {x.description}
                    </Card.Text>
                    <Button>Go to channel</Button>
                </Card.Body>
            </Card>
        </div>)}
    </div>)
}


export default ShowChannel