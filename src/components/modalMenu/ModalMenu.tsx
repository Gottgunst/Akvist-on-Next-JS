'use client';
// //################# LIBS ####################
import { useState } from 'react';
// import { motion } from 'framer-motion';
import { getSlash } from '@/context/targetBranch';

// //################ LAYOUT ###################
import Select from '../select/Select';
import NavLink from '../navlink/NavLink';

//########### INTERFACE & STYLES ##############
import { IModalMenuProps } from '.';
import './ModalMenu.css';

export function ModalMenu({ branch, responseBranches }: IModalMenuProps) {
  const slash = getSlash(branch);
  const targetBranch = branch;

  const [active, setActive] = useState('no');

  const toggleMenu = () => {
    setActive(active === 'no' ? 'yes' : 'no');
  };

  return (
    <>
      <button
        className={
          {
            yes: 'header__menu-button header__menu-button_hidden',
            no: 'header__menu-button',
          }[active]
        }
        onClick={toggleMenu}
      ></button>
      <nav
        className={
          {
            yes: 'modal-menu modal-menu_opened',
            no: 'modal-menu',
          }[active]
        }
        onClick={toggleMenu}
      >
        <div className="modal-menu__block">
          <div className="modal-menu__section">
            <a href={slash}>
              <div className="logo modal-menu__logo"></div>
            </a>
            <Select
              branch={branch}
              rBranches={responseBranches}
              className="header__select modal-menu__select"
            ></Select>
          </div>
          <ul className="modal-menu__links">
            <li>
              <NavLink href={slash} className="link modal-menu__link">
                Продукты
              </NavLink>
            </li>
            <li>
              <NavLink href={`${slash}about`} className="link modal-menu__link">
                О компании
              </NavLink>
            </li>
            <li>
              <a href={`#Contacts`} className="link modal-menu__link">
                Интернет-магазин
              </a>
            </li>
            <li>
              <a href={`#Contacts`} className="link modal-menu__link">
                Контакты
              </a>
            </li>
          </ul>
          <div className="modal-menu__phone">
            {responseBranches.map(
              (branch) =>
                branch.city === targetBranch && (
                  <a
                    href={`tel:+${branch.phone}`}
                    key={branch.id}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +{branch.phone}
                  </a>
                )
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default ModalMenu as unknown as (props: IModalMenuProps) => JSX.Element;
