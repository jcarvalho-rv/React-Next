import Link from "next/link";

function Time(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

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