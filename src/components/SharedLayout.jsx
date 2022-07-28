import { Outlet } from "react-router-dom"
import AppBar from "./AppBar/AppBar";

const SharedLayout = () => {
    return <>
        <AppBar />
        <Outlet/>
    </>
}

export default SharedLayout;