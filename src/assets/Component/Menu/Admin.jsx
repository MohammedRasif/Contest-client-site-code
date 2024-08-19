import { FaPager, FaUserCog } from "react-icons/fa";
import MenuItem from "./Menu";
import { MdManageAccounts } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { GoFileSubmodule } from "react-icons/go";

const AdminMenu = () => {
  return (
    <div>
        

        

        {/* admin  */}
      <MenuItem
        icon={FaUserCog}
        label="Manage Users"
        address="/dashboard/manageUser"
      />
      <MenuItem
        icon={MdManageAccounts}
        label="Manage Contest"
        address="/dashboard/manageContest"
      />
    </div>
  );
};

export default AdminMenu;
