"use client";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
    const handleButtonClick = (action) => {
        let message;
        switch (action) {
            case 'manageCourses':
                message = "📚 Ready to unleash your course management superpowers? Let's get started!";
                break;
            case 'viewBlogs':
                message = "📝 It's blog time! Get ready for a treasure trove of insights!";
                break;
            case 'updateProfile':
                message = "🔄 Profile makeover time! Let's elevate your presence!";
                break;
            default:
                message = "🎉 Keep clicking and enjoy the journey!";
        }
        toast.success(message);  
    };

    return (
        <div>
            <ToastContainer />  
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 p-8">
                <h1 className="text-4xl font-bold mb-16 text-white">Admin Dashboard</h1>

                <div className="space-y-4 w-full max-w-md">
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={() => handleButtonClick('manageCourses')}
                            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
                        >
                            Course Management
                        </button>
                        <button
                            onClick={() => handleButtonClick('viewBlogs')}
                            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
                        >
                            Explore Blogs
                        </button>
                        <button
                            onClick={() => handleButtonClick('updateProfile')}
                            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
                        >
                            Refresh Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
