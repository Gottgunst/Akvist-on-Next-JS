//################# LIBS #####################
import { getData } from '@/data/getData';
import { getSlash } from '@/context/targetBranch';

//################ LAYOUT ####################
import NavLink from '../navlink/NavLink';
import DHeader from './DHeader';

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
  return (
    <DHeader className="header">
      <div className="header__wrapper">
        <div className="header__logo logo"></div>

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
                О нас
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

            {/* <select
              className="header__select"
              value={targetBranch}
              onChange={change}
            >
              {responseBranches.map((branch) => (
                <option
                  className="header__city"
                  value={branch.city}
                  key={branch.id_branch}
                >
                  {branch.city}
                </option>
              ))}
            </select> */}
          </div>
        </nav>
        <nav className="header__menu-button">{/* POP-UP version */}</nav>
      </div>
    </DHeader>
  );
}

export default Header as unknown as ({ branch }: IHeaderProps) => JSX.Element;
