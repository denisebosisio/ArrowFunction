import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  mensagem = () => {
    return (
      <div>
        <h2>Be stronger than your strongest excuse.</h2>
        <h3>Seja mais forte do que sua desculpa mais forte.</h3>
      </div>
    );
  };

  numero = (number) => {
    return number * 2;
  };

  render() {
    return (
      <>
        {this.mensagem()}
        {this.numero(55)}
      </>
    );
  }
}
