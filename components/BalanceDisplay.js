import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useEffect, useState } from "react"

export const BalanceDisplay = () => {
  const [balance, setBalance] = useState(0)
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  var Tpersonas;
  var Paga;
  var bal2, valor, valor2, VB;
  
  useEffect(() => {
    if (!connection || !publicKey) {
      return
    }

    connection.getAccountInfo(publicKey).then(info => {
      setBalance(info.lamports)
    })
  }, [connection, publicKey])

function table(){
try{
if(typeof document!== 'undefined'){
  valor=""; 
  
  var n=document.getElementById("personas").innerHTML;
  var input=document.getElementById("personas");
  
  input.addEventListener("input", function(event){
  valor=event.target.value;
  valor2=valor;
  console.log(valor);
})
const tabla = document.getElementById("tabla");
const tbody = tabla.querySelector("tbody");
var bal2= document.getElementById("balance").innerHTML

input.addEventListener("input", () => {
  // Limpiamos la tabla antes de volver a generarla
  tbody.innerHTML = "";

  // Obtenemos el valor del input y lo convertimos a un número entero
  const num = parseInt(input.value);

  // Generamos una fila para cada número del 1 al valor del input
  for (let i = 1; i <= num; i++) {
    // Creamos una nueva fila y la agregamos al tbody
    const row = document.createElement("tr");
    tbody.appendChild(row);

    // Creamos dos celdas para cada fila (número y su cuadrado)
    const numCell = document.createElement("td");
    const textCell = document.createElement("td");

    // Agregamos el número a la primera celda
    numCell.textContent = i;

    // Creamos un campo de entrada de texto para la segunda celda
    const input = document.createElement("input");
    input.type = "text";
    input.name = `texto-${i}`; // Establecemos un nombre para el campo de texto
    textCell.appendChild(input);

    // Agregamos las celdas a la fila
    row.appendChild(numCell);
    row.appendChild(textCell);
    bal2=balance
    console.log(bal2);
    VB=bal2/LAMPORTS_PER_SOL/valor;
    document.getElementById("VB").innerHTML=VB;
    
    
  }
});


}else{console.log("some");}
}catch(error){
  
  console.log(error);
}



}
  return ( 
   
    <div className="block text-sm font-medium text-gray-700">
      <p className="block text-sm font-medium text-gray-700">{publicKey ? `Cuenta: ${publicKey}` : ""}</p>
      <p className="block text-sm font-medium text-gray-700" id="balance" >{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL }` : ""}</p>
      <p className="block text-sm font-medium text-gray-700" id="VB">{publicKey? `Varianza de balance: ${VB}`:""}</p><br></br>
      <p>Number of employees  </p>
      <input type="number" id="personas" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" max={20}></input>
      <button className=" text-black px-3 py-2 rounded-md text-sm font-medium" onClick={table()}>Noc</button>
      <br></br>
      <br></br>
      <table id="tabla" className="border-separate border-spacing-2 border border-slate-400"> 
          <thead>
            <tr>
              <th className="border border-slate-300">Number<br/>of employees</th>
              <th className="border border-slate-300">Public Key (account)</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <svg className="animate-bounce w-6 h-6 ">
        </svg>
    </div>   
  )
}
