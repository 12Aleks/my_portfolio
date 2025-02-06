"use client"
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const FormComponent = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const sendEmail = (params) => {
        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 10000
                }
            })
            .then(() => {
                console.log('SUCCESS!');
                reset(); // Wyczyść formularz po pomyślnym wysłaniu
            })
            .catch((error) => {
                console.log('FAILED...', error.text);
            });
    };

    const onSubmit = data => {
        const templateParams = {
            email: data.email,
            name: data.name,
            message: data.message,
        };
        sendEmail(templateParams);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg w-full flex flex-col items-center justify-center space-y-6"
        >
            <input
                type="text"
                placeholder="Imię i nazwisko"
                {...register("name", { required: true, minLength: 3 })}
                className="w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
            />
            <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
            />
            <textarea
                placeholder="Wiadomość"
                {...register("message", { required: true, maxLength: 256, minLength: 20 })}
                className="w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
            />
            <input
                type="submit"
                className="cursor-pointer px-10 py-3 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm text-md transition-all bg-amber-600 hover:bg-amber-700 focus:outline-none"
            />
        </form>
    );
};

export default FormComponent;
