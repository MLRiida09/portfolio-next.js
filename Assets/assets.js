
import logo from './logo.png';
import user_image from './user-image.png';
import profile_img from './profile-img.png';

// Tools icons
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';

// Navigation icons
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';

// Theme icons
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';

// Action icons
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow from './right-arrow.png';

import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import phone_icon from './phone_icon.png';
import location_icon from './location_icon.png';
import code_icon from './codee-icon.png';
import edu_icon from './eduu-icon.png';
import project_icon from './projectt-icon.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import arrow_icon from './arrow-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon_dark from './project-icon-dark.png';
import upload from './upload-file.png';
import upload_dark from './upload-dark.png';


export const assets = {
    logo,
    user_image,
    profile_img,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    menu_black,
    menu_white,
    close_black,
    close_white,
    moon_icon,
    sun_icon,
    download_icon,
    hand_icon,
    right_arrow_white,
    right_arrow,
    logo_dark,
    mail_icon,
    phone_icon,
    location_icon,
    code_icon,
    edu_icon,
    project_icon,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    arrow_icon,
    right_arrow_bold,
    code_icon_dark,
    edu_icon_dark,
    project_icon_dark,
    upload ,
    upload_dark ,
};


export const workData = [
    {
        title: 'Frontend project',
        description:'Modern responsive website built with React.js and Next.js, featuring sleek design, smooth performance, and interactive animations. ',
        bgImage: '/work-1.jpg',
    },
    {
        title: 'Geo based app',
        description:'Location-based mobile app with real-time GPS, interactive maps, geofencing, offline support, and smart notifications.',
        bgImage: '/work-2.jpg',
    },
    {
        title: 'AI-Powered Web Design',
        description:'AI-powered web platform with automated design, smart content optimization, and personalized experiences using machine learning',
        bgImage: '/work-3.jpg',
    },
    {
        title: 'UI/UX designing',
        description:'UI/UX design project with user research, wireframing, prototyping, and testing, focused on intuitive, accessible, and branded user experiences.',
        bgImage: '/work-4.jpg',
    },
    {
        title: 'E-commerce Platform',
        description:'Full-stack e-commerce app built with React, Node.js, and MongoDB, featuring secure payments, inventory, order tracking, admin dashboard, and responsive design..',
        bgImage: '/work-5.jpg',
    },
    {
        title: 'Dashboard Analytics',
        description:'Interactive real-time analytics dashboard with customizable charts, advanced filters, data export, and responsive design for business intelligence.',
        bgImage: '/work-6.jpg',
    }
];


export const servicesCards = [
  { 
    icon: assets.web_icon, 
    title: 'Web design', 
    description: 'Web development is the process of building, programming...', 
    link: '' 
  },

  { 
      icon: assets.mobile_icon, 
      title: 'Mobile app', 
      description: 'Mobile app development involves creating software for mobile devices...', 
      link: '' 
  },

  { 
      icon: assets.ui_icon, 
      title: 'UI/UX design', 
      description: 'UI/UX design focuses on creating a seamless user experience...', 
      link: '' 
  },

  { 
      icon: assets.graphics_icon, 
      title: 'Graphics design', 
      description: 'Creative design solutions to enhance visual communication...', 
      link: '' 
  },
];


export const AboutCards = [
  { 
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: ' JavaScript React Js, Next Js' 
  },

  {
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark, 
      title: 'Education', 
      description: 'B.Tech in Computer Science' 
  },

  { 
      icon: assets.project_icon, 
      iconDark: assets.project_icon_dark, 
      title: 'Projects', 
      description: 'Built more than 5 projects' 
  }
];

export const toolsData = [
    assets.vscode,
    assets.firebase,
    assets.mongodb,
    assets.figma,
    assets.git
];


export const contactCards = [
    {
        icon: assets.mail_icon,
        title: "Email",
        description: "mellala@gmail.com",
        link: "mailto:mellala@gmail.com"
    },
    {
        icon: assets.phone_icon,
        title: "Phone", 
        description: "+213 (xxx) xxx-xxxx",
        link: "tel:+213xxxxxxxxx"
    },
    {
        icon: assets.location_icon,
        title: "Location",
        description: "Blida, Algeria",
        link: "#"
    }
];


