
import Button from '../button/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    {id:1, title:'HOME'},
    {id:2, title:'ABOUT'},
    {id:3, title:'SERVICE'},
    {id:4, title:'MENU'},
    {id:5, title:'CONTACT'},
]

const Navbar =()=>{
    return(
        <div className='bg-[#0F172B] flex justify-between px-12 py-1'>
            <div className='flex justify-start items-center gap-3'>
                <FontAwesomeIcon icon={faUtensils} style={{fontSize:'40px', color:'#FEA116'}}/>
                <h1 className='text-[40px] text-[#FEA116] font-Nunito font-bold'>Restaurant</h1>
            </div>
            <div className='flex justifu-between items-center gap-8'>
                <ul className='flex justify-between gap-8'>
                    {menuItems.map((item)=>(
                    <li key={item.id} className='text-white text-[15px] font-Heebo font-medium'>
                        <p>{item.title}</p>
                    </li>
                    ))}
                </ul>
                <Button title={'BOOK A TABLE'}/>
            </div>
        </div>
    )
}

export default Navbar;