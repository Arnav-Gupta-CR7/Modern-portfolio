import InfiniteScroll from "./InfiniteScroll";
import Button from "../../Components/Back_btn";
import FuzzyText from '../Error/FuzzyText'

export default function Skills() {

  const items = [
    { content: <img src="/node.svg" alt="" /> },
    { content: <img className="w-60" src="/mongo.svg" alt="" /> },
    { content: <img src="/react.png" alt="" /> },
    { content: <img className="h-30" src="/cpp.svg" alt="" /> },
    { content: <img className="h-28" src="/rust.svg" alt="" /> },
    { content: <div className="">
                  <FuzzyText 
                    baseIntensity={0.3} 
                    hoverIntensity={1} 
                    enableHover={true}
                    fontSize="clamp(1rem, 5vw, 3rem)"
                  >
                    More
                  </FuzzyText>
                </div> },
    { content: <div className="">
                  <FuzzyText 
                    baseIntensity={0.3} 
                    hoverIntensity={1} 
                    enableHover={true}
                    fontSize="clamp(1rem, 5vw, 3rem)"
                  >
                    Skills
                  </FuzzyText>
                </div> },
    { content: <div className="">
                  <FuzzyText 
                    baseIntensity={0.3} 
                    hoverIntensity={1} 
                    enableHover={true}
                    fontSize="clamp(1rem, 5vw, 3rem)"
                  >
                    Comming soon
                  </FuzzyText>
                </div> },
    
  ];


  return(
    <>
<div className="flex items-start" style={{height: '100vh', position: 'relative'}}>
  <div className="absolute z-1 top-10 left-7">
    <Button />
  </div>
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={2}
    autoplayDirection="up"
    pauseOnHover={false}
  />
</div>
    </>
  );
}