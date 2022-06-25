import Header from "./Header"
import Sidebar from "./Sidebar"
import TopCommunities from "./TopCommunities"

const Layout = ({ children }:any) => {
  return (
    <div>
        <Header />
        <div className=" relative min-h-screen">
          <Sidebar />
          {children}
          <TopCommunities />
          
        {/* <CreatePost /> */}
        </div>

    </div>
  )
}

export default Layout