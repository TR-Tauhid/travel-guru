import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Booking = () => {
    const { id } = useParams();
    const destination = useLoaderData();
    const place = destination.find(place => place.id == id)

    return (
        <div className="bg-rectangle1 bg-fixed bg-cover bg-no-repeat ">
            <div className="bg-[#000000B3] pb-40">

                <div className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </div>


                <div className="w-11/12 mx-auto block lg:flex  justify-between gap-x-10 mt-32">
                    <div>
                        {
                            <div className="text-center lg:text-left">

                                <h1 className="mb-10 uppercase font-babesNeue-regular leading-6 text-4xl min-[500px]:text-6xl md:text-8xl">
                                    {place.name}
                                </h1>

                                <div className="lg:max-w-xl font-montserrat-regular text-sm md:text-base leading-6">
                                    {
                                        <p className="w-full py-4 md:py-8 px-3 md:px-5 lg:px-0">{place.description}</p>
                                    }
                                </div>

                            </div>
                        }
                    </div>

                    <div>
                        <div className="bg-white rounded-xl px-6 py-8">
                            <div>
                                <form action="#">
                                    <h1 className="font-montserrat-medium text-[#818181] text-base">
                                        Origin
                                    </h1>

                                    <input className="placeholder:text-black font-bold placeholder:font-bold placeholder:text-base bg-[#F2F2F2] text-black w-full p-5 rounded-xl mt-3 mb-5 focus-within:outline-none focus:border-4 focus:border-[#F9A51A]" type="text" placeholder="Dhaka" />

                                    <h1 className="font-montserrat-medium text-[#818181] text-base">
                                        Destination
                                    </h1>

                                    <input className="placeholder:text-black font-bold placeholder:font-bold placeholder:text-base bg-[#F2F2F2] text-black w-full p-5 rounded-xl mt-3 mb-5 focus-within:outline-none focus:border-4 focus:border-[#F9A51A]" type="text" placeholder={place.name} />


                                    <div className="lg:flex gap-x-4 justify-between">
                                        <div>

                                            <h1 className="font-montserrat-medium text-[#818181] text-base">
                                                From
                                            </h1>

                                            <input className="uppercase placeholder:text-black font-bold placeholder:font-bold placeholder:text-base bg-[#F2F2F2] text-black w-full p-5 rounded-xl mt-3 mb-5 focus-within:outline-none focus:border-4 focus:border-[#F9A51A]" type="date" placeholder="01/09" defaultValue={`01/09`} />

                                        </div>

                                        <div>

                                            <h1 className="font-montserrat-medium text-[#818181] text-base">
                                                To
                                            </h1>

                                            <input className="uppercase placeholder:text-black font-bold placeholder:font-bold placeholder:text-base bg-[#F2F2F2] text-black w-full p-5 rounded-xl mt-3 mb-5 focus-within:outline-none focus:border-4 focus:border-[#F9A51A]" type="date" placeholder="12/09" />

                                        </div>
                                    </div>

                                    <Link to="#">
                                        <button className="btn h-20 font-montserrat-semibold mt-8 text-base btn-primary bg-[#F9A51A] w-full">Start Booking</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Booking;