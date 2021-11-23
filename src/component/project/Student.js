import {Button, Grid, makeStyles, Tooltip} from "@material-ui/core";
import * as React from "react";
import {BASECOLOR, NAVCOLOR} from "../../helper/constant";

const Student = ()=>{
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: `${BASECOLOR}`,
            margin: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: '10px',

            '& dt': {
                margin: theme.spacing(2),
                fontSize: '2em',
                fontWeight: 700,
                color:'darkgreen'
            }
        },

    }))
    const classes = useStyles()
    return(
        <div>
            <Grid container justifyContent='space-around' style={{backgroundColor:`${NAVCOLOR}`, borderRadius: '10px', alignItems:'center'}}>
                <h1>Student Homepage</h1>
                <a href="/"><img src="/image/backToHome.jpg" alt="back to homepage" style={{width:'120px',height:'120px'}}/></a>
            </Grid>
            <h2>Functions and Details: </h2>
            <dl className={classes.root} >
                <dt>Get data from API, using Array map to display on the page</dt>
                <dd>
                    <Tooltip title="Good Practice~" placement="right-start">
                        <Button>Create helper function, set up API config</Button>
                    </Tooltip>
                </dd>
                <dd>
                    <Tooltip title="react action" placement="right-start">
                        <Button>axios try...catch... async/await deal with get error</Button>
                    </Tooltip>
                </dd>
                <dt>Can search by name from student list</dt>
                <dd>
                        <Button>debounce to prevent too much interaction which affect performance</Button>

                </dd>
                <dt>Using Avatar from material UI to show pictures</dt>
                <br/>
                <dt>When click +, show more detail info</dt>
                <dd>
                    <Tooltip title='Good Practice~' placement='right-start'>
                        <Button>ternary operator or conditional operator</Button>
                    </Tooltip>
                </dd>
                <dd>
                    <Tooltip title='Good Practice~' placement='right-start'>
                        <Button>onClick arrow function</Button>
                    </Tooltip>
                </dd>
                <dt>Can show multiple student with more info</dt>
                <dd>
                    <Tooltip title='hooks~' placement='right-start'>
                        <Button>useState useEffect</Button>
                    </Tooltip>
                </dd>
                <dt>Then click -, show less</dt>
                <br/>
                <dt>Can accept user input, add tags on the page</dt>
                <dd>
                    <Tooltip title='Action~' placement='right-start'>
                        <Button>store tags together with student info, clear input after enter</Button>
                    </Tooltip>
                </dd>
                <dd>
                    <Button>use localStorage which can remember those tags even if after reopen the page</Button>
                </dd>
                <dt>Can search by tags</dt>
                <br/>
                <dt>Can search name and tags at the same time</dt>
                <dd>
                    <Button>multiple search</Button>
                </dd>
            </dl>
            <div>
                <h2>Video Demo and Showcase</h2>
                <Grid container justifyContent='space-around'>

                    <Grid item>
                        <video width="750" height="500" controls >
                            <source src="/video/student-home-demo.mp4" type="video/mp4"/>
                        </video>
                    </Grid>
                    <Grid item>
                        <video width="750" height="500" controls >
                            <source src="/video/student-home-implement.mp4" type="video/mp4"/>
                        </video>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Student