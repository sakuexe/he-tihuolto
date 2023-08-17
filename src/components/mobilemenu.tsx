import services from '../json/services.json'
import contactsJson from '../json/contact.json'
import type { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import { useEffect, useRef } from 'react'

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
  isPrimaryColor: boolean
  toggleVisibility: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu(props: MenuProps) {
  const contacts = contactsJson as Contact[]
  const MenuRef = useRef<HTMLDivElement>(null)

  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = () => {
    props.toggleVisibility(false)
  }

  const handleOutsideClick = (event: MouseEvent) => {
    // functionality for closing the menu when clicking outside of it
    // also checks if the clicked element is the nav button
    const clickedElement = event.target as HTMLElement
    if (clickedElement.id === 'nav-button') return
    if (MenuRef.current && !MenuRef.current.contains(clickedElement)) {
      props.toggleVisibility(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [MenuRef.current])

  return (
    <section
      ref={MenuRef}
      id="mobile-menu"
      className={`fixed flex top-0 right-0 w-full max-w-md h-screen
          rounded-l-2xl drop-shadow-xl z-30 transition-all lg:hidden
          ${props.isVisible ? 'translate-x-0' : 'translate-x-full'}
          ${props.isPrimaryColor ? 'bg-primary' : 'bg-secondary'} `}
    >
      <div className="mt-28 mb-8 mx-5 flex flex-col justify-between flex-grow">
        <ul className="text-center space-y-8">
          <li className="space-y-2">
            <a
              href="#presentation"
              className="font-bold text-xl hover:underline"
              onClick={handleLinkClick}
            >
              Esittely
            </a>
          </li>
          <li className="space-y-2">
            <a
              href="#services"
              className="font-bold text-xl hover:underline"
              onClick={handleLinkClick}
            >
              Palvelumme
            </a>
            <div className="flex flex-col gap-y-2">
              {services.map((service, index: number) => (
                <a
                  href={'#services'}
                  key={index}
                  onClick={handleLinkClick}
                  className="opacity-75 hover:underline"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </li>
          <li className="space-y-2">
            <a
              href="#contacts"
              className="font-bold text-xl hover:underline"
              onClick={handleLinkClick}
            >
              Yhteystiedot
            </a>
            <div className="flex flex-col gap-y-2 [&>a]:opacity-75">
              <a
                href="#contacts"
                onClick={handleLinkClick}
                className="hover:underline"
              >
                Puhelinnumero
              </a>
              <a
                href="#contacts"
                onClick={handleLinkClick}
                className="hover:underline"
              >
                Sosiaaliset mediat
              </a>
              <a
                href="#contacts"
                onClick={handleLinkClick}
                className="hover:underline"
              >
                Sähköposti
              </a>
              <a
                href="#form"
                onClick={handleLinkClick}
                className="hover:underline"
              >
                Lomake
              </a>
            </div>
          </li>
        </ul>

        <ul className="flex flex-col items-end">
          <li className="flex items-center gap-x-2">
            <a
              href="#form"
              onClick={handleLinkClick}
              className="hover:underline"
            >
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
                className="hover:underline"
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
