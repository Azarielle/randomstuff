import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-resizer';
import './index.css';
import card2 from './assets/card2.png';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar"></div>
        )
    }
}
class Card extends React.Component {
    render() {
        return (
            <div className="card-grid-item"
                onClick={() => { alert('Click'); }}
            >
                <img src={card2} width={230} height={330} />
            </div>
        )
    }
}

class ActiveCard extends React.Component {
    render() {
        return (
            <div className="active-card">
                <img src={card2} alt="this is active" />
            </div>
        )
    }
}


class DisplayCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createCards: CreateCards(),
        };
    }
    handleClick() {

    }
    render() {
        return (
            <div className="card-container">
                <div className="card-grid">
                    {this.state.createCards}
                </div>

            </div>
        )
    }

}

function App() {
    return (
        <div>
            <NavBar />
            <DisplayCards />
        </div>
    )
}

// TODO: Iterate over each card id. (card2, card3, card5, etc) 2 3 5 2 3 5 2 3 5
// Parameters == Props?
function CreateCards() {
    const cardArr = []

    for (let i = 0; i < 25; i++) {
        cardArr.push(<Card key={i} value={i} />)
    }

    return cardArr
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);