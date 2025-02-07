

export default function SubPagesLayout({children}) {
    return (
        <main className="flex min-h-screen h-full w-full flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20 relative">
            {children}
        </main>
    );
}
