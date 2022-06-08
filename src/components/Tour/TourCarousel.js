import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import styles from "./Carousel.module.css"
import tour_pic_1 from "../UI/assets/tour pictures/4C003FCB-9DA5-4F2C-8CFC-CD0F5338F04C.JPG"
import tour_pic_2 from "../UI/assets/tour pictures/889F924C-7399-429D-8EF9-06639E0F3714.JPG"
import tour_pic_3 from "../UI/assets/tour pictures/tour_pic_6.jpg"
import tour_pic_4 from"../UI/assets/tour pictures/IMG_3307.jpg"
import tour_pic_5 from "../UI/assets/tour pictures/tour_pic_5.jpg"



function TourCarousel()
{
    let items = [
        {
            image: `${tour_pic_1}`,
        },
        {
            image: `${tour_pic_2}`
        },
        {
            image: `${tour_pic_3}`
        },

        {
            image: `${tour_pic_4}`
        },
        {
            image: `${tour_pic_5}`
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className={'flex'} style={{justifyContent:'center', }}>

            <img src={props.item.image} className={styles['carousel-img']} alt=""/>

        </Paper>
    )
}
export default TourCarousel;