import { MouseEventHandler } from 'react';
import { IContact } from '../../models';

interface ContactProps {
  contact: IContact;
}

function linker(evt: any) {
  window.open(evt.target.value);
}
//button  onClick={linker}

export function Contact({ contact }: ContactProps, key: number) {
  return (
    <div className="contact" key={key}>
      <h3 className="contact__title">{contact.title}</h3>
      <ul className="contact__data">
        {contact.name && <li className="contact__name">{contact.name}</li>}

        {contact.email && (
          <li>
            <a
              href={`mailto:${contact.email}`}
              target="_blank"
              className="link contact__link"
            >
              {contact.email}
            </a>
          </li>
        )}

        {contact.phone && (
          <li>
            <a
              href={`tel:+${contact.phone}`}
              target="_blank"
              className="link contact__link"
            >
              +{contact.phone}
            </a>
          </li>
        )}

        {contact.site && (
          <li>
            <a
              href={`http://${contact.site}`}
              target="_blank"
              className="link contact__link"
            >
              {contact.site}
            </a>
          </li>
        )}

        {contact.social && (
          <li>
            <a
              href={`http://${contact.social}`}
              target="_blank"
              className="link contact__link"
            >
              {contact.social}
            </a>
          </li>
        )}
      </ul>

      <div className="contact__buttons">
        <button
          className="button contact__button"
          name="phone"
          aria-label="Позвонить"
          title="Позвонить"
          type="button"
          value={`tel:+${contact.phone}`}
        />
        <button
          className="button contact__button"
          name="email"
          aria-label="Написать"
          title="Написать"
          type="button"
          value={`mailto:${contact.email}`}
        />
      </div>
    </div>
  );
}

export default Contact;
