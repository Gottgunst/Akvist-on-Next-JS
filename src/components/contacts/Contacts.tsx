'use client';

//################# LIBS ####################
import { getData } from '@/data/getData';

//################ LAYOUT ###################
import { Contact } from '../contact/Contact';

//########### INTERFACE & STYLES ##############
import { IContact } from '@/models';
import { IContactsProps } from '.';
import './Contacts.css';

export async function Contacts({ branch, response, index }: IContactsProps) {
  //
  const responseContacts: IContact[] = await getData({
    page: 'Contacts',
    city: branch,
  });

  // console.log(targetBranch);
  // Подготовка ссылок для карт
  const mapStatic = `url(https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%${response.map}&width=650&height=450)`;
  const mapWidget = `https://yandex.ru/map-widget/v1/?um=constructor%${response.map}&scroll=false`;

  // const mapLink = (e: any) => {
  //   window.open(
  //     `https://yandex.ru/maps/?um=constructor%${branch.map}&source=constructorStatic`
  //   );
  // }; //          //onClick={mapLink}

  return (
    <section className="section contacts" id="Contacts" data-id={index}>
      <div className="contacts__wrapper">
        <h2 className="section__title contacts__head">
          Контакты руководителей
        </h2>
        <div className="contacts__grid">
          {responseContacts.map((contact) => (
            <Contact contact={contact} key={contact.id_con} />
          ))}
        </div>
        <div className="branch">
          <div className="branch__data">
            <h3 className="branch__title">{response.title}</h3>
            <p>{response.address}</p>

            {response.address_second && <p>{response.address_second}</p>}

            <p className="branch__label" aria-label="Телефон">
              <a
                href={`tel:+${response.phone}`}
                target="_blank"
                className="link"
              >
                +{response.phone}
              </a>
            </p>

            <p className="branch__label" aria-label="Расписание">
              {response.schedule}
            </p>
          </div>
          <div className="branch__map" style={{ backgroundImage: mapStatic }}>
            <iframe className="branch__iframe" src={mapWidget}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts as unknown as (props: IContactsProps) => JSX.Element;
