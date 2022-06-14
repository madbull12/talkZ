import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({ children }:any) => {
  return (
    <div>
        <Header />
        <div className=" relative min-h-screen">
          <Sidebar />
          {children}
          
        {/* <CreatePost /> */}
        </div>

    </div>
  )
}

export default Layout