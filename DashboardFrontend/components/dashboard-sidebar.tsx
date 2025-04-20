"use client"

import {
  Home,
  BarChart2,
  Target,
  Users,
  DollarSign,
  Settings,
  ChevronDown,
  BarChart,
  PieChart,
  Zap,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function DashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { name: "대시보드", icon: Home, href: "/" },
    { name: "캠페인", icon: BarChart2, href: "/campaigns" },
    { name: "광고 그룹", icon: Target, href: "/ad-groups" },
    { name: "잠재고객", icon: Users, href: "/audience" },
    { name: "예산", icon: DollarSign, href: "/budget" },
    { name: "성과", icon: BarChart, href: "/performance" },
    { name: "전환", icon: Zap, href: "/conversions" },
    { name: "보고서", icon: PieChart, href: "/reports" },
    { name: "알림", icon: Bell, href: "/notifications" },
    { name: "설정", icon: Settings, href: "/settings" },
  ]

  return (
    <aside className="flex h-full w-64 flex-col border-r bg-white">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">모든 캠페인</div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-3 overflow-y-auto">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 mb-1 text-gray-700 hover:bg-blue-50 hover:text-blue-700",
                pathname === item.href && "bg-blue-50 text-blue-700 font-medium",
              )}
            >
              <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-blue-600" : "text-gray-500")} />
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="p-4 mt-auto border-t">
        <div className="rounded-lg bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 p-3">
          <h4 className="font-medium text-blue-800 mb-1">성과 향상을 위한 팁</h4>
          <p className="text-xs text-blue-700">키워드를 최적화하여 클릭률을 10% 높여보세요.</p>
          <Button size="sm" variant="link" className="text-xs text-blue-600 p-0 h-auto mt-2">
            자세히 알아보기
          </Button>
        </div>
      </div>
    </aside>
  )
}
