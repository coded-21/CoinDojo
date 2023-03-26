import { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'
import pirateBull from './piratebull.svg'
import { Link, Navigate } from 'react-router-dom'
import chartImg from './chartImg.png'

const Ethereum = () => {

    const [data, setData] = useState(null)
    const coin = 'ethereum'
    const url = `https://api.coingecko.com/api/v3/coins/${coin}/ohlc?vs_currency=usd&days=30`
    const [OHLC, setOHLC] = useState(null)
    const [afterOHLC, setAfterOHLC] = useState(null)
    const [actualPrice, setActualPrice] = useState(0)
    const [currentPrice, setCurrentPrice] = useState(0)
    const [streak, setStreak] = useState(0)
    const [information, setInformation] = useState('Press "View Chart" to start practicing!')

    function Next() {
        const randomIndex = Math.floor(Math.random() * (data.length - 42));
        const numSubArrays = 42;
        const selectedSubArrays = data.slice(randomIndex, randomIndex + numSubArrays);
        const questionSubArray = selectedSubArrays.slice(0, 35)
        setOHLC(questionSubArray);
        setAfterOHLC(selectedSubArrays)
        setActualPrice(selectedSubArrays[41][4])
        setCurrentPrice(selectedSubArrays[35][4])
        setInformation('Which trade would you execute for the next 24 hours? (6 candles)')
    }

    
    useEffect(() => {
        axios.get(url).then((response) =>{
            setData(response.data);

        }).catch((error) =>{
            console.log(error)
        })
    }, [])
    
    if (!data) return null

    return(
        <>
        <div className="bg-gray-900 text-white pb-24 px-2">

        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="p-4 container flex flex-wrap items-center justify-between mx-auto">
              <Link to="/" className="flex items-center">
                <img src={pirateBull} className="h-6 mr-3 sm:h-9" alt="Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CoinDojo</span>
              </Link>
          
              <h1 className="md:text-xl font-semibold text-gray-700 dark:text-gray-300 md:pr-24">Trading Window</h1>
          
              <div className="flex md:order-2">
                <Link to='/'>
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800">Exit</button>
                </Link>
              </div>
            </div>
        </nav>
          
          

          
        <div className="pt-28 mb-4 mx-auto max-w-3xl">
            <div className="shadow-lg text-center">
            {
                OHLC?
                <div className='canvas w-full'>
                    <Chart
                        type='candlestick'
                        height='400'
                        width='100%'
                        series={[
                            {data: OHLC}
                        ]}
                        options={{}}
                    />
                </div>:
                <img src={chartImg} alt="coin dojo trading interface" />
            }
            </div>
        </div>

        <div className=" pb-8 mx-auto max-w-3xl">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <div className="text-center bg-gradient-to-r from-green-500 to-red-500 rounded-lg px-4 py-3">
                  <h2 className="text-md text-white">{information}</h2>
                </div>
              </div>
            </div>
          </div>
          
          
          
        {/* <!-- needs fontawesome in the header --> */}
        <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <div className="flex flex-row justify-between rounded-lg px-4 py-3">
                    <button onClick={() => {
                        if (actualPrice >= currentPrice) {
                            setInformation('Correct! Press Next to view the next chart')
                            setStreak(streak+1)
                        }
                        else {
                            setInformation('Incorrect. Try again by clicking Next')
                            setStreak(0);
                        }
                        setOHLC(afterOHLC)
                        }} 
                        className="w-1/2 py-3 rounded-lg text-green-500 hover:text-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center">
                        <i className="fas fa-arrow-up mr-2"></i>Buy
                    </button>
                    <button onClick={() => {
                        if (actualPrice <= currentPrice) {
                            setInformation('Correct! Press Next to view the next chart');
                            setStreak(streak+1);
                        }
                        else {
                            setInformation('Incorrect. Try again by clicking Next');
                            setStreak(0);
                        }
                        setOHLC(afterOHLC)
                        }} 
                        className="w-1/2 py-3 rounded-lg text-red-500 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 flex items-center justify-center">
                        <i className="fas fa-arrow-down mr-2"></i>Sell
                    </button>
                    
                </div>
                <div className="flex flex-row justify-between rounded-lg px-4 py-3">
                    <button className="w-1/2 py-3 rounded-lg text-orange-500 hover:text-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 flex items-center justify-center">
                        <i className="fas fa-fire mr-2"></i>Win Streak: {streak}
                    </button>
                    <button onClick={() => {
                        Next()
                    }} className="w-1/2 py-3 rounded-lg text-gray-200 hover:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500 flex items-center justify-center">
                        <i className="fas fa-chart-line mr-2"></i>View Chart / Next
                    </button>
                    
                </div>
                
              </div>
            </div>
        </div>
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 " >
                <span className="mx-auto text-center text-sm text-gray-500 dark:text-gray-400">Built with ❤️ for <a href="https://www.hackabull.dev/" className="hover:underline">Hackabull 5.0 </a>
                </span>
        </footer>
    </div>
    </>
    )
}

export default Ethereum