import { useState } from "react";

export default function SearchTask({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleClick() {
        onSearch(searchTerm);
    }

    return (
        <div className="flex">
            <input
                type="search"
                className="border px-4 py-2 w-full md:w-64"
                placeholder="Search Task"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                required
            />
            <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2"
                onClick={handleClick}
            >
                Search
            </button>
        </div>
    );
}