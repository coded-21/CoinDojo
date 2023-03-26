import btc from './btc.png'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return(
        <div className="mx-auto p-5 m-5 max-w-[230px] w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="px-10 pt-6 pb-2 rounded-t-lg" src={props.image} alt="crypto image" />
            <div className="">
                <h5 className=" text-center mb-2 mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300"> {props.name} </h5>
                <h5 className="pb-4 text-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-300">${props.price}</h5>
                <div className="pb-8 flex justify-center mx-auto">
                <Link to={props.endpoint} className=" cursor-pointer font-medium text-black bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Practice</Link>
                </div>
            </div>      
        </div>
    )
}

export default Card