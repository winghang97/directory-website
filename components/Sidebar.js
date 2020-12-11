import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => (
  <nav>
    <div className="">
      <a href="/">Home</a>
    </div>
    <div className="">
      <a href="/">Reviews</a>
    </div>
    <div className="">
      <span>New Releases</span>
      <ul>
        <li>
          <a href="/">
            <div className="SVGInline">
              <span className="mr-3 border-white">
                <AiIcons.AiFillStar />
              </span>
              <span className="label">Last 30 days</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="SVGInline">
              <span className="mr-3">
                <AiIcons.AiFillFire />
              </span>
              <span className="label">This week</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="SVGInline">
              <span className="mr-3">
                <AiIcons.AiFillFastForward />
              </span>
              <span className="label">Next week</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="">
      <span>Top</span>
      <ul>
        <li>
          <a href="/">
            <div className="SVGInline">
              <span className="mr-3">
                <AiIcons.AiFillTrophy />
              </span>
              <span className="label">Best of the year</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="SVGInline">
              <span className="mr-3">
                <RiIcons.RiBarChart2Fill />
              </span>
              <span className="label">Popular 2019</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className="SVGInline">
              <span className="mr-3">
                <FaIcons.FaCrown />
              </span>
              <span className="label">All time top 250</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Sidebar;
