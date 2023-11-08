"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group } from "@mantine/core";
import { Sidebar } from "./Navbar/Sidebar";

export default function AppShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout='alt'
      header={{ height: 60 }}
      navbar={{
        width: { base: 180, md: 230, lg: 280 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding={`xs`}>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <div>Logo</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <div>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
