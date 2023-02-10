import {IProject} from '../interface/IProject';

export const cardData: IProject[] = [
    {
        query: 'android-calculator',
        title: 'Calculator',
        badges: ['ANDROID', 'JAVA'],
        text: 'Native Android app programmed in Java and designed in Android Studio. Design inspired by Apple.',
        img: '/../public/project_calculator.gif',
        github: 'https://github.com/armenmerzaian/androidcalculator',
        learnMore: '/projects/android-calculator',
        launch: 'https://github.com/armenmerzaian/androidcalculator/blob/master/SimpleCalculator.apk',
        images: ['/../public/placeholder.png', '/../public/placeholder.png'],
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
        img: '/../public/project_fp.gif',
        github: 'https://github.com/armenmerzaian/firstpictureframewhse.github.io',
        learnMore: '/projects/first-picture-whse',
        launch: 'https://firstpictureframewhse-github-io.vercel.app/',
        images: ['/../public/placeholder.png', '/../public/placeholder.png', '/../public/placeholder.png'],
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
        query: 'weather-app',
        title: 'Weather App',
        badges: ['WEB', 'REACT', 'HTML', 'BOOTSTRAP CSS', 'REST API'],
        text: 'Created a weather app using React, Bootstrap, and a REST API. Supports search and geolocation.',
        img: '/../public/project_weather.gif',
        github: 'https://github.com/armenmerzaian/weather-app',
        learnMore: '/projects/weather-app',
        launch: 'https://taupe-llama-46f0dd.netlify.app',
        images: ['/../public/placeholder.png', '/../public/placeholder.png'],
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
        query: 'seneca-social',
        title: 'Seneca Social',
        badges: ['ANDROID','FLUTTER', 'DART', 'FIREBASE', 'FIRESTORE','REST API'],
        text: 'A full stack social media app built with Flutter and Firebase. Supports user authentication, posting, commenting, and more!',
        img: '/../public/project_senecasocial.gif',
        github: 'https://github.com/armenmerzaian/seneca-social',
        learnMore: '/projects/seneca-social',
        launch: '',
        images: ['/../public/placeholder.png', '/../public/placeholder.png'],
        desc_block_1: [],
        desc_block_2: [],
    },
    {
        query: 'car-rental',
        title: 'Car Rental',
        badges: ['IOS','ANGULAR', 'TYPESCRIPT', 'IONIC', 'OTHER', 'OTHER', 'OTHER', 'OTHER'],
        text: 'An Angular front-end for a car rental app. Demonstrates the power of Ionic as a mobile app framework.',
        img: '/../public/project_carrental.gif',
        github: 'https://github.com/armenmerzaian/car-rental',
        learnMore: '/projects/car-rental',
        launch: '',
        images: ['/../public/placeholder.png', '/../public/placeholder.png'],
        desc_block_1: [],
        desc_block_2: [],
    },
    
]