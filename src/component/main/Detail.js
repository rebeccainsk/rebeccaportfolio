import {Link} from "react-router-dom";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    makeStyles,
    Paper,
    Typography
} from "@material-ui/core";
import yongecareerHome from '../../asset/image/yongecareer-home.png'
import lmsHome from '../../asset/image/lms.png'
import student from '../../asset/image/student.png'

import {BASECOLOR} from "../../helper/constant";

const Detail = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: `${BASECOLOR}`,
            margin: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: '10px',
            fontSize: 20,
            '& h3': {
                margin: theme.spacing(2),
                textDecoration: "none",
                textAlign:'center'
            }
        },

    }))
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h3>Project Demo</h3>
            <Grid container justifyContent="space-around" style={{margin: '10px'}}>
                <Grid item xs={12} md={5} lg={3}>
                    {/*<Skeleton animation={true} variant="rectangular" width={210} height={118}>*/}
                    <Link to={'/y-career'}>
                        {/*</Skeleton>*/}
                        {/*<Paper style={{margin:'20px'}}>*/}
                            <Card sx={{maxWidth: 345}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={yongecareerHome}
                                    alt="XX Career"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Y Career
                                    </Typography>
                                    <Typography  color="text.secondary">
                                        <p>Y Career mainly for new immigrants and new graduates looking for a job, Canda wide career website</p>
                                        <p>using Next.js React hooks and Material UI</p>
                                        <p>mobile responsive</p>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                    {/*<Chip label="Clickable" onClick={handleClick} />*/}
                                </CardActions>
                            </Card>
                        {/*</Paper>*/}

                    </Link>
                </Grid>
                <br/>
                <Grid item xs={12} md={5} lg={3}>
                    <Link to={'/lms'}>
                        {/*<img src={lmsHome} style={{width: 220}} alt=""/>*/}

                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={lmsHome}
                                alt="learning management system"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Learning Management System
                                </Typography>
                                <Typography color="text.secondary">
                                    <p>for internal use, manage the student/teacher/employee/class info, upload/download file</p>
                                    <p>using React Redux hooks and Material UI</p>
                                    <p>mobile responsive</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                                {/*<Chip label="Clickable" onClick={handleClick} />*/}
                            </CardActions>
                        </Card>
                    </Link>
                </Grid>
                <br/>
                <Grid item xs={12} md={5} lg={3}>
                    <Link to={'/student'}>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={student}
                                alt='student homepage'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Student
                                </Typography>
                                <Typography  color="text.secondary">
                                    <p>Show student name and info, can show more when click, can add tag,search on name
                                        and tag</p>
                                    <p>using React Redux hooks localStorage</p>
                                    <p>mobile responsive</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/*<Button size="small">Share</Button>*/}
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Link>
                </Grid>

            </Grid>

        </div>
    )
}

export default Detail