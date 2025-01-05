import Image from "next/image";
import Header from "./Header";
import Head from "next/head";
import Profile from "./Profile";

export default function Home() {
  return (
   <div className="pageBody xsm:px-3 xl:px-10 md:px-4">
    <Header/>
    <Profile/>
    </div>
  );
}
