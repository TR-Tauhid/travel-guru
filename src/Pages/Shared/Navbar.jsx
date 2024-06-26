import { useState } from "react";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menuStatus, setMenuStatus] = useState(false);

    const toggleMenu = () => {
        setMenuStatus(!menuStatus);
    }

    return (
        <div className="min-[930px]:flex justify-between items-center ">


            <div>
                <div className="text-3xl flex py-5">

                    <div className="block relative md:hidden">

                        {
                            menuStatus ?
                                <ImCross onClick={toggleMenu} ></ImCross>
                                :
                                <TiThMenu onClick={toggleMenu} ></TiThMenu>
                        }

                        {
                            menuStatus &&

                            <div className="absolute top-10 rounded-md text-base bg-slate-600 backdrop-blur-sm bg-opacity-50 text-center ">
                                <ul className=" py-1 space-y-2 text-center">
                                    <li className=" pb-2 px-2 w-full border-b">

                                        <a href="#">News</a>
                                    </li >

                                    <li className=" pb-2 px-2 w-full border-b">
                                        <a href="#">Destination</a>

                                    </li >

                                    <li className=" pb-2 px-2 w-full border-b">
                                        <a href="#">Blog</a>

                                    </li>

                                    <li className=" pb-2 px-2 w-full ">
                                        <a href="#">Contact</a>

                                    </li>
                                </ul>
                            </div>
                        }
                    </div>

                    <img className="mx-auto min-w-28 min-[930px]:mr-3" src="/icons/travelGuru.svg" alt="" />

                </div>
            </div>

            <div className="flex grow lg:max-w-[450px] lg:mx-5">

                <label className="input input-ghost  bg-[#b8beed44] focus-within:bg-[#b9beed1b] focus-within:outline-white border-white border-2 flex items-center gap-2 mx-auto w-full">

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" className="w-5 h-5 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </button>

                    <input type="text" className="grow placeholder:text-white custom-border-focus text-white" placeholder="Search Your Destination..." />
                </label>
            </div>

            <div className="hidden md:flex grow py-4 md:min-w-96 lg:max-w-md ">
                <ul className="flex justify-around grow font-montserrat-medium text-base hover:cursor-pointer">
                    <li>
                        <a>News</a>
                    </li>
                    <li>
                        <a>Destination</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>

            <div className="font-montserrat-semibold text-center text-base text-black bg-[#F9A51A] mt-5 md:mt-0 py-3 px-8 rounded-md">
                <button><Link to="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;