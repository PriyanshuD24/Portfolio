
import MyInfo from "@/components/MyInfo";
import Navmenu from "@/components/Navmenu";




type Props = {
  children: React.ReactNode;
};

const MainLayout = async({ children }: Props) => {
  const navItems = [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Resume",
      link: "/resume",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="container w-full flex items-start text-gray-200 mx-auto min-h-[50svh] gap-8  ">
      

      <MyInfo/>

      <div className="  flex-1 min-w-0  bg-[#1E1E1F] rounded-xl shadow border border-gray-100/10  relative ">
        <Navmenu navItems={navItems} />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
