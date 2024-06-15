import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useContests = () => {
    const axiosSecure = useAxiosSecure()
    const {data:contest = []} = useQuery({
        queryKey:['contest'],
        
        queryFn:async()=>{
            const res = await axiosSecure.get('/contest')
            //console.log(res)
            return res.data;
        }
        
    })
    return [contest]
};

export default useContests;