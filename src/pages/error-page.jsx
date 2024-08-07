import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center"
      >
        <img
          src="https://th.bing.com/th/id/R.1be506c7e8d8286f52919fb004da6e80?rik=%2bmG6O2TnJSnpsg&riu=http%3a%2f%2fmobilepetcremation.com.sg%2fimages%2f404.jpg&ehk=n36NoiJ%2fCJRpMhIOSfQWbpFbZXsUGakwMksoQNtqdXs%3d&risl=&pid=ImgRaw&r=0"
          alt="404 Error"
          className="w-full max-w-md"
        />
        <Link to="/">
          <button className="bg-blue-500 rounded-full p-4 sm:p-5 w-full max-w-xs h-12 sm:h-16 text-white font-bold text-lg sm:text-xl hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 mt-6">
            Go Back FRIEND, Go Back
          </button>
        </Link>
      </motion.div>
    </div>
  );
};
