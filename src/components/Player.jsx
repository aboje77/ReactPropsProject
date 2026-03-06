// Importing Card and ListGroup components from react-bootstrap library
// These components help us easily create styled UI elements using Bootstrap
import { Card, ListGroup } from 'react-bootstrap';

// Creating a functional React component called Player
// The component receives props and uses destructuring to extract values
// Default values are provided in case no props are passed
const Player = ({
        name = "none",          // Player's name (default: "none")
        team = "none",          // Player's team name
        nationality = "none",   // Player's country
        jerseyNumber = 0,       // Player's jersey number
        age = 0,                // Player's age
        imageUrl = "none"       // URL of the player's image
   }) => {

  // The component returns JSX that describes the UI
  return (
    <div>
      {/* Bootstrap Card component used to display player information */}
      <Card style={{ width: '18rem', borderRadius: '10px', margin: '10px' }}>

        {/* Displays the player image at the top of the card */}
        <Card.Img variant="top" src={imageUrl} />

        {/* Card body contains the main content */}
        <Card.Body>

          {/* Displays the player's name */}
          <Card.Title>{name}</Card.Title>

          {/* Short description text */}
          <Card.Text>
            One of the best football players in the world
          </Card.Text>

        </Card.Body>

        {/* ListGroup displays structured details about the player */}
        <ListGroup className="list-group-flush">

          {/* Display player's team */}
          <ListGroup.Item>Team: {team}</ListGroup.Item>

          {/* Display player's nationality */}
          <ListGroup.Item>Nationality: {nationality}</ListGroup.Item>

          {/* Display player's jersey number */}
          <ListGroup.Item>Jersey Number: {jerseyNumber}</ListGroup.Item>

          {/* Display player's age */}
          <ListGroup.Item>Age: {age}</ListGroup.Item>

        </ListGroup>

      </Card>
    </div>
  )
}

// Exporting the Player component so it can be used in other files
export default Player