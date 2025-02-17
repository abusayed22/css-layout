import React from "react"
import Sidebar from "./Sidebar-1";
import Header from "../../../components/Header";

const Layout_1 = (props) => {
    return (
        <div>
            <Header />
        <div className="main">
            <Sidebar />
            <div className="body_part">
                {props.children}
            </div>
        </div>
        </div>
    )
};

export default Layout_1;
