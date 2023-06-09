//################# LIBS ####################

//################ LAYOUT ###################

//########### INTERFACE & STYLES ##############
// import { IServiceProps } from '.';
import './Service.css';

export function Service() {
  //{}: IServiceProps) {
  return (
    <section className="section" id="service">
      <h2 className="section__title service__title">Сервис</h2>
      <ul className="grid service__grid">
        <li>
          <article>
            <div className="service__icon" data-type="route"></div>
            <h3 className="section__title section__title_type_article service__title">
              Выезд на объект
            </h3>
            <p className="section__text service__text">
              Специалист выезжает на объект для&nbsp;замеров, выявления
              особенностей объекта
            </p>
          </article>
        </li>
        <li>
          <article>
            <div className="service__icon" data-type="materials"></div>
            <h3 className="section__title section__title_type_article service__title">
              Подбор материалов
            </h3>
            <p className="section__text service__text">
              Подбираем материалы для реализации проекта с учётом
              эксплуатационных требований и проектного решения
            </p>
          </article>
        </li>
        <li>
          <article>
            <div className="service__icon" data-type="example"></div>
            <h3 className="section__title section__title_type_article service__title">
              Демо-образцы
            </h3>
            <p className="section__text service__text">
              Предоставляем образцы материалов под индивидуальный дизайн
            </p>
          </article>
        </li>
        <li>
          <article>
            <div className="service__icon" data-type="delivery"></div>
            <h3 className="section__title section__title_type_article service__title">
              Поставка материалов
            </h3>
            <p className="section__text service__text">
              Доставляем материалы прямо на&nbsp;объект в срок
            </p>
          </article>
        </li>
        <li>
          <article>
            <div className="service__icon" data-type="support"></div>
            <h3 className="section__title section__title_type_article service__title">
              Техническая поддержка
            </h3>
            <p className="section__text service__text">
              Сопровождаем и консультируем мастеров в ходе проведения монтажных
              и отделочных работ
            </p>
          </article>
        </li>
        <li>
          <article>
            <div className="service__icon" data-type="tablet"></div>
            <h3 className="section__title section__title_type_article service__title">
              Проектные решения
            </h3>
            <p className="section__text service__text">
              Сопровождаем и консультируем мастеров в ходе проведения монтажных
              и отделочных работ
            </p>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default Service; // as unknown as (props: IServiceProps) => JSX.Element;
