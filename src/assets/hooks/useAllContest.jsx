import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllContest = () => {
    const axiosSecure = useAxiosSecure()
    const {data:allContest = []} = useQuery({
        queryKey:['allContest'],
        
        queryFn:async()=>{
            const res = await axiosSecure.get('/allContests')
            //console.log(res)
            return res.data;
        }
        
    })
    return [allContest]
};

export default useAllContest;