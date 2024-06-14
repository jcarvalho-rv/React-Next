import Link from "next/link";

// cria as páginas de forma dinâmica, através do ID obtido do URL, mas obtendo apenas uma vez os IDs existentes na BD, vai indicar quais as páginas que devem ser criadas estaticamente no build, ficando assim todas as páginas estáticas no client-side, escrevendo a info no HTML, logo é bom para o SEO e sem estrangular o site, porque as páginas são estáticas e criadas pelo cliente
export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id_paths: '1'
            }
        },
        {
            params: {
                id_paths: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    //só para notar que a página só entra aqui a primeira vez, depois do next gerar a página estática não volta a entrar aqui (ex: id<> (1, 2)
    await delay(5000);

    const id_paths = context.params.id_paths;

    return {
        props: {
            id: id_paths
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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}