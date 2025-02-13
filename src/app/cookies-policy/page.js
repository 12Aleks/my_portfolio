import Link from "next/link";

export default function CookiesPolicy() {
    return (
        <div className="h-full min-h-screen flex items-center justify-center">
            <div className="max-w-4xl my-24 mx-3 px-4 py-8 text-gray-800 bg-white rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Polityka używania plików cookies</h1>
                <p className="mb-4 text-sm 2xl:text-lg">
                    Używamy plików cookies w celu poprawy funkcjonalności naszej strony. Pliki cookies pomagają nam analizować,
                    jak użytkownicy wchodzą w interakcję z naszą stroną i pozwalają na jej ulepszanie. Cookies mogą być również
                    używane w celach marketingowych oraz personalizacji treści.
                </p>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">Jakie pliki cookies używamy</h2>
                <ul className="list-disc ml-6 mb-4 text-sm 2xl:text-lg">
                    <li>Niezbędne pliki cookies (np. do autentykacji użytkowników).</li>
                    <li>Analityczne pliki cookies (np. do analizy ruchu za pomocą Google Analytics).</li>
                    <li>Pliki cookies do ustawień i personalizacji (np. zapisywanie języka, preferencji użytkownika).</li>
                    <li>Pliki cookies marketingowe (np. do wyświetlania spersonalizowanych reklam).</li>
                </ul>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">Jak zarządzać plikami cookies</h2>
                <p className="mb-4 text-sm 2xl:text-lg">
                    W każdej chwili możesz zmienić ustawienia plików cookies w swojej przeglądarce lub skorzystać z opcji zarządzania
                    cookies dostępnych na naszej stronie (jeśli taka funkcjonalność została udostępniona).
                </p>
                <p className="mb-4 text-sm 2xl:text-lg">
                    Jeśli chcesz dowiedzieć się więcej o tym, jak przetwarzamy dane, zapoznaj się z naszą <Link href="/privacy-policy" className="text-blue-500">polityką prywatności</Link>.
                </p>
            </div>
        </div>
    );
}
