import "./App.css";
import Logo from "./img/logo.webp";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import React,{useState} from "react";
import {evaluate} from 'mathjs'

function App() {
const [input, setInput] = useState("")

const concatenacionNumeros = (valor) => {
  setInput(input + valor)
}

const reset = () => {
  setInput("")
}

const calcularResultado = () => {
  if(input){
    setInput(evaluate(input))
  }
  else{
    alert("Por favor ingrese un valor")
  }
}

  return (
    <div className="App">
      <header className="header">
        <div className="contenedor-logo">
          <h1 className="titulo-logo">Calculara Interactiva</h1>
          <img src={Logo} alt="imagen logo" className="imagen-logo" />
        </div>
      </header>
      <section className="session-calculadora">
        <div className="contenedor-calculadora">
          <Pantalla input={input}/>
          <div className="fila">
            <Boton manejadorClick={concatenacionNumeros}>1</Boton>
            <Boton manejadorClick={concatenacionNumeros}>2</Boton>
            <Boton manejadorClick={concatenacionNumeros}>3</Boton>
            <Boton manejadorClick={concatenacionNumeros}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejadorClick={concatenacionNumeros}>4</Boton>
            <Boton manejadorClick={concatenacionNumeros}>5</Boton>
            <Boton manejadorClick={concatenacionNumeros}>6</Boton>
            <Boton manejadorClick={concatenacionNumeros}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejadorClick={concatenacionNumeros}>7</Boton>
            <Boton manejadorClick={concatenacionNumeros}>
              8</Boton>
            <Boton manejadorClick={concatenacionNumeros}>9</Boton>
            <Boton manejadorClick={concatenacionNumeros}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejadorClick={calcularResultado}>=</Boton>
            <Boton manejadorClick={concatenacionNumeros}>0</Boton>
            <Boton manejadorClick={concatenacionNumeros}>.</Boton>
            <Boton manejadorClick={concatenacionNumeros}>/</Boton>
          </div>
          <div className="fila">
            <BotonClear reset={reset}>Clear</BotonClear>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
