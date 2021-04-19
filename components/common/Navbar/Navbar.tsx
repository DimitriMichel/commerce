import { FC } from 'react'
import Link from 'next/link'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import NavbarRoot from './NavbarRoot'
import s from './Navbar.module.css'
import { motion } from 'framer-motion'

// title logo "LaRobe" animation
const scaleVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: { duration: 0.3 },
  },
}
const Navbar: FC = () => (
  <NavbarRoot>
    <div className="relative flex flex-row justify-between px-6 py-4 align-center md:py-3 text-white bg-black">
      <div className="flex items-center flex-1">
        <Link href="/">
          <a className={s.logo} aria-label="Logo">
            <Logo />
          </a>
        </Link>
        <nav className=" hidden ml-6 space-x-4 lg:block">
          <Link href="/">
            <a className={s.link}>Home</a>
          </Link>
          <Link href="/search">
            <a className={s.link}>Shop</a>
          </Link>
          <Link href="/search?q=dress">
            <a className={s.link}>Dresses</a>
          </Link>
        </nav>
      </div>
      <Link href="/">
        <a>
          <div className="justify-center flex-1 hidden lg:flex">
            <motion.div
              variants={scaleVariants}
              animate="animate"
              initial="initial"
              className={s.siteTitle}
            >
              LaRobe
            </motion.div>
          </div>
        </a>
      </Link>

      <div className="flex  justify-end flex-1 space-x-8">
        <div className="hidden lg:flex">
          <Searchbar />
        </div>
        <UserNav />
      </div>
    </div>

    <div className="flex pb-4 lg:px-6 lg:hidden">
      <Searchbar id="mobile-search" />
    </div>
  </NavbarRoot>
)

export default Navbar
