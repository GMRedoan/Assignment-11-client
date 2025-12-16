import { use } from "react";
import { AuthContext } from "../../Authentication/AuthContex";
import AdminAllRequest from "./Admin/AdminAllRequest";
import VolunteerAllRequest from "./Volunteer/VolunteerAllRequest";


const AllRequest = () => {
  const { userInfo } = use(AuthContext)
  return (
    <div>
      {
        userInfo?.role == 'admin' && <AdminAllRequest></AdminAllRequest>
      }
      {
        userInfo?.role == 'volunteer' && <VolunteerAllRequest></VolunteerAllRequest>
      }

    </div>
  );
};

export default AllRequest;
