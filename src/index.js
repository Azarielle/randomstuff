import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-resizer';
import './index.css';
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import card5 from './assets/card5.png'

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-bar"></div>
        )
    }
}
class CardPop extends React.Component {
    render() {
        return (
            <div className="card-grid-item">
                <img src={card5} alt="this is a card"
                    width={230} height={330}
                    // TODO: Handle on Click function to a component
                    onClick={function () { alert('click'); }}
                />
            </div>
        )
    }
}

class BackgroundPop extends React.Component {

    render() {
        return (
            <div className="card-container">
                <div className="card-grid">
                    <CreateCards />
                </div>

            </div>
        )
    }
}

function App() {
    return (
        <div>
            <NavBar />
            <BackgroundPop />
        </div>
    )
}

// TODO: Iterate over each card id. (card2, card3, card5, etc) 2 3 5 2 3 5 2 3 5
// Parameters == Props?
function CreateCards() {
    let cardArr = []

    for (let i = 0; i < 50; i++) {
        cardArr.push(<CardPop />)
    }
    return cardArr
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
