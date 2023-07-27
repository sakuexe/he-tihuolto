export default function Presentation2() {
  return (
    <main className="px-4 space-y-5 xs:px-8">
      <div>
        <h4 className="text-secondary text-sm">• Esittely</h4>
        <h3 className="font-bold text-xl">
          Tietoa meistä, historiasta ja arvoista. Miksi erotumme kilpailijoista
          ja mitä etuja asiakkaat saavat valitsemalla meidät
        </h3>
      </div>
      <p>
        Vitae nulla suspendisse pretium elementum feugiat feugiat ante massa.
        Gravida purus ultrices quis viverra curabitur et enim. Nec bibendum ut
        sed enim. Eu rutrum tristique dis consectetur viverra ullamcorper sit
        nec. Risus egestas.
      </p>
      <p>
        At congue suscipit nunc at id. Suspendisse aliquam mattis non in feugiat
        augue. Pharetra ac porttitor purus elementum et nunc nulla fermentum.
        Enim non vitae vitae gravida enim id mauris. Lectus et magnis ipsum et
        semper eget eu lorem. Quis risus magna in phasellus et elementum morbi.
        Id ut dictum urna quis mauris. Mauris pulvinar sollicitudin hac nulla.
        Felis nisi dignissim duis vulputate non penatibus purus.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="row-span-2 overflow-hidden">
          <img
            src="/images/renovation.jpg"
            alt="placeholder"
            className="w-full h-full bg-secondary transition-all hover:scale-125"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/maintenance.jpg"
            alt="placeholder"
            className="w-full h-full bg-secondary transition-all hover:scale-125"
            loading="lazy"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/images/movinggrass.jpg"
            alt="placeholder"
            className="w-full h-full bg-secondary transition-all hover:scale-125"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  )
}
