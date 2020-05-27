import React from 'react';

import "./css/main.css";

function fetchChoice() {
  const choices = [
    {

      title: "chinese",
      background: "./img/chinese-background.jpg"
    },
    {
      title: "indian",
      background: "./img/indian-background.jpg"
    },
    {
      title: "fish & chips",
      background: "./img/fishandchips-background.jpg"
    },
    {
      title: "pizza",
      background: "./img/pizza-background.jpg"
    }
  ];

  return choices[Math.floor(Math.random() * choices.length)];
}

export default class App extends React.Component {

  constructor(props) {
    super(props);

    let initChoice = fetchChoice();

    this.state = {
      takeawayValue: initChoice.title,
      backgroundValue: initChoice.background
    };

    this.displayChoice = this.displayChoice.bind(this);
  }

  componentDidMount() {
    this.displayChoice();
  }

  displayChoice() {

    let choice = fetchChoice();

    this.setState(
      {
        takeawayValue: choice.title,
        backgroundValue: choice.background
      });

  }

  render() {

    let { takeawayValue, backgroundValue } = this.state;

    return (

      <div className="wrapper" style={{ backgroundImage: `url(${backgroundValue})` }}>

        <div id="wrapper--inner-overlay"></div>

        <div className="wrapper--inner-content">

          <div className="content--title">
            <div className="content--title-inner">
              <h1>takeaway dice</h1>
              <h4>What will you be having tonight</h4>
            </div>
          </div>

          <div className="content--dice">
            <div className="content--dice-inner">
              <div id="takeaway--value">
                {takeawayValue}
              </div>
              <div id="button--spin-wrapper">
                <button type="button" className="button--spin" onClick={this.displayChoice}>Spin</button>
              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}