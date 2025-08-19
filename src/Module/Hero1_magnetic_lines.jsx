import MagnetLines from '../Components/MagnetLines';

export default function Hero1_magnetic_lines() {
    return (
        <>
            <MagnetLines
                rows={4}
                columns={20}
                containerSize="20vmin"
                lineColor="white"
                lineWidth="0.3vmin"
                lineHeight="4vmin"
                baseAngle={0}
                style={{ margin: "0" }}
            />
        </>
    );
}



