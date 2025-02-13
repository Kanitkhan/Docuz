import Header from "./Header";
import Profile from "./Profile";
import { SessionProvider } from "next-auth/react"

export default function Home({
}) {
  return (
   <div className="pageBody xsm:px-3 xl:px-10 md:px-4">
    <Header/>
    <Profile/>
    </div>
  );
}
