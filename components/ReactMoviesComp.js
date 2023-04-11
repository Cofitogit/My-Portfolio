export function ReactMoviesComp() {

  return (
    <div className='d-grid justify-content-center'>
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
        React movies TMDb API
        </h1>
      </div>
      <hr />
      <p className='text-center text-light card bg-coffee p-2 rounded'>Discover an amazing movie app created with React, components, hooks, and routing, utilizing The Movie Database (TMDB) API to provide you with a seamless and dynamic browsing experience. This personalized app allows you to explore a wide selection of movies in an intuitive way.</p>
      <hr />
      <p className='text-center text-light mb-5 card bg-coffee p-2 rounded'>With a modular approach based on React components and hooks, this app is highly modular and easy to maintain. The built-in routing allows you to navigate smoothly between different sections, such as the homepage, movie detail pages, and search result pages.</p>
      <div className='col-md-8 mx-auto'>
        <img
          src='https://i.ibb.co/q5sFJzJ/moviesreact1.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="rounded border border-light"
        />
      </div>
      <hr />
      <p className='text-center text-light mt-3 card bg-coffee p-2 rounded'>The app uses the TMDB API, one of the most popular and comprehensive movie databases in the world, to fetch up-to-date information about movies, such as titles, genres, ratings, cast, and more. This ensures that you always have access to the most current and accurate information.</p>
      <hr />
      <div className='col-md-8 mt-3 mx-auto'>
        <img
          src='https://i.ibb.co/qWCRx5n/moviesreact3.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="rounded border border-light"
        />
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded'>One of the standout features of this app is its infinite scroll system, allowing you to explore an endless list of movies as you scroll down. You'll never run out of options to discover exciting new movies.</p>
      <hr />
      <div className='col-md-8 mx-auto'>
        <img
          src='https://i.ibb.co/Qrb4xVc/moviesreact4.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="rounded border border-light"
        />
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded'>In addition, it features a Netflix-style real-time search system, allowing you to search for movies as you type, providing instant and accurate results. This makes finding your favorite movies quick and easy.</p>
      <hr />
      <div className='col-md-8 mx-auto'>
        <img
          src='https://i.ibb.co/hBFnvK0/moviesreact2.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="rounded border border-light"
        />
      </div>
      <hr />
    </div>
  );
}
