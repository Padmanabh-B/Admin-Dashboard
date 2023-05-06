import React, { useMemo, useState } from "react";
import classNames from "classnames";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";
import { Router, useRouter } from "next/router";
import Link from "next/link";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
];

export default function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollpsible, setIsCollpsible] = useState(false);
  const router = useRouter();
  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 text-text-light flex justify-between flex-col w-80 bg-white",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collpaseIconClasses = classNames(
    "p-4 rounded bg-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollpsible(!isCollpsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4 pl-1">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            ></span>
          </div>
          {isCollpsible && (
            <button
              className={collpaseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={"menu_" + menu.id} className={classes}>
                <Link href={menu.link}>
                  <div className="flex items-center w-full h-full px-3 py-4">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
}
