'use client';
//################# LIBS #####################
import { usePathname } from 'next/navigation';

//############## INTERFACE ###################
interface IDHeaderProps {
  className: string;
  children: JSX.Element;
}

export function DHeader({ className, children }: IDHeaderProps) {
  const pathname = usePathname() || '';
  const isAbout = pathname.search(/\/about/g) != -1;
  return (
    <header className={isAbout ? className : className + ' header_inverted'}>
      {children}
    </header>
  );
}
export default DHeader;
