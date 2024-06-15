import { register } from "swiper/element";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY ;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Edit = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register , handleSubmit , reset} = useForm() 
    const onSubmit = async(data) => {
      //console.log(data)
      //image upload to imgbb and then get an url;
      const imageFile = {image:data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
          headers:{
              'content-type':'multipart/form-data'
          }
      });
      if(res.data.success){
          const contestItem = {
              name: data.name,
              description:data.description,
              category:data.category,
              price: parseFloat(data.price),
              image: res.data.data.display_url
  
          }
        const contestRes = await axiosSecure.put(`/contest/${_id}`,contestItem);
        //console.log(contestRes.data)
        if(contestRes.data.insertedId){
          //show success popup
          //reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the Contest`,
            showConfirmButton: false,
            timer: 1500
          });
          
        }
      }
  
  
      //console.log(res.data)
    };

    return (
        <div
        className="hero min-h-full"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3y8QLL7/wp12016952.webp)",
        }}
      >
        
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" text-blue-500">
            <h1 className="mb-5 text-5xl font-bold">Add Contest</h1>
            <div className="flex items-center">
              <div className="1/2">
                  <h1>Contest Name</h1>
              </div>
              <div className="2/3 space-x-5 ml-3">
                  <input type="text" defaultValue={name}  placeholder="Contest Name" className=" bg-white p-1 rounded-sm border-x-2 border-y-2 border-black ml-5" id=""  />
                    
              </div>
            </div>
          
            <div className="flex items-center my-3">
              <div className="1/2 flex items-center ml-2">
              <HiMiniCurrencyDollar className="text-xl"></HiMiniCurrencyDollar>
                  <h1>Price </h1>
                  
              </div>
              <div className="2/3 flex items-center space-x-5 ml-[71px]">
                  <input type="text"    name="price" placeholder="Price" className=" p-1 bg-white rounded-sm border-x-2 border-y-2 border-black " id="" {...register("price" , {required:true})} />
                  
              </div>
            </div>
  
            
  
            <div className=" flex">
              <div className="label">
                <span className="label-text text-blue-600">Contest type</span>
              </div>
            <select defaultValue="default"
              {...register("category",{required:true})}
              className="select select-bordered ml-12 w-72 border-x-2 border-y-2 text-black border-black "
            >
              
              <option disabled value="default">
                Select a category
              </option>
              <option value=" Image Design Contests"> Image Design
              Contests</option>
              <option value="Article Writing">Article Writing</option>
              <option value="Marketing Strategy">Marketing Strategy</option>
              <option value=" Digital advertisement Contests,"> Digital
              advertisement Contests,</option>
              <option value="Gaming Review">Gaming Review</option>
              <option value="Book Review">Book Review</option>
              <option value="Business Idea Concerts">Business Idea Concerts</option>
              <option value="Movie Review">Movie Review</option>
  
            </select>
              </div>
  
  
              <div className="flex items-center my-3">
              <div className="1/2">
                  <h1>Image </h1>
              </div>
              <div className="2/3 space-x-5 ml-11">
              <input type="file" className="file-input file-input-bordered w-full max-w-xs p-1 bg-white rounded-sm border-x-2 border-y-2 border-black ml-12" id="" {...register("image" , {required:true})} />
                  
              </div>
            </div>
  
  
  
            <div className="flex items-center my-3">
              <div className="1/2">
                  <h1>Description </h1>
              </div>
              <div className="2/3 space-x-5 ml-14 ">
              <textarea className="textarea textarea-info pr-64  border-x-2 border-y-2 border-black"name="description" placeholder="Bio" {...register("description",{required:true})}></textarea>                
              
              </div>
            </div>
  
            <button  className="btn glass bg-blue-500 text-white mt-6 ml-56">
              <input type="submit" value="Submit now" />
            </button>
  
                  
  
  
          </div>
          </form>
        
      </div>
    );
};

export default Edit;