import ecommerce from './images/ecommerce.png';
import capex_booking from './images/capex_booking.png';
import portfolio from './images/portfolio.png';
import readaloud from './images/readaloud.png';
import product_finder from './images/product_finder.png';
import ethical_swag from './images/ethical_swag.png';

export default ([
  {
    title: 'Ethical Swag',
    image: ethical_swag,
    link: 'https://ethicalswag.com/',
    description: 'A B2B Ecommerce platform serving brands with a comprehensive suite of corporate gifting services.',
    stack: ['NextJS', 'AirTable', 'Laravel'],
  },
  {
    title: 'Telling Industries - Product Finder',
    image: product_finder,
    link: 'https://tellingindustries.com/product-finder-telling/',
    description: 'A comprehensive product search plugin for wordpress with a Laravel backend.',
    stack: ['Wordpress', 'Elementor', 'Laravel'],
  },
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
    title: 'diether.llenares.com',
    image: portfolio,
    link: 'http://diether.llenares.com/',
    description: 'My portfolio website built with VueJS and Bootstrap',
    stack: ['VueJS', 'Bootstrap'],
  },
  {
    title: 'Sample VueJS Ecommerce Website',
    image: ecommerce,
    link: 'http://purchasepro.diether.llenares.com',
    description: 'A sample ecommerce website with catalog, add to cart, checkout and receipt email features.',
    stack: ['VueJS', 'Bootstrap', 'Laravel', 'EC2'],
  },
])