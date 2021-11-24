import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./component/main/HomePage";
import YongeCareer from "./component/project/YongeCareer";
import LMS from "./component/project/LMS";
import Student from "./component/project/Student";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>

                    <Route path='/rebeccaportfolio' exact component={HomePage}></Route>
                    <Route path='/y-career' exact component={YongeCareer}></Route>
                    <Route path='/lms' exact component={LMS}></Route>
                    <Route path='/student' exact component={Student}></Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
