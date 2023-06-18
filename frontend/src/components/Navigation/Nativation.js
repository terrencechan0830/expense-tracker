import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/icons'
import { menuItems } from '../../utils/menuItems'

function Nativation() {
  return (
    <NavStyled>
        <div className='user-icon'>
            <img src={avatar} alt='' />
            <div className='text'>
                <h2>Terrence</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className='menu-items'>
            {menuItems.map((item) => {
                return <li key={item.id}>
                    {item.icon}{" "}
                    <span>{item.title}</span>
                </li>
            })}
        </ul>
        <div className='botton-nav'>
            <li>
                {signout} Sign Out
            </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 375px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
`;

export default Nativation