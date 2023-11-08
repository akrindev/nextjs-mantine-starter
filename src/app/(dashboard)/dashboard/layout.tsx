import AppShellLayout from "@/components/AppShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppShellLayout>{children}</AppShellLayout>;
}
