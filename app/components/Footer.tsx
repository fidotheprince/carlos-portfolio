import React from 'react';

export default function Footer() {
    return (
        <footer className="py-6 mt-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div>
                    <h3 className="text-xl font-bold text-white">Connect:</h3>
                    <div className="flex flex-col space-y-4 mt-3 mb-6">
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Resume
                        </a>
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Projects</h3>
                    <div className="flex flex-col space-y-4 mt-3 mb-6">
                        <a 
                            href="https://linkedin.com/in/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Shoppify Theme App Extension
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Landing Page
                        </a>
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            AI Image Diffusion / Story Board
                        </a>
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Shopping Cart
                        </a>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center mt-8 mb-4">
                        <img 
                            src="/logo-carlos.png" 
                            alt="Logo" 
                            className="h-16 w-auto" 
                        />
                    </div>
                </div>
                <p className="text-gray-400 text-center">© {new Date().getFullYear()} All rights reserved</p>
            </div>
        </footer>
    );
}