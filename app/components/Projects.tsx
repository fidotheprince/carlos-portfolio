import React from 'react';

interface ProjectsProps {
    recommendation: string;
}

const Projects: React.FC<ProjectsProps> = ({ recommendation }) => {
    return (
        <div id={'projects'} className="bg-[#6D14FF] flex flex-col items-center gap-2">
            <div className="pt-2 flex justify-center">
                <div className="p-2"> 
                    <img 
                        src="/carlos-cardenas-picture.jpeg" 
                        alt="Profile Image"
                        className="rounded-full w-[90px] h-[90px] object-cover border-2 border-white"
                    />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <span className="text-white">Carlos Cardenas</span>
                    <span className="text-white">Software Developer</span>
                </div>
            </div>
            <div className="pb-2">
                <p className="text-[18px] text-white w-[248px]">{recommendation}</p>
            </div>
            <div className="pb-2">
                <div className="bg-[url('/leopard-bg.png')] bg-cover bg-center text-white flex flex-col items-center justify-evenly gap-2 p-3 h-[750px]">
                    <h3 className="text-[55px]">Projects</h3>
                    <div>
                        <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">Shopify Theme App Extension</a>
                    </div>
                    <div>
                        <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">Landing Page</a>
                    </div>
                    <div>
                        <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">AI Image Diffusion / Story Board</a>
                    </div>
                    <div>
                        <a href="#" className="text-[20px] hover:underline p-[20px] inline-block">Shopping Cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;