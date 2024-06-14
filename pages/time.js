import { useState, useEffect } from 'react';
import Link from "next/link";
import apiTime from "./api/time";

function Time(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    // load data from ./api/time
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/time');
            const json = await res.json();
            setData(json);
        }

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <div>
                <div>
                    <h3>TIME</h3>
                    <Link href="/" legacyBehavior>
                        <a>Aceder à página HOME</a>
                    </Link>
                </div>
            </div>
            <br></br>
            <div>
                <div>{dynamicDateString} (dinâmico)</div>
                <div>{props.staticDateString} (estático)</div>
            </div>
            <br></br>
            <div>
                <div><b>Resultado da API Time</b></div>
                <div><b>Data atual:</b> {data.date}</div>
                <div><b>Data Feriado:</b> {data.data}</div>
                <div><b>Nome Feriado:</b> {data.nome}</div>
            </div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}
export default Time;