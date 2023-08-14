type ImageProps = {
  src: string
  alt: string
  title: string
  isFirst?: boolean
}

export default function Image(props: ImageProps) {
  const firstImageClasses = props.isFirst
    ? 'aspect-[3/2] xs:aspect-auto xs:row-span-2 md:aspect-[3/2] md:row-span-1'
    : 'aspect-[3/2] xs:aspect-auto md:aspect-[3/2]'
  return (
    <div
      aria-label={props.title}
      className={`relative overflow-hidden group ${firstImageClasses}`}
    >
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-full bg-secondary transition-all object-cover 
        group-hover:scale-125"
        loading="lazy"
      />
      <p
        className="absolute mx-auto bottom-0 flex justify-center items-center 
        w-full h-12 text-primary backdrop-blur-md backdrop-brightness-50 transition-all
        :opacity-100 group-hover:drop-shadow-md"
      >
        {props.title}
      </p>
    </div>
  )
}
