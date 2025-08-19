import Radio from "../Components/Radio";
import Button from "../Components/letsgo_btn";

export default function Hero1_nav() {
  return (
    <div className="relative flex items-center px-7">
      {/* Radio centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Radio />
      </div>

      {/* Button on right */}
      <div className="ml-auto hidden xl:block">
        <Button />
      </div>
    </div>
  );
}
