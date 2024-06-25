import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

export default function Contact() {
    const [ sending, setSending ] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(prev => !prev)
        emailjs
            .sendForm('service_wosqvbk', 'template_qgtb7ea', form.current, {
                publicKey: 'qAThYA3xGs86bsKax',
            })
            .then(
                () => {
                    e.target.reset();
                    console.log('SUCCESS!');
                    setSending(prev => !prev)

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div  id="contact">
            {/* Contact 1 */}
            <div className="w-full max-w-5xl my-0 mx-auto text-center mt-5">
                <h1 className="text-4xl mb-4">Contact Me</h1>
                <div className="text-sm mb-4">
                    Please fill out the form below to discuss any work opportunities.
                </div>
                <form ref={form} onSubmit={sendEmail} className="text-sm max-w-3xl mx-auto">
                    <input type="text" name="from_name" className="py-3 px-4 rounded w-full mt-3 bg-zinc-800 placeholder:text-slate-200 outline-none" placeholder="Your Name" />
                    <input type="text" name="from_email" className="py-3 px-4 rounded w-full mt-3 bg-zinc-800 placeholder:text-slate-200 outline-none" placeholder="Your Email" />
                    <textarea name="message" className="py-3 px-4 rounded w-full mt-3 bg-zinc-800 placeholder:text-slate-200 outline-none" placeholder="Your Message" rows="5"></textarea>
                    <button type={`${sending ? 'button' : 'submit'}`} value='Send' className={`py-4 px-12 mt-5 font-bold rounded-xl ${sending ? `bg-gray-500 cursor-default` : `bg-white text-[#333] hover:text-white hover:bg-purple-800 cursor-pointer`}`}>
                        {sending ? "Sending..." : "Submit"}
                        
                    </button>
                </form>
            </div>
            {/* contact 2 */}
            <div id="contact" className="border-b border-neutral-900 pb-20">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className="my-10 text-center text-4xl"
                >
                    Get in Touch
                </motion.h2>
                <div className="text-center tracking-tighter">
                    <motion.a
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        href="tel:+84889012927"
                        className="block"
                    >
                        {CONTACT.phoneNo}
                    </motion.a>
                    <motion.a
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        href="mailto:tridev27605@gmail.com"
                        className="block mt-3"
                    >
                        {CONTACT.email}
                    </motion.a>
                </div>
            </div>
        </div>
    )
}