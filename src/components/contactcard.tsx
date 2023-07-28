export type ContactInfo = {
  title: string
  image: string
  contacts: {
    name?: string
    value: string
    link?: string
  }[]
}

export default function ContactCard({
  contact,
  index,
}: {
  contact: ContactInfo
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div className="flex gap-x-5 w-[320px]">
      <div className="relative flex items-center justify-center w-20">
        <img
          src={contact.image}
          alt={`${contact.title} -ikoni`}
          role="menuitem"
        />
        <div
          className={`absolute inset-0 m-auto w-5/6 aspect-square 
          rounded-lg -z-10 ${!isEven ? 'bg-primary-200' : 'bg-secondary'}`}
        />
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="font-bold text-lg">{contact.title}</h4>

        {contact.contacts.map((contact, index) => {
          if (!contact.link)
            return (
              <p key={index}>
                {contact.name}: {contact.value}
              </p>
            )
          return (
            <div>
              <p>
                {contact.name && `${contact.name}: `}
                <a href={contact.link} className="underline">
                  {contact.value}
                </a>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}