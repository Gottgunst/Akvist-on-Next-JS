import { IBrand } from '@/models';
import Image from 'next/image';

interface IBrandProps {
  brand: IBrand;
  noImage?: boolean;
}

export default function Brands({ brand, noImage }: IBrandProps) {
  return (
    <li style={{ position: 'relative', minWidth: '120px', minHeight: '56px' }}>
      {noImage && <span title={brand.description}>{brand.title}</span>}
      {!noImage && (
        <Image
          className="direction__brand"
          src={`/images/brands/${brand.image}`}
          fill={true}
          sizes="120px"
          alt={brand.title}
          title={brand.title}
        />
      )}
    </li>
  );
}
