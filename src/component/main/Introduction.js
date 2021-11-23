import {
    makeStyles,
    Paper, styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {tableCellClasses} from "@mui/material";
import {BASECOLOR} from "../../helper/constant";

const Introduction = () => {
    const useStyles = makeStyles((theme) => ({
        container: {
            textAlign: 'center',
            // height: '35vh',
            // width: '90vw',
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            // borderBottom: 'none',
            margin: theme.spacing(2),
            fontSize: '2em',
            backgroundColor: `${BASECOLOR}`,
            borderRadius: '10px',
        },
        // sticky:{
        //     zIndex: 999,
        // position: 'relative',
        // top: '10vh',
        // },
        self: {
            display: "flex",
        },
        tech: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: 'start'
        },
        photo: {
            width: 200,
            // height: 'auto',
            objectFit:'cover'
        },
    }),);
    const classes = useStyles()

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'skyblue',
            color: theme.palette.common.white,
            fontSize: 26,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 20,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    const createData=(name, calories, fat, carbs, protein)=> {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <Paper className={classes.container}>
            <div className={classes.self}>
                <img src="/image/snowman.png" alt="my pic" className={classes.photo}/>
                <div>
                    <h2>Rebecca Li</h2>
                    <p>Together with my family, I came to Saskatoon Canada in the summer of 2018,
                        but I am willing to relocate.
                        <i className="far fa-grin-beam"></i>
                    </p>
                    <p>Looking for a job as <b>web developer</b>, <b><i>Full Stack</i></b> .</p>
                </div>
            </div>


            <div  style={{display:'flex', justifyContent:'space-around'}}>

            <TableContainer component={Paper} style={{border: '2px',margin:'15px',width:'40vw',fontSize:'2em' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center' colSpan={2}>Technical Skills Overview</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <StyledTableCell align="left">Program Languages:</StyledTableCell>
                            <StyledTableCell align="left">HTML ES6, CSS, SASS, JavaScript, JSON, JSX, TypeScript</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left">Frameworks:</StyledTableCell>
                            <StyledTableCell align="left">Bootstrap, Semantic UI, Material UI, Kendo React, React, Redux, hooks, Next.js,</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left">Databases:</StyledTableCell>
                            <StyledTableCell align="left">MySQL, TypeORM, DataGrip</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell align="left">Tools:</StyledTableCell>
                            <StyledTableCell align="left">npm, Node.js, Postman, WebStorm, Git, API, AWS</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
                <TableContainer component={Paper} style={{border: '2px',margin:'15px',width:'40vw' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align='center' colSpan={2}>Work Experience</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow >
                                <StyledTableCell align="left">Full Stack Developer</StyledTableCell>
                                <StyledTableCell align="left">Mark2Win From Dec2020 ~ Now Work on multiple projects using React Redux hooks Node.js Express</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell align="left">Retail Helpdesk Support</StyledTableCell>
                                <StyledTableCell align="left">HGS From Oct 2018 ~ Dec 2020</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell align="left">Front End Developer</StyledTableCell>
                                <StyledTableCell align="left">HCL From Oct 2016 ~ July 2018, shopping website</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell align="left">Software Test Engineer</StyledTableCell>
                                <StyledTableCell align="left">Alcatel-Lucent From Mar 2005 ~ Sep 2016, cdma2000 base station software deliverable test/feature test/regression test</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Paper>
    )
}

export default Introduction