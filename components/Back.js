import Link from 'next/link';

export function Back() {
  return (
    <div className='container d-grid py-3 justify-content-center'>
      <button className='btn btn-success rounded'>
        <Link href='/' className='nav-link text-light'>
          HOME
        </Link>
      </button>
    </div>
  );
}
