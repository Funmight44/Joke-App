import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();



    function getSearch(event){
        event.preventDefault();
        const query = event.target.search.value;
        navigate(`/jokes/search?query=${query}`)
    }



    return ( 
       <main>
            <header>
                <div>
                  <Link to="/"> <h1>Fun</h1> </Link>
                  <span className="emoji">😂🤣</span>
                </div>
                <form onSubmit={getSearch}>
                    <input type="text" name="search" placeholder="search jokes about food, animal, celebrity, etc."/>
                </form>
            </header>
            
        </main>
     );
}
 
export default Header;