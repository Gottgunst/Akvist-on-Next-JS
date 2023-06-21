'use client';
import { useRouter } from 'next/navigation';
import { getSlash } from '@/context/targetBranch';
import { usePathname } from 'next/navigation';
//################# LIBS #####################

import { IBranch } from '@/models';

//################ LAYOUT ####################

//############## INTERFACE ###################
interface ISelectProps {
  branch: string;
  rBranches: IBranch[];
}

export function Select({ branch, rBranches }: ISelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  const changeCity = (evt: any) => {
    const target = getSlash(evt.target.value);
    let nonBranchPath = '';
    const pathArray = pathname.split('/');
    console.log(pathname, pathname.length);

    switch (pathArray[1]) {
      case 'krasnodar':
      case 'stavropol':
      case 'pyatigorsk':
        nonBranchPath = pathArray.filter((el, index) => index > 1).join('/');
        break;
      default:
        nonBranchPath = pathname;
        break;
    }

    console.log(target, nonBranchPath);

    router.push(target + nonBranchPath);
  };

  return (
    <select className="header__select" value={branch} onChange={changeCity}>
      {rBranches.map((branch) => (
        <option
          className="header__city"
          value={branch.city}
          key={branch.id_branch}
        >
          {branch.city}
        </option>
      ))}
    </select>
  );
}
export default Select as unknown as ({
  branch,
  rBranches,
}: ISelectProps) => JSX.Element;
