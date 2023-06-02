//################# LIBS #####################
import { getData } from '@/data/getData';
import { targetBranch } from '@/app/layout';
import { useEffect } from 'react';

//################ LAYOUT ####################
import { Cover } from '@/components/cover/Cover';
import Direction from '@/components/direction/Direction';
import Brands from '@/components/brands/Brands';
import Contacts from '@/components/contacts/Contacts';

//############## INTERFACE ###################
import { IBranch, IBrand, IContact, IDirection } from '@/models';
import { headerClasses } from '../header/Header';

export async function PageDirections() {
  //!!!! пересобрать это бы через Promies.all
  const responseContacts: IContact[] = await getData({
    page: 'Contacts',
    city: targetBranch,
  });
  const responseBranches: IBranch[] = await getData({
    page: 'Branches',
    city: '*',
  });
  const responseDirections: IDirection[] = await getData({
    page: 'Directions',
    city: targetBranch,
  });
  const responseBrands: IBrand[] = await getData({ page: 'Brands' });

  // За один пробег делим направления на три группы
  // Находим id первого из комбинированных направлений
  // Собираем в строку бренды направлений из комбинированного блока

  const firstPart: JSX.Element[] = [];
  const combinePart: JSX.Element[] = [];
  const secondPart: JSX.Element[] = [];
  let combineFirstIndex = Infinity;
  let combineBrands = '';

  responseDirections.map((direction) => {
    if (direction.combine) {
      combineBrands += direction.brands + '/';

      if (!Number.isFinite(combineFirstIndex))
        combineFirstIndex = direction.id_dir;

      combinePart.push(
        <Direction
          direction={direction}
          baseBrands={responseBrands}
          key={direction.id_dir}
        />
      );
    } else if (direction.id_dir > combineFirstIndex)
      secondPart.push(
        <Direction
          direction={direction}
          baseBrands={responseBrands}
          key={direction.id_dir}
        />
      );
    else
      firstPart.push(
        <Direction
          direction={direction}
          baseBrands={responseBrands}
          key={direction.id_dir}
        />
      );
  });

  // Нарезаем строку брендов в массив
  // Фильтруем массив от повторов
  const combineArray = combineBrands.split('/');
  const targetBrands = combineArray.filter(
    (value, index) => combineArray.indexOf(value) === index
  );

  headerClasses.list = 'header header_inverted';

  return (
    <>
      <Cover />
      <section className="section section_type_directions">{firstPart}</section>

      <section className="section section_background_grey section_type_two-columns">
        {combinePart}
      </section>

      <section className="section section_type_brands-grid">
        <ul className="grid">
          {responseBrands?.map((el) =>
            targetBrands.map(
              (target) =>
                el.title === target && <Brands brand={el} key={el.id_brand} />
            )
          )}
        </ul>
      </section>

      <section className="section section_type_directions">
        {secondPart}
      </section>
      <section className="section section_type_contacts" id="Contacts">
        {responseBranches.map(
          (branch, index) =>
            branch.city === targetBranch && (
              <Contacts
                contacts={responseContacts}
                branch={branch}
                key={index}
              />
            )
        )}
      </section>
    </>
  );
}
export default PageDirections as unknown as () => JSX.Element;
