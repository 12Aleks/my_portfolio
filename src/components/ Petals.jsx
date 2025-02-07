import clsx from "clsx";

const Petals = () => {
    return (
        <div className="fixed z-20 h-[550px] w-[350px] flex items-center justify-center">
            <div className={clsx( 'flex items-center justify-center relative top-20 left-0 w-72 h-80')}>
                <div className="absolute top-10 left-10 w-1 h-1 bg-pink-50 opacity-0 rotate-45 animate-petals"
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '8s, 4s', animationDelay: '0.5s, 0s'}}></div>

                <div className="absolute top-10 left-20 w-1 h-1 bg-pink-100 opacity-0 rotate-45 animate-petals "
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '10s, 5s', animationDelay: '1s, 0.5s'}}></div>

                <div className="absolute top-10 left-32 w-1 h-1 bg-pink-200 opacity-0 animate-petals"
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '7s, 3.5s', animationDelay: '1.5s, 1s'}}></div>

                <div className="absolute top-10 left-40 w-1 h-1 bg-pink-100 opacity-0 rotate-45 animate-petals"
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '10s, 6s', animationDelay: '2s, 1.5s'}}></div>

                <div className="absolute top-10 left-52 w-1 h-1 bg-pink-300 opacity-0 rotate-90 animate-petals"
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '6s, 3s', animationDelay: '2.5s, 2s'}}></div>

                <div className="absolute top-10 left-60 w-1 h-1 bg-pink-100 opacity-0 rotate-12 animate-petals"
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '8.5s, 4.5s', animationDelay: '3s, 2.5s'}}></div>

                <div className="absolute top-10 left-56 w-1 h-1 bg-pink-100 opacity-0 rotate-3 animate-petals"
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '9.5s, 5.5s', animationDelay: '3.5s, 3s'}}></div>

                <div className="absolute top-10 left-24 w-1 h-1 bg-pink-50 opacity-0 rotate-90 animate-petals"
                     style={{borderRadius: '50% 50% 50% 0', animationDuration: '7.5s, 4s', animationDelay: '4s, 3.5s'}}></div>
            </div>
        </div>
    );
};

export default Petals;