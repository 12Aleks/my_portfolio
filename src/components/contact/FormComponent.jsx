"use client"
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const sendEmail = (params) => {
        const toastId = toast.loading('Sending email...');
        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 10000
                }
            })
            .then(() => {
               toast.success('Twój e-mail został wysłany!', {
                   id: toastId
               });
                reset(); // Wyczyść formularz po pomyślnym wysłaniu
            })
            .catch((error) => {
                toast.error('Podczas wysyłania e-maila wystąpił błąd, spróbuj ponownie później!', {
                    id: toastId
                });
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
        <>
        <Toaster richColors={true}/>
            <motion.form
                variants={container}
                initial="hidden"
                animate="show"
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg w-full flex flex-col items-center justify-center space-y-4 2xl:space-y-5 3xl:space-y-6"
            >
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Imię i nazwisko"
                        {...register("name", {
                            required: 'To pole jest obowiązkowe!',
                            minLength: {
                                value: 3,
                                message: "Twój tekst jest za krótki, minimalna długość to 3 znaków."
                            },
                            maxLength: {
                                value: 60,
                                message: "Twój tekst jest za długi, maksymalna długość to 60 znaków."
                            }
                        })}
                        className="text-white appearance-none w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
                    />
                    {
                        errors.name && <span className="text-amber-600 self-start inline-block mt-1">{errors.name.message}</span>
                    }
                </div>
                <div className="w-full">
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "To pole jest obowiązkowe!",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Podaj poprawny adres email."
                            },
                            minLength: {
                                value: 3,
                                message: "Twój tekst jest za krótki, minimalna długość to 3 znaki."
                            }
                        })}
                        className="text-white appearance-none w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
                    />
                    {
                        errors.email &&
                        <span className="text-amber-600 self-start inline-block mt-1">{errors.email.message}</span>
                    }
                </div>
                <div className="w-full">
            <textarea
                placeholder="Wiadomość"
                {...register("message", {
                    required: 'To pole jest obowiązkowe!',
                    minLength: {
                        value: 20,
                        message: "Twój tekst jest za krótki, minimalna długość to 20 znaków."
                    },
                    maxLength: {
                        value: 400,
                        message: "Twój tekst jest za długi, maksymalna długość to 400 znaków."
                    }
                })}
                className="h-32 2xl:h-32 3xl:h-40 appearance-none w-full p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600 text-white"
            />
                    {
                        errors.message &&
                        <span className="text-amber-600 self-start inline-block mt-0.5">{errors.message.message}</span>
                    }
                </div>
                <input
                    type="submit"
                    disabled={isSubmitting}
                    value={isSubmitting ? "Wysyłanie..." : "Wyślij"}
                    className={`cursor-pointer px-10 py-3 rounded-md shadow-lg border border-amber-700 transition-all focus:outline-none duration-500 ${
                        isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-amber-600 hover:bg-amber-700 "
                    }`}
                />
            </motion.form>
        </>
    )
        ;
};

export default FormComponent;
