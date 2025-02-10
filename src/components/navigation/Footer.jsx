export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full bg-transparent text-center p-3 z-0 transition-all duration-300 ease-in-out">
            <p className="text-xs font-light tracking-[0.12em] text-neutral-400">
                © {new Date().getFullYear()} by Web Development Oleksii Koba wszelkie prawa zastrzeżone
            </p>
        </footer>
    );
}