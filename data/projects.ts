export type Techno = {
    name: string;
    link: string;
};

export type ProjectLink = {
    url: string;
    name: string;
    message: string;
};

export type Project = {
    title: string;
    category: string;
    image: string;
    description: string;
    links: ProjectLink[];
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
        links: [
            {
                url: 'https://github.com/dymonte/bot-wankul-discord/',
                name: 'GitHub',
                message: 'Source code of the Discord bot',
            },
        ],
        techno: [
            {
                name: 'discord.py',
                link: 'https://discordpy.readthedocs.io/en/stable/',
            },
        ],
    },
    {
        title: 'API Wankul',
        category: 'Personal Project - express',
        image: '/images/apiwankul.png',
        description:
            'A personal API project, used by the WanRoll project to retrieve information about the cards.',
        links: [
            {
                url: 'https://github.com/dymonte/api-wankul/',
                name: 'GitHub',
                message: 'Source code of the API',
            },
        ],
        techno: [
            {
                name: 'expressjs',
                link: 'https://expressjs.com/',
            },
        ],
    },
    {
        title: 'miniJaja',
        category: 'University Project - Java',
        image: '/images/mjj.png',
        description:
            'The goal was to implement an IDE that would allow users to write, compile, and interpret a programming language created specifically for this purpose: miniJaja.\n' +
            'This language consisted of simple instructions with a syntax derived from Java. \n' +
            'Compilation generated programs in JajaCode, another language created for this purpose that was syntactically similar to assembly language.',
        links: [
            {
                url: 'https://github.com/dymonte/miniJaja',
                name: 'GitHub',
                message: 'Source code of the project',
            },
        ],
        techno: [
            {
                name: 'ANTLR',
                link: 'https://www.antlr.org/',
            },
            {
                name: 'Maven',
                link: 'https://maven.apache.org/',
            },
            {
                name: 'JaCoCo',
                link: 'https://github.com/jacoco',
            },
        ],
    },
    {
        title: 'Laby',
        category: 'University Project - C (optimization)',
        image: '/images/Laby.png',
        description:
            'This project involves generating random mazes and implementing a pathfinding system to find a path to the exit.\n' +
            'The code was written in C and optimized for very large arrays (in the billions of cells).\n' +
            'A performance monitoring system was implemented to test the program\'s behavior on very large arrays.',
        links: [
            {
                url: 'https://github.com/dymonte/Laby/',
                name: 'GitHub',
                message: 'Source code of the project',
            },
        ],
        techno: [
            {
                name: 'C',
                link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
            },
            {
                name: 'Doxygen',
                link: 'https://www.doxygen.nl/',
            },
        ],
    },
    {
        title: 'Laby3D',
        category: 'University Project - OpenGL',
        image: '/images/Laby3D.png',
        description:
            'The goal of this project was to create an interactive game using OpenGL 1.1.\n' +
            'We were given a few requirements, such as the inclusion of collisions, animations, and textures.\n' +
            'This project was completed by a group of three people. We reused part of my previous work on Laby for the maze generation.',
        links: [
            {
                url: 'https://github.com/Unity2654/Labyrinthe',
                name: 'GitHub',
                message: "Group's repository",
            },
        ],
    },
    {
        title: 'Nyx',
        category: 'University Project - UI/UX',
        image: '/images/nyx.png',
        description:
            'A Figma project for a video game store interface.\n' +
            'Working in pairs, we were tasked with creating a detailed mockup that included prototyping.\n' +
            'The focus was on the project\'s creativity, so we decided to design a game store specializing in relaxing games and adapted the interface to convey that same concept.',
        links: [
            {
                url: 'https://www.figma.com/design/IWAByGk3IIHvHFMwnDrg1w/Projet-IHM-CC2---Etudiant',
                name: 'Figma',
                message: 'Mockup',
            },
            {
                url: 'https://www.figma.com/proto/IWAByGk3IIHvHFMwnDrg1w/Projet-IHM-CC2---Etudiant?node-id=0-1&t=fBc8IbCD0ywGckb3-1',
                name: 'Figma',
                message: 'Interactive prototype'
            }
        ],
        techno: [
            {
                name: 'Figma',
                link: 'https://www.figma.com/',
            },
        ],
    },
    {
        title: 'Annalogue',
        category: 'University Project - Maven, Web',
        image: '/images/annalogue.png',
        description:
            'For this project, a role-playing system was set up among the students to simulate a client and a group of developers.\n' +
            'We had to build a website that would allow students to access documents and suggest corrections.',
        links: [
            {
                url: 'https://github.com/dymonte/AnnalogueSpring',
                name: 'GitHub',
                message: 'Source code of the website',
            },
        ],
        techno: [
            {
                name: 'C',
                link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
            },
            {
                name: 'Maven',
                link: 'https://maven.apache.org/',
            },
        ],
    },
    {
        title: 'Courtisans',
        category: 'University Project - Godot (2D)',
        image: '/images/Courtisans.png',
        description:
            'A project for groups of 7 people consisting of adapting a board game into a video game with multiplayer functionality.\n' +
            'My part of the work was focused on the ',
        links: [
        ],
        techno: [
            {
                name: 'Godot (2D)',
                link: 'https://godotengine.org/',
            },
        ],
    },
    {
        title: 'New Portfolio',
        category: 'University Project - Web',
        image: '/images/NewPortfolio.png',
        description:
            'The website you\'re on right now, to present my projects.',
        links: [
            {
                url: 'https://github.com/dymonte/NewPortfolio',
                name: 'GitHub',
                message: 'Source code of the website',
            },
        ],
        techno: [
            {
                name: 'Next.js',
                link: 'https://nextjs.org/',
            },
        ],
    },
];
