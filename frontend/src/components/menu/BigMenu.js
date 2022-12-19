import React, {useState, useEffect} from 'react'
import { HiBars3, HiBars3BottomLeft } from "react-icons/hi2";

const BigMenu = (props) => {
    const { openMenu } = props;

    return (
        <div>
            {!openMenu ? <HiBars3 className='text-[24px] cursor-pointer' /> : <HiBars3BottomLeft className='text-[24px] cursor-pointer' />}
        </div>
    )
}

export default BigMenu;
