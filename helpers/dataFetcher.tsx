export interface Project {
    shortDescription: string;
    coverImage: string;
    color: string;
    title: string;
    description: string;
    technologies: string[];
    gihubLink: string;
    previewLink: string;
    detailedImages: string[];
  }


export async function fetchData(){
    const data = [
        {
            shortDescription: 'A portfolio using NextJS and tailwind technologies',
            coverImage: '/projects/portfolio/illustration.jpg',
            color: 'purple',
            title: 'My portfolio',
            description: 'The objective of this portfolio was to allow me to familiarize myself with the NextJS technology, but also to be able to present my CV, my career and some projects',
            technologies: ['NextJS', 'TypeScript', 'Tailwind'],
            gihubLink: 'https://github.com/NaouelZ/portfolio-nextjs',
            previewLink: 'http://localhost:3002/',
            detailedImages: ['/projects/portfolio/page1.jpg','/projects/portfolio/page2.jpg']
        },
        {
            shortDescription: 'Realization of a back-office in React',
            coverImage: '/projects/backoffice/illustration.jpg',
            color: 'baby-blue',
            title: 'Backoffice',
            description: 'Realization of a back-office in react displays a graph of the evolution of sales, the last sales and the important figures. There is also a ticket management system.',
            technologies: ['ReactJS'],
            gihubLink: 'https://github.com/NaouelZ/backoffice-react',
            previewLink: 'http://localhost:3002/',
            detailedImages: ['/projects/backoffice/page1.jpg','/projects/backoffice/page2.jpg']
        },
        {
            shortDescription: 'Memory game in JavaScript',
            coverImage: '/projects/memory/illustration.jpg',
            color: 'yellow',
            title: 'Valorant Memory',
            description: 'Development of the memory game on the theme of the popular Valorant game.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            gihubLink: 'https://github.com/NaouelZ/memory-valorant',
            previewLink: 'http://localhost:3002/',
            detailedImages: ['/projects/memory/page1.jpg','/projects/memory/page3.jpg','/projects/memory/page2.jpg']
        },
        {
            shortDescription: 'E-commerce website in Symgony',
            coverImage: '/projects/symfony/illustration.jpg',
            color: 'purple',
            title: 'Symfony e-commerce',
            description: 'Creation of an e-Commerce website in Symfony with the following functionalities: filter, detailed view, add to cart and administration dashboard, sign in and sign out',
            technologies: ['Symfony4', 'Bootstrap'],
            gihubLink: 'https://github.com/NaouelZ/eboutiqueSymfony',
            previewLink: '',
            detailedImages: ['/projects/symfony/page1.jpg','/projects/symfony/page2.jpg','/projects/symfony/page3.jpg', '/projects/symfony/page4.jpg']
        },
        {
            shortDescription: 'Mobile application for rating our movies',
            coverImage: '/projects/movies/illustration.jpg',
            color: 'purple',
            title: 'Movie Rating app',
            description: 'Mobile application that allows us to rate the movies we have seen and add notes. We can also access to the average notes of film on IMDB',
            technologies: ['React Native', 'Expo'],
            gihubLink: 'https://github.com/NaouelZ/Mobile_ReactNative/tree/master/MovieRatingsApp',
            previewLink: '',
            detailedImages: ['/projects/movies/page1.jpg']
        },
        {
            shortDescription: 'Flower IA recognization',
            coverImage: '/projects/python/illustration.jpg',
            color: 'purple',
            title: 'Flower recognization',
            description: 'Creation in python of an AI that recognizes the type of flower present in the photo you provide. This AI was trained from an image database.',
            technologies: ['Python', 'Flask'],
            gihubLink: 'https://github.com/NaouelZ/IA-FLowers',
            previewLink: '',
            detailedImages: ['/projects/python/page1.jpg', '/projects/python/page2.jpg']
        },
        {
            shortDescription: 'E-commerce website in NextJS',
            coverImage: '/projects/nextjs/illustration.jpg',
            color: 'yellow',
            title: 'NextJS e-commerce',
            description: 'Creation of an e-Commerce website in Nextjs',
            technologies: ['Symfony4', 'Bootstrap'],
            gihubLink: 'https://github.com/NaouelZ',
            previewLink: '',
            detailedImages: ['/projects/nextjs/illustration.jpg']
        },
    ];
    return data;
  }