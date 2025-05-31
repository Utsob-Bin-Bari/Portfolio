import React, { useContext, useState, useEffect } from "react";
import "./DSA.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Card from "../Card/Card";

const DSA = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dsa" id="DSA">
      <div className="design">
        <span style={{ color: darkMode ? "white" : "" }}>Highly efficient in</span>
        <span>Data Structure & Algorithms</span>
        <spane>
          With over two years of experience in competitive programming, I have developed a high proficiency
          in data structures and algorithms. This deep understanding allows me to provide alternative
          & more efficient solutions to optimize software memory consumption and reduce runtime.
        </spane>
        <a href="https://leetcode.com/u/Godspeed_17/" target="_blank" rel="noopener noreferrer">
          <button className="button s-button">LeetCode</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        {isMobile ? (
          <>
            <div>
              <Card heading={"Data Structure"} detail={"Array, Vector, Map, Set, Stack, Queue, Hash Table, Linked list, Tree, Graph, Adjacency list, Heap E.T.C"} service={false} />
            </div>
            <div>
              <Card heading={"Sorting Algorithms"} detail={"Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Bucket Sort & Intro sort."} service={false} />
            </div>
            <div>
              <Card heading={"Other Algorithms"} detail={"Recursion, Backtracking, DFS, BFS, Tree Traversal, Two pointer, Sliding Window, Greedy, Bit manipulation, Interval, Dijkstra, Knapsack E.T.C"} service={false} />
            </div>
            <div>
              <Card heading={"Searching Algorithms"} detail={"Linear Search, Binary Search & Interpolation Search"} service={false} />
            </div>
          </>
        ) : (
          <>
            <motion.div initial={{ top: "11.5rem", left: "18rem" }} whileInView={{ top: "11.5rem", left: "14.5rem" }} transition={transition}>
              <Card heading={"Data Structure"} detail={"Array, Vector, Map, Set, Stack, Queue, Hash Table, Linked list, Tree, Graph, Adjacency list, Heap E.T.C"} service={false} />
            </motion.div>
            <motion.div initial={{ left: "-10rem", top: "11.5rem" }} whileInView={{ left: "-.5rem", top: "11.5rem" }} transition={transition}>
              <Card heading={"Sorting Algorithms"} detail={"Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Bucket Sort & Intro sort."} service={false} />
            </motion.div>
            <motion.div initial={{ top: "26rem", left: "6rem" }} whileInView={{ top: "19rem", left: "6rem" }} transition={transition}>
              <Card heading={"Other Algorithms"} detail={"Recursion, Backtracking, DFS, BFS, Tree Traversal, Two pointer, Sliding Window, Greedy, Bit manipulation, Interval, Dijkstra, Knapsack E.T.C"} service={false} />
            </motion.div>
            <motion.div initial={{ left: "10rem", top: "-4rem" }} whileInView={{ left: "10rem", top: "5rem" }} transition={transition}>
              <Card heading={"Searching Algorithms"} detail={"Linear Search, Binary Search & Interpolation Search"} service={false} />
            </motion.div>
          </>
        )}

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default DSA;

