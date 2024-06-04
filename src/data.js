import mobileImg from './assets/images/image-product-mobile.jpg';
import desktopImg from './assets/images/image-product-desktop.jpg';

const productData = [
  {
    id: 1,
    title: 'Gabrielle Essence Eau De Parfum',
    category: 'Perfume',
    newPrice: '149.99',
    oldPrice: '169.99',
    info: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    images: [{ mobile: mobileImg }, { desktop: desktopImg }],
  },
];

export default productData;
