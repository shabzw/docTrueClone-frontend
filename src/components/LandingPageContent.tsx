interface ContentProps {
  docimg: string;
  health: string;
}

const LandingPageContent: React.FC<ContentProps> = ({ docimg, health }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-4 lg:p-20 justify-center items-center bg-gray-100 mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 p-4 justify-center lg:justify-start">
          <span className="relative text-lg border-2 border-blue-700 text-blue-600 px-4 py-2 ml-1">
            Welcome to DocTrue
            <span className="absolute top-[-8px] left-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[-50%] -translate-y-[-50%]"></span>
            <span className="absolute top-[-8px] right-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[50%] -translate-y-[-50%]"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[-50%] translate-y-[50%]"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[50%] translate-y-[50%]"></span>
          </span>
          <div className="text-3xl lg:text-6xl font-bold mt-4 lg:mt-6">
            <div className="flex items-center">
              An A-Z OPD{" "}
              <img
                className="hidden lg:block w-xs lg:w-auto lg:max-w-sm ml-3"
                src={health}
                alt="Health Icon"
              />
            </div>
            <span className="text-2xl lg:text-5xl font-bold text-blue-700 my-0">
              Automation Software
            </span>
            <br />
            for your Practice
          </div>
          <div className="text-md lg:text-lg mt-4 lg:mt-6 text-gray-600">
            Helping clinics & Hospital Staffs to Operate Efficiently
          </div>
          <div className="mt-6 lg:mt-10 font-semibold md:text-lg text-md">
            <button className="bg-blue-600 text-white px-4 lg:px-8 py-2 rounded-full hover:bg-blue-700 mr-2 lg:mr-4 transform transition duration-300 ease-in-out">
              Start Your Free Trial Today!
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-4 lg:px-7 mt-3 py-2 rounded-full hover:bg-blue-200 transform transition duration-300 ease-in-out">
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/3 p-4 flex justify-center">
          <img
            src={docimg}
            alt="Doctor Image"
            className="w-full lg:w-auto lg:max-w-lg mt-[-20px] ml-[-20px]"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPageContent;
