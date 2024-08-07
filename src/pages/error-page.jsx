import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex h-screen justify-center p-8 text-center ">
      <motion.div
        initial={{ opacity: 4, scale: 0.5 }}
        animate={{ opacity: 3, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="https://th.bing.com/th/id/R.1be506c7e8d8286f52919fb004da6e80?rik=%2bmG6O2TnJSnpsg&riu=http%3a%2f%2fmobilepetcremation.com.sg%2fimages%2f404.jpg&ehk=n36NoiJ%2fCJRpMhIOSfQWbpFbZXsUGakwMksoQNtqdXs%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <a href="http://localhost:5174/">
          <button className="bg-blue-500 rounded-full p-5 w-[30%] h-20 text-white font-bold text-xl hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 mt-4">
            Go Back FRIEND, Go Back
          </button>
        </a>
      </motion.div>
      
    </div>
  );
};
