import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Netflix Clone",
    img: "netflix.png",
    desc: "Netflix clone frontend project to find the latest movies to watch to fight boredom with an exceptional graphical user interface.",
    link:"https://netflix-cloneaz.netlify.app/"
  },
  {
    id: 2,
    title: "E Shop",
    img: "eshop.png",
    desc: "An online ecommerce website to expand your services worldwide on the web with an interactive user interface providing the best user experience to establish excellent customer relations.",
    link:"https://eshopaz.netlify.app/"
  },
  {
    id: 3,
    title: "Gamehub",
    img: "gamehub.png",
    desc: "A project featuring the latest games to help you view and explore new features and updates about your favourite games with a modern design and features like searching, filtering/sorting and unlimited scrolling.",
    link:"https://game-hubaz.netlify.app/"
  },
  {
    id: 4,
    title: "RentUp",
    img: "rentup.png",
    desc: "A web platform to view the latest trends in the real estate market to find the property that best matches your needs with a contemporary layout to provide you with an incomparable experience.",
    link:"https://realestateaz.netlify.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="blank">
            <button > See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
