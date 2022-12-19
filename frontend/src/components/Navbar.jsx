import React,{useState, useEffect, useRef} from 'react'
import Logo from "../attributes/Logo.png";
import BigMenu from './menu/BigMenu.js';
import ShowMenu from './menu/ShowMenu';
import { HiOutlineUser } from "react-icons/hi2";
import ShowUserMenu from './menu/ShowUserMenu';
import SubMenu from './menu/SubMenu';

const Navbar = (props) => {
    const {menuLayout} = props;
    
    const [openMenu, setOpenMenu] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [menu, setMenu] = useState(menuLayout);

    const handleClickMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleClickUserMenu = () => {
        setOpenUserMenu(!openUserMenu);
    }

    const menuRef = useRef();
    const userMenuRef = useRef();

    useEffect(()=>{
        const handleMenu = (event) => {
            if(!menuRef.current.contains(event.target)){
                setOpenMenu(false);
            }
        }

        const handleUserMenu = (event) => {
            if(!userMenuRef.current.contains(event.target)){
                setOpenUserMenu(false);
            }
        }

        document.addEventListener("mousedown", handleMenu);
        document.addEventListener("mousedown", handleUserMenu);
        
        return () => {
            document.removeEventListener("mousedown", (handleMenu, handleUserMenu));
        };
    });

    return (
        <div className='relative z-10'>
            <div className='w-full h-10 bg-white flex justify-between px-10 items-center drop-shadow-lg text-gray-600'>
                <div className='flex justify-start space-x-6 items-center'>
                    <div className='w-10'>
                        <img src={Logo} alt="" />
                    </div>
                    <div ref={menuRef}>
                        <div onClick={()=>handleClickMenu()}>
                            <BigMenu openMenu={openMenu} />
                        </div>
                        <div className='z-40'>
                            <ShowMenu open={openMenu} click={()=>handleClickMenu()} menu={setMenu}/>
                        </div>
                    </div>
                    <div className='pl-10'>
                        <SubMenu menu={menu} />
                    </div>
                </div>
                <div ref={userMenuRef}>
                    <div onClick={()=>handleClickUserMenu()}>
                        <HiOutlineUser className='text-[20px] cursor-pointer' />
                    </div>
                    <div>
                        <ShowUserMenu open={openUserMenu} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
