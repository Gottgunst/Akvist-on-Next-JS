//################# LIBS ####################
import Image from 'next/image';
import { where } from '@/util/util';

//################ LAYOUT ###################
import Brands from '@/components/brands/Brands';

//########### INTERFACE & STYLES ##############
import { IDirectionProps } from '.';
import './Direction.css';
import Link from 'next/link';

export function Direction({ direction, baseBrands }: IDirectionProps) {
  const dirType =
    direction.accent || direction.combine ? 'direction_column' : '';
  const directionType = 'direction ' + dirType;
  const targetBrands = direction.brands.split('/');

  const whereResult = where(direction.pageLink);

  return (
    <article
      className={directionType}
      id={direction.pageLink}
      data-id={direction.id}
    >
      <div className='direction__images'>
        {direction.pageLink ? (
          <Link
            className='direction__link'
            target={whereResult}
            href={direction.pageLink ? `${direction.pageLink}` : ''}
            title={direction.title}
            style={{ position: 'relative', height: '100%', display: 'block' }}
          >
            <Image
              src={`/images/covers/${direction.image}`}
              alt={direction.title}
              fill={true}
              sizes='(min-width: 1080px) 492px, (min-width: 900px) calc(100vw - 512px), (min-width: 800px) calc(22.5vw + 170px), (min-width: 380px) calc(100vw - 44px), calc(28.33vw + 214px)'
              className='direction__img'
            />
          </Link>
        ) : (
          <Image
            src={`/images/covers/${direction.image}`}
            alt={direction.title}
            fill={true}
            sizes='(min-width: 1080px) 492px, (min-width: 900px) calc(100vw - 512px), (min-width: 800px) calc(22.5vw + 170px), (min-width: 380px) calc(100vw - 44px), calc(28.33vw + 214px)'
            className='direction__img'
          />
        )}

        {!direction.combine && (
          <ul className='direction__brands'>
            {baseBrands?.map((el) =>
              targetBrands.map(
                (target) =>
                  el.title == target && <Brands brand={el} key={el.id} />
              )
            )}
          </ul>
        )}
      </div>
      <div className='direction__texts'>
        <h2 className='section__title section__title_type_article'>
          {direction.title}
        </h2>

        {!direction.combine && (
          <ul className='direction__brands-name'>
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

        <p className='section__text direction__description'>
          {direction.description}
        </p>

        {direction.pageLink ? (
          <Link
            href={direction.pageLink}
            target={whereResult}
            className='direction__link'
          >
            <button type='button' className='button direction__button'>
              {direction.buttonText}
            </button>
          </Link>
        ) : (
          ''
        )}
      </div>
    </article>
  );
}
export default Direction as unknown as (props: IDirectionProps) => JSX.Element;
