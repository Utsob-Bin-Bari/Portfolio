import React, { useContext } from "react";
import "./DSA.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Card from "../Card/Card";

const topics = [
  {
    heading: "Data Structure",
    detail:
      "Dynamic Array, Vector, Map, Set, Stack, Queue, Hash Table, Heap, Linked List, Adjacency List, Tree, Graph",
    from: { x: 170, y: 40 },
  },
  {
    heading: "Sorting Algorithms",
    detail:
      "Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Bucket Sort & Intro Sort",
    from: { x: -170, y: 40 },
  },
  {
    heading: "Other Algorithms",
    detail:
      "Recursion, Backtracking, Dynamic Programming, DFS, BFS, Tree Traversal, Two Pointer, Sliding Window, Greedy, Bit Manipulation, Dijkstra",
    from: { x: 170, y: 40 },
  },
  {
    heading: "Searching Algorithms",
    detail: "Linear Search, Binary Search & Interpolation Search",
    from: { x: -170, y: 40 },
  },
];

const DSA = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="dsa" id="DSA">
      <div className="design">
        <span style={{ color: darkMode ? "white" : "" }}>Highly efficient in</span>
        <span>Data Structure & Algorithms</span>
        <span>
          Three years of competitive programming built a high proficiency in data structures
          and algorithms — 200+ problems solved on LeetCode and 750+ across all platforms
          combined. That grounding is what lets me reach for a cheaper alternative when a
          screen drops frames or a list re-renders more than it needs to.
        </span>
        <a href="https://leetcode.com/u/Godspeed_17/" target="_blank" rel="noopener noreferrer">
          <button className="button s-button">LeetCode</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.heading}
            initial={{ opacity: 0, ...topic.from }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ margin: "-60px" }}
            transition={{ type: "spring", stiffness: 42, damping: 13, delay: index * 0.12 }}
          >
            <Card heading={topic.heading} detail={topic.detail} service={false} />
          </motion.div>
        ))}

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default DSA;
