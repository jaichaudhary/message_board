import React, { useState } from "react";
import "./Navbar.css";
import { MdAmpStories } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";
import { TiMessage } from "react-icons/ti";
import { TbInbox } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { Link } from "react-router-dom";

function Tab({ tab, setTab, value, Icon, link }) {
  return (
    <Link
      to={`/${link}`}
      onClick={() => {
        setTab(value);
      }}
      className={tab === value ? "navbar__selected-tab" : "navbar__tab"}
    >
      <Icon
        size={24}
        color={tab === value ? "var(--first-color)" : "var(--background-color)"}
      />
      <p
        className={
          tab === value ? "navbar__selected-tab-name" : "navbar__tab-name"
        }
      >
        {value}
      </p>
    </Link>
  );
}

function Navbar() {
  const [tab, setTab] = useState("Chat");
  return (
    <div className="navbar">
      {/* <p>Navbar</p> */}
      <div className="navbar__tabs">
        <Tab
          value={"Chat"}
          tab={tab}
          setTab={(val) => {
            setTab(val);
          }}
          Icon={TiMessage}
          link={""}
        />
        <Tab
          value={"Recents"}
          tab={tab}
          setTab={(val) => {
            setTab(val);
          }}
          Icon={HiOutlineClock}
          link={"recents"}
        />
        <Tab
          value={"Status"}
          tab={tab}
          setTab={(val) => {
            setTab(val);
          }}
          Icon={MdAmpStories}
          link={"recents"}
        />
        <Tab
          value={"Inbox"}
          tab={tab}
          setTab={(val) => {
            setTab(val);
          }}
          Icon={TbInbox}
          link={"recents"}
        />
        <Tab
          value={"Teams"}
          tab={tab}
          setTab={(val) => {
            setTab(val);
          }}
          Icon={RiTeamLine}
          link={"recents"}
        />
      </div>
      <div className="navbar__bottom-tab">
        <TbSettings size={24} color="var(--first-color)" />
      </div>
    </div>
  );
}

export default Navbar;
