import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '..//constants/index.js'
function Nav() {
  return (
    <header className=' w-full z-10 padding-x py-8 absolute '>
    <nav className='flex justify-between items-center  max-container'>
        <a href="/">
            <img src={headerLogo}
            alt="Logo"
            width={130}
            height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((e) => (
            <li key={e.label}>
               <a href={e.href}
               className='font-montserrat leading-normal text-lg text-slate-gray'>
               {e.label}
               </a>
            </li>
        ))}
        </ul>
        <div className='hidden max-lg:block'>
            <img
                src={hamburger}
                alt='hamburger'
                width={25}
            />
        </div>
    </nav>

    </header>
  )
}

export default Nav
