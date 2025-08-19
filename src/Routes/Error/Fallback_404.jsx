import FuzzyText from "./FuzzyText";

export default function Fallback_404() {
  return(
      <>
      
      <div className="h-screen flex justify-center items-center">
        <FuzzyText 
          baseIntensity={0.3} 
          hoverIntensity={1} 
          enableHover={true}
        >
          Working on it
        </FuzzyText>
      </div>
      
      </>
  ); 
}
