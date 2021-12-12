import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebaseFolder';
import './Header.css'
import { useStatevalue } from './StateProvider'

function Header() {

    const [{basket,user,email},dispatch] = useStatevalue();
    const handleAuth=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to= '/'>
                <img className='header__logo' src='data:image/png;base64,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'/>

            </Link>

            
            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <img className='search__icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8PuAOsn0lAmM-pgGikf1u9hnR_WKIc3x1qozzHLia2kExeuK9pzSvDLuT18EfNuH_O8&usqp=CAU'/>
            </div>
            
            <div className='header__nav'>
                <Link to={!user&&"/login"}>

                    <div onClick={handleAuth} className='header__option'>
                        <span className='header__optionLineOne'> 
                            {user? user.name:'Hello Mate!'}
                        </span>
                        <span className='header__optionLineTwo'>
                            {user? 'Sign OUT ': 'Sign IN'}
                        </span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        Orders
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <img className='basket__icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZn85ARZAgpcBsT2Ir83XSm6ESgGdvYJuRg&usqp=CAU'/>
                        <span className='header__optionLineTwo header__basketCount'><b>{basket.length}</b></span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
