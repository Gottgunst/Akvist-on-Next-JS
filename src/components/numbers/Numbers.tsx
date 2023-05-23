export default function Numbers() {
  return (
    <section className="section section_type_numbers">
      <ul className="grid grid_type_numbers">
        <li>
          <h2 className="section__title numbers__digit" data-above="more">
            250
          </h2>
          <p className="section__text numbers__caption">сотрудников компании</p>
        </li>
        <li>
          <h2 className="section__title numbers__digit" data-above="more">
            10 000
          </h2>
          <p className="section__text numbers__caption">
            реализованных проектов
          </p>
        </li>
        <li>
          <h2 className="section__title numbers__digit">22</h2>
          <p className="section__text numbers__caption">года работы</p>
        </li>
        <li>
          <h2 className="section__title numbers__digit" data-above="more">
            30
          </h2>
          <p className="section__text numbers__caption">брендов</p>
        </li>
      </ul>
    </section>
  );
}
