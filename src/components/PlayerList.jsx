// Importing the array of players data from the players file
// This file most likely contains an array of player objects
import player from "../players";

// Importing the Player component which is used to display each player card
import Player from "./Player";

// Creating a functional React component called PlayerList
// This component is responsible for displaying a list of Player components
const PlayerList = () => {

  return (

    // Container div with a className "echo"
    // This can be used for styling the list using CSS
    <div className="echo">

      {/* 
        Checking if the players array contains elements.
        If player.length > 0, it means there are players available,
        so we display them using the map() method.
      */}
      {player.length > 0 ? (

        // map() loops through each player object in the array
        // and returns a Player component for each one
        player.map((player, index) => (

          // Rendering the Player component and passing props to it
          <Player
            key={index} // React uses key to identify each element in a list for efficient updates

            // Passing player properties as props to the Player component
            name={player.name}                 // Player's name
            team={player.team}                 // Player's team
            nationality={player.nationality}   // Player's nationality
            jerseyNumber={player.jerseyNumber} // Player's jersey number
            age={player.age}                   // Player's age
            imageUrl={player.imageUrl}         // Player's image URL
          />
        ))

      ) : (

        // If the players array is empty, this message will display
        <p>No players found</p>
      )}

    </div>
  );
};

// Exporting PlayerList component so it can be used in other parts of the app
export default PlayerList;