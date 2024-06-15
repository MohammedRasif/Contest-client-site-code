import { useEffect, useState } from "react";
import Populars from "./Populars";
import { GrCodeSandbox } from "react-icons/gr";


const Popular = () => {
    const [blog,setBlog] = useState([])
    useEffect(() =>{
        fetch('popularMovies.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div >
            <div className="flex items-center mb-20">
                <GrCodeSandbox className="text-4xl mr-4 text-blue-500"></GrCodeSandbox>
                <h1 className="text-4xl">POPULAR CONTEXT</h1>
            </div>
            
        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-4 ">
            {
                blog.map(blogs => <Populars   key={blogs.id} blogs={blogs}></Populars> )
            }
        </div>
        </div>
    );
};

export default Popular;