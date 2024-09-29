import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineDollarCircle } from 'react-icons/ai';

const DashboardContent = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer); 
    }, []);

    const getGreetingMessage = () => {
        const hours = currentTime.getHours();
        if (hours < 12) return 'Good Morning';
        if (hours < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    
    return (
        <div className="p-8">

            <div className="mb-6">
                <h2 className="text-5xl font-bold">
                    {getGreetingMessage()}, 
                </h2>
                <h2 className="text-4xl font-semibold mt-3">Welcome to Laundry Management System!</h2>
                <p className="text-gray-600">Here's an overview of your sales and orders.</p>
            </div>

            <div className="mb-8">
                <p className="text-lg">
                    <span className="font-bold">{currentTime.toLocaleString()}</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <Link to="<Sales />" className="bg-white shadow-md rounded-lg p-6 flex items-center hover:bg-gray-100">
                    <AiOutlineDollarCircle className="text-5xl text-purple-600" />
                    <div className="ml-4">
                        <h3 className="text-2xl font-semibold text-gray-800">Sales</h3>
                        <p className="text-gray-600">Quick access to sales information</p>
                    </div>
                </Link>

                <Link to="/orders" className="bg-white shadow-md rounded-lg p-6 flex items-center hover:bg-gray-100">
                    <AiOutlineShoppingCart className="text-5xl text-purple-600" />
                    <div className="ml-4">
                        <h3 className="text-2xl font-semibold text-gray-800">Orders</h3>
                        <p className="text-gray-600">Quick access to orders</p>
                    </div>
                </Link>
            </div>

            <div className="mt-10">
                <h4 className="text-xl font-semibold mb-4">Additional Information</h4>
                <p className="text-gray-600">
                    You can also manage other aspects of your account from the menu. Stay updated with the latest reports and insights.
                </p>
            </div>
        </div>

    );
}

export default DashboardContent;