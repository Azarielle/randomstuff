import React from 'react';
import ReactDOM from 'react-dom';
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
    constructor(props) {
        super(props)
        this.state = {
            shouldOverlay: false
        }
    }


    handleBackgroundDisplayClick() {
        this.setState({ shouldOverlay: true })
    }

    handleModalDisplayClick() {
        this.setState({ shouldOverlay: false })
    }

    render() {
        const backgroundDisplay = <div
            className="card-grid-item"
            onClick={() => this.handleBackgroundDisplayClick()}
        >
            <img src={card2} width={230} height={330} />
        </div >

        const modalDisplay =
            <div className="active-display" onClick={() => { this.handleModalDisplayClick() }}>
                <div className="active-card-modal">
                    <img src={card2} alt="this is active" />
                </div>
            </div >


        // if (this.state.shouldOverlay) 
        // { return modalDisplay } 
        //  else {return  null}
        return (
            <div>
                {backgroundDisplay}
                {this.state.shouldOverlay ? modalDisplay : null}
            </div>
        )
    }
}


class DisplayCards extends React.Component {
    renderCards() {
        const cardArr = []
        for (let i = 0; i < 9; i++) {
            cardArr.push(<Card
                key={i}
            />)
        }
        return cardArr
    }

    render() {
        return (
            <div className="card-container">
                <div className="card-grid">
                    {this.renderCards()}
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