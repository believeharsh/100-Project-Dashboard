import { FaLinkedin, FaGithub} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <header className="flex fixed flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-2 z-10  bg-slate-900">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
         
          <div className="flex items-center justify-between">
          <div
            className="dark:active:bg-blue-800 dark:hover:bg-slate-800 rounded-full hover:bg-gray-300 active:bg-blue-700 p-1 mx-1"
            id="menuButton "
          >
            <IoMenu className=" text-2xl text-black dark:text-white " />
          </div>
            <div
              className="flex-none text-sm  dark:text-white bg-slate-800 border-slate-700 border-[0.5px] px-1 py-1 rounded-xl"
              
            >
              100-Projects-DashBoard By HarshDahiya✨
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10"
                data-hs-collapse="#navbar-with-collapse"
                aria-controls="navbar-with-collapse"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-with-collapse"
            className="hidden transition-all duration-[0.1ms] overflow-hidden basis-full grow sm:block"
          >
            <div className="flex flex-col gap-4 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a href="https://www.instagram.com/bontinue_/" target="_blank">
                <IoLogoInstagram className="text-black dark:text-white text-2xl font-bold " />
              </a>
              <a href="https://github.com/believeharsh" target="_blank">
                <FaGithub className="text-black dark:text-white text-2xl font-bold " />
              </a>
              <a
                href="https://www.linkedin.com/in/believeharsh11/"
                target="_blank"
              >
                <FaLinkedin
                  className="text-black dark:text-white text-2xl font-bold 
      "
                />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
