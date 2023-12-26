import ecommerce from './images/ecommerce.png';
import capex_booking from './images/capex_booking.png';
import portfolio from './images/portfolio.png';
import readaloud from './images/readaloud.png';

export default ([
    {
        title: 'Read Aloud Challenge Portal',
        image: readaloud,
        link: 'https://www.readaloudchallenge.co.uk/',
        description: 'Parent and Teachers portal for the annual Read Aloud Challenge held in UK and India',
        stack: ['VueJS', 'Bootstrap', 'Laravel', 'EC2'],
    },
    {
        title: 'Capex Booking Website',
        image: capex_booking,
        link: 'https://app.capex.com.ph/',
        description: 'Booking website for a logistics company in the Philippines. Built with VueJS and Laravel',
        stack: ['VueJS', 'Bootstrap', 'Laravel', 'EC2'],
    },
    {
        title: 'dthrllnrs.com',
        image: portfolio,
        link: 'http://dthrllnrs.com/',
        description: 'My portfolio website built with VueJS and Bootstrap',
        stack: ['VueJS', 'Bootstrap'],
    }, 
    {
        title: 'Sample VueJS Ecommerce Website',
        image: ecommerce,
        link: 'http://purchasepro.dthrllnrs.com',
        description: 'A sample ecommerce website with catalog, add to cart, checkout and receipt email features.',
        stack: ['VueJS', 'Bootstrap', 'Laravel', 'EC2'],
    },
])