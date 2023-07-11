//################# LIBS ####################

//################ LAYOUT ###################

//########### INTERFACE & STYLES ##############
// import { INumbersProps } from '.';
import './Numbers.css';

export function Numbers() {
  //{}: INumbersProps) {
  return (
    <section className="section numbers">
      <ul className="grid numbers__grid">
        <li>
          <p className="numbers__above">более</p>
          <h2 className="section__title numbers__digit">250</h2>
          <p className="section__text numbers__caption">сотрудников компании</p>
        </li>
        <li>
          <p className="numbers__above">более</p>
          <h2 className="section__title numbers__digit">10 000</h2>
          <p className="section__text numbers__caption">
            реализованных проектов
          </p>
        </li>
        <li>
          <h2 className="section__title numbers__digit">22</h2>
          <p className="section__text numbers__caption">года работы</p>
        </li>
        <li>
          <p className="numbers__above">более</p>
          <h2 className="section__title numbers__digit">30</h2>
          <p className="section__text numbers__caption">брендов</p>
        </li>
      </ul>
    </section>
  );
}

export default Numbers; // as unknown as (props: INumbersProps) => JSX.Element;
