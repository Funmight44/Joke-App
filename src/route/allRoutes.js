import { Route, Routes } from "react-router-dom";
import Counter from "../pages/counter";
import Jokes from "../pages/jokes";

const AllRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Counter/>}/>
            <Route path="/jokes/search" element={<Jokes/>}/>
        </Routes>
     );
}
 
export default AllRoutes;