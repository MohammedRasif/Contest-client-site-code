import MenuItem from "./Menu";
import { FaPager } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { GoFileSubmodule } from "react-icons/go";
const HostMenu = () => {
  return (
    <>
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
    </>
  );
};

export default HostMenu;
