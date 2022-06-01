import {Route} from "react-router-dom";
import GoogleForm from "./Components/Pages/Authentication/google";
import Index from "./Components/Pages/Home";
import UploadPost from "./Components/Pages/Post/makepost";
import UploadChannel from "./Components/Pages/Channel/makechannel";
import ShowPost from "./Components/Pages/Post/showpost";
import ShowChannel from "./Components/Pages/Channel/showchannel";

function Router() {
    return <div>
        <Route path="/home" component={Index}/>
        <Route path="/post/upload" component={UploadPost}/>
        <Route path="/post/all" component={ShowPost} />
        <Route path="/channel/upload" component={UploadChannel}/>
        <Route path="/channel/all" component={ShowChannel}/>
        <Route path="/login/google" component={GoogleForm}/>
    </div>
}

export default Router