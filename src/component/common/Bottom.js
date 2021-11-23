import {makeStyles} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Bottom = () => {
    const useStyles = makeStyles(() => ({
            bottom: {
                width: "100%",
                textAlign: 'center',
                // height: '8vh',
                verticalAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

            }
        }

    ))
    const classes = useStyles()

    return (
        <div className={classes.bottom}>
            {/*<i className="fab fa-linkedin"><a href="https://www.linkedin.com/in/rebecca-li-3062417517/"></a></i>*/}
            <div id="middle_heading">
                {/*<Link to="/any-url">*/}
                {/*<FontAwesomeIcon icon={["fas", "coffee"]} />*/}
                {/*<FontAwesomeIcon icon={faRandom} size="2x"/>*/}
                {/*</Link>*/}
            </div>
            {/*<i className="flaticon-email"/>*/}
            {/*<a href="mailto:rebeccainsk@gmail.com">rebeccainsk@gmail.com</a>*/}
        </div>
    )
}

export default Bottom