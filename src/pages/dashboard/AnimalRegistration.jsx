import AnimalCards from "../../components/animalCard/AnimalCards";
import DashboardLayout from "../../layout/DashboardLayout";
import { PlusIcon } from "@heroicons/react/24/outline";

function AnimalRegistration() {
  return (
    <DashboardLayout>
      <div className="bg-[#1c2434] rounded-md text-white p-3 flex flex-row justify-between items-center px-10">
        <p className="text-base font-montserrat font-normal md:text-xl">
          Panel registro de animal
        </p>
        <div
          className="border rounded p-1 hover:bg-primary hover:text-white cursor-pointer"
          onClick={() => {
            console.log("hola");
          }}
        >
          <PlusIcon className="h-5 w-5" />
        </div>
      </div>
      <AnimalCards />
    </DashboardLayout>
  );
}

export default AnimalRegistration;
