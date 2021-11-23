import {makeStyles} from "@material-ui/core";
import {GOLDCOLOR, NAVCOLOR} from "../../helper/constant";
import React from "react";

const TopNav = () => {
    const useStyles = makeStyles(() =>
        ({
                root: {
                    // position: "fixed",
                    top: 0,
                    backgroundColor: `${NAVCOLOR}`,
                    textAlign: 'center',
                    height: '10vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'white',
                    marginLeft:0,
                    borderRadius:'10px',
                    '& h3': {
                        color: 'lightgoldenrodyellow'
                    }
                },
                topnav: {
                    '& a': {
                        color: 'darkblue',
                    },
                    // display:"flex",
                    // justifyContent: "space-around",
                }
            }
        ))
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.topnav}>
                <h2 className="banner-title capitalize wow fadeInDown" data-wow-delay="300ms"
                    data-wow-duration="3000ms"
                    style={{
                        textAlign: 'center',
                        visibility: 'visible',
                        animationDuration: '3000ms',
                        animationDelay: '300ms',
                        animationName: 'fadeInDown',
                        fontWeight: '700',
                        color:`${GOLDCOLOR}`
                    }}>Welcome to Rebecca Li's Homepage        </h2>
                 <h4 className="banner-title capitalize wow fadeInUp" data-wow-delay="300ms"
                     data-wow-duration="3000ms"
                     style={{
                         textAlign: 'center',
                         visibility: 'visible',
                         animationDuration: '3000ms',
                         animationDelay: '300ms',
                         animationName: 'fadeInUp',
                         fontWeight: '700',
                         // color:`${GOLDCOLOR}`
                     }}>  Please contact me by <a
                    href="mailto:rebeccainsk@gmail.com">rebeccainsk@gmail.com</a></h4>

            </div>
        </div>

    )
}

export default TopNav