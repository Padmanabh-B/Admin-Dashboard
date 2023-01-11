import Sidebar from "./Sidebar";

export default function Layout ({children}) {
  return (
    <>
      <div className="flex flex-row justify-start h-screen">
        <Sidebar />
        <div className="flex-1 p-4 text-white bg-primary ">
          {children}
        </div>
      </div>
    </>
  );
};

