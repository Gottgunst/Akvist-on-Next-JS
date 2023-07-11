//################# LIBS #####################
import { getData } from '@/data/getData';

//################ LAYOUT ####################
import Service from '@/components/service/Service';
import Numbers from '@/components/numbers/Numbers';
import Contacts from '@/components/contacts/Contacts';
import Distribution from '@/components/Distribution/Distribution';
import { IBranch, IContact } from '@/models';
import { Auditoria } from '@/components/Auditoria';

interface IPageAboutProps {
  branch: string;
}

export async function PageAbout({ branch }: IPageAboutProps) {
  const responseBranches: IBranch[] = await getData({
    page: 'Branches',
    city: '*',
  });

  return (
    <>
      <div className="section">
        <div className="header-compensation"></div>
      </div>

      <Distribution />

      <Numbers />

      <Auditoria />

      <Service />

      {responseBranches.map(
        (el, index) =>
          el.city === branch && (
            <Contacts branch={branch} response={el} key={index} />
          )
      )}
    </>
  );
}
export default PageAbout as unknown as (props: IPageAboutProps) => JSX.Element;
