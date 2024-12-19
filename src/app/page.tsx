import Mhome from "@/components/main/mhome";
import NavBar from "@/components/nav/nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Mhome />
      <div>Main Page</div>
    </>
  );
}
