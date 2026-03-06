// Importing Bootstrap's main CSS file
// This allows us to use Bootstrap styles and components in our React app
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing specific React-Bootstrap components
// Card and ListGroup can be used to create styled UI elements
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// Importing custom CSS file for additional styling of the application
import './App.css'

// Importing the PlayerList component
// This component will display the list of football players
import PlayerList from './components/PlayerList';

// Creating the main App component
// This is the root component of the React application
function App() {

  // The return statement contains JSX which defines what the UI will display
  return (
    <>
      {/* 
        React Fragment (<> </>) is used here so we don't add an extra div 
        to the DOM. It simply groups elements together.
      */}

      {/* Rendering the PlayerList component */}
      {/* PlayerList will internally render multiple Player cards */}
      <PlayerList />

    </>
  )
}

// Exporting the App component so it can be used in main.jsx or index.js
// This is the entry component for the entire React application
export default App
