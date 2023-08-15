export type Service = {
  title: string
  description: string
  image: string
  // price: number
}

export default function Card({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const isOdd = index % 2 !== 0

  return (
    <div className="bg-primary max-w-xs mx-auto drop-shadow-lg rounded-lg group">
      <div
        className={`flex justify-between items-center h-12 px-5 text-xl font-bold rounded-lg
        overflow-hidden
        ${isOdd ? 'bg-primary-200' : 'bg-secondary'}`}
      >
        <h3>{service.title}</h3>
        <img
          src={service.image}
          alt=""
          role="presentation"
          draggable="false"
          className="h-full py-1 aspect-square opacity-75 transition-all 
          scale-110 group-hover:scale-150"
        />
      </div>
      <p className="p-5 pt-3 ">{service.description}</p>
    </div>
  )
}
