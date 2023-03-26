import axios from "axios"
import { useState, useEffect } from "react"
import trading from './trading.png'
import pirateBull from './pirateBull.svg'
import Card from "./Card"


const Home = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    

    useEffect(() => {
        axios.get(url).then((response) =>{
            setData(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    console.log(data)

    if (!data) return null

    return(

        <div className="bg-gray-900 text-white pb-24">

        {/* <!-- Navbar --> */}

            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                <img src={pirateBull} className="h-6 mr-3 sm:h-9" alt="Hackabull Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CoinDojo</span>
                </a>
                <div className="flex md:order-2">
                    <a href="#coins">
                        <button type="button" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Get started
                        </button>
                    </a>
                {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button> */}
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-500 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#coins" className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-500 md:p-0 dark:text-white">Coins</a>
                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>
            {/* <script> */}
            {/* const navbarToggle = document.querySelector("[data-collapse-toggle]");
            const navbarMenu = document.querySelector("#navbar-sticky");
            
            navbarToggle.addEventListener("click", () => {
                navbarMenu.classNameList.toggle("hidden");
            }); */}
            {/* </script> */}
            

            {/* <!-- <nav className="bg-gray-800 py-4 px-6 fixed w-full z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">DayTraderDojo</a>
                    <div>
                        <a href="#" className="mr-4">Login</a>
                        <a href="#" className="bg-green-500 px-4 py-2 rounded-lg">Sign Up</a>
                    </div>
                </div>
            </nav> --> */}
        
            {/* <!-- Main Content --> */}

            <div id="main-content"className="max-w-7xl mx-auto py-20 px-6 flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Get better at <br/> <span className="text-transparent bg-clip-text bg-yellow-500">Crypto Trading</span></h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Predict the market movement of the top 5 cryptocurrencies and hone your trading skills. CoinDojo helps you practice with randomized, real-time market data so you can become a profitable trader.</p>

                    <a href="#coins" className=" text-black dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 px-4 py-2 font-medium rounded-lg">Start Practicing Now</a>
                </div>
                <div className="lg:w-1/2">
                    <img src={trading} alt="Illustration" className="w-full rounded-lg shadow-lg"/>
                </div>
            </div>

            <div id="coins" className="flex flex-wrap m-5 p-3">
                <Card
                    name={data[0].name}
                    price={data[0].current_price.toLocaleString()}
                    image={data[0].image}
                    endpoint='/bitcoin'
                />
                <Card
                    name={data[1].name}
                    price={data[1].current_price.toLocaleString()}
                    image={data[1].image}
                    endpoint='/ethereum'
                />
                <Card
                    name={data[3].name}
                    price={data[3].current_price.toLocaleString()}
                    image={data[3].image}
                    endpoint='/bnb'
                />
                <Card
                    name={data[5].name}
                    price={data[5].current_price.toLocaleString()}
                    image={data[5].image}
                    endpoint='/xrp'
                />
                <Card
                    name={data[6].name}
                    price={data[6].current_price.toLocaleString()}
                    image={data[6].image}
                    endpoint='/cardano'
                />
            </div>
            
        
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 " >
                <span className="mx-auto text-center text-sm text-gray-500 dark:text-gray-400">Built with ❤️ for <a href="https://www.hackabull.dev/" className="hover:underline">Hackabull 5.0 </a>
                </span>
            </footer>

        


            
            

            {/* <!-- Footer -->
            <!-- <footer className="bg-gray-800 py-4 px-6 fixed bottom-0 w-full">
                <div className="max-w-7xl mx-auto text-center">
                <p>Built with ❤️ for Hackabull 5.0 </p>
                </div>
            </footer> --> */}
            
        </div>
    )
}

export default  Home