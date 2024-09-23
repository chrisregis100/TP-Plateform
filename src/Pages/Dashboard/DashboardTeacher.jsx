import { Outlet } from "react-router-dom";
import Menu from "../../components/layout/dashboard/Menu";

function DashboardTeacher() {
  return (
    <section className=" flex w-full gap-1">
        <Menu />
      <div className="flex flex-col gap-2">
        <div className="text-white bg-blue-950 rounded-bl-xl h-24 px-2 flex flex-col justify-center text-md w-full ">
          <h1 className="text-2xl font-bold">
            Bienvenue sur votre dashboard M.X
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nobis optio officia fugit cupiditate quae expedita!.
          </p>
        </div>
      <div className="mx-4">
        <Outlet />
      </div>
      </div>
    </section>
  );
}

export default DashboardTeacher;
