import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { UserSidebar } from "@/components/user-sidebar"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </SidebarProvider>
  )
}
