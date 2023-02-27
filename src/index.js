import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="center">
      <h1>BaseRock</h1>

      <div className="contract-address">
        <p className="highlighted-mega"><a href="https://opensea.io/collection/baserock" target="_blank">Live on Opensea</a></p>
        <p className="highlighted">Contract Address:</p>
        <p><a href="https://etherscan.io/address/0x26a65db78c34291bf272d5eab441b4dda88da9eb" target="_blank">0x26a65db78c34291bf272d5eab441b4dda88da9eb</a></p>
      </div>

      <img className="rockImage" src="/rock.png" alt="rock" />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
