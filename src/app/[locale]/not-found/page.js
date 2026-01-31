import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "4rem" }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>

            <Link href="/">
                Go back home
            </Link>
        </div>
    );
}