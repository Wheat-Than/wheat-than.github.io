import type { ImageMetadata } from 'astro';
import cupcake from '../assets/Mr_Cupcake_Resin_Print.jpg';
import website from '../assets/website_1.png';
import ATD from '../assets/Gloria_ATD_1.png';
import coasterTrain from '../assets/Coaster_Train_1.png';
import eddy from '../assets/Mech_Design_1.png';
import equalizer from '../assets/Audio_Equalizer.png';
import ATI from '../assets/Ethan_Universal_Headshot.png';
import scenicEngineering from '../assets/DK_Family_Hut_SNW.png';
import CM from '../assets/CM_Show_1.png';
import BIDC from '../assets/Bechtel_TA.png';

export interface PortfolioItem {
  href: string;
  title: string;
  description: string;
  cta: string;
  image: ImageMetadata;
  alt: string;
  category: 'project' | 'experience';
  homeOrder?: number;
}

export const portfolioItems: PortfolioItem[] = [
  {
    href: '/portfolio/MrCupcake',
    title: 'Mr. Cupcake Mechatronic Toy',
    description: "Designing and building a prototype RC toy inspired by Five Nights at Freddy's.",
    cta: 'View Project →',
    image: cupcake,
    alt: 'Mr. Cupcake, printed in resin on Formlabs Form 4L.',
    category: 'project',
    homeOrder: 1,
  },
  {
    href: '/portfolio/meta',
    title: 'This Website!',
    description: 'Design, programming, and implementation of a personal portfolio using the Astro framework.',
    cta: 'View Project →',
    image: website,
    alt: 'HTML Code',
    category: 'project',
  },
  {
    href: '/portfolio/ATD_Gloria',
    title: 'Assistant Technical Direction Project',
    description: 'Drafting custom stage scenery and performing cost and time estimates.',
    cta: 'View Project →',
    image: ATD,
    alt: 'Scenery for a production of Gloria.',
    category: 'project',
  },
  {
    href: '/portfolio/3D_Coaster',
    title: '3D Printed Roller Coaster',
    description: 'Utilizing advanced CAD techniques to design a functioning scale model.',
    cta: 'View Project →',
    image: coasterTrain,
    alt: 'CAD file of scale model roller coaster train.',
    category: 'project',
    homeOrder: 4,
  },
  {
    href: '/portfolio/Mech_Design',
    title: 'Mechanical Design for the Stage',
    description: 'Concept and detailed design for stage machines in complex show environments.',
    cta: 'View Project →',
    image: eddy,
    alt: 'CAD file showcasing an eddy current braking system for stage scenery.',
    category: 'project',
  },
  {
    href: '/portfolio/Audio_Equalizer/',
    title: 'Analog Audio Equalizer',
    description: 'RC and RCL filters implemented in a 3-channel, basic audio equalizer.',
    cta: 'View Project →',
    image: equalizer,
    alt: 'Audio Equalizer',
    category: 'project',
  },
  {
    href: '/portfolio/Hudson_TD',
    title: 'Technical Design Internship',
    description: 'High fidelity engineering and design of scenery for theater, film, and immersive experiences.',
    cta: 'View Experience →',
    image: ATI,
    alt: 'Ethan at the Richard Rogers Theater for a Hamilton work call.',
    category: 'experience',
  },
  {
    href: '/portfolio/RD_ATI',
    title: 'Research and Development Internship',
    description: 'Technology innovation, in-depth prototyping, and blue sky experiential design.',
    cta: 'View Experience →',
    image: ATI,
    alt: 'Ethan at Epic Universe, Benchmarking',
    category: 'experience',
    homeOrder: 2,
  },
  {
    href: '/portfolio/ScenicEngineering',
    title: 'Scenic Engineering Internship',
    description: 'Project management, vendor coordination, and product delivery on-site at Epic Universe',
    cta: 'View Experience →',
    image: scenicEngineering,
    alt: 'DK Family Hut',
    category: 'experience',
    homeOrder: 3,
  },
  {
    href: '/portfolio/Monkeys',
    title: 'President - The Crazy Monkeys Comedy',
    description: 'Leading a high-impact performance organization at Purdue University.',
    cta: 'View Experience →',
    image: CM,
    alt: 'The Crazy Monkeys post-performance photo',
    category: 'experience',
  },
  {
    href: '/portfolio/BIDC',
    title: 'Peer Mentor - Bechtel Innovation & Design Center',
    description: 'Advising and training students on design for manufacture and rapid prototyping.',
    cta: 'View Experience →',
    image: BIDC,
    alt: 'Ethan washing resin prints in the BIDC lab.',
    category: 'experience',
  },
];