import Approach from "@/components/Approach";
import Clients from "@/components/Clients";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNavbar";

import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
<main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
<div className="max-w-7xl w-full">

    <FloatingNav navItems={navItems}/>
    <Hero/>
    <Jobs/>
    {/* <Grid/> */}
    <RecentProjects/>
    <Clients/>
 
    <Approach/>
    <Footer/>


  </div>
 </main>
  )
}
export default Home;