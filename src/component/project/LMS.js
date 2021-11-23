import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Card, Paper} from "@material-ui/core";
import {BASECOLOR, NAVCOLOR} from "../../helper/constant";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function LMS() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{bgcolor: 'background.paper'}}>
            <AppBar position="static" style={{ borderRadius:'10px', backgroundColor:`${NAVCOLOR}`,height:'10vh'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    style={{paddingTop:'2vh'}}
                >
                    <Tab label="New Features" {...a11yProps(0)} style={{fontSize:'2em'}} />
                    <Tab label="Bug Fix" {...a11yProps(1)} style={{fontSize:'2em'}} />
                    {/*<Tab label="Tips & Tricks" {...a11yProps(2)} style={{fontSize:'2em'}} />*/}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: '90vw',
                                height: '30vh',
                            },
                        }}
                    >
                        {/*Email Check*/}
                        <Paper elevation={3} style={{display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{paddingLeft:5}}>Email Check</h3>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    overflowY: 'scroll',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: '20vw',
                                        // height: '28vh',
                                        margin: 2,

                                    },
                                }}
                            >
                                <Paper elevation={3} >

                                    <h4 style={{paddingLeft:5}}>What is "Email Check"?</h4>
                                    <p style={{paddingLeft:5}}>when input email, need to communicate with backend,
                                        if there is duplicate email already, error pop up
                                        saying "Duplicate Email Found", this record can't be saved</p>
                                </Paper>
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:5}}>Why need this feature?</h4>
                                    <p style={{paddingLeft:5}}>In this way, we will not have same student or employee more than once in the
                                        DB</p>
                                </Paper>
                                <Paper elevation={3} style={{overflowY: 'auto'}}>
                                    <h4 style={{paddingLeft:5}}>How to implement this feature?</h4>
                                    <ol >
                                        <li>From component, validate the email is not null and validate format first</li>
                                        <li>Then call API ("action") with backend</li>
                                        <li>While waiting for response, show "searching" status</li>
                                        <li>If duplicate, can't continue to save, update "Store" with right state, like "error" show</li>
                                        <li>Otherwise continue to edit or add</li>
                                        <li><b>this can happen when add new customer and edit existing customer. so have to think differently
                                            otherwise it will always show error. userId is optional to backend, so set default value for it to null
                                        </b></li>
                                    </ol>
                                </Paper>
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:2}}>Tips and Tricks</h4>
                                    <ol>
                                        <li>React, Redux, hooks, material UI</li>
                                        <li>useState, useEffect, </li>
                                        <li>TextField, InputProps, InputAdornment</li>
                                        <li>axios, try...catch... </li>
                                        <li>RE, yup</li>
                                        <li>debounce</li>
                                    </ol>
                                </Paper>
                            </Box>
                        </Paper>

                        {/*scroll to view */}
                        <Paper elevation={3} style={{backgroundColor:`${BASECOLOR}`,display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{paddingLeft:5}}>Scroll to view</h3>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    overflowY: 'scroll',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: '20vw',
                                        // height: '28vh',
                                        margin: 2,
                                    },
                                }}
                            >
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:5}}>What is "Scroll into view"?</h4>
                                    <p style={{paddingLeft:5}}>When teacher click schedule, schedule open and auto scroll view to the nearest interview time </p>
                                    <br/>
                                </Paper>
                                <Paper elevation={3}>
                                    <h4 style={{paddingLeft:5}}>Why need this feature?</h4>
                                    <p style={{paddingLeft:5}}>When teacher login, schedule show like 24 hours which is much more than view can hold. so
                                        has to scroll manually to find the slot for interview
                                        they may miss the schedule by mistake </p>
                                </Paper>
                                <Paper elevation={3} style={{overflowY: 'auto'}}>
                                    <h4 style={{paddingLeft:5}}>How to implement this feature?</h4>
                                    <ol>
                                        <li>Research scroll into view, found similar case using button when click, then scroll automatically
                                        </li>
                                        <li>The key is to find that element we want to scroll</li>
                                        <li>Try to embed that button in the project, it works as expected.</li>
                                        <li>Then rewrite that to useEffect function, when all info loaded, together implement scrollintoview in useEffect</li>
                                    </ol>
                                </Paper>
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:2}}>Tips and Tricks</h4>
                                    <ol>
                                        <li>Kendo React, Kendo Scheduler</li>
                                        <li>Array filter/map/forEach/push</li>
                                        <li>arrow function, slice, parseInt, toString, moment, isAfter</li>
                                        <li>ref, querySelector, querySelectorAll, hasAttribute, useEffect,
                                            scrollIntoView
                                        </li>
                                    </ol>
                                </Paper>
                            </Box>
                        </Paper>

                        {/*Download poster*/}
                        <Paper elevation={3} style={{display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{paddingLeft:5}}>Download poster</h3>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    overflowY: 'scroll',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: '20vw',
                                        // height: '28vh',
                                        margin: 2,
                                    },
                                }}
                            >
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:5}}>What is "Download poster"?</h4>
                                    <p style={{paddingLeft:5}}>When want to download the poster may need different size, format </p>
                                    <p style={{paddingLeft:5}}>Can input size, can choose the format</p>
                                    <br/>
                                </Paper>
                                <Paper elevation={3}>
                                    <h4 style={{paddingLeft:5}}>Why need this feature?</h4>
                                    <p style={{paddingLeft:5}}>For different purpose, poster can be customized </p>
                                </Paper>
                                <Paper elevation={3} style={{overflowY: 'auto'}}>
                                    <h4 style={{paddingLeft:5}}>How to implement this feature?</h4>
                                    <ol>
                                        <li>Understand existing function of download poster
                                        </li>
                                        <li>Study official document of image-conversion</li>
                                        <li>To prevent back and forth change, try change one first</li>
                                        <li>Test on different situations with multiple posters</li>
                                    </ol>
                                </Paper>
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:5}}>Tips and Tricks</h4>
                                    <ol>
                                        <li>Study image-conversion</li>
                                        <li>Use async/await</li>
                                        <li>Validate input, if not, show error</li>
                                        <li>When to re-render the page</li>
                                        <li>When download complete, reset to default setting. But browser may keep the input, so need force update.
                                        </li>

                                    </ol>
                                </Paper>
                            </Box>
                        </Paper>
                        {/*Google Drive*/}
                        <Paper elevation={3} style={{backgroundColor:`${BASECOLOR}`,display: 'flex', flexDirection: 'column'}}>
                            <h3 style={{paddingLeft:5}}>Google Drive Share</h3>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    overflowY: 'scroll',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: '20vw',
                                        // height: '28vh',
                                        margin: 2,

                                    },
                                }}
                            >
                                <Paper elevation={3} >

                                    <h4 style={{paddingLeft:5}}>What is "Google Drive Share"?</h4>
                                    <p style={{paddingLeft:5}}>when login with google, can list all google drive directories
                                        so with the google file id, create permissions to share with students
                                        also able to remove the permission when necessary.
                                    </p>
                                </Paper>
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:5}}>Why need this feature?</h4>
                                    <p style={{paddingLeft:5}}>Lecturers have lots of files need to share with students,
                                        it is not easy to track and manage with just use google drive manually share</p>
                                </Paper>
                                <Paper elevation={3} style={{overflowY: 'auto'}}>
                                    <h4 style={{paddingLeft:5}}>How to implement this feature?</h4>
                                    <ol >
                                        <li>using gapi-script, init google client first</li>
                                        <li>list all the files user owned, including file name and file id</li>
                                        <li>with file id, can create permission for specific students</li>
                                        <li>from backend create 3 table entities in MySQL, user-resources-permissions</li>
                                        <li>when user login search from user table, if not find, create one record for the user</li>
                                        <li>user has one to many to resources, create resource in resource table</li>
                                        <li>then create permission in permission table and also able to delete afterwards</li>
                                    </ol>
                                </Paper>
                                <Paper elevation={3} >
                                    <h4 style={{paddingLeft:2}}>Tips and Tricks</h4>
                                    <ol>
                                        <li>React, Redux, hooks, material UI, kendo react</li>
                                        <li>relations between tables, not using existing student table, create new table for permissions</li>
                                        <li>routes to get post or put for different purpose</li>
                                        <li>controller for CRUD using TypeORM to connect with MySQL</li>
                                        <li>use postman and HeidiSQL to test interface and monitor DB</li>
                                        <li></li>
                                    </ol>
                                </Paper>
                            </Box>
                        </Paper>

                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ul style={{fontSize:'2em'}}>
                        <li>【customer list】 add select: list all, active, inactive; select different role, search can work with the role together.</li>
                        <li>【customer list】 category: add 'undefined';</li>
                        <li>【employee list】【customer list】【tracking list】search style with same format</li>
                        <li>【employee list】 add status(partTime, fullTime, campusAmbassador) to search</li>
                        <li>【employee list】 add select: list all, active, inactive; select different category, search can work with the category together.</li>
                        <li>【employee list】 cant search and filter together</li>
                        <li>【customer list】modify category as Referral or Cooperators, the category is blank</li>
                        <li>【customer list】 edit, note length check should be the same as others</li>
                        <li>【Product list】【message list】 modify enable and disable style just like 'Qr code set';</li>
                        <li>【Kendo scheduler】 update the interview according to status</li>
                        <li>【message】Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function</li>
                        <li>【training】 add new homework requirement should be within 50000 characters</li>
                        <li>【message】select read, then search, error</li>
                        <li>【message】inactive, cant enable</li>
                    </ul>
                </TabPanel>
                {/*<TabPanel value={value} index={2} dir={theme.direction}>*/}
                {/*    Item Three*/}
                {/*</TabPanel>*/}
            </SwipeableViews>
        </Box>
    );
}
