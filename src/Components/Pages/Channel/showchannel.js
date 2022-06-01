import {Card, Button} from "react-bootstrap";


function ShowChannel(){


return(<div style={{display: "flex", justifyContent: "center", padding: "40px"}}>
    <Card style={{width: '50rem', border: "1px black solid", padding: "10px"}}>
        <Card.Body>
            <Card.Title style={{fontWeight: 1000}}>WAlk</Card.Title>
            <Card.Text>
                WAkker
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
</div>);
}

export default ShowChannel