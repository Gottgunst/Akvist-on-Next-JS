'use client';

//################# LIBS #####################

import { getData } from '@/data/getData';
import { IBranch } from '@/models';

//################ LAYOUT ####################

//############## INTERFACE ###################
interface ISelectProps {
  branch: string;
}

export async function Select({ branch }: ISelectProps) {
  const responseBranches: IBranch[] = await getData({
    page: 'Branches',
    city: '*',
  });
  return (
    <select className="header__select" value={branch}>
      {responseBranches.map((branch) => (
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
export default Select as unknown as ({ branch }: ISelectProps) => JSX.Element;
