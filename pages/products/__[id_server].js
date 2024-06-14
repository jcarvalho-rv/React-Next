import Link from "next/link";

// cria as páginas de forma dinâmica, através do ID obtido do URL, mas como trata a página do lado do servidor, escreve a info no HTML, logo é bom para o SEO, mas pode estrangular o site, caso existam milhares de acessos, logo pedidos ao servidor
export async function getServerSideProps(context) {
    const id_server = context.query.id_server;

    return {
        props: {
            id: id_server
        }
    };
}

function Products(props) {

    return (
        <div>
            <div>
                <Link href="/" legacyBehavior>
                    <a>Aceder à página HOME</a>
                </Link>
            </div>
            <br></br>
            <div>Id do produto: {props.id} </div>
        </div>
    );
}

export default Products;