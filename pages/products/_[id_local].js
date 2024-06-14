import { useRouter } from "next/router";
import Link from "next/link";

// cria as páginas de forma dinâmica, através do ID obtido do URL, mas é mau para o SEO, porque não escreve a info no HTML
function Products(props) {
    const router = useRouter();
    const id = router.query.id_local;

    return (
        <div>
            <div>
                <Link href="/" legacyBehavior>
                    <a>Aceder à página HOME</a>
                </Link>
            </div>
            <br></br>
            <div>Id do produto: {id} </div>
        </div>
    );
}

export default Products;