import { useRef } from 'react';
import VariableProximity from '../Components/VariableProximity';
import RotatingText from '../Components/RotatingText'
import Hero1_magnetic_lines from './Hero1_magnetic_lines';

export default function Hero1_written() {
    
    const containerRef = useRef(null);

    return (
        <>  
        <div className='flex flex-col'>
            <div
            className='text-amber-50 text-5xl gap-5 max-w-3xl'
            ref={containerRef}
            style={{position: ''}}
            >
                <VariableProximity
                    label={'Hi, I’m Arnav Gupta, a curious mind who turns ideas into projects, caffeine into code, and mistakes into lessons worth sharing.'}
                    className={'variable-proximity-demo'}
                    fromFontVariationSettings="'wght' 300, 'opsz' 100"
                    toFontVariationSettings="'wght' 800, 'opsz' 100"
                    containerRef={containerRef}
                    radius={50}
                    falloff='gaussian'
                />
            </div> 

            <div className='m-0 my-7 p-0'>
                <Hero1_magnetic_lines/>
            </div>
            
            <div className='flex myfont gap-x-5'>
                <span className='text-amber-50 text-6xl'>
                    I am into
                </span>
                <span className='text-4xl'>
                    <RotatingText
                    texts={['Frontend', 'Backend', 'Blockchain', '2D Games', 'Full Stack', 'Rust', 'React', 'Python']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-indigo-700 text-stone-50 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    />   
                </span>
            </div>
        </div>        
        </>
    );
}
