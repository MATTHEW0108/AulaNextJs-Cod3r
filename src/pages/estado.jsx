import { useState } from "react";
import Lauyout from "../components/layout";


export default function Estado(){
    //useState, use o estado de uma variável para colocar na interface do usuário
    //destructuring: useState é um array com 2 posições, o primeiro elemento vai para "number" e o segundo elemento vai para a função "changeNumber"
    //o primeiro valor do array é o próprio valor do "numeber" e o segundo valor é a função responsável por alterar o valor
    const [number, changeNumber] = useState(0) //react hooks 

    function increment(){
        changeNumber(number + 1);

    }
    return(
        <Lauyout titulo = "Componente com estado">
            <div>{number}</div>
            <button onClick={increment}>Incrementar um número</button>
        </Lauyout>
    )
}