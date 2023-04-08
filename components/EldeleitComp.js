import Link from 'next/link';

export function EldeleitComp() {
  return (
    <div className='d-grid justify-content-center'>
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center'>
          Eldeleit | Next.js app for payments
        </h1>
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-success p-2 rounded'>
        In this case, I was asked to create an efficient and user-friendly tool
        for a business that wants to manage and keep accurate track of pending
        payments from their customers. With an intuitive user interface, this
        application provides a complete and automated solution for payment
        management.
      </p>
      <hr />
      <p className='text-center text-light my-3 card bg-success p-2 rounded'>
        The application utilizes Next.js, a React-based web development
        framework, enabling fast page loading and a smooth and responsive user
        experience. Additionally, it integrates with a MySQL database for secure
        and scalable storage of customer data and pending payments.
      </p>
      <hr />
      <p className='text-center text-light my-3 card bg-success p-2 rounded'>
        The Next.js API is implemented to handle backend functions, allowing
        efficient and secure communication between the frontend and server. The
        main features of the application include creation and management of
        tickets for pending payments, generation of reports and payment
        statistics, and the ability to track and update the status of pending
        payments.
      </p>
      <hr />
      <div className='col-md-6 mx-auto border border-light rounded' style={{overflow: "hidden"}}>
        <video controls style={{objectFit: "cover", width: "100%"}}>
          <source src="https://cofitogit.github.io/carlosaguero/videos/eldeleitapp.mp4" type='video/mp4' />
          {/* Puedes agregar más formatos de video aquí, como .webm o .ogg */}
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
      <hr />
    </div>
  );
}
