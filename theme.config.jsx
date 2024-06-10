
import React from 'react';

export default {
    logo: (
        <>
            <img style={{borderRadius: '50%', marginTope: '10px'}} src="https://i.imgur.com/5qow8cH.png" alt="CS-Club" width="30" height="auto"/>
            <span>&nbsp;</span>
            {/*<span>&nbsp;</span>*/}
            <img style={{borderRadius: '50%', marginTope: '10px'}} src="https://i.imgur.com/GmdZ72B.png" alt="FEDS201" width="30" height="30"/>
            <span>&nbsp;</span>
            <text >Programmers Handbook</text>
        
        </>
    ),
    
    project: {
        link: 'https://github.com/Rochester-CS-Club'
    },
    
    
    footer: {
        text: (
            <span>
                    <a href="https://feds201.com" target="_blank" rel="noopener noreferrer">
                    FEDS201 <span style={{color: '#888'}}></span>
                </a>
                 {new Date().getFullYear()} ©{' '}
                <a href="https://rhs-csclub.vercel.app" target="_blank" rel="noopener noreferrer">
                    CS-Club
                </a>
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
