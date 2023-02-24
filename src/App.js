import React, { useState } from "react";
//import './styles.css'
import React from 'react'
const Character = () =>{
  const caracter = {
  backgroundColor:"#DEC5E3",
  textAling: "center"
}
const boton = {
  border: "none",
  borderRadius: "9px",
  padding: "5px 20px",
  margin: "5px",
  fontWeight: "bold",
  cursor: "pointer"
}
}
function App() {
  //Seccion Js
//Hook se declaran siempre hasta arriba, deben tener prioridad
//Un hook siempre va a empezar con la palabra "use"
//El useState nos va a permitir guardar informacion en la memoria de nuestro componente
//Valor sera igual a la variable donde estará el dato almacenado
//setValor es la función con la que guardamos el valor de valor
//Lo que hay entre parentesís el useState es opcional ya que es el valor inicial de Hook
const [valor, setValor] = useState([]);
const [input, valorInput] = useState("");
const [select, selectVal] = useState("");
const valSelect = (e) =>{
  if((e.target.value)=== "id"){
    selectVal(e.target.value);
  }
  if((e.target.value)=== "titulo"){
    selectVal(e.target.value);
  }
  if((e.target.value)=== "cuerpo"){
    selectVal(e.target.value)
  }
}
const txtInput = (e) => {
  valorInput(e.target.value);
}
const mostrarDatos = async () => {
  if (select === 'cuerpo'){
    const dato = await todosdatos();
    const datosFiltrados = dato.filter( e => e.body.includes(input));
    console.log(datosFiltrados)
    setValor(datosFiltrados)
  }
  if (select === 'titulo'){
    const dato = await todosdatos();
    const datosFiltrados = dato.filter( e => e.title.includes(input));
    console.log(datosFiltrados) 
    setValor(datosFiltrados)
  }
  if(select=== 'id'){
    const dato = await todosdatos (input);
    const datosFiltrados = dato.find(e => e.id.toString() === input);
    console.log([datosFiltrados])
    setValor([datosFiltrados])
  }
} 

const eliminar = () =>{
  setValor([]);
} 


const todosdatos = () =>{
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(response => response.json())
  .then(json => {
      console.log(json);
      return json
      
  })
}
/*const  datos = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(json => {
      console.log(json)
      return json
  })
}*/
//HTML
  return (
    <div className="App">
      <div className="cuadro">
        <h1 className="titulo">Buscador de Posts:</h1>
            <select id="select" defaultValue={''} onClick= {(e) => valSelect(e)} >
                <option value = "" disabled>Opciones</option>
                <option value="id">ID</option>
                <option value="titulo" >TITLE</option>
                <option value="cuerpo">BODY</option>
            </select>
            <input id="texto" type="text" onChange={(e) => txtInput(e)} ></input>
            <button className="boton1" type="submit" onClick= {() => mostrarDatos()}>Buscar</button>
            <button className="boton2" type="reset" onClick={ () => eliminar()}>Eliminar</button> 
      </div>    
        {
          valor.map(e => (
            <span key={e.id}>
              <p>{"•Id " + e.id}</p>
              <p>{"•Title " + e.title}</p>
              <p>{"•Body " + e.body}</p>
            </span>
          ))
        }  
      
    </div> 
    );
  }

export default App;
