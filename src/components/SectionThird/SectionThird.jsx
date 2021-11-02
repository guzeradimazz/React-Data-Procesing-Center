import React from 'react';
import SeeMoreButton from '../UI/SeeMoreButton/SeeMoreButton';
import './SectionThird.css';

const SectionThird = () => {
    const sectionCards=[
        {
            name:'jamies ford',
            position:'trainer',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
            trainer:'trainer__first'
        },
        {
            name:'eddie smith',
            position:'trainer',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
            trainer:'trainer__second'
        },
        {
            name:'annie summer',
            position:'trainer',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
            trainer:'trainer__third'
        },
        {
            name:'emily sea',
            position:'trainer',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, lacus eget consequat ',
            trainer:'trainer__fourth'
        }
    ]
    return (
        <div className='third'>
            <div className="second__head">
                <h1>our team</h1>
            </div>
            <div className='third__cards'>
                {sectionCards.map(item=>(
                    <div className='third__cards__item'>
                        <div className={item.trainer}></div>
                        <div className="third__cards__item__content">
                            <h3>{item.name}</h3>
                            <strong>{item.position}</strong>
                            <p>{item.body}</p>
                            <SeeMoreButton classNameTag={'to__right'}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionThird;