// import React from 'react'
// import { Link, useLocation } from 'react-router'
// import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon } from 'lucide-react'
// import { UserButton } from '@clerk/clerk-react';

// function Navbar() {

//     const location = useLocation();

//     console.log(location);

//     const isActive = (path) => location.pathname === path;


//     return <nav className='bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg'>
//         <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
//             {/* LOGO */}
//             <Link to="/" className="group flex items-center gap-3 hover:scale-105 transition-transform duration-200">
//                 <div className='size-10 rounded-xl bg-linear-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
//                     <SparklesIcon className="size-6 text-white" />
//                 </div>

//                 <div className='flex flex-col'>
//                     <span className='font-black text-xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider'>
//                         Skill IQ
//                     </span>
//                     <span className='text-xs text-base-content/60 font-medium -mt-1'>Code Together</span>
//                 </div>
//             </Link>

//             <div className="flex items-center gap-1">
//                 {/* PROBLEMS PAGE LINK */}
//                 <Link
//                     to={"/problems"}
//                     className={`px-4 py-2 rounded-lg transition-all duration-200 
//               ${isActive("/problems")
//                             ? "bg-primary text-primary-content"
//                             : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
//                         }

//               `}
//                 >
//                     <div className="flex items-center gap-x-2.5">
//                         <BookOpenIcon className="size-4" />
//                         <span className="font-medium hidden sm:inline">Problems</span>
//                     </div>
//                 </Link>

//                 {/* DASHBORD PAGE LINK */}
//                 <Link
//                     to={"/dashboard"}
//                     className={`px-4 py-2.5 rounded-lg transition-all duration-200 ml-1 lg:ml-3
//               ${isActive("/dashboard")
//                             ? "bg-primary text-primary-content"
//                             : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
//                         }

//               `}
//                 >
//                     <div className="flex items-center gap-x-2.5">
//                         <LayoutDashboardIcon className="size-4" />
//                         <span className="font-medium hidden sm:inline">Dashbord</span>
//                     </div>
//                 </Link>

//                 <div className="ml-1 lg:ml-3 mt-2">
//                     <UserButton />
//                 </div>
//             </div>

//         </div>
//     </nav>

// }

// export default Navbar


import React from 'react'
import { Link, useLocation } from 'react-router'
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon, PaletteIcon, SquareTerminalIcon, LibraryIcon, BookTextIcon, Grid2X2Icon } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react';

function Navbar() {

    const location = useLocation();

    const isActive = (path) => location.pathname === path;


    const themes = [
        "forest",
        "dark",
        "dracula",
        "night",
        "black",
        "luxury",
        "coffee",

        "forestpro",
        "codedark",
        "neodark",
        "hacker",
        "midnightdev",
        "oceandark",
        "crimsondev",
        "obsidian",
        "graphite",
        "auroradark"
    ];
    const changeTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
    }

    return (
        <nav className='bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg'>

            <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>

                {/* LOGO */}
                <Link to="/" className="group flex items-center gap-3 hover:scale-105 transition-transform duration-200">

                    <div className='size-10 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
                        <SquareTerminalIcon className="size-6 text-white" />
                    </div>

                    <div className='flex flex-col'>
                        <span className='font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider'>
                            Skill IQ
                        </span>
                        <span className='text-xs text-base-content/60 font-medium -mt-1'>Code Together</span>
                    </div>

                </Link>


                {/* RIGHT NAV ITEMS */}
                <div className="flex items-center gap-2">

                    {/* PROBLEMS */}
                    <Link
                        to={"/problems"}
                        className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200
                        ${isActive("/problems")
                                ? "bg-primary text-primary-content shadow"
                                : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}
                        `}
                    >
                        <BookTextIcon className="size-4" />
                        <span className="font-medium hidden sm:inline">Problems</span>
                    </Link>


                    {/* DASHBOARD */}
                    <Link
                        to={"/dashboard"}
                        className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200
                        ${isActive("/dashboard")
                                ? "bg-primary text-primary-content shadow"
                                : "hover:bg-base-200 text-base-content/70 hover:text-base-content"}
                        `}
                    >
                        <Grid2X2Icon className="size-4" />
                        <span className="font-medium hidden sm:inline">Dashboard</span>
                    </Link>



                    {/* THEME BUTTON */}
                    <div className="dropdown dropdown-end">

                        <label
                            tabIndex={0}
                            className="px-4 py-2.5 rounded-lg flex items-center justify-center cursor-pointer
                            hover:bg-base-200 transition-all duration-200"
                        >
                            <PaletteIcon className="size-5 text-base-content/80" />
                        </label>


                        {/* DROPDOWN */}
                        <ul
                            tabIndex={0}
                            className="dropdown-content mt-3 p-3 shadow-2xl
                            bg-base-100/98 backdrop-blur-xl
                            rounded-2xl w-56 max-h-96 overflow-y-auto
                            border border-base-300 z-[100]"
                        >

                            {themes.map((theme) => (

                                <li key={theme} className="mb-1 last:mb-0">

                                    <button
                                        onClick={() => changeTheme(theme)}
                                        className="w-full flex items-center justify-between
                                        px-3 py-2 rounded-lg
                                        hover:bg-base-200 transition-all"
                                    >

                                        <span className="capitalize font-medium">
                                            {theme}
                                        </span>

                                        <div
                                            className="w-5 h-5 rounded-full border border-base-300 shadow"
                                            data-theme={theme}
                                        />

                                    </button>

                                </li>

                            ))}

                        </ul>

                    </div>



                    {/* USER */}
                    <div className="flex items-center ml-2">
                        <UserButton appearance={{
                            variables: {
                                colorPrimary: "#22c55e",
                                colorBackground: "#020617",
                                colorInputBackground: "#1e293b",
                                colorText: "#f8fafc",
                                colorTextSecondary: "#94a3b8",
                                colorNeutral: "#f8fafc",
                                colorInputText: "#f8fafc",
                                borderRadius: "12px",
                            },
                            elements: {
                                 avatarBox: "ring-2 ring-primary/30 hover:ring-primary transition",
                            }
                        }}

                        />
                    </div>

                </div>

            </div>

        </nav>
    )

}

export default Navbar