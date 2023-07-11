//################# LIBS #####################
// import { getData } from '@/data/getData';

//################ LAYOUT ####################
import { Cover } from '@/components/cover/Cover';
import Direction from '@/components/direction/Direction';
import Brands from '@/components/brands/Brands';
import Contacts from '@/components/contacts/Contacts';

//############## INTERFACE ###################
import { IBranch, IBrand, IDirection } from '@/models';
import { preBranch } from '@/data/branch';
import { preDirections } from '@/data/directions';
import { preBrands } from '@/data/brands';

interface IPageDirectionsProps {
  branch: string;
}

export async function PageDirections({ branch }: IPageDirectionsProps) {
  // const targetBranch = branch;

  //!!!! пересобрать это бы через Promies.all
  const responseBranches: IBranch[] = preBranch;
  // (await getData({
  //   page: 'Branches',
  //   city: '*',
  // })) || ;

  const responseDirections: IDirection[] = preDirections;
  // (await getData({
  //   page: 'Directions',
  //   city: targetBranch,
  // })) || ;

  const responseBrands: IBrand[] = preBrands;
  // (await getData({ page: 'Brands' })) ||

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

  return (
    <>
      <Cover />
      <section className="section section_type_directions" id="Directions">
        {firstPart}
      </section>

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
      {responseBranches.map(
        (el, index) =>
          el.city === branch && (
            <Contacts branch={branch} response={el} key={index} />
          )
      )}
    </>
  );
}
export default PageDirections as unknown as ({
  branch,
}: IPageDirectionsProps) => JSX.Element;
