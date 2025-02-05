export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full bg-transparent text-center text-gray-300 p-3 z-0 transition-all duration-300 ease-in-out">
            <p className="text-xs tracking-[0.2em]">
                © {new Date().getFullYear()} by Web Development Oleksii Koba wszelkie prawa zastrzeżone
            </p>
        </footer>
    );
}