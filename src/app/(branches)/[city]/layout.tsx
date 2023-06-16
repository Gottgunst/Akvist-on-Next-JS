//################# LIBS #####################

//################ LAYOUT ####################
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import getTarget from '@/context/targetBranch';

export default function Branches({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    city: string;
  };
}) {
  const target = getTarget(params.city);
  return (
    <>
      <Header branch={target} />
      <main>{children}</main>
      <Footer branch={target} />
    </>
  );
}

//################# META ###################

export async function generateMetadata({
  params,
}: {
  params: {
    city: string;
  };
}) {
  const target = getTarget(params.city);
  let target2 = 'Ростове-на-Дону';
  let target3 = 'Ростовской';

  switch (target) {
    case 'Краснодар':
      target2 = 'Краснодаре';
      target3 = 'Краснодарской';
      break;
    case 'Ставрополь':
      target2 = 'Ставрополе';
      target3 = 'Ставропольской';
      break;
    case 'Пятигорск':
      target2 = 'Пятигорске';
      target3 = 'Пятигорской';
      break;
  }

  return {
    title: `Стройматериалы оптом | Аквист ${target}`,
    description: `Официальный сайт компании ВИСТ. Оптовые поставки профессиональных строительных и отделочных материалов в ${target2} и ${target3} области.`,
    keywords: `вист, аквист, компания вист, компания аквист, вист в ${target2}, стройматериалы в ${target2}, стройматериалы оптом, строительные материалы`,
  };
}
