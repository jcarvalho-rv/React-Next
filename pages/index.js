import { useState } from "react";
import Link from "next/link";

function Home() {
    return (
        <div>
            <div>
                <h3>HOME</h3>
                <div>
                    <Link href="/about" legacyBehavior>
                        <a>Aceder à página ABOUT</a>
                    </Link>
                </div>
                <div>
                    <Link href="/time " legacyBehavior>
                        <a>Aceder à página TIME</a>
                    </Link>
                </div>
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