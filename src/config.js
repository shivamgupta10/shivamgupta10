// config.js
module.exports = {
    github: {
        username: 'shivamgupta10', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'shivam-gupta-598265a1',
        stackoverflow:'shivam-gupta',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://shivamgupta10.github.io/',
        phone: '+919560925185',
        email: 'shivamgupta000@gmail.com'
    },
    skills: [
        'Angular 2+',
        'Angular JS',
        'Javascript',
        'TypeScript',
        'Node JS',
        'HTML5',
        'CSS3',
        'Unit Testing',
        'Selenium/Protactor',
        'Data Structure and Algorithms'

    ],
    experiences: [
        {
            company: 'Factset Research Systems',
            position: 'Software Engineer III',
            from: 'Jan 2019',
            to: 'Present'
        },
        {
            company: 'Tata Consultancy Services',
            position: 'Systems Engineer',
            from: 'June 2017',
            to: 'Dec 2018'
        },
        {
            company: 'Accenture',
            position: 'Application Development Analyst',
            from: 'January 2015',
            to: 'Feb 2017'
        }
    ],
    education: [
        {
            institution: 'The NorthCap University',
            degree: 'BTECH(EEE)',
            from: '2010',
            to: '2014'
        },
        {
            institution: 'Senior School Certificate Examination(CBSE)',
            from: '2009',
            to:"10"

        },
        {
            institution: 'Secondary School Examination(CBSE)',
            from: '2007',
            to:"08"
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: '',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}