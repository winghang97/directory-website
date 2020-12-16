import React, { Component, useState } from "react";
import paths from "../../config/paths";
import Image from "next/image";
import { newReleases, top, platform, genre } from "./sidebarData";

import Link from "next/link";

import SVGInline from "react-svg-inline";

import "./Sidebar.module.css";

function Sidebar() {
  const [opened, setOpened] = useState(false);
  const [openedList, setOpenedList] = useState({});

  const renderItemContent = (item) => {
    return (
      <>
        {item.image && (
          <Image
            className="sidebar-image"
            src={item.image}
            alt={item.title}
            title={item.title}
            width={32}
            height={32}
          />
        )}
        {item.icon && <span className="sidebar-svg">{item.icon}</span>}
        <span className="sidebar-label">{item.title}</span>
      </>
    );
  };

  const renderItem = (item, idx) => {
    return (
      <li key={idx} className="sidebar-item">
        <a href={item.path}>{renderItemContent(item)}</a>
      </li>
    );
  };

  const renderMenuList = (title, items, headerPath) => {
    const HeaderTag = headerPath ? Link : "span";
    if (items !== undefined && items.length === 0) {
      return null;
    }
    return (
      <div className="sidebar_menu">
        <HeaderTag href={headerPath} className="sidebar-title">
          {title}
        </HeaderTag>
        <ul className="nav-menu">{items && items.map(renderItem)}</ul>
      </div>
    );
  };

  const renderHome = () => {
    return renderMenuList("Home", undefined, paths.index);
  };

  const renderReview = () => {
    return renderMenuList("Review", undefined, paths.reviews);
  };

  const renderNewReleases = () => {
    return renderMenuList("New Releases", newReleases);
  };

  const renderTop = () => {
    return renderMenuList("Top", top);
  };

  const renderAllGames = () => {
    return renderMenuList("All Games", undefined, paths.games);
  };

  const renderPlatform = () => {
    return renderMenuList("Platforms", platform);
  };

  const renderGenre = () => {
    return renderMenuList("Genres", genre);
  };

  return (
    <nav className="">
      {renderHome()}
      {renderReview()}
      {renderNewReleases()}
      {renderTop()}
      {renderAllGames()}
      {renderPlatform()}
      {renderGenre()}
    </nav>
  );
}

export default Sidebar;
