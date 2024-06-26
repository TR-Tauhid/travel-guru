import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {

    const destination = useLoaderData();
    const [displayPlace, setDisplayPlace] = useState(null);
    const [activePlace, setActivePlace] = useState(null);

    useEffect(() => {

        if (destination && destination.length > 0 && !displayPlace) {
            setDisplayPlace(destination[0]);
            setActivePlace(destination[0].id);
        }

    }, [displayPlace, destination])


    const handleSetDisplayPlace = (place) => {
        setDisplayPlace(place);
        setActivePlace(place.id);
    }

    if (!displayPlace) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="bg-rectangle1 h-[60rem] bg-fixed bg-cover bg-right bg-no-repeat">
            <div className="bg-[#000000B3] h-[60rem]">
                <div className="w-11/12 lg:w-10/12 mx-auto md:pt-10">
                    <Navbar></Navbar>
                </div>
                {/* 
                <div>
                    <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed-googlemap.com</a></div><style>.mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}</style></div>
                </div> 
                */}

                <div className="block">
                    <div className="carousel rounded-box w-full mt-20 md:mt-28  ">


                        <div className="carousel-item block md:w-2/6 pl-6 md:pl-32 pr-12 min-h-96 ">

                            <h1 className="uppercase pt-4 md:pt-0 font-babesNeue-bold min-h-min max-w-64 md:max-w-max text-3xl leading-tight md:text-[4rem]">
                                {displayPlace.name}
                            </h1>

                            <div>
                                {
                                    displayPlace?.description.length > 300 ?
                                        <p className="w-52 md:w-auto py-4"><Link to="/booking">{displayPlace.description.slice(0, 300)} ...</Link></p>
                                        :
                                        <p className="w-52 md:w-auto py-4">{displayPlace.description}</p>
                                }
                            </div>

                            <Link to={`/booking/${displayPlace.id}`}>
                                <button className="btn flex justify-between items-center w-32 md:w-36 font-montserrat-medium  btn-primary bg-[#F9A51A] mt-6 hover:scale-125 hover:bg-[#F9A51A] hover:border-white hover:border-4">
                                    Booking <img src="/public/icons/arrowRight.svg"></img>
                                </button>
                            </Link>
                        </div>

                        {

                            destination.map((place, key) => {

                                return (

                                    <div id={place.id} key={key} onClick={() => handleSetDisplayPlace(place)} className={`carousel-item mx-5 min-h-[27rem] ${activePlace === place.id && `border-[#FBBC04] border-4`} relative rounded-3xl w-80`}>

                                        <div className={`w-full`}>
                                            <div className={`relative h-full `}
                                                style={{ backgroundImage: `url(${place.imageBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                            >

                                                <h1 className="absolute bottom-0 w-full mb-8 font-babesNeue-regular ml-5 text-4xl">
                                                    {place.name}
                                                </h1>

                                            </div>
                                        </div>

                                    </div>
                                );
                            })
                        }

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;