import React from 'react';
import { useMediaQuery } from 'react-responsive';


interface Resource {
    icon: React.ReactNode;
}

interface HeroProps {
    resources: Resource[];
}

const Hero: React.FC<HeroProps> = ({ resources }) => {
    const isDesktop = useMediaQuery({ minWidth: 750 });
    if(isDesktop) {
        return (
            <div>
                <p className="text-white">Hellworld</p>
            </div>
        )
    } else {
        return (
            <div id={'hero'} className="flex flex-col items-center justify-between gap-4">
                <div className="flex justify-center">
                    {resources.map((resource: Resource, index: number) => (
                        <React.Fragment key={index}>
                            {resource.icon}
                        </React.Fragment>
                    ))}
                </div>
                <div className="bg-white w-[248px] h-[60px] flex justify-center">
                    <h1 className="text-black p-1">A Software Craftsman, at <br/>your service</h1>
                </div>
                <div className="bg-black">
                    <img src="/anime-coder-girl.png" alt="Resource Icon"/>
                </div>
            </div>
        );
    }
};

export default Hero;
