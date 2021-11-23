import React, {useEffect, useState} from "react";
// import winter from '../asset/image/snowman.png'
import {makeStyles} from "@material-ui/core";

const Others = () => {
    const useStyles = makeStyles((theme) => ({
            carousel: {
                margin: theme.spacing(2),
                width:'65vw',
                objectFit:'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

            }
        }),
    );
    const classes = useStyles()

    const imgPath = "/image/"
    const imgList = [
        "snowman.png",
        "mothers-day.jpg",
        "saskatchewan-river.jpg",
        "survival-tree.jpg",
        "beaver-creek.jpg",
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => {
                if (index === imgList.length - 1) {
                    index = 0
                } else {
                    index++
                }
                return index
            })
        }, 10000)
        return () => clearInterval(interval)
    })

    return (
        <div>
            <div className={classes.carousel} style={{
                backgroundImage: `url(${imgPath + imgList[index]})`,
                backgroundSize: 'contain',
                transitionTimingFunction: "ease-in-out",
                transition: "1500ms",
            }}>

                <h2 className="banner-title capitalize wow fadeInDown" data-wow-delay="300ms"
                    data-wow-duration="3000ms"
                    style={{
                        textAlign: 'center',
                        visibility: 'visible',
                        animationDuration: '3000ms',
                        animationDelay: '300ms',
                        animationName: 'fadeInDown',
                        fontWeight: '700',
                        color: 'lightgoldenrodyellow'
                    }}>
                    <i>Life in Saskatoon</i>
                </h2>
                <h5 className="banner-title capitalize wow fadeInUp" data-wow-delay="300ms"
                    data-wow-duration="3000ms"
                    style={{
                        textAlign: 'center',
                        visibility: 'visible',
                        animationDuration: '3000ms',
                        animationDelay: '300ms',
                        animationName: 'fadeInUp',
                        color: 'lightgoldenrodyellow'
                    }}>
                    <i>Since July 2018</i>
                </h5>

            </div>
            {/*<video  controls>*/}
            {/*    <source src="/self-driving.mp4" type="video/mp4"/>*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
            {/*<audio controls loop>*/}
            {/*        <source src="/snowflakes.mp3" type="audio/mpeg"/>*/}
            {/*            Your browser does not support the audio element.*/}
            {/*</audio>*/}
            {/*<embed style={{width:2, height:0}} src="/snowflakes.mp3" autostart>*/}
            {/*</embed>*/}
            {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/TEAyWfmB9MA?controls=0"*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*        allowFullScreen></iframe>*/}
        </div>

    )
}

export default Others