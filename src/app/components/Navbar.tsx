"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TabItemType = {
  id: string;
  label: string;
};

type NavbarProps = {
  tabs?: TabItemType[];
  defaultActiveId?: string;
  onTabChange?: (id: string) => void;
  className?: string;
};

const MOCK_TABS: TabItemType[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  (props, ref) => {
    const {
      tabs = MOCK_TABS,
      defaultActiveId = tabs[0]?.id,
      onTabChange,
      className,
    } = props;

    const [activeTab, setActiveTab] = React.useState(defaultActiveId);

    const handleClick = React.useCallback(
      (id: string) => {
        setActiveTab(id);
        onTabChange?.(id);
      },
      [onTabChange],
    );

    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-3 w-fit mx-auto sticky top-0 z-100 p-1 bg-background rounded-full border",
          className,
        )}
      >
        {tabs.map((tab) => (
          <a href={`#${tab.id}`}>
            <button
              key={tab.id}
              type="button"
              onClick={() => handleClick(tab.id)}
              className={cn(
                "relative px-4 py-2 rounded-full transition touch-none",
                "text-sm font-medium",
                activeTab === tab.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="pill-tabs-active-pill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          </a>
        ))}
      </div>
    );
  },
);

Navbar.displayName = "Navbar";
export default Navbar;
