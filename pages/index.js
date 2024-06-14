import { useState } from "react";

function Home() {
    return (
        <div>
            <div>
                <h3>Contador automático</h3>
            </div>
            <div>
                <Contador />
            </div>
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador+1); 
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Add</button>
        </div>
    )
}

export default Home