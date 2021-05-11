// import logo from './logo.svg';
import './App.css';

import Ticket from './Components/Ticket.js';
import TicketBoard from './Components/TicketBoard.js';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Ticket title = 'BLA'/>
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
    return (
      <div className="App">
        <header className="App-header">
        <img src="/favicon.png" className="App-logo" alt="logo" />
        <Ticket title = 'Mr Piggy'/>
        <TicketBoard/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
        </header>
      </div>
    );
  }


export default App;
