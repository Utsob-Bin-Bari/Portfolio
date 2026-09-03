import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../Context";
import axios from "axios";
import "./CP.css";

const CP = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [codeforcesRating, setCodeforcesRating] = useState(null);
  const codechefRating = 1655;

  useEffect(() => {
    axios.get("https://codeforces.com/api/user.info?handles=Godspeed_17")
      .then(response => {
        if (response.data.result && response.data.result.length > 0) {
          setCodeforcesRating(response.data.result[0].maxRating);
        } else {
          setCodeforcesRating("N/A");
        }
      })
      .catch(error => {
        console.error("Error fetching Codeforces rating:", error);
        setCodeforcesRating("Error");
      });
  }, []);

  return (
    <div className="cp" id="CP">
      <div className="cp-achievement">
        <div className="cp-circle" style={{color: darkMode ? 'var(--orange)' : ''}}>3+</div>
        <span style={{color: darkMode ? 'white' : ''}}>Years: 2022-2024</span>
        <span className="cp-weight">Competitive</span>
        <span className="cp-weight">Programming</span>
      </div>
      <div className="cp-achievement">
        <div className="cp-circle" style={{color: darkMode ? 'var(--orange)' : ''}}>{codechefRating}</div>
        <span style={{color: darkMode ? 'white' : ''}}>CodeChef</span>
        <span className="cp-rank">Country Rank 533</span>
        <a href="https://www.codechef.com/users/godspeed_17" target="_blank" rel="noopener noreferrer">
          <button className="button s-button">Check</button>
        </a>
      </div>
      <div className="cp-achievement">
        <div className="cp-circle" style={{color: darkMode ? 'var(--orange)' : ''}}>{codeforcesRating}</div>
        <span style={{color: darkMode ? 'white' : ''}}>Codeforces</span>
        <span className="cp-rank">Country Rank 858</span>
        <a href="https://codeforces.com/profile/Godspeed_17" target="_blank" rel="noopener noreferrer">
          <button className="button s-button">Check</button>
        </a>
      </div>
      <div className="cp-achievement">
        <div className="cp-circle" style={{color: darkMode ? 'var(--orange)' : ''}}>200+</div>
        <span style={{color: darkMode ? 'white' : ''}}>LeetCode</span>
        <span className="cp-rank">750+ All Platforms</span>
        <a href="https://leetcode.com/u/Godspeed_17/" target="_blank" rel="noopener noreferrer">
          <button className="button s-button">Check</button>
        </a>
      </div>
    </div>
  );
};

export default CP;
