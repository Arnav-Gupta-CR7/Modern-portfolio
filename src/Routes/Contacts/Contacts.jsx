import Folder from "./Folder";
import Button from "../../Components/Back_btn";

export default function Contacts() {
  return(
    <>
    <div className=" flex pt-10 pl-7">
      <Button/>
    </div>
    
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center" style={{ height: '600px', position: 'relative' }}>
        <Folder size={2} color="#5227FF" className="custom-folder" />
        <div className="text-8xl text-amber-50 mt-12">
        Click Me
      </div>
      </div>
      
    </div>
    </>
  ); 
}
