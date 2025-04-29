import React from 'react';

interface IntroductionProps {
    paragraph: string;
}

const Introduction: React.FC<IntroductionProps> = ({ paragraph }) => {
    return (
        <div id={'introduction'} className="bg-white">
            <div className="bg-[#FAFAFA] flex flex-col items-center pt-1 pb-1 gap-4">
                <h2 className="text-xl font-bold text-[20px] text-black w-[248px]">
                    Engineering solutions <br/>for the digital frontier.
                </h2>
                <p className="text-[15px] text-black w-[248px]">{paragraph}</p>
            </div>
            <div className="bg-[#FAFAFA] flex justify-center pt-4 pb-4">
                <div>
                    <img src="/conquering-sample-card.png" alt="Resource Icon"/>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
      