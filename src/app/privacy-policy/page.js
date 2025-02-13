export default function PrivacyPolicy() {
    return (
        <div className="h-full min-h-screen flex items-center justify-center">
            <div className="max-w-4xl my-24  mx-3  px-4 py-8 text-gray-800 bg-white rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Polityka Prywatności</h1>
                <p className="text-sm 2xl:text-lg mb-4">
                    Szanujemy Twoją prywatność i zobowiązujemy się do ochrony Twoich danych osobowych. Niniejsza
                    Polityka Prywatności wyjaśnia, jak zbieramy, wykorzystujemy i chronimy Twoje dane podczas
                    korzystania z naszej strony internetowej.
                </p>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">1. Jakie dane zbieramy</h2>
                <p className="text-sm 2xl:text-lg mb-4">
                    Zbieramy następujące rodzaje danych:
                </p>
                <ul className="text-sm 2xl:text-lg list-disc ml-6 mb-4">
                    <li>Dane techniczne: adres IP, przeglądarka, urządzenie, a także dane analityczne z Google Analytics.</li>
                </ul>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">2. Cele zbierania danych</h2>
                <p className="text-sm 2xl:text-lg mb-4">
                    Twoje dane wykorzystujemy do:
                </p>
                <ul className="text-sm 2xl:text-lg list-disc ml-6 mb-4">
                    <li>Analizy ruchu na stronie za pomocą Google Analytics w celu udoskonalenia strony.</li>
                    <li>Poprawy jakości i funkcjonalności naszej strony internetowej.</li>
                </ul>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">6. Wykorzystanie plików cookies</h2>
                <p className="text-sm 2xl:text-lg mb-4">
                    Nasza strona internetowa wykorzystuje pliki cookies w celu analizy ruchu za pomocą Google Analytics. Możesz
                    skonfigurować przeglądarkę w taki sposób, aby odrzucała pliki cookies, jednak może to wpłynąć na
                    funkcjonalność strony.
                </p>
                <h2 className="text-lg 2xl:text-xl font-semibold mb-2">8. Zmiany w Polityce Prywatności</h2>
                <p className="text-sm 2xl:text-lg mb-4">
                    Zastrzegamy sobie prawo do aktualizacji niniejszej polityki. Wszelkie zmiany będą publikowane na tej
                    stronie, w tym w odniesieniu do wykorzystywania narzędzi analitycznych takich jak Google Analytics.
                </p>
            </div>
        </div>
    );
}
