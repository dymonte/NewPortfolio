export type Techno = {
    name: string;
    link: string;
};

export type Project = {
    title: string;
    category: string;
    image: string;
    description: string;
    links: string[];
    techno?: Techno[];
};

export const projects: Project[] = [
    {
        title: 'WanRoll',
        category: 'Personal Project',
        image: '/images/WanRoll.png',
        description:
            'A personal Discord game project, this bot lets you open random cards at regular intervals and then collect and trade them.\n' +
            'I also developed an API to retrieve information about the cards.',
        links: ['https://github.com/dymonte/bot-wankul-discord/'],
        techno: [
            {
                name: 'discord.py',
                link: 'https://discordpy.readthedocs.io/en/stable/pyt'
            },
        ]
    },
    {
        title: 'API Wankul',
        category: 'Personal Project',
        image: '/images/apiwankul.png',
        description:
            'Un projet personnel d\'API qui est utilisée par le projet WanRoll.',
        links: ['https://github.com/dymonte/bot-wankul-discord/'],
        techno: [
            {
                name: 'expressjs',
                link: 'https://expressjs.com/'
            },
        ]
    },
    {
        title: 'miniJaja',
        category: 'University Project - Java',
        image: '/images/mjj.png',
        description:
            'Un projet de développement web présentant mes compétences techniques.',
        links: ['https://github.com/dymonte/miniJaja'],
        techno: [
            {
                name: 'ANTLR',
                link: 'https://www.antlr.org/'
            },
            {
                name: 'Maven',
                link: 'https://maven.apache.org/'
            }
        ]
    },
    {
        title: 'Laby',
        category: 'University Project - C (optimisation)',
        image: '/images/Laby.png',
        description:
            'This project involves generating random mazes and implementing a pathfinding system to find a path to the exit.\n' +
            'The code was written in C and optimized for very large arrays (in the billions of cells).\n ' +
            'A performance monitoring system was implemented to test the program\'s reaction on very large arrays.',
        links: ['https://github.com/dymonte/Laby/'],
        techno: [
            {
                name: 'C',
                link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
            },
            {
                name: 'Doxygen',
                link: 'https://www.doxygen.nl/'
            },
            {
                name: 'JaCoCo',
                link: 'https://github.com/jacoco'
            }
        ]
    },
    {
        title: 'Laby3D',
        category: 'University Project - OpenGL',
        image: '/images/Laby3D.png',
        description:
            'The goal of this project was to create an interactive game using OpenGL 1.1.\n' +
            'We were given a few requirements, such as the inclusion of collisions, animations, and textures.\n' +
            'This project was completed by a group of three people. We reused a part of my previous work on Laby for the maze generation.',
        links: ['https://github.com/Unity2654/Labyrinthe']
    },
    {
        title: 'Nyx',
        category: 'University Project - UI/UX',
        image: '/images/nyx.png',
        description:
            'A figma project for a video game store interface.\n' +
            'Working in pairs, we were tasked with creating a detailed mockup that included prototyping.\n' +
            'The focus was on the project\'s creativity, so we decided to design a game store specializing in relaxing games and adapted the interface to convey that same concept.',
        links: ['https://www.figma.com/design/IWAByGk3IIHvHFMwnDrg1w/Projet-IHM-CC2---Etudiant'],
        techno: [
            {
                name: 'Figma',
                link: 'https://www.figma.com/'
            }
        ]
    },
    {
        title: 'Annalogue',
        category: 'University Project - MVN, Web',
        image: '/images/Laby3D.png',
        description:
            'For this project, a role-playing system was set up among the students to simulate a client and a group of developers.\n' +
            'We had to set up a website that would allow students to access documents and suggest corrections.',
        links: ['https://github.com/dymonte/AnnalogueSpring', 'test'],
        techno: [
            {
                name: 'C',
                link: 'https://en.wikipedia.org/wiki/C_(programming_language)'
            },
            {
                name: 'Maven',
                link: 'https://maven.apache.org/'
            }
        ]
    },
];