import MagicBento from "../../Components/Hero2_comps/MagicBento";

export default function Hero2_canvas() {
    return (
        <>
        <div>
            <MagicBento 
                textAutoHide={true}
                enableStars={false}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect={true}
                spotlightRadius={700}
                particleCount={12}
                glowColor="132, 0, 255"
            />
        </div>
        </>
    );
}