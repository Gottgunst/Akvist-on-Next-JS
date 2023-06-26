'use client';

//################# LIBS #####################
import { getData } from '@/data/getData';
import { getSlash } from '@/context/targetBranch';
import { motion } from 'framer-motion';

//################ LAYOUT ####################
import NavLink from '../navlink/NavLink';
import DHeader from './DHeader';
import Select from '../select/Select';

//################# STYLES ###################
// import './header.css';

//############## INTERFACE ###################
import { IBranch, IDirection } from '@/models';

interface IHeaderProps {
  branch: string;
}

export async function Header({ branch }: IHeaderProps) {
  const responseBranches: IBranch[] = await getData({
    page: 'Branches',
    city: '*',
  });
  const responseDirections: IDirection[] = await getData({
    page: 'Directions',
    city: branch,
  });

  const slash = getSlash(branch);

  const targetBranch = branch;

  const variants = {
    visible: {
      marginRight: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginRight: 0,
    },
  };

  return (
    <DHeader className="header">
      <div className="header__wrapper">
        <a href={slash}>
          <div className="header__logo logo"></div>
        </a>

        <nav className="header__nav">
          <ul className="header__menu">
            <li>
              <NavLink href={`${slash}#Directions`} className="link popup-open">
                Продукты
              </NavLink>
              <nav className="header__popup">
                <ul className="header__popup-menu">
                  {responseDirections.map(
                    (direction) =>
                      !direction.combine && (
                        <li key={direction.id_dir}>
                          <a
                            href={slash.slice(0, -1) + '#' + direction.pageLink}
                            className="link header__popup-link"
                          >
                            {direction.title}
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </nav>
            </li>
            <li>
              <NavLink href={`${slash}about`} className="link">
                О компании
              </NavLink>
            </li>
            <li>Интернет-магазин</li>
            <li>
              <a href={`#Contacts`} className="link">
                Контакты
              </a>
            </li>
          </ul>

          <div className="header__contact">
            <p className="header__phone">
              {responseBranches.map(
                (branch) =>
                  branch.city === targetBranch && (
                    <a
                      href={`tel:+${branch.phone}`}
                      key={branch.id_branch}
                      className="header__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +{branch.phone}
                    </a>
                  )
              )}
            </p>

            <Select
              branch={branch}
              rBranches={responseBranches}
              className="header__select"
            ></Select>
          </div>
        </nav>
        <button className="header__menu-button"></button>
        <nav className="modal-menu">
          <motion.div
            className="modal-menu__block"
            layout
            variants={variants}
            initial={'hidden'}
            animate={{ x: 200 }}
          >
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
                <NavLink
                  href={`${slash}about`}
                  className="link modal-menu__link"
                >
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
                      key={branch.id_branch}
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +{branch.phone}
                    </a>
                  )
              )}
            </div>
          </motion.div>
        </nav>
      </div>
    </DHeader>
  );
}

export default Header as unknown as ({ branch }: IHeaderProps) => JSX.Element;
