//################# LIBS ####################
import Image from 'next/image';
//################ LAYOUT ###################

//########### INTERFACE & STYLES ##############
// import { IDistributionProps } from '.';

import './Distribution.css';

export function Distribution() {
  //{}: IDistributionProps) {
  return (
    <div className='section distribution'>
      <div className='distribution__map'>
        <Image
          src='/images/about/distribution.png'
          fill={true}
          alt='Карта филиалов'
          className='distribution__image'
          sizes='(min-width: 1080px) 940px, calc(100vw - 86px)'
        />
      </div>
      <article className='distribution__about'>
        <h1 className='distribution__title'>О компании</h1>
        <p className='section__text distribution__text'>
          Аквист — ассоциация компаний «ВИСТ». Мы&nbsp;специализируемся на
          поставке отделочных материалов, солнечных батарей и коллекторов,
          оборудования для горячего водоснабжения и&nbsp;отопления.
        </p>
        <blockquote className='quote distribution__quote'>
          Офисы и склады расположены на&nbsp;территории Южного и
          Северо-Кавказского федерального округа, что позволяет осуществлять
          оперативную поставку материалов.
        </blockquote>
      </article>
    </div>
  );
}

export default Distribution; // as unknown as ( props: IDistributionProps) => JSX.Element;
