import services from '../json/services.json'
import contactsJson from '../json/contact.json'
import type { Dispatch, MouseEventHandler, SetStateAction } from 'react'

type Contact = {
  title: string
  image: string
  contacts: {
    type: string
    value: string
    link?: string
  }[]
}

type MenuProps = {
  isVisible: boolean
  toggleVisibility: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu(props: MenuProps) {
  const contacts = contactsJson as Contact[]

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = () => {
    props.toggleVisibility(false)
  }

  return (
    <section
      className={`fixed flex top-0 right-0 w-full max-w-md h-screen bg-secondary-600
          rounded-l-2xl drop-shadow-md z-30 text-primary transition-all lg:hidden
          ${props.isVisible ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="mt-28 mb-8 mx-5 flex flex-col justify-between flex-grow">
        <ul className="text-center space-y-8">
          <li className="space-y-2">
            <a
              href="#presentation"
              className="font-bold text-xl"
              onClick={handleLinkClick}
            >
              Esittely
            </a>
          </li>
          <li className="space-y-2">
            <a
              href="#services"
              className="font-bold text-xl"
              onClick={handleLinkClick}
            >
              Palvelumme
            </a>
            <div className="flex flex-col gap-y-2">
              {services.map((service, index: number) => (
                <a
                  href={`#${service.title}`}
                  key={index}
                  onClick={handleLinkClick}
                >
                  {service.title}
                </a>
              ))}
            </div>
          </li>
          <li className="space-y-2">
            <a
              href="#contacts"
              className="font-bold text-xl"
              onClick={handleLinkClick}
            >
              Yhteystiedot
            </a>
            <div className="flex flex-col gap-y-2">
              <a href="#contacts" onClick={handleLinkClick}>
                Puhelinnumero
              </a>
              <a href="#contacts" onClick={handleLinkClick}>
                Sosiaaliset mediat
              </a>
              <a href="#contacts" onClick={handleLinkClick}>
                Sähköposti
              </a>
              <a href="#form" onClick={handleLinkClick}>
                Lomake
              </a>
            </div>
          </li>
        </ul>

        <ul className="flex flex-col items-end">
          <li className="flex items-center gap-x-2">
            <a href="#form" onClick={handleLinkClick}>
              Yhteydenotto Lomake
            </a>
            <img src="./images/form.svg" alt="Lomake ikoni" className="w-8" />
          </li>
          {contacts.map((contact, index: number) => (
            <li key={index} className="flex items-center gap-x-2">
              <a
                href={`${contact.contacts[0].link || '#contacts'}`}
                key={index}
                onClick={handleLinkClick}
              >
                {contact.contacts[0].value}
              </a>
              <img
                src={`./${contact.image}`}
                alt={`${contact.contacts[0].type} ikoni`}
                className="w-8"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
