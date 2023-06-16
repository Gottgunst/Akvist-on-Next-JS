//################# LIBS #####################
import { targetBranch } from '@/app/layout';
import { getData } from '@/data/getData';

//################ LAYOUT ####################
import Service from '@/components/service/Service';
import Numbers from '@/components/numbers/Numbers';
import Contacts from '@/components/contacts/Contacts';

export async function PageAbout() {
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
export default PageAbout as unknown as () => JSX.Element;
