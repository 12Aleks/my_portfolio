"use client"
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner';
import { motion } from "framer-motion";
import {useTranslations} from "next-intl";


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
    const t = useTranslations("contact");
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
                        placeholder={t('name')}
                        {...register("name", {
                            required: `${t('required')}`,
                            minLength: {
                                value: 3,
                                message: `${t('messageMin')}`
                            },
                            maxLength: {
                                value: 60,
                                message: `${t('messageMax')}`
                            }
                        })}
                        className="text-white appearance-none w-full p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
                    />
                    {
                        errors.name && <span className="text-amber-600 self-start inline-block mt-1">{errors.name.message}</span>
                    }
                </div>
                <div className="w-full">
                    <input
                        type="email"
                        placeholder={t('email')}
                        {...register("email", {
                            required: `${t('required')}`,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: `${t('messageEmail')}`
                            },
                            minLength: {
                                value: 3,
                                message: `${t('messageMin')}`
                            }
                        })}
                        className="text-white appearance-none w-full p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
                    />
                    {
                        errors.email &&
                        <span className="text-amber-600 self-start inline-block mt-1">{errors.email.message}</span>
                    }
                </div>
                <div className="w-full">
            <textarea
                placeholder={t('message')}
                {...register("message", {
                    required: `${t('required')}`,
                    minLength: {
                        value: 20,
                        message: `${t('messageMinText')}`
                    },
                    maxLength: {
                        value: 400,
                        message: `${t('messageMaxText')}`
                    }
                })}
                className="h-32 2xl:h-32 3xl:h-40 appearance-none w-full p-2  shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600 text-white"
            />
                    {
                        errors.message &&
                        <span className="text-amber-600 self-start inline-block mt-0.5">{errors.message.message}</span>
                    }
                </div>
                <input
                    type="submit"
                    disabled={isSubmitting}
                    value={isSubmitting ? `${t('statusStart')}...` : `${t('statusEnd')}`}
                    className={`cursor-pointer text-center border border-amber-500 text-amber-500 px-6 py-2 uppercase  hover:text-black transition duration-200 ${
                        isSubmitting ? "bg-gray-400 cursor-not-allowed" : "hover:bg-amber-600"
                    }`}
                />
            </motion.form>
        </>
    )
        ;
};

export default FormComponent;
