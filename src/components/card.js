import { Link } from "react-router-dom";


const Card = ({joke}) => {
    const {icon_url, created_at, updated_at, value} = joke;
    return ( 
        <main>
            <div className="w-80 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="/">
                    <img className="rounded-t-lg" src={icon_url}  alt="joke" />
                </Link>
                <div className="p-5">
                    <Link to="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Created at: {new Date(created_at).toLocaleDateString()}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value}.</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Updated at: {new Date(updated_at).toLocaleDateString()}</h5>
                </div>
            </div>
        </main>
     );
}
 
export default Card;