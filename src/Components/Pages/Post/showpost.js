import {Card, Button} from "react-bootstrap";

function ShowPost(){

    return <div style={{ display: "flex", justifyContent: "center", padding: "40px"}}>
        <Card style={{ width: '50rem', border: "1px black solid", padding: "10px"}}>
            <Card.Body>
                <Card.Title style={{fontWeight: 700}}>Smog in lucht</Card.Title>
                <Card.Text>
                    Het is ongelooflijk hoeveel smog ik tegenwoordig in de lucht vindt. Is dit normaal?
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
}

export default ShowPost;