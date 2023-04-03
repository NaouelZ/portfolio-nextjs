import Link from 'next/link';
import css from './menu.module.css';

export default function Menu() {
    return (
    <nav className={css.navbar}>
      <ul className='flex gap-5 px-8 py-5 bg-white lg:flex-row rounded-xl content-right'>
        <li className='p-3 text-sm text-center rounded-lg w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
          <Link href="/">
            <div className='text-xl'>
                <i className="fa-solid fa-user"></i>
            </div>
            <p className='font-semibold text-md'>About me</p>
          </Link>
        </li>
        <li className='p-3 text-sm text-center rounded-lg w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
          <Link href="/experiences">
            <div className='text-xl'>
                <i className="fa-solid fa-laptop-code"></i>
            </div>
            <p className='font-semibold text-md'>Resume</p>
          </Link>
        </li>
        <li className='p-3 text-sm text-center rounded-lg w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
          <Link href="/work">
            <div className='text-xl'>
                <i className="fa-solid fa-laptop-code"></i>
            </div>
            <p className='font-semibold text-md'>My work</p>
          </Link>
        </li>
        <li className='p-3 text-sm text-center rounded-lg w-[90px] bg-gray text-blue hover:text-white hover:bg-baby-blue'>
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