import React, { useEffect, useState } from 'react';

import "./css/main.css";

function fetchChoice() {
  const choices = [
    {

      title : "chinese",
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

function displayChoice() {

  let choice = fetchChoice();
  
  let takeawayValue = document.getElementById("takeaway--value");

  takeawayValue.innerText = choice.title;
  document.getElementsByTagName("body")[0].style.backgroundImage = `url(${choice.background})`

}

export default function App() {

  useEffect(displayChoice)

  return (

    <div className="wrapper">

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
            </div>
            <div id="button--spin-wrapper">
              <button type="button" className="button--spin" onClick={displayChoice}>Spin</button>
            </div>
          </div>
        </div>

      </div>

    </div>

  );
}