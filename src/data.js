/* 
    YOU CAN MODIFY WEBSITE CONTENT HERE

    For images, just add your image to the images/ folder then change the source name.
    example : 
                import avatar_1 from "./images/your_image_name.your_image_extension";


    For text, change the value of the poperty below.
    example : 
                export const navItems = [
                    {
                        name: "Whateveryoulike",
                        link: "#section-about"
                    },
                    ...
                ]
*/

// !!! Important : to modify landing section background image go to "src/components/Landing/Landing.css", there is an indication for which line to change

// MODIFY IMAGES HERE, to add another image import it like the others and then add it to the "Section"Content :)

import websiteLogo from "./images/logo2.png";

import imgLanding from "./images/an_img.png";

import imgAbout from "./images/an_img2.png";

import nft1 from "./images/1.png";
import nft2 from "./images/2.png";
import nft3 from "./images/3.png";
import nft4 from "./images/4.png";
import nft5 from "./images/5.png";
import nft6 from "./images/6.png";
import nft7 from "./images/7.png";
import nft8 from "./images/8.png";
import nft9 from "./images/9.png";
import nft10 from "./images/10.png";
import nft11 from "./images/11.png";
import nft12 from "./images/12.png";
import nft13 from "./images/13.png";
import nft14 from "./images/14.png";
import nft15 from "./images/15.png";
import nft16 from "./images/16.png";
import nft17 from "./images/17.png";
import nft18 from "./images/18.png";
import nft19 from "./images/19.png";
import nft20 from "./images/20.png";

import avatar_1 from "./images/wiz_avatar.jpg";
import avatar_2 from "./images/wiz_avatar.jpg";
import avatar_3 from "./images/wiz_avatar.jpg";
import avatar_4 from "./images/wiz_avatar.jpg";

import imgRoadmap_1 from "./images/an_img2.png";
import imgRoadmap_2 from "./images/an_img2.png";
import imgRoadmap_3 from "./images/an_img2.png";
import imgRoadmap_4 from "./images/an_img2.png";

import imgFAQ from "./images/img_1000x2000.png";



// MODIFY TEXTE CONTENT HERE

export const navItems = [
    {
        name: "About",
        link: "#section-about"
    },
    {
        name: "Team",
        link: "#section-team"
    },
    {
        name: "Roadmap",
        link: "#section-roadmap"
    },
    {
        name: "FAQ",
        link: "#section-faq"
    }
];

export const LandingContent = {
    img: imgLanding,
    dateEndTimer: Date.parse('10 Oct 2021 00:12:00 GMT'),
    txtUnderTimer: "It's coming soon..."
}

export const AboutContent = {
    title: "About...",
    blocksShown: [
        {
            type: "sided",
            img: imgAbout,
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel. Maecenas ut feugiat nisl. In sed turpis dapibus, rhoncus sapien et, dignissim nulla."
        },
        {
            type: "column",
            img: imgAbout,
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel. Maecenas ut feugiat nisl. In sed turpis dapibus, rhoncus sapien et, dignissim nulla."
        }   
    ],
    blocksHiden: [
        {
            type: "sided",
            img: imgAbout,
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel. Maecenas ut feugiat nisl. In sed turpis dapibus, rhoncus sapien et, dignissim nulla."
        },
        {
            type: "column",
            img: imgAbout,
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel. Maecenas ut feugiat nisl. In sed turpis dapibus, rhoncus sapien et, dignissim nulla."
        },
        {
            type: "column",
            img: imgAbout,
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel. Maecenas ut feugiat nisl. In sed turpis dapibus, rhoncus sapien et, dignissim nulla."
        },
        {
            type: "sided",
            img: imgAbout,
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel. Maecenas ut feugiat nisl. In sed turpis dapibus, rhoncus sapien et, dignissim nulla."
        }
    ]
}

export const GalleryContent = {
    nbImgsMobile: 8, // has to be multiple of 2 or go modify Gallery.css .gallery-img class
    nbImgsDesktop: 12, // do not put a number equal to the number total of imgs you have ; has to be multiple of 4 or go modify Gallery.css .gallery-img class
    frequenceSwitch: 2000,  // it is in ms
    imgs: [
        nft1,
        nft2,
        nft3,
        nft4,
        nft5,
        nft6,
        nft7,
        nft8,
        nft9,
        nft10,
        nft11,
        nft12,
        nft13,
        nft14,
        nft15,
        nft16,
        nft17,
        nft18,
        nft19,
        nft20
    ]
}

export const TeamContent = {
    title: "The team",
    team: [
        {
            avatar_url: avatar_1,
            name: "member1",
            title: "member1"
        },
        {
            avatar_url: avatar_2,
            name: "member2",
            title: "member2"
        },
        {
            avatar_url: avatar_3,
            name: "member3",
            title: "member3"
        },
        {
            avatar_url: avatar_4,
            name: "member4",
            title: "member4"
        }
    ]
}
    
export const RoadmapContent =  {
    title: "Roadmap",
    blocks: [
        {
            img: imgRoadmap_1,
            title: "1000 pofusion",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel."
        },
        {
            img: imgRoadmap_2,
            title: "2000 pofusion",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel."
        },
        {
            img: imgRoadmap_3,
            title: "3000 pofusion",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel."
        },
        {
            img: imgRoadmap_4,
            title: "4000 pofusion",
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lectus eu erat lobortis consectetur. Pellentesque et feugiat augue. Maecenas in orci mauris. Cras ullamcorper neque enim, eget posuere diam aliquam vel."
        },
    ]
}

export const FAQContent = {
    img: imgFAQ,
    list: [
        {
            question: "Nullam egestas ut urna ut sodales?",
            answer: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed euismod maximus nisi, eget finibus ligula. Integer id gravida tortor. In hac habitasse platea dictumst."
        },
        {
            question: "Nullam egestas ut urna ut sodales?",
            answer: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed euismod maximus nisi, eget finibus ligula. Integer id gravida tortor. In hac habitasse platea dictumst."
        },
        {
            question: "Integer dictum condimentum orci, vitae rhoncus felis condimentum efficitur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id eros mollis, vestibulum turpis a, efficitur augue. Duis condimentum varius orci eget egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            question: "Integer dictum condimentum orci, vitae rhoncus felis condimentum efficitur. Duis vehicula neque sit amet lacus congue aliquet. Nunc sed sapien venenatis?",
            answer: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed euismod maximus nisi, eget finibus ligula. Integer id gravida tortor. In hac habitasse platea dictumst."
        },
        {
            question: "Integer dictum condimentum orci, vitae rhoncus felis condimentum efficitur. Duis vehicula neque sit amet lacus congue aliquet?",
            answer: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed euismod maximus nisi, eget finibus ligula. Integer id gravida tortor. In hac habitasse platea dictumst. Pellentesque ultricies commodo lectus, ut aliquet orci sollicitudin at. Phasellus id pellentesque dui, nec facilisis lorem. Nullam rhoncus eleifend elit eu interdum. Duis aliquam, eros sed ultricies laoreet, risus purus egestas augue, sit amet imperdiet justo augue sed dui. "
        },
        {
            question: "Nullam egestas ut urna ut sodales?",
            answer: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed euismod maximus nisi, eget finibus ligula. Integer id gravida tortor. In hac habitasse platea dictumst."
        }
    ]
}

export const FooterContent = {
    discordLink: "https://discord.com/",
    twitterLink: "https://twitter.com/",
    websiteName: "Website name",
    rightTxt_1: "Interface (token) contract",
    rightTxt_2: "Implementation contract"
}



// Don't change that

export const logo = websiteLogo;