import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Grid, makeStyles} from "@material-ui/core";
import {BASECOLOR, WARNINGCOLOR, WARNINGFONT} from "../../helper/constant";
import Others from "../main/Others";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function YongeCareer() {
    const useStyles = makeStyles((theme) =>
        ({
            root: {
                // margin: theme.spacing(2),
                // padding: theme.spacing(2),
                // textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 800,
                fontSize:'2em',
                textAlign:'center'
            },
            tab: {
                // textAlign:'start',
                minWidth: '10em',
                // fontSize:'1em'
            },
            expLearned: {
                textAlign: "start",
                // fontSize: '2em',
            },
            expItem: {
                color: "darkgreen",
                // fontSize:'1em',
            }

        }),
    );
    const classes = useStyles()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            {/*<div style={{backgroundColor:`{BASECOLOR}`}}>*/}
                <Grid container justifyContent='space-around' >
                    <h1>Y Career</h1>
                    <a href="/"><img src="/image/backToHome.jpg" alt="back to homepage" style={{width:'120px',height:'120px'}}/></a>
                </Grid>
            {/*</div>*/}


            <h2>Main Features and Functions Completed:</h2>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: `${BASECOLOR}`,
                    display: 'flex',
                    height: '40vh',
                    width: '90vw',
                    borderRadius: '10px',
                    overflowY: 'scroll',
                }}
            >
                <Tabs
                    className={classes.tab}
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{borderRight: 10, borderColor: 'divider'}}

                >
                    <Tab label="Carousel" {...a11yProps(0)} />
                    <Tab label="XGrid" {...a11yProps(1)} />
                    <Tab label="Pagination" {...a11yProps(2)} />
                    <Tab label="Modal" {...a11yProps(3)} />
                    <Tab label="API" {...a11yProps(4)} />
                    <Tab label="Good Practice" {...a11yProps(5)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <h3>Similar to following</h3>
                    <Others/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container justifyContent="space-evenly">
                        <Grid item lg={6} sm={12}>
                            <h6 style={{textAlign: "start"}}>Here is a quote from npm website:</h6>
                            <div style={{
                                backgroundColor: `${WARNINGCOLOR}`,
                                color: `${WARNINGFONT}`,
                                textAlign: 'start'
                            }}>
                                <blockquote cite="https://www.npmjs.com/package/@material-ui/x-grid">
                                    <p>This package has been deprecated</p>
                                    <p><i>Author message:</i></p>
                                    <br/>
                                    <p>The name of the package has changed, more details in
                                        https://github.com/mui-org/material-ui-x/releases/tag/v4.0.0</p>
                                </blockquote>
                            </div>
                            <p>Click <a href="https://www.npmjs.com/package/@material-ui/x-grid">here</a> for more
                                detail</p>
                        </Grid>
                        <Grid item lg={6} sm={12}>
                            <h6>Tips and Tricks</h6>
                            <ol style={{textAlign:'start'}}>
                                <li>Licence, make sure license purchased and declared</li>
                                <li>Title need to be taken care of</li>
                                <li>define rows and columns, row height, row count per page, whether or not show border,
                                    whether or not sortable, whether or not there is footer
                                </li>
                                <li>responsive design, how to hide some columns if on smaller screen</li>
                            </ol>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} style={{textAlign:'start'}}>
                    <p>Can be implemented in different ways, used for tables/datagrid etc</p>
                    <p>1) pre{`pagination={true}`} or just pagination</p> this way you have default pagination from material UI.
                    <p>2) use <pre>{`const apiRef = useGridApiRef()`}</pre>
                        then from XGrid
                        <pre>{`<XGrid 
                                pagination
                                apiRef={apiRef}
                                components={{
                                    Footer: () => JobFooter(handlePageChange, rowPerPage, apiRef)
                                }}
                            />`}
                        </pre>
                        <code>Footer</code> is the key word, which means I have a component(here I named it as JobFooter) as XGrid's footer.
                        <code>apiRef</code> is used to refer to the XGrid table
                        in this way you have your own pagination component.
                    </p>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <img src="/image/modal.png" style={{width: '100%', objectFit: 'cover'}} alt="modal"/>
                </TabPanel>
                <TabPanel value={value} index={4} style={{textAlign:'start'}}>
                    Customized hooks, code snippet as below:
                   <pre>{`const useJobApi = () => {
    const [jobPosting, setJobPosting] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async ()=> {
             await axios.get(\https://localhost:3000/employers\)
                .then(res => {
                    setJobPosting(res.data)
                }).catch((e) => {
                    setError(e)
                })
                .finally(() => {
                })
        }
        fetchData()

    }, [])

    return [jobPosting, error]
}
export default useJobApi`}</pre>
                </TabPanel>
                <TabPanel value={value} index={5} style={{textAlign: 'start'}}>
                   <ul>
                       <li>Separate functions with components for better debug</li>
                       <p></p>
                       <li>Create helper functions for code reuse</li>
                       <p></p>
                       <li>Create constant file for reusable strings to prevent errors</li>
                       <p></p>
                   </ul>
                </TabPanel>

            </Box>
            <h2>Main Experience Gained:</h2>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: `${BASECOLOR}`,
                    display: 'flex',
                    height: '40vh',
                    width: '90vw',
                    borderRadius: '10px',
                    overflowY:'auto',
                    padding:'10px'
                }}
            >

                <dl className={classes.expLearned}>
                    <dt className={classes.expItem}>Keep learning</dt>
                    <dd>The only thing unchanged is change itself</dd>
                    <br/>
                    <dt className={classes.expItem}>Be professional on each task, even it seems tiny</dt>
                    <dd>I can always learn and grow, all I have done build my reputation</dd>
                    <br/>
                    <dt className={classes.expItem}>More responsibilities, More achievements</dt>
                    <dd>Helping team members is a very good chance to get more experience</dd>
                    <br/>
                    <dt className={classes.expItem}>Try my best to be ahead of deadline</dt>
                    <dd>There are always things you can improve</dd>
                    <br/>

                </dl>
            </Box>
        </div>

    );
}
