"use client"

import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — Flat list only: Home, Cards, Transactions, Payments, Recipients, Insights (no sub-navigation).
 * — Icons are the Figma SVGs in public/figma/sidebar/.
 * — Colours and sidebar width come from --sidebar-* in globals.css and the SidebarProvider in layout.tsx.
 */
const NAV_ITEMS = [
  { label: "Home", href: "/", icon: "/figma/sidebar/52b2b.svg", isActive: true },
  { label: "Cards", href: "/", icon: "/figma/sidebar/02c19.svg" },
  { label: "Transactions", href: "/", icon: "/figma/sidebar/016b1.svg" },
  { label: "Payments", href: "/", icon: "/figma/sidebar/70445.svg" },
  { label: "Recipients", href: "/", icon: "/figma/sidebar/10344.svg" },
  { label: "Insights", href: "/", icon: "/figma/sidebar/869c4.svg" },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent>
        {/* Figma: 24px horizontal and 16px vertical padding around the menu */}
        <SidebarGroup className="px-6 py-4">
          <SidebarGroupContent>
            {/* Figma: 2px gap between items */}
            <SidebarMenu className="gap-0.5">
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className="h-auto gap-4 rounded-full px-4 py-3 text-sm font-normal leading-5 data-[active=true]:font-semibold"
                  >
                    <Link href={item.href} className="flex items-center">
                      <img src={item.icon} alt="" className="size-6 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
