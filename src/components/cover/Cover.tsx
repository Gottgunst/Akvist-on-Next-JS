import { Quote } from '../quote/Quote';

export function Cover() {
  //## TO-DO ## блок для создания стиля с персональной фоновой картинкой взятой из БД

  return (
    <>
      <section className="cover">
        <div className="cover__wrapper">
          <h1 className="cover__motto">
            Готовые решения для&nbsp;строительства и&nbsp;ремонта
          </h1>
        </div>
      </section>
      <section className="welcome">
        <blockquote className="quote">
          Мы специализируемся на поставке отделочных материалов, солнечных
          батарей и коллекторов, оборудования для горячего водоснабжения и
          отопления.
        </blockquote>
      </section>
    </>
  );
}
