"use client"

import { Calendar, LayoutDashboard, MessageSquare, BookOpen, Heart, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard/user",
    icon: LayoutDashboard,
  },
  {
    title: "Book Session",
    url: "/dashboard/user/book",
    icon: Calendar,
  },
  {
    title: "Journal",
    url: "/dashboard/user/journal",
    icon: BookOpen,
  },
  {
    title: "Messages",
    url: "/dashboard/user/messages",
    icon: MessageSquare,
  },
]

export function UserSidebar() {
  const pathname = usePathname()

  return (
      <Sidebar>
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-2 py-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm font-semibold">Mind Matters</p>
              <p className="text-xs text-muted-foreground">Your Wellness Journey</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={pathname === item.url}>
                        <Link href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border">
          <div className="p-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>
        </SidebarFooter>
      </Sidebar>
  )
}
