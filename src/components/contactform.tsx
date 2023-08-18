import { ChangeEvent, FormEvent, useState, useEffect, useRef } from 'react'

type Response = {
  type: 'success' | 'error' | ''
  message: string
}

export default function ContactForm({ formKey }: { formKey: string }) {
  const [contact, setContact] = useState({
    email: '',
    subject: 'He-Ti Huolto yhteydenotto lomakkeelta',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    $viesti: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: formKey, // get your access key from https://www.staticforms.xyz
  })

  const [response, setResponse] = useState<Response>({
    type: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('submitting form')
    e.preventDefault()
    try {
      if (!contact.$viesti || !contact.email) throw new Error('Empty fields')
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.',
        })
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        })
      }
    } catch (e) {
      console.error('An error occurred', e)
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      })
    }
    console.log('form submitted', contact)
  }

  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!emailRef.current) return
    emailRef.current.value = ''
    if (!messageRef.current) return
    contact.$viesti = messageRef.current.value
  }, [])

  if (response.type === 'error')
    return (
      <section className="relative bg-secondary py-12 my-16 overflow-hidden isolate">
        <div className="sectioncontainer">
          <h4 className="text-xl font-bold">Jokin meni pieleen.</h4>
          <p>
            Kokeile uudelleen. Jos ongelma jatkuu niin yritä uudelleen hetken
            päästä. Tarkista tietosi vielä kerran.
          </p>
          <div>
            <button
              onClick={() => location.reload()}
              className="py-4 px-6 bg-primary drop-shadow rounded-lg
              transition-all hover:bg-secondary-700"
            >
              Kokeile uudelleen
            </button>
          </div>
        </div>
        <img
          src="./images/hetitree.png"
          alt=""
          role="presentation"
          className="w-64 aspect-square absolute -right-4 bottom-0 opacity-20 -z-10 mix-blend-screen"
        />
      </section>
    )

  if (response.type === 'success')
    return (
      <section className="relative bg-secondary py-12 my-16 overflow-hidden isolate">
        <div className="sectioncontainer">
          <h4 className="text-xl font-bold">Kiitos yhteydenotosta!</h4>
          <p>Olemme sinuun yhteydessä mahdollisimman pian. Kuulemisiin!</p>
        </div>
        <img
          src="./images/hetitree.png"
          alt=""
          role="presentation"
          className="w-64 aspect-square absolute -right-4 bottom-0 opacity-20 -z-10 mix-blend-screen"
        />
      </section>
    )

  return (
    <section
      id="form"
      className="bg-secondary py-12 my-16 relative overflow-hidden isolate"
    >
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        onSubmit={handleSubmit}
        className="sectioncontainer"
      >
        <h4 className="text-xl font-bold">Yhteydenotto lomakkeella</h4>
        <p>
          Jätä meille sähköpostiosoitteesi ja viestisi, niin olemme sinuun pian
          yhteydessä sähköpostilla. Voit myös jättää muutakin tietoa taikka
          kysymyksiä. Pyrimme vastaamaan viesteihin heti kun on mahdollista.
        </p>
        <div className="flex flex-col gap-y-2">
          <div
            className="rounded-md bg-primary flex
              transition-all hover:drop-shadow-xl focus-within:bg-secondary-700"
          >
            <div className="flex justify-center items-center bg-secondary-700 aspect-square px-2 rounded-l-md">
              <img src="./images/email.svg" alt="" className="h-7" />
            </div>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="sähköposti@email.com"
              required
              onChange={handleChange}
              className="rounded-r-md bg-transparent py-3 px-4 w-full focus:outline-none"
            />
          </div>
          <textarea
            ref={messageRef}
            name="$viesti"
            required
            rows={5}
            placeholder="Viestisi tähän..."
            spellCheck="false"
            onChange={handleChange}
            className="rounded-md bg-primary py-3 px-4 w-full resize-none
            transition-all hover:drop-shadow-xl focus:outline-none focus:bg-secondary-700"
          ></textarea>
          <button
            type="submit"
            className="flex bg-primary rounded-md w-52 h-12
          transition-all group hover:bg-secondary-700 hover:drop-shadow-xl active:scale-90"
          >
            <span className="flex-grow my-auto">Lähetä viestisi</span>
            <div className="bg-secondary-700 h-full flex items-center justify-center rounded-r-md aspect-square px-2">
              <img
                src="./images/send.svg"
                alt=""
                className="h-7 transition-all group-hover:invert-0"
              />
            </div>
          </button>
        </div>
        <input type="text" name="honeypot" style={{ display: 'none' }} />
        <input type="hidden" name="accessKey" value={formKey} />
        <input type="hidden" name="replyTo" value="@" />
      </form>
      <img
        src="./images/hetitree.png"
        alt=""
        role="presentation"
        className="max-h-full aspect-square absolute -right-4 bottom-0 opacity-20 -z-10 mix-blend-screen"
      />
    </section>
  )
}
