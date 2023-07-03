import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const ItemFooter =({title, data})=>{
    return(
        <div>
            <div className="flex justify-start items-start mb-6">
            <h4 className="text-[#FEA116] text-[24px] font-Pacifico ">{title}</h4>
            <p className="text-[#FEA116]"> _____</p>
            </div>
            <div>
                <ul>
                    {data.map((item)=>(
                        <li key={item.id} className="text-white flex justify-start items-center gap-2 mb-1">
                            <FontAwesomeIcon icon={item.icon} size='xs'/>
                            <p className="text-[15px] font-Nunito font-normal">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}

export default ItemFooter;