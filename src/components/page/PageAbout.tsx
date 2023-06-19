//################# LIBS #####################
import { getData } from '@/data/getData';

//################ LAYOUT ####################
import Service from '@/components/service/Service';
import Numbers from '@/components/numbers/Numbers';
import Contacts from '@/components/contacts/Contacts';
import { IBranch, IContact } from '@/models';

interface IPageAboutProps {
  branch: string;
}

export async function PageAbout({ branch }: IPageAboutProps) {
  const targetBranch = branch;

  const responseContacts: IContact[] = await getData({
    page: 'Contacts',
    city: targetBranch,
  });
  const responseBranches: IBranch[] = await getData({
    page: 'Branches',
    city: '*',
  });

  return (
    <>
      <hr className="header-compensation" />
      <Numbers />
      <Service />
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
export default PageAbout as unknown as ({
  branch,
}: IPageAboutProps) => JSX.Element;
