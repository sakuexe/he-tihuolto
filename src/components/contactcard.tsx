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
    <div className="flex gap-x-5 w-[320px] group" key={index}>
      <div className="relative flex items-center justify-center w-20">
        <img
          src={contact.image}
          alt={`${contact.title} -ikoni`}
          className={`transition-all group-hover:scale-125
            group-hover:drop-shadow-lg
            group-hover:${isEven ? 'rotate-12' : '-rotate-12'}`}
        />
        <div
          className={`absolute inset-0 m-auto w-9/12 aspect-square 
          rounded-lg -z-10 ${!isEven ? 'bg-primary-700' : 'bg-secondary-700'}`}
        />
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="font-bold text-lg">{contact.title}</h4>

        {contact.contacts.map((contact, index) => {
          if (!contact.link)
            return (
              <p key={index}>
                <span className="opacity-75">{contact.name}:</span> <br />
                {contact.value}
              </p>
            )
          return (
            <div key={index}>
              <p>
                <span className="opacity-75">
                  {contact.name && `${contact.name}: `}
                </span>
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
