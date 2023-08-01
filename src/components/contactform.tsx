import { ChangeEvent, FormEvent, useState } from 'react'

type Response = {
  type: 'success' | 'error' | ''
  message: string
}

export default function ContactForm({ formKey }: { formKey: string }) {
  const [contact, setContact] = useState({
    email: '',
    subject: 'He-Ti Huolto yhteydenotto lomakkeelta',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
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
  }

  if (response.message) return <h1>Thank you</h1>

  return (
    <section
      id="form"
      className="bg-secondary-600 py-12 my-16 relative overflow-hidden isolate"
    >
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        onSubmit={handleSubmit}
        className="sectioncontainer text-secondary-700"
      >
        <h4 className="text-primary text-xl font-bold">
          Yhteydenotto lomakkeella
        </h4>
        <p className="text-primary">
          Jätä meille sähköpostiosoitteesi ja viestisi, niin olemme sinuun pian
          yhteydessä sähköpostilla. Voit myös jättää muutakin tietoa taikka
          kysymyksiä. Pyrimme vastaamaan viesteihin heti kun on mahdollista.
        </p>
        <div className="flex flex-col gap-y-2">
          <div
            className="rounded-md bg-primary flex
              transition-all hover:drop-shadow-xl"
          >
            <div className="flex justify-center items-center bg-secondary aspect-square px-2 rounded-l-md">
              <img src="/images/email.svg" alt="" className="h-7 invert" />
            </div>
            <input
              type="email"
              name="$Sähköposti:"
              placeholder="sähköposti@email.com"
              onChange={handleChange}
              className="rounded-r-md bg-transparent py-3 px-4 w-full"
            />
          </div>
          <textarea
            name="$Viesti:"
            required
            rows={5}
            placeholder="Viestisi tähän..."
            onChange={handleChange}
            className="rounded-md bg-primary py-3 px-4 w-full resize-none
            transition-all hover:drop-shadow-xl"
          ></textarea>
          <button
            type="submit"
            className="flex bg-primary rounded-md w-52 h-12
          transition-all hover:drop-shadow-xl"
          >
            <span className="flex-grow my-auto">Lähetä viestisi</span>
            <div className="bg-secondary flex items-center justify-center rounded-r-md aspect-square px-2">
              <img
                src="/images/send.svg"
                alt=""
                className="h-7 invert opacity-80"
              />
            </div>
          </button>
        </div>
        <input type="text" name="honeypot" style={{ display: 'none' }} />
        <input type="hidden" name="accessKey" value={formKey} />
        <input type="hidden" name="replyTo" value="@" />
      </form>
      <img
        src="/images/hetitree.png"
        alt=""
        role="presentation"
        className="max-h-full aspect-square absolute -right-4 bottom-0 opacity-20 -z-10 mix-blend-screen"
      />
    </section>
  )
}
