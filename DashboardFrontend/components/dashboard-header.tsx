"use client"

import { Search, Bell, Settings, Menu, LogOut, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardSidebar } from "./dashboard-sidebar"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  const pathname = usePathname()

  const navItems = [
    { name: "계정", href: "/account" },
    { name: "캠페인", href: "/campaigns" },
    { name: "보고서", href: "/reports" },
  ]

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <DashboardSidebar />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 text-white shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Google Ads</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                size="sm"
                className={cn("rounded-full px-4", pathname === item.href && "bg-gray-100 text-gray-900")}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="검색..."
            className="w-64 rounded-full bg-gray-50 border-gray-200 pl-8 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="text-gray-500 rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/notifications">
          <Button variant="ghost" size="icon" className="text-gray-500 rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 p-0 overflow-hidden">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="https://lh3.googleusercontent.com/a/ACg8ocLkYxR_ZnHgvVkm8-Lh9jZtKDDCOCTZ8m1lx0YJnZtH=s83-c-mo"
                  alt="홍길동"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white">홍</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end" forceMount>
            <div className="flex items-center justify-start gap-4 p-4">
              <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                <AvatarImage
                  src="https://lh3.googleusercontent.com/a/ACg8ocLkYxR_ZnHgvVkm8-Lh9jZtKDDCOCTZ8m1lx0YJnZtH=s83-c-mo"
                  alt="홍길동"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white text-lg">
                  홍
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-base font-medium leading-none">홍길동</p>
                <p className="text-sm text-muted-foreground">hong@gmail.com</p>
                <p className="text-xs text-blue-600">Google 계정 관리</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="p-2">
              <div className="rounded-lg bg-gray-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">ABC 주식회사</p>
                    <p className="text-xs text-gray-500">Google Ads 계정 123-456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="p-2">
              <DropdownMenuItem className="cursor-pointer rounded-md">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>결제 정보</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md">
                <Settings className="mr-2 h-4 w-4" />
                <span>계정 설정</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <div className="p-2">
              <DropdownMenuItem className="cursor-pointer rounded-md">
                <LogOut className="mr-2 h-4 w-4" />
                <span>로그아웃</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
