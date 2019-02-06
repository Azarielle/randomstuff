import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-resizer';
import './index.css';
import card2 from './assets/card2.png';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <h1> Yu Gi Oh </h1>
            </div>
        )
    }
}
class Card extends React.Component {
    render() {
        return (
            <div
                className="card-grid-item"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
                <img src={card2} width={230} height={330} />
            </div >
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
            activeCard: false
        };
    }
    handleClick() {
        let activeCard = !this.state.activeCard;
        activeCard = this.setState({ activeCard: <ActiveCard /> })

    }

    renderCard() {
        const cardArr = []
        for (let i = 0; i < 9; i++) {
            cardArr.push(<Card
                key={i}
                value={this.state.activeCard}
                onClick={() => this.handleClick(i)}
            />)
        }

        return cardArr

    }
    render() {
        return (
            <div className="card-container">
                <div className="card-grid">
                    {this.renderCard()}
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

ReactDOM.render(
    <App />,
    document.getElementById('root')
);