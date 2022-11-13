import Sidebar from "../components/sidebar/sidebar";

export default function Layout({ children }) {
    return (
        <div className="main-body">
            <Sidebar />
            <div className="screen-container">
                {children}
            </div>
        </div>
    )
}