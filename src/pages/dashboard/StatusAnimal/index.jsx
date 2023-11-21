import { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { getStatuses } from "../../../services/animalStatus.services";
import StatusTable from "../../../components/statusTable/StatusTable";

function StatusAnimal() {
  const [reloadDataStatuses, setReloadDataStatuses] = useState(false);
  const [arrStatuses, setArrStatuses] = useState([]);

  useEffect(() => {
    const getAllStatuses = async () => {
      const { status } = await getStatuses();
      //statuses = statuses.sort((a, b) => a.username.localeCompare(b.username));
      //setArrUsers(users);
      setArrStatuses(status)
      console.log(status);
    };
    getAllStatuses();
  }, [reloadDataStatuses]);


  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
        <p className="text-base font-montserrat font-normal md:text-xl">
          Panel registro de estados
        </p>
      </div>
      <StatusTable arrStatuses={arrStatuses} setReloadDataStatuses={setReloadDataStatuses} />
    </DashboardLayout>
  );
}

export default StatusAnimal;
