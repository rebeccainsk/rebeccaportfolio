import TopNav from "../common/Topnav";
import Introduction from "./Introduction";
import Detail from "./Detail";
import Others from "./Others";
import Bottom from "../common/Bottom";

function HomePage() {
    return (
        <div>
            <TopNav/>
            <Introduction/>
            <Detail/>
            {/*<Others/>*/}
            {/*<Bottom/>*/}
        </div>
    );
}

export default HomePage;