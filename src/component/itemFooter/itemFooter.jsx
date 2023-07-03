import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const itemsfooter1 =[
    {id:1, title:'About Us'},
    {id:2, title:'Contact Us'},
    {id:3, title:'Reservation'},
    {id:4, title:'Privacy Policy'},
    {id:5, title:'Terms & Condition'},
]

const ItemFooter =({})=>{
    return(
        <div>
            <div className="flex justify-start items-start mb-6">
            <h4 className="text-[#FEA116] text-[24px] font-Pacifico ">Company</h4>
            <p className="text-[#FEA116]"> _____</p>
            </div>
            <div>
                <ul>
                    {itemsfooter1.map((item)=>(
                        <li key={item.id} className="text-white flex justify-start items-center gap-2 mb-1">
                            <FontAwesomeIcon icon={faAngleRight} size='xs'/>
                            <p className="text-[15px] font-Nunito font-normal">{item.title}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
        
    )
}

export default ItemFooter;