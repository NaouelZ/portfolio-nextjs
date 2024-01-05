import Link from 'next/link';
import css from './menu.module.css';

export default function Menu() {
    return (
    <nav className={css.navbar}>
      <ul className='flex md:content-right gap-2 md:gap-5 md:px-8 py-5 bg-baby-blue md:bg-white sm:w-fit lg:w-full lg:flex-row rounded-xl '>
        <li className='p-3 text-sm text-center rounded-lg md:w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
          <Link href="/">
            <div className='text-xl'>
                <i className="fa-solid fa-user"></i>
            </div>
            <p className='font-semibold text-md'>About me</p>
          </Link>
        </li>
        <li className='p-3 text-sm text-center rounded-lg md:w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
          <Link href="/experiences">
            <div className='text-xl'>
                <i className="fa-solid fa-laptop-code"></i>
            </div>
            <p className='font-semibold text-md'>Resume</p>
          </Link>
        </li>
        <li className='p-3 text-sm text-center rounded-lg md:w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
          <Link href="/work">
            <div className='text-xl'>
                <i className="fa-solid fa-laptop-code"></i>
            </div>
            <p className='font-semibold text-md'>Portfolio</p>
          </Link>
        </li>
        <li className='p-3 text-sm text-center rounded-lg md:w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
          <Link href="/contact">
            <div className='text-xl'>
                <i className="fa-solid fa-message"></i>
            </div>
            <p className='font-semibold text-md'>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
  }