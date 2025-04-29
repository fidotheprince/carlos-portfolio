import React from 'react';

const NavigationBar: React.FC = () => {
    return (
        <nav className="py-4 mb-8">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-300 hover:text-[#6D14FF] transition-colors">Projects</a>
                    <a href="#" className="text-gray-300 hover:text-[#6D14FF] transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-300 hover:text-[#6D14FF] transition-colors">Resume</a>
                    <a href="#" className="text-gray-300 hover:text-[#6D14FF] transition-colors">GitHub</a>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;