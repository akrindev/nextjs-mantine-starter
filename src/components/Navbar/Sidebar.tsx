"use client";

import { useState } from "react";
import {
  UnstyledButton,
  Tooltip,
  Title,
  rem,
  Stack,
  Burger,
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconChevronCompactLeft,
  IconLogout,
} from "@tabler/icons-react";
import classes from "./Sidebar.module.css";
import { signOut } from "next-auth/react";

const mainLinksMockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

const linksMockdata = [
  "Security",
  "Settings",
  "Dashboard",
  "Releases",
  "Account",
  "Orders",
  "Clients",
  "Databases",
  "Pull Requests",
  "Open Issues",
  "Wiki pages",
];

export function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState("Releases");
  const [activeLink, setActiveLink] = useState("Settings");

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}></div>

          <div
            style={{
              // flex-1
              flexGrow: 1,
            }}
          >
            {mainLinks}
          </div>

          <Stack
            justify="center"
            gap={0}
            style={{
              paddingBottom: rem(20),
            }}
          >
            <Tooltip
              label={"logout"}
              position="right"
              withArrow
              transitionProps={{ duration: 0 }}
              key={"logout"}
            >
              <UnstyledButton
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: "/login",
                  })
                }
                className={classes.mainLink}
                data-active={undefined}
              >
                <IconLogout />
              </UnstyledButton>
            </Tooltip>
            {/* it will be on the bottom to close navbar */}
            <Tooltip
              label={"close"}
              position="right"
              withArrow
              transitionProps={{ duration: 0 }}
              key={"close"}
            >
              <Burger
                opened={isOpen}
                onClick={onClose}
                hiddenFrom="sm"
                size="sm"
              />
            </Tooltip>
          </Stack>
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}
