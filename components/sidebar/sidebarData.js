import paths from "../../config/paths";

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

import actionImage from "./assets/action.png";
import adventureImage from "./assets/adventure.png";
import puzzleImage from "./assets/puzzle.png";
import racingImage from "./assets/racing.png";
import rpgImage from "./assets/rpg.png";
import shooterImage from "./assets/shooter.png";
import sportsImage from "./assets/sports.png";
import strategyImage from "./assets/strategy.png";

export const newReleases = [
  {
    title: "Last 30 days",
    icon: <AiIcons.AiFillStar />,
    path: "/last-30-days",
  },
  {
    title: "this week",
    icon: <AiIcons.AiFillFire />,
    path: "/this-week",
  },
  {
    title: "next week",
    icon: <AiIcons.AiFillFastForward />,
    path: "/next-week",
  },
];

export const top = [
  {
    title: "Best of the year",
    icon: <AiIcons.AiFillTrophy />,
    path: "/best-of-the-year",
  },
  {
    title: "Popular in 2019",
    icon: <RiIcons.RiBarChart2Fill />,
    path: "/popular-in-2019",
  },
  {
    title: "All time top 250",
    icon: <FaIcons.FaCrown />,
    path: "/all-time-top-250",
  },
];

export const platform = [
  {
    title: "PC",
    icon: <AiIcons.AiFillWindows />,
    path: "/games/pc",
  },
  {
    title: "Playstation",
    icon: <FaIcons.FaPlaystation />,
    path: "/games/playstation",
  },
  {
    title: "Xbox One",
    icon: <FaIcons.FaXbox />,
    path: "/games/xbox-one",
  },
  {
    title: "Nintendo Switch",
    icon: <SiIcons.SiNintendoswitch />,
    path: "/games/nintendo-switch",
  },
  {
    title: "iOS",
    icon: <FaIcons.FaApple />,
    path: "/games/ios",
  },
  {
    title: "Andriod",
    icon: <AiIcons.AiFillAndroid />,
    path: "/games/andriod",
  },
];

export const genre = [
  {
    title: "Action",
    image: actionImage,
    path: "/games/action",
  },
  {
    title: "Adventure",
    image: adventureImage,
    path: "/games/adventure",
  },
  {
    title: "Puzzle",
    image: puzzleImage,
    path: "/games/puzzle",
  },
  {
    title: "Racing",
    image: racingImage,
    path: "/games/racing",
  },
  {
    title: "RPG",
    image: rpgImage,
    path: "/games/rpg",
  },
  {
    title: "Shooter",
    image: shooterImage,
    path: "/games/shooter",
  },
  {
    title: "Sports",
    image: sportsImage,
    path: "/games/sports",
  },
  {
    title: "Strategy",
    image: strategyImage,
    path: "/games/strategy",
  },
];
