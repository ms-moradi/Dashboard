
import ItemFooter from "../itemFooter/itemFooter";
import { company,contect, opening, newLetter  } from "../../data/data";

const Footer =()=>{
    return(
        <div className="bg-[#0F172B] flex justify-between">
            <ItemFooter title={'Companey'} data={company}/>
            <ItemFooter title={'Contact'} data={contect}/>
            <ItemFooter title={'Opening'} data={opening}/>
            <ItemFooter title={'NewsLetter'} data={newLetter}/>
        </div>
    )
}

export default Footer;