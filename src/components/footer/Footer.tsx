//################# LIBS #####################
import { getData } from '@/data/getData';
import Link from 'next/link';
import NavLink from '../navlink/NavLink';
import { getSlash } from '@/context/targetBranch';
import { IBranch, IDirection } from '@/models';

//############## INTERFACE ###################
interface IFooterProps {
  branch: string;
}

export async function Footer({ branch }: IFooterProps) {
  const targetBranch = branch || 'Ростов-на-Дону';

  const responseBranches: IBranch[] = await getData({
    page: 'Branches',
    city: '*',
  });
  const responseDirections: IDirection[] = await getData({
    page: 'Directions',
    city: targetBranch,
  });

  const slash = getSlash(branch);

  return (
    <footer className="footer">
      <div className="section section_type_footer">
        <nav className="site-map">
          {/* дважды иду по одному и тому же циклу, нужно переписать ↓↓↓ */}

          {responseDirections.length > 0 && (
            <div className="site-map__block" aria-label="Блок 1">
              <h2 className="site-map__title">Решения</h2>

              <ul className="site-map__items">
                {responseDirections.map(
                  (direction) =>
                    !direction.combine && (
                      <li key={direction.id_dir}>
                        <a
                          href={slash.slice(0, -1) + '#' + direction.pageLink}
                          className="link site-map__link"
                        >
                          {direction.title}
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          )}

          {/* дважды иду по одному и тому же циклу, нужно переписать ↓↓↓ */}

          {responseDirections.length > 0 &&
            responseDirections.filter((direction) => direction.combine) && (
              <div className="site-map__block" aria-label="Блок 2">
                <h2 className="site-map__title">
                  Строительно-отделочные материалы
                </h2>
                <ul className="site-map__items">
                  {responseDirections.map(
                    (direction) =>
                      direction.combine && (
                        <li key={direction.id_dir}>
                          <a
                            href={slash.slice(0, -1) + '#' + direction.pageLink}
                            className="link"
                          >
                            {direction.title}
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </div>
            )}

          <div className="site-map__block" aria-label="Блок 3">
            <h2 className="site-map__title">Филиалы</h2>
            <ul className="site-map__items">
              {responseBranches.map((branch) => (
                <li key={branch.id_branch}>
                  <NavLink href={branch.pageLink + '#top'} className="link">
                    {branch.city}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="site-map__block" aria-label="Блок 4">
            <h2 className="site-map__title">О компании</h2>
            <ul className="site-map__items">
              <li>
                <NavLink href={`${slash}about`} className="link">
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink href={`${slash}about/#service`} className="link">
                  Сервис
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {responseBranches.map(
          (branch) =>
            branch.city === targetBranch && (
              <div className="footer__branch" key={branch.id_branch}>
                <div
                  className="branch__label footer__label"
                  aria-label="Местонахождение"
                >
                  {branch.address}

                  {branch.address_second && <p>{branch.address_second}</p>}
                </div>

                <p
                  className="branch__label footer__label"
                  aria-label="Расписание"
                >
                  {branch.schedule}
                </p>

                <p
                  className="branch__label footer__label footer__phone"
                  aria-label="Телефон"
                >
                  <a href={`tel:+${branch.phone}`} className="link">
                    +{branch.phone}
                  </a>
                </p>
              </div>
            )
        )}

        <div className="law-data">
          <div className="logo law-data__logo"></div>
          <p className="law-data__copyright">
            © {new Date().getFullYear()} ООО «Вист»
          </p>
          <div className="law-data__politics">
            Продолжая использовать наш сайт, вы&nbsp;даете согласие
            на&nbsp;обработку файлов{' '}
            <Link href="#" className="link law-data__link">
              Cookies
            </Link>{' '}
            и&nbsp;других пользовательских данных, в соответствии с&nbsp;
            <Link href="#" className="link law-data__link">
              Политикой конфиденциальности
            </Link>{' '}
            и&nbsp;
            <Link href="#" className="link law-data__link">
              Пользовательским соглашением
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer as unknown as ({ branch }: IFooterProps) => JSX.Element;
