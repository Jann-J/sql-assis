import {React, useState, handleChange} from "react";
import SQLEditor from "./SQLEditor";

function EditorCompo(){
    
    const [dialect, setDialect] = useState("trino"); // Default dialect

    const handleChange = (event) => {
        const selectedDialect = event.target.value;
        setDialect(selectedDialect);
        onChange(selectedDialect); // Notify parent component
    };

    return(
        <div className="flex flex-col items-center justify-center bg-gray-900 text-white">
            {/* Heading */}
            <h4 className="text-3xl font-bold mb-4">SQL Editor</h4>
            
            {/* Buttons to switch dialect */}
            <div className="mb-4">
                <button 
                    onClick={() => setDialect("trino")}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded mr-2"
                >
                    Trino
                </button>
                <button 
                    onClick={() => setDialect("spark")}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                    Spark
                </button>
            </div>

            {/* SQL Editor */}
            <div className="w-full max-w-4xl">
                <SQLEditor dialect={dialect} />
            </div>

        </div>
    )
}
export default EditorCompo;