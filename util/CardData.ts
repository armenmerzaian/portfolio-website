import {IProject} from '../interface/IProject';

//image imports
//placeholder
import placeholder from '../public/placeholder.png';
//android-calculator
import project_calculator from '../public/project_calculator.gif';
//first-picture-whse
import project_fp from '../public/project_fp.gif';
//weather-app
import project_weather from '../public/project_weather.gif';
//seneca-social
import project_seneca from '../public/project_senecasocial.gif';
//carrental
import project_carrental from '../public/project_carrental.gif';


export const cardData: IProject[] = [
    {
        query: 'android-calculator',
        title: 'Calculator',
        badges: ['ANDROID', 'JAVA'],
        text: 'Native Android app programmed in Java and designed in Android Studio. Design inspired by Apple.',
        img: project_calculator,
        github: 'https://github.com/armenmerzaian/androidcalculator',
        learnMore: '/projects/android-calculator',
        launch: 'https://github.com/armenmerzaian/androidcalculator/blob/master/SimpleCalculator.apk',
        images: [placeholder, placeholder],
        desc_block_1: [
            "I created the Calculator app, a native Android app that streamlines the calculation process. Designed in Android Studio and programmed in Java, I was inspired by Apple's design aesthetics to deliver an interface that is both intuitive and visually appealing.",
            "At the core of my app is the ability to input multiple arithmetic terms as input, which are then parsed and calculated using an advanced algorithm. The algorithm uses a string array for input, dividing it into a 'Numbers' stack and an 'Operations' stack to determine the order of operations. I used doubles during calculation and rounded to two significant digits, ensuring accurate and precise results every time.",
            "One of the standout features of my Calculator app is the ability to toggle negative values in the input. The algorithm I created checks the location of the last digit and iterates through previous inputs, placing the negative after the first operand found. This helps to avoid user error and ensures that calculations are performed correctly."  
        ],
        desc_block_2: [
            "In addition to its impressive calculation capabilities, my Calculator app also offers convenient tools for users to clear previous inputs and prevent error if operands are entered consecutively. And, if the user attempts to perform division by zero, the app's error handling function I implemented is triggered to prevent any unintended results.",
            "I started this app as a project for school, but I was not satisfied with the low quality of the expected product. That's why I invested more time and energy into the project, making it both look and function better.",
            "With its advanced features, intuitive design, and error handling capabilities, I am very happy with the final product and hope you enjoy using it as much as I enjoyed creating it!",
        ],
    },
    {   
        query: 'first-picture-whse', 
        title: 'First Picture Frame Warehouse',
        badges: ['WEB','GATSBY', 'REACT', 'HTML', 'TAILWIND CSS'],
        text: 'Built from the ground-up, a new website for a local business. The website is built with Gatsby, React, HTML, and TailwindCSS.',
        img: project_fp,
        github: 'https://github.com/armenmerzaian/firstpictureframewhse.github.io',
        learnMore: '/projects/first-picture-whse',
        launch: 'https://firstpictureframewhse-github-io.vercel.app/',
        images: [placeholder, placeholder, placeholder],
        desc_block_1: [
            "As a web developer, I recently had the pleasure of building a new website for a local business in Toronto, named The First Picture Frame Warehouse. This small family-run business has been operating since 1984 and specializes in custom picture and object framing. With the recent pandemic, the business saw a decline in revenue, which is why they approached me to build a modern and attractive website to help attract a younger audience and improve their online presence.",
            "In collaboration with local designer Derick Aghamalian, we conducted user research and aimed to create a website that was not only modern and attractive, but also mobile responsive, to provide an excellent user experience to anyone on-the-go. The website is built with React, Gatsby, HTML, and TailwindCSS. I chose Gatsby for its well-known performance, excellent ecosystem of plugins, and great developer experience, and TailwindCSS for its high level of customizability, efficiency, and ability to allow me to use vanilla CSS when needed.",
        ],
        desc_block_2: [
            "Guided by Google's Material Design UI guidelines, the design features subtle design elements such as elevation, three-stage button presses, and 8pt spatial base. The website is designed with accessibility in mind, with clear and large typography, and plenty of contrast. The website is also built with Gatsby's static site generation to increase its SEO and make it platform-agnostic.",
            "The project began with an interview with the business owner to understand their goals, values, and target audience. Together with the designer, we developed wireframes and prototypes using Figma to pitch the design to the business. Once approved, the development process began and I continued to communicate with the business owner to ensure their satisfaction and make any necessary changes.",
            "The business owner was incredibly satisfied with the final product and the website is ready to launch. I am currently waiting for the business to supply high-quality images and content to complete the deployment. With its modern design, excellent performance, and accessibility, The First Picture Frame Warehouse's new website is set to attract a wider audience and help drive more business to the company."
        ],
    },
    {
        query: 'seneca-social',
        title: 'Seneca Social',
        badges: ['ANDROID','FLUTTER', 'DART', 'FIREBASE', 'FIRESTORE','REST API'],
        text: 'A full stack social media app built with Flutter and Firebase. Supports user authentication, posting, commenting, and more!',
        img: project_seneca,
        github: 'https://github.com/armenmerzaian/seneca-social',
        learnMore: '/projects/seneca-social',
        launch: '',
        images: [placeholder, placeholder],
        desc_block_1: [
            "I recently began developing Seneca Social, a full-stack social media app that connects students from across different campuses with similar academic paths and career goals. The front-end of the app was built using Flutter, a UI toolkit that provides a modern and reactive framework for building beautiful and responsive apps. I utilized the Dart programming language, along with Material Component Widgets, to create a seamless user experience.",
            "For the back-end, I chose Firebase and its NoSQL database called Cloud Firestore. I utilized Firebase Auth, a backend service that uses OAuth 2.0 and OpenID, for user authentication. This service made the authentication process quick and easy, and it also verified emails for a consistent and industry-standard user experience. It provided real-time data syncing and offline support for mobile and web, so I was able to build responsive apps that work regardless of network latency or internet connectivity. Firebase Security Rules also allowed me to control access to the data and validate it, ensuring that the user data was kept safe.",
        ],
        desc_block_2: [
            "One of the biggest challenges I faced while developing Seneca Social was learning how to use Flutter and Dart. These technologies were new to me and had a steep learning curve, but the extensive documentation and tutorials available online helped me to overcome this challenge.",
            "Overall, I am extremely proud of this project and the knowledge that I have gained while working on it. I can't wait to continue developing Seneca Social and adding new features such as public profile modifications, user search, instant messaging, and more!"
        ],
    },
    {
        query: 'weather-app',
        title: 'Weather App',
        badges: ['WEB', 'REACT', 'HTML', 'BOOTSTRAP CSS', 'REST API'],
        text: 'Created a weather app using React, Bootstrap, and a REST API. Supports search and geolocation.',
        img: project_weather,
        github: 'https://github.com/armenmerzaian/weather-app',
        learnMore: '/projects/weather-app',
        launch: 'https://taupe-llama-46f0dd.netlify.app',
        images: [placeholder, placeholder],
        desc_block_1: [
            "The weather application was created using React, Bootstrap, and a REST API. The purpose of the project was to learn how to handle RESTful API calls and implement dynamic components in React. To do this, I utilized the OpenWeatherMap API, which delivers weather data in JSON format, allowing me to practice skills in parsing JSON objects and working with promised-based data querying.",
            "The user interface of the weather app was built with Bootstrap CSS, which is an excellent all-in-one UI-kit that offers beautiful and modern styling options, is highly responsive, and includes ready-to-use themes and large block components such as navigation bars, hero sections, and footers. The use of Bootstrap allowed me to focus on the logic for fetching and processing data, as it offered a seamless developer experience.",
        ],
        desc_block_2: [
            "The weather application includes geolocation through the use of the browser's native navigator geolocation API, which asks the user for permission to share their location when the website first loads. If the user accepts, their location is captured and used in a call to the OpenWeatherMap API, allowing the user to immediately see the current weather.",
            "Other features I implemented are pagination, and the ability to save previous weather locations. To save past location, I utilized React useState hooks to store the city ID provided by the API response, making it possible to easily switch between earlier results. The pagination allows the user to browse through previous weather locations without overwhelming the interface with too much data.",
        ],
    },
    {
        query: 'car-rental',
        title: 'Car Rental',
        badges: ['IOS','ANGULAR', 'TYPESCRIPT', 'IONIC', 'OTHER', 'OTHER', 'OTHER', 'OTHER'],
        text: 'An Angular front-end for a car rental app. Demonstrates the power of Ionic as a mobile app framework.',
        img: project_carrental,
        github: 'https://github.com/armenmerzaian/car-rental',
        learnMore: '/projects/car-rental',
        launch: '',
        images: [placeholder, placeholder],
        desc_block_1: [
            "I built this simple car rental cross-platform application using Angular, TypeScript, and Ionic. This project was a great opportunity to delve into Angular's capabilities in mobile development. It's main function is to provide a simple form for the user to fill out, asking for their preferred car type (SUV or Sedan), the rental duration, and whether or not they require a baby booster seat."
        ],
        desc_block_2: [
            "The app uses Ionic, a powerful mobile app framework, to compile to both iOS and Android devices. This allowed me to learn hierarchal screen navigation and pass data between them. I also got to work with Angular's NgForms module, which made form validation a breeze. The project was a great learning experience for me, as I got to see firsthand the potential that Angular has in the world of mobile app development."
        ],
    },
    
]