import player from "../players";
import Player from "./Player";

const PlayerList = () => {
  return (
        <div className="echo">
      {player.length > 0 ? (
        player.map((player, index) => (
          <Player
            key={index}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageUrl={player.imageUrl}
          />
        ))
      ) : (
        <p>No players found</p>
      )}
    </div>

  );
};

export default PlayerList
