import Link from 'next/link';

const Navbar = () => (
  <nav className='navbar navbar-expand-lg bg-dark'>
    <div className='container'>
      <Link className='navbar-brand d-flex align-items-center text-white' href='/'>
        Portfolio | Home
        <span className='ms-2 material-icons' style={{ lineHeight: 0 }}>
          coffee
        </span>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link className='nav-link' href='https://github.com/Cofitogit'>
              GitHub
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              href='https://www.linkedin.com/in/aguero-ce-dev/'
            >
              LinkedIn
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' href='/portfolio'>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
