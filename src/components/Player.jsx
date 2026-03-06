import { Card, ListGroup } from 'react-bootstrap';

const Player = ({
        name = "none",
        team = "none",
        nationality = "none",
        jerseyNumber = 0,
        age = 0,
        imageUrl= "none"

   }) => {
  return (
    <div>
           <Card style={{ width: '18rem', borderRadius: '10px', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          0ne of the best football players in the world
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Team: {team}</ListGroup.Item>
        <ListGroup.Item>Nationality: {nationality}</ListGroup.Item>
        <ListGroup.Item>Jersey Number: {jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>Age: {age}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default Player
