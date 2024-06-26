import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Login = () => {
    return (
        <div className="bg-rectangle1 h-fit">
            <div className="bg-[#000000B3] pb-40">

                <div className="w-11/12 mx-auto pt-10">
                    <Navbar></Navbar>
                </div>

                <div className="bg-white mx-auto mt-10 w-11/12 lg:w-1/2 px-10 py-14 rounded-md">
                    <div className="">
                        <h1 className="font-montserrat-bold text-2xl text-black mb-5">Login</h1>
                        <div className="flex flex-col w-full mx-auto">
                            <input type="text" placeholder="Username or Email" className="input mb-10 rounded-none input-ghost border-t-0 border-r-0 border-l-0 text-black font-montserrat-medium bg-white border-b-2 border-[#C5C5C5] focus:text-black focus-within:outline-none w-full" />
                            <input type="text" placeholder="Password" className="input rounded-none input-ghost border-t-0 border-r-0 border-l-0 bg-white text-black font-montserrat-medium border-b-2 border-[#C5C5C5] focus:text-black focus-within:outline-none w-full" />
                        </div>

                        <div className="flex justify-between items-center mt-5">
                            <div className="font-avenir-medium text-base items-center justify-between flex gap-x-4 ">

                                <input type="checkbox" defaultChecked className="checkbox" /><p className=" text-black">Remember me</p>
                            </div>
                            <Link className="btn-link text-[#F9A51A] font-montserrat-medium ">Forgot Password</Link>
                        </div>

                        <div>
                            <Link><button className="btn btn-primary bg-[#F9A51A] w-full rounded-none font-medium text-black text-base mt-14 h-16 hover:bg-red-500 hover:scale-110">Login</button></Link>
                        </div>

                        <div className="text-black text-center mt-4">
                            <h5>Don&apos;t have an account? <Link className="btn-link text-[#F9A51A]">Create an account.</Link></h5>
                        </div>

                        <div className="flex justify-between items-center text-black w-4/5 mx-auto mt-9">
                            <div className="border-y-[1px] w-full h-0 border-[#ABABAB]"></div>
                            <div className="px-4">Or</div>
                            <div className="border-y-[1px] w-full h-0 border-[#ABABAB]"></div>
                        </div>

                        <div className="font-montserrat-medium space-y-4 mt-4 text-black">
                            <div className="rounded-full flex items-center border-2 border-[#ABABAB] ">
                                <img src="/public/icons/fb.png" alt="fbIcon" className="m-2 w-8 md:w-14 justify-start" />
                                <h2 className="mr-10 w-full text-sm md:text-base text-center">Continue With Facebook</h2>
                            </div>
                            <div className="rounded-full flex items-center border-2 border-[#ABABAB] ">
                                <img src="/public/icons/google.png" alt="googlePng" className="m-2 w-8 md:w-14 justify-start" />
                                <h2 className="mr-10 w-full text-sm md:text-base text-center">Continue with Google</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;