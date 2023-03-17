// gitprofile.config.js

const config = {
    github: {
        username: 'Skilious', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: ['Skilious'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
    },
    social: {
        linkedin: 'quoc-ha',
        twitter: '',
        mastodon: '',
        facebook: '',
        instagram: '',
        dribbble: '',
        behance: '',
        medium: '',
        dev: '',
        stackoverflow: '', // format: userid/username
        skype: '',
        telegram: '',
        website: '',
        phone: '',
        email: 'quocha@protonmail.com',
    },
    resume: {
        fileUrl:
            'https://drive.google.com/file/d/14nX5juiKW7MJp_B1hVzKmwWy4vmz-Ecw/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
        'C++',
        'C#',
        'Unity',
        'Unreal Engine 4',
        'Networking Unreal Engine 4',
        'Github Version Control',
        'Java',
        'Python',
        'SQL',
        'Game Development',
        'Game Design',
        'Adobe Photoshop'
    ],
    //experiences: [
    //    {
    //        company: '',
    //        position: '',
    //        from: ' ',
    //        to: '',
    //        companyLink: '',
    //    },
    //    {
    //        company: '',
    //        position: '',
    //        from: '',
    //        to: '',
    //        companyLink: '',
    //    },
    //],
    /* certifications: [
      {
        name: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet',
        year: 'March 2022',
        link: 'https://example.com'
      },
    ], */
    education: [
        {
            institution: 'Torrens University Australia',
            degree: 'Bachelor of Software Engineering - Game Programming',
            from: '2019',
            to: '2021'
        },
        {
            institution: 'Torrens University Australia',
            degree: 'Diploma of Design',
            from: '2018',
            to: '2018'
        },
    ],

    // To hide the `My Projects` section, keep it empty.
    externalProjects: [
        {
            title: 'Unreal Engine 4 Major Project - Sigil, Lead Programmer',
            description:
                'Stylised 3D Survival Open Island RPG',
            imageUrl: 'https://cdn.discordapp.com/attachments/603554967063625749/1086082495113601086/Sigil_Fixed.png',
            link: 'https://dayna-aspite.itch.io/sigil',
        },
        {
            title: 'Unity 3D Playstation Port - Light Souls, Lead Programmer',
            description:
                'Top-Down Bullet Hell Inspired by Dark Souls',
            imageUrl: 'https://via.placeholder.com/250x250',
            link: 'https://skilious.itch.io/light-souls',
        },
        {
            title: 'Unity 2D Rapid Prototype - Vanish, Game Developer',
            description:
                'Defeat Bacteria with Vanish Spray bottle!',
            imageUrl: 'https://via.placeholder.com/250x250',
            link: 'https://skilious.itch.io/vanish',
        },
        {
            title: 'Unity 2D - Mobius, Gameplay Programmer',
            description:
                'Sci-fi Infinite Runner',
            imageUrl: 'https://via.placeholder.com/250x250',
            link: 'https://skilious.itch.io/mobius',
        },
        {
            title: 'Unity 2D - Unknown, Game Developer',
            description:
                'Roguelike Game',
            imageUrl: 'https://via.placeholder.com/250x250',
            link: '',
        },
    ],
    // Display blog posts from your medium or dev account. (Optional)
    blog: {
        source: '', // medium | dev
        username: '', // to hide blog section, keep it empty
        limit: 2, // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
        id: '',
        snippetVersion: 6,
    },
    themeConfig: {
        defaultTheme: 'winter',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Hide the ring in Profile picture
        hideAvatarRing: false,

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
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
        ],

        // Custom theme
        customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
        },
    },

    // Optional Footer. Supports plain text or HTML.
    //footer: `Made with <a 
    //  class="text-primary" href="https://github.com/arifszn/gitprofile"
    //  target="_blank"
    //  rel="noreferrer"
    //>GitProfile</a> and ❤️`,
};

export default config;
