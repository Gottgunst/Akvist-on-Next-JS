'use client';
//################# LIBS ####################
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getSlash } from '@/util/targetBranch';
import useMediaQuery from '@/util/useMediaQuery';

//################ LAYOUT ###################
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

  const isSmall = useMediaQuery('(min-width: 791px)');

  const variants = isSmall
    ? {
        open: { top: 0, right: 0 },
        close: { top: -188, right: 0 },
      }
    : {
        open: { right: 0, top: 0 },
        close: { right: -280, top: 0 },
      };

  return (
    <>
      <motion.button
        className='header__menu-button'
        animate={
          active === 'no'
            ? { opacity: 1, visibility: 'visible' }
            : { opacity: 0, visibility: 'hidden' }
        }
        onClick={toggleMenu}
      ></motion.button>
      <motion.nav
        initial={{ visibility: 'hidden' }}
        className='modal-menu'
        layout
        onMouseDown={toggleMenu}
        animate={
          active === 'yes'
            ? {
                opacity: 1,
                visibility: 'visible',
                transition: {
                  delayChildren: 2.5,
                },
              }
            : { opacity: 0, visibility: 'hidden' }
        }
      >
        <motion.div
          initial={'close'}
          className='modal-menu__block'
          onMouseDown={(evt) => evt.stopPropagation()}
          animate={active === 'yes' ? 'open' : 'close'}
          variants={variants}
        >
          <div className='modal-menu__section'>
            <a href={slash}>
              <div className='logo modal-menu__logo'></div>
            </a>
            <Select
              branch={branch}
              rBranches={responseBranches}
              className='header__select modal-menu__select'
            ></Select>
          </div>
          <ul className='modal-menu__links'>
            <li onClick={toggleMenu}>
              <NavLink href={slash} className='link modal-menu__link'>
                Продукты
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink href={`${slash}about`} className='link modal-menu__link'>
                О компании
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <a href={`#Contacts`} className='link modal-menu__link'>
                Интернет-магазин
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href={`#Contacts`} className='link modal-menu__link'>
                Контакты
              </a>
            </li>
          </ul>
          <div className='modal-menu__phone'>
            {responseBranches.map(
              (branch) =>
                branch.city === targetBranch && (
                  <a
                    href={`tel:+${branch.phone}`}
                    key={branch.id}
                    className='link'
                    target='_blank'
                    rel='noreferrer'
                    onClick={toggleMenu}
                  >
                    +{branch.phone}
                  </a>
                )
            )}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}

export default ModalMenu as unknown as (props: IModalMenuProps) => JSX.Element;
