import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div id={'contact'} className="py-8 flex justify-center bg-gradient-to-b from-[#6D14FF] to-black">
            <div className="border border-white w-[300px] flex flex-col items-center gap-4 p-6">
                <h3 className="text-xl font-bold text-white">Contact Me</h3>
                <form className="w-full flex flex-col items-center gap-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        className="w-full p-3 border border-gray-300 rounded"
                        required
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 border border-gray-300 rounded"
                        required
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded"
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        className="bg-[#6D14FF] text-white py-3 px-6 rounded hover:bg-purple-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;