import { IBrand, IDirection } from '../../models';
import Brands from '@/components/brands/Brands';
import Image from 'next/image';

interface IDirectProps {
  direction: IDirection;
  baseBrands: IBrand[];
}

export default function Direction({ direction, baseBrands }: IDirectProps) {
  const dirType =
    direction.accent || direction.combine ? 'direction_column' : '';
  const directionType = 'direction ' + dirType;
  const targetBrands = direction.brands.split('/');

  return (
    <article className={directionType} id={direction.pageLink}>
      <div className="direction__images">
        <a
          className="direction__link"
          target="_self"
          href={`/${direction.pageLink}`}
          title={direction.title}
          style={{ position: 'relative', height: '100%', display: 'block' }}
        >
          <Image
            src={`/images/covers/${direction.image}`}
            alt={direction.title}
            fill={true}
            sizes="(min-width: 1080px) 492px, (min-width: 900px) calc(100vw - 512px), (min-width: 800px) calc(22.5vw + 170px), (min-width: 380px) calc(100vw - 44px), calc(28.33vw + 214px)"
            className="direction__img"
          />
        </a>

        {!direction.combine && (
          <ul className="direction__brands">
            {baseBrands?.map((el) =>
              targetBrands.map(
                (target) =>
                  el.title == target && <Brands brand={el} key={el.id} />
              )
            )}
          </ul>
        )}
      </div>

      <div className="direction__texts">
        <h2 className="section__title section__title_type_article">
          {direction.title}
        </h2>

        {!direction.combine && (
          <ul className="direction__brands-name">
            {baseBrands?.map((el) =>
              targetBrands.map(
                (target) =>
                  el.title == target && (
                    <Brands brand={el} noImage={true} key={el.id} />
                  )
              )
            )}
          </ul>
        )}

        <p className="section__text direction__description">
          {direction.description}
        </p>
        <button type="button" className="button direction__button">
          {direction.buttonText}
        </button>
      </div>
    </article>
  );
}
