//################# LIBS #####################
import { Metadata } from 'next';

//################ LAYOUT ####################
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import getTarget from '@/util/targetBranch';

export default function RostovNaDonu({
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
export const metadata: Metadata = {
  title: 'Стройматериалы оптом | Аквист Ростов-на-Дону',
  description:
    'Официальный сайт компании ВИСТ. Оптовые поставки профессиональных строительных и отделочных материалов в Ростов-на-Дону и Ростовской области',
  keywords:
    'вист, аквист, компания вист, компания аквист, вист в ростове-на-дону, стройматериалы в Ростове-на-Дону, стройматериалы оптом, строительные материалы',
};
