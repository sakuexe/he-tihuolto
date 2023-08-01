import { useState } from 'react'
import MobileMenu from './mobilemenu'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <nav
        className="fixed flex justify-between w-full top-0 z-40 mb-12
      text-primary px-5 py-2 drop-shadow-sm bg-secondary-600 lg:hidden"
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="space-y-[5px] w-10 flex flex-col items-end justify-center
        transition-all z-50"
        >
          <div
            className={`h-[5px] bg-primary rounded-lg transition-all ${
              isMenuOpen ? 'w-full' : 'w-full'
            }`}
          ></div>
          <div
            className={`h-[5px] bg-primary rounded-lg transition-all ${
              isMenuOpen ? 'w-full' : 'w-3/4'
            }`}
          ></div>
          <div
            className={`h-[5px] bg-primary rounded-lg transition-all ${
              isMenuOpen ? 'w-full' : 'w-2/4'
            }`}
          ></div>
        </button>
      </nav>
      <MobileMenu
        isVisible={isMenuOpen}
        toggleVisibility={() => {
          setIsMenuOpen
        }}
      />
    </>
  )
}
