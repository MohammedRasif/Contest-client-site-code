import { FaPager, FaUserCog } from "react-icons/fa";
import MenuItem from "./Menu";
import { MdManageAccounts } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { GoFileSubmodule } from "react-icons/go";

const AdminMenu = () => {
  return (
    <div>
      {/* host */}

      <MenuItem
        icon={FaPager}
        label="Add-Contest"
        address="/dashboard/addContest"
      />
      <MenuItem
        icon={IoCreateSharp}
        label="Create-Contest"
        address="/dashboard/CreateContest"
      />
      <MenuItem
        icon={GoFileSubmodule}
        label="Contest-Submit"
        address="/dashboard/contestSubmit"
      />

      <MenuItem
        icon={FaPager}
        label="Participated-Contest"
        address="/dashboard/participatedContest"
      />
      <MenuItem
        icon={FaPager}
        label="Winning-Contest"
        address="/dashboard/winningContest"
      />

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
