import React from "react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-green-400 to-blue-500 py-6 px-8 text-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h5a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-4xl font-bold">To Do List</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;