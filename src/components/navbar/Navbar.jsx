import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://app.rezi.ai/s/D5QQCA8l9IS1oqn5VRne">
            <img src="/rezi.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abdulrehman0219">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/abdulrxz">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
