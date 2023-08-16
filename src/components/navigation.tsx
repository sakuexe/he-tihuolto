import { useState, useEffect, useRef } from 'react'
import MobileMenu from './mobilemenu'

export default function Navigation() {
  const NavRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onScroll = () => {
    let scrollHeight = window.scrollY
    if (scrollHeight > 385) {
      NavRef.current?.classList.add('bg-primary')
      NavRef.current?.classList.remove('bg-secondary')
    } else {
      NavRef.current?.classList.remove('bg-primary')
      NavRef.current?.classList.add('bg-secondary')
    }
  }

  useEffect(() => {
    // check the scroll position also at load before scrolling is done
    onScroll()
    window.addEventListener('scroll', onScroll, false)
  }, [])

  return (
    <>
      <nav
        ref={NavRef}
        className="fixed flex justify-between w-full top-0 z-40 mb-12
        px-5 py-2 drop-shadow-sm lg:hidden"
      >
        <div className="flex items-end gap-x-2 h-12">
          <img
            src="./images/hetitree.svg"
            alt="He-Ti Huolto -logo"
            className="h-full"
          />
          <img
            src="./images/heti-teksti.svg"
            alt=""
            role="presentation"
            className="h-3/4"
          />
        </div>
        <button
          id="nav-button"
          aria-label="navigaatio painike"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="space-y-[5px] w-10 flex flex-col items-end justify-center
        transition-all z-50 [&>div]:pointer-events-none"
        >
          <div
            className={`h-[5px] bg-primary-100 rounded-lg transition-all ${
              isMenuOpen ? 'w-full' : 'w-full'
            }`}
          ></div>
          <div
            className={`h-[5px] bg-primary-100 rounded-lg transition-all ${
              isMenuOpen ? 'w-full' : 'w-3/4'
            }`}
          ></div>
          <div
            className={`h-[5px] bg-primary-100 rounded-lg transition-all ${
              isMenuOpen ? 'w-full' : 'w-2/4'
            }`}
          ></div>
        </button>
      </nav>
      <MobileMenu isVisible={isMenuOpen} toggleVisibility={setIsMenuOpen} />
    </>
  )
}
