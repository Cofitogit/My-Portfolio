export const skills = [
  {
    skill: 'React JS',
    percentage: 90,
  },
  {
    skill: 'Vue.js',
    percentage: 90,
  },
  {
    skill: 'Angular',
    percentage: 65,
  },
  {
    skill: 'Node.js',
    percentage: 80,
  },
  {
    skill: 'MSSQL',
    percentage: 80,
  },
  {
    skill: 'Django',
    percentage: 60,
  },
];

export const experiences = [
  {
    title: 'Primary and secondary education',
    description:
      'Primary and secondary education at IESS | Institute of Secondary and Higher Education, Villa Carlos Paz, Córdoba, Argentina. Major: Natural Sciences.',
    from: 2002,
    to: 2014,
  },
  {
    title: 'University studies',
    description:
      'National Technological University, Chemical Engineering degree. Córdoba, Argentina.',
    from: 2015,
    to: 2022,
  },
  {
    title: 'Experience',
    description:
      'I am a self-taught web development enthusiast with a strong passion for React and Vue. I have independently acquired knowledge in various frameworks and libraries. Moreover, I have excellent teamwork skills, which I consider essential in the world of web development. I have improved my skills through community documentation and online courses. I am capable of working effectively both independently and in a team, with strong problem-solving skills. I am always seeking opportunities to learn and improve in the field of web development.',
    from: 2022,
    to: 2023,
  }, 
   {
    title: 'Merchant company.',
    description:
      "My parents' businesses, with a focus on close interaction with employees, teamwork, and high responsibility in task execution.",
    from: 2013,
    to: 2021,
  },
];

export const projects = [
  {
    title: 'A.M Estética',
    description:
      "Esthetic Appointments: A reservation app for aesthetic treatments built with Ionic and Angular, allowing users to select treatments, dates, and convenient time slots. Improved skills such as Ionic, Angular, SASS.",
    img: 'https://i.ibb.co/wpnJkkv/estetica.jpg',
    url: '/estetica',
  },
  {
    title: 'CoffeeTo',
    description:
      "Vue3 app replicating user experience in social media using bcrypt, jsonwebtoken, mysql2, openai, express & axios for user auth, data storage, a decently complex rest API.",
    img: 'https://i.ibb.co/KKNXRFw/coffee1.jpg',
    url: '/coffeeto',
  },
  {
    title: 'El Deleit',
    description:
      "Next.js app for managing payments and tickets, powered by MySQL. Create and track pending payments, generate reports. Efficient and organized solution for businesses.",
    img: 'https://i.ibb.co/djSphwn/eldeleit1.jpg',
    url: '/eldeleit',
  },
  {
    title: 'Django task app',
    description:
      "Django-powered app for user creation & task management. Easy registration, creation, updating & listing of tasks. Boost productivity & organization in any work environment.",
    img: 'https://i.ibb.co/KzYDv9Q/django3.png',
    url: '/djangotask',
  },
  {
    title: 'React movies TMDb API',
    description:
      'Routing, Hooks, and Form Management in React. Building a movie website using The Movie Database API.. implementing infinite scrolling, Netflix-style search and more. ',
    img: 'https://i.ibb.co/d2rnDN0/second.png',
    url: '/reactmovies',
  },
  {
    title: 'Task APP',
    description:
      "Vite, a JavaScript tool that allows us to create projects, have a development server, and build our web applications. In this case, it's used to create a task app using React.",
    img: 'https://i.ibb.co/LPZkprP/third.png',
    url: '/vitetask',
  },
];

export const portfolio = {
  estetica: {
    description: {
      es: {
        1: "Este proyecto es una aplicación de turnos para tratamientos estéticos desarrollada con Ionic y Angular. La aplicación permite a los usuarios seleccionar el tipo de tratamiento estético que desean recibir, elegir el mes y el día en que desean agendar el turno, y ver los horarios disponibles. Los horarios se encuentran divididos en turnos de 1 hora, desde las 10:00 a.m. hasta las 18:00 p.m. Los días sábados y domingos no están disponibles para seleccionar por defecto.",
        2: "La aplicación cuenta con una interfaz de usuario intuitiva y atractiva, que ofrece una experiencia de usuario fluida y agradable. Los usuarios pueden ver los tratamientos disponibles, seleccionar una fecha y horario conveniente, y realizar la reserva de turno de manera rápida y sencilla.",
        3: "Durante el desarrollo del proyecto, aprendí a trabajar con Ionic y Angular, familiarizándome con las capacidades y funcionalidades de estos frameworks. Mejoré mis habilidades en el diseño de interfaces de usuario y la gestión de fechas y horarios en aplicaciones móviles. También gané experiencia en la colaboración en equipo y la gestión de proyectos utilizando metodologías ágiles. Como proximas mejoras, voy a implementar notificaciones de recordatorio de turno y la integración con un sistema de gestión de usuarios y reservas."
      },
      en: {
        1: "This project is an appointment scheduling application for aesthetic treatments developed with Ionic and Angular. The application allows users to select the type of aesthetic treatment they want to receive, choose the month and day they want to schedule the appointment, and view the available time slots. The time slots are divided into 1-hour intervals, from 10:00 a.m. to 6:00 p.m. Saturdays and Sundays are not available for selection by default.",
        2: "The application features an intuitive and attractive user interface that offers a smooth and pleasant user experience. Users can view available treatments, select a convenient date and time, and make a reservation quickly and easily.",
        3: "During the project development, I learned how to work with Ionic and Angular, becoming familiar with the capabilities and functionalities of these frameworks. I improved my skills in user interface design and management of dates and times in mobile applications. I also gained experience in team collaboration and project management using agile methodologies. As future improvements, I will implement appointment reminder notifications and integration with a user and reservation management system."
      }
    }
  }
}