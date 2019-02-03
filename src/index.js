import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import card5 from './assets/card5.png'

class CardPop extends React.Component {
    render() {
        return (
            <div className="display-card">
                <div className="card-item">
                    <img src={card2} alt="this is a card" />
                </div>
                <div className="card-item">
                    <img src={card3} alt="this is a card" />
                </div>
                <div className="card-item">
                    <img src={card5} alt="this is a card" />
                </div>
            </div>
        )
    }
}

class BackgroundPop extends React.Component {
    render() {
        return (
            <div className="display-window">
                <CardPop />
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <BackgroundPop />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);