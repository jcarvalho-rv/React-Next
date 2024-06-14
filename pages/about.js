import Link from "next/link";

function About() {
    return (
        <div>
            <div>
                <h3>ABOUT</h3>
                <Link href="/" legacyBehavior>
                    <a>Aceder à página HOME</a>
                </Link>
            </div>
        </div>
    )
}

export default About