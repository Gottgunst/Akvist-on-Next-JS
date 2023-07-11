//################# LIBS ####################
import Image from 'next/image';

//################ LAYOUT ###################

//########### INTERFACE & STYLES ##############
// import { IAuditoriaProps } from '.';
import './Auditoria.css';

export function Auditoria() {
  //{}: IAuditoriaProps) {
  return (
    <div className="section auditoria">
      <Image
        src="/images/about/wall.png"
        fill={true}
        alt="Дрова"
        className="auditoria__image"
      />
      <div className="auditoria__text">
        <h3 className="section__title section__title_type_article">
          Строительным организациям
        </h3>
        <p className="section__text ">
          Подбор и расчёт материалов для любого объекта. Предоставление
          технической документации и сертификатов. Техническое сопровождение.
        </p>
      </div>
      <Image
        src="/images/about/plan.png"
        fill={true}
        alt="План"
        className="auditoria__image"
      />
      <div className="auditoria__text">
        <h3 className="section__title section__title_type_article">
          Дизайнерам и&nbsp;архитекторам
        </h3>
        <p className="section__text">
          Подбор и расчёт материалов для&nbsp;любого проекта. Предоставление
          образцов и готовых решений. Консультации при реализации проекта.
        </p>
      </div>
      <Image
        src="/images/about/delivery.png"
        fill={true}
        alt="Груз"
        className="auditoria__image"
      />
      <div className="auditoria__text">
        <h3 className="section__title section__title_type_article">
          Заказчикам
        </h3>
        <p className="section__text ">
          Подбор и расчёт материалов в соответствии с&nbsp;проектом. Предложение
          альтернативных решений. Оптимальное соотношение цены и&nbsp;качества
          на материалы. Соблюдение сроков поставки.
        </p>
      </div>

      <Image
        src="/images/about/work.png"
        width={140}
        height={140}
        alt="Гном"
        className="auditoria__image"
      />
    </div>
  );
}

export default Auditoria; // as unknown as (props: IAuditoriaProps) => JSX.Element;
