import FooterLogo from '@/app/assets/footerLogo.svg'
import YoutubeLogo from '@/app/assets/Youtube.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-primary text-white py-10 m-4 rounded-md'>
      <div className='container m-auto'>
        <div className='grid grid-col-1 md:grid-cols-[30%_1fr_1fr] lg:grid-cols-[55%_1fr_1fr] gap-8 items-start md:items-end'>
          <div className='flex flex-col gap-6'>
            <Image src={FooterLogo.src} alt='Logo' width={60} height={60} />
            <p className='text-white font-light max-w-[400px]'>
              Company tagline or description goes here. It can be a short line
              about what the company does.
            </p>
            <span>office@fylpi.at | www.fylpi.at</span>
            <div className='flex items-center gap-1'>
              <Image
                src={YoutubeLogo.src}
                alt='Youtube Logo'
                width={48}
                height={48}
              />
              <span className='font-light'>YouTube</span>
            </div>
          </div>
          <div className='flex flex-col '>
            <h3 className='text-lg mb-4 text-white'>Quick Links</h3>
            <ul className='flex flex-col gap-1 md:gap-3'>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  Buy
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  Rent
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  Post Listing
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <h3 className='text-lg font-semibold mb-4  text-white'>
              Quick Links
            </h3>
            <ul className='flex flex-col gap-1 md:gap-3'>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/' className='text-white hover:text-white'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-8' />
        <div className='text-center flex flex-col justify-between text-secondary text-sm md:flex-row'>
          <p>&copy; 2023 property search. All rights reserved.</p>
          <ul className='flex gap-2'>
            <li>
              <Link href='/' className='text-secondary hover:text-white'>
                Terms
              </Link>
            </li>
            <li>
              <Link href='/' className='text-secondary hover:text-white'>
                Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
