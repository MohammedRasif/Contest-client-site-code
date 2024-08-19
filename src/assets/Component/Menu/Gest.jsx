import { GrUserAdmin } from 'react-icons/gr'

import { useState } from 'react'
import toast from 'react-hot-toast'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import useRole from '../../hooks/useRole'
import MenuItem from './Menu'
import HostRequestModal from '../Modal/HostRequestModal'
import { FaPager } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth'
const GuestMenu = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const [role] = useRole()
  const [isModalOpen , setIsModalOpen] = useState(false)
  const closeModal = () =>{
    setIsModalOpen(false)
  }
  // const modalHandler = async ()=>{
  //   console.log('i want to be a host')
  //   try {
  //     const currentUser ={
  //       email:user?.email,
  //       role:'guest',
  //       status:'Requested'
  //     }
  //     const {data} = await axiosSecure.put(`/user`,currentUser)
  //     console.log(data)
  //     if(data.modifiedCount > 0){
  //       toast.success('Success..! please wait for admin confirmation')
  //     } else{
  //       toast.success('please..! wait for admin approval')
  //     }
  //   }catch(error){
  //     console.log(error)
  //     toast.error(error.message )
  //   }finally{
  //     closeModal()
  //   }
  // }
  return (
    <>
      <MenuItem
        icon={FaPager}
        label='Participated-Contest'
        address='/dashboard/participatedContest'
      />
      <MenuItem
        icon={FaPager}
        label='Winning-Contest'
        address='/dashboard/winningContest'
      />

      
       {/* <HostRequestModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} ></HostRequestModal> */}
    </>
  )
}

export default GuestMenu