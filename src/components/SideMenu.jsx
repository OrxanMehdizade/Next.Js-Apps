import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, children, isActive }) => (
    <Link href={href}>
        <span
            className={`block p-2 rounded transition duration-300 ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-700 text-white"}`}
        >
            {children}
        </span>
    </Link>
);

const SideMenuBar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-1/4 bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center border-b-2 border-gray-700 pb-2">
                Admin
            </h2>
            <ul className="space-y-4">
                <li>
                    <NavItem href="/admin/courses" isActive={pathname === "/admin/courses"}>
                        Courses
                    </NavItem>
                </li>
                <li>
                    <NavItem href="/admin/blogs" isActive={pathname === "/admin/blogs"}>
                        Blogs
                    </NavItem>
                </li>
                <li>
                    <NavItem href="/admin/profile" isActive={pathname === "/admin/profile"}>
                        Profile
                    </NavItem>
                </li>
            </ul>
        </aside>
    );
};

export default SideMenuBar;
