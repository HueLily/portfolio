import organic from '../assets/organic.jpg';
import { CodeSlash } from "react-bootstrap-icons";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import depauwhack from '../assets/DePauw-hack.png';
import api from '../assets/gg-api.jpg';
import React  from 'react';
import wortal from '../assets/wortal.png';

export const projects = [
    {
        id: 1,
        img: organic,
        title: 'ORGANIC LIFE',
        details: [
            {
                icon: <CodeSlash/>,
                title: 'Language: ',
                desc: 'HTML, CSS, JS, React, MongoDB, Express',
            },
            {
                icon: <BoxArrowUpRight/>,
                title: 'Preview: ',
                desc: '',
            },
        ],
    },

    {
        id: 2,
        img: depauwhack,
        title: 'DePauw Hackathon Website',
        details: [
            {
                icon: <CodeSlash/>,
                title: 'Language: ',
                desc: 'HTML, CSS, JS, React, Google Map',
            },
            {
                icon: <BoxArrowUpRight/>,
                title: 'Preview: ',
                desc: '',
            },
        ],
    },

    {
        id: 3,
        img: api,
        title: 'Google API Workshop',
        details: [
            {
                icon: <CodeSlash/>,
                title: 'Language: ',
                desc: 'HTML, CSS, JS, React, Google API',
            },
            {
                icon: <BoxArrowUpRight/>,
                title: 'Preview: ',
                desc: '',
            },
        ],
    },

    {
        id: 4,
        img: wortal,
        title: 'Wortal _ Hackathon',
        details: [
            {
                icon: <CodeSlash/>,
                title: 'Language: ',
                desc: '',
            },
            {
                icon: <BoxArrowUpRight/>,
                title: 'Preview: ',
                desc: '',
            },
        ],
    },

];

export default projects;