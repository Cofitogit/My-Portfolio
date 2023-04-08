import Link from 'next/link';

export function ViteTaskComp() {
  const text =
    "This project is a simple task app created using Vite, Tailwind, and React, designed to put my skills and knowledge in web development into practice. It is one of my early projects as a developer, where I have applied React concepts to create a functional and straightforward application. It's a perfect opportunity for me to learn and improve my skills in the exciting world of web development using modern technologies!";

  return (
    <div className='d-grid justify-content-center'>
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center'>
          Vite & React | Task APP
        </h1>
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-success p-2 rounded'>{text}</p>
      <hr />
      <div className='col-md-8 mx-auto border border-light rounded'>
        <img
          src='https://i.ibb.co/2Yg6QXB/vitetask.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <hr />
      <button className='btn btn-light w-50 mt-3 mx-auto rounded'>
        <Link
          href='https://cofitogit.github.io/react-vite-tasks/'
          className='nav-link text-dark'
        >
          GitHub Pages
        </Link>
      </button>
    </div>
  );
}
