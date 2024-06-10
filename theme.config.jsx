
import React from 'react';

export default {
    logo: (
       <>
            <img src="https://i.imgur.com/9uqGKs6.png" alt="CS-Club" width="70" height="70" />
            <span>&</span>
            <img src="https://i.imgur.com/iiIB6ua.png" alt="FEDS201" width="70" height="70" />
            <span>CS-Club</span>
           
       </>
    ),
    
    project: {
        link: 'https://github.com/Rochester-CS-Club'
    },
    
    
    footer: {
        text: (
            <span>
                    <a href="https://feds201.com" target="_blank" rel="noopener noreferrer">
                    FEDS201
                </a>
                 {new Date().getFullYear()} ©{' '}
                <a href="https://rhs-csclub.vercel.app" target="_blank" rel="noopener noreferrer">
                    CS-Club
                </a>.
            </span>
        )
    },
    
    
    banner: {
        key: '1.0-release',
        text: (
            <a href="#">
                🎉 Programmers Handbook 1.0 is released. Read more →
            </a>
        )
    },
    
    
    feedback: {
        content: 'Give Feedback',
        labels: 'feedback,documentation',
    },
    
    
};
