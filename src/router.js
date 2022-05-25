import {Route} from "react-router-dom";
import GoogleForm from "./Components/Pages/Authentication/google";
import Index from "./Components/Pages/Home";


function Router() {
    return <div>
        <Route path="/home" component={Index}/>
        <Route path="/login/google" component={GoogleForm}/>
    </div>
}

export default Router