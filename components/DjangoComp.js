export function DjangoComp() {
  return (
    <>
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
          Eldeleit | Next.js app for payments
        </h1>
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded'>
        This application built with Django offers a complete solution for user
        creation and task management. Users can easily and quickly register,
        create, update, and list tasks to be completed. With an intuitive
        interface, this application is perfect for improving productivity and
        organization in any work environment or project.
      </p>
      <hr />
      <div id='myCarousel' className='carousel slide' data-bs-ride='carousel'>
        {/* Indicadores del carrusel */}
        <ol className='carousel-indicators'>
          <li
            data-bs-target='#myCarousel'
            data-bs-slide-to='0'
            className='active'
          ></li>
          <li data-bs-target='#myCarousel' data-bs-slide-to='1'></li>
          <li data-bs-target='#myCarousel' data-bs-slide-to='2'></li>
          <li data-bs-target='#myCarousel' data-bs-slide-to='3'></li>
          <li data-bs-target='#myCarousel' data-bs-slide-to='4'></li>
        </ol>

        {/* Slides del carrusel */}
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='d-flex justify-content-center'>
              <img src='https://i.ibb.co/BTM83HC/django1.png' alt='Imagen 1' />
            </div>
          </div>
          <div className='carousel-item'>
            <div className='d-flex justify-content-center'>
              <img src='https://i.ibb.co/NFqkqzH/django2.png' alt='Imagen 2' />
            </div>
          </div>
          <div className='carousel-item'>
            <div className='d-flex justify-content-center'>
              <img src='https://i.ibb.co/KzYDv9Q/django3.png' alt='Imagen 3' />
            </div>
          </div>
          <div className='carousel-item'>
            <div className='d-flex justify-content-center'>
              <img src='https://i.ibb.co/fCbNy8H/django4.png' alt='Imagen 4' />
            </div>
          </div>
          <div className='carousel-item'>
            <div className='d-flex justify-content-center'>
              <img src='https://i.ibb.co/KwpRCB9/django5.png' alt='Imagen 5' />
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <a
          className='carousel-control-prev'
          href='#myCarousel'
          role='button'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#myCarousel'
          role='button'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </a>
      </div>
    </>
  );
}
