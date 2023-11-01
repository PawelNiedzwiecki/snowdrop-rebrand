"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    siteMetadata: {
        title: 'Snowdrop Makeup and Beauty Therapy',
        siteUrl: 'https://www.snowdrop.pl',
        menuLinks: [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'Prices', href: '/prices' },
            { name: 'Services', href: '/services' },
            { name: 'Contact', href: '/contact' },
        ],
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: process.env.NODE_ENV === 'development' ? true : false,
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-react-leaflet',
            options: {
                linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
            },
        },
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'portfolio',
                path: './src/images/portfolio',
            },
            __key: 'portfolio',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};
exports.default = config;
