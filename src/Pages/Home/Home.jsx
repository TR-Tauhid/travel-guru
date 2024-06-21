import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div className="bg-rectangle1 h-[100vh] bg-cover bg-right bg-no-repeat">
            <div className="bg-[#000000B3]  h-[100%] ">
                <div className="w-11/12 lg:w-10/12 mx-auto md:pt-10">
                    <Navbar></Navbar>
                </div>

            </div>
        </div>
    );
};

export default Home;