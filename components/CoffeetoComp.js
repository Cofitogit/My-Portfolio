export function CoffeetoComp() {
    return (
      <div className='d-grid justify-content-center'>
        <div className='mx-3'>
          <h1 className='fw-light text-success text-center'>
            CoffeeTo social media | Vue.js
          </h1>
        </div>
        <hr />
        <p className='text-center text-light my-3 card bg-success p-2 rounded'>
        In summary, this Vue application utilizes popular web development technologies such as bcrypt, jsonwebtoken, mysql2, openai, express, and axios to build a social media application replicating functionalities from popular platforms like Instagram and Reddit. These technologies are used to handle user authentication and authorization, store and manage data in a database, handle HTTP requests and responses, and make HTTP requests from the client to the server's REST API.
        </p>
        <hr />
        <div className='col-md-6 mx-auto border border-light rounded' style={{overflow: "hidden"}}>
          <video controls style={{objectFit: "cover", width: "100%"}}>
            <source src="https://cofitogit.github.io/carlosaguero/videos/coffeeto.mp4" type='video/mp4' />
            {/* Puedes agregar más formatos de video aquí, como .webm o .ogg */}
            Tu navegador no admite la reproducción de videos.
          </video>
        </div>
        <hr />
      </div>
    );
  }
  