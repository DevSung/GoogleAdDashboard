import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Download,
  Filter,
  Zap,
  ShoppingCart,
  CreditCard,
  Phone,
  ArrowUpRight,
  ArrowDownRight,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ConversionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">전환</h1>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="h-9">
                  <Calendar className="h-4 w-4 mr-2" />
                  날짜 범위
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="h-4 w-4 mr-2" />
                  내보내기
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">총 전환 수</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,245</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-600 flex items-center font-medium">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      +15.2%
                    </span>{" "}
                    지난 달 대비
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">전환율</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100">
                    <ArrowUpRight className="h-4 w-4 text-indigo-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.8%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-600 flex items-center font-medium">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      +0.5%
                    </span>{" "}
                    지난 달 대비
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">전환당 비용</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-50 to-purple-100">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₩12,450</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-red-600 flex items-center font-medium">
                      <ArrowDownRight className="mr-1 h-3 w-3" />
                      -3.2%
                    </span>{" "}
                    지난 달 대비
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">전환 가치</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-green-100">
                    <ShoppingCart className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₩45,678,000</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-600 flex items-center font-medium">
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                      +18.7%
                    </span>{" "}
                    지난 달 대비
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>전환 유형별 분석</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {conversionTypes.map((type) => (
                    <div key={type.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${type.iconBg}`}>
                            <type.icon className={`h-4 w-4 ${type.iconColor}`} />
                          </div>
                          <div>
                            <div className="font-medium">{type.name}</div>
                            <div className="text-xs text-gray-500">{type.count.toLocaleString()} 전환</div>
                          </div>
                        </div>
                        <Badge variant={type.trend === "up" ? "success" : "secondary"}>
                          {type.trend === "up" ? "+" : ""}
                          {type.change}%
                        </Badge>
                      </div>
                      <Progress value={type.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>캠페인별 전환</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-sm">
                        <th className="text-left font-medium p-3">캠페인</th>
                        <th className="text-left font-medium p-3">전환 수</th>
                        <th className="text-left font-medium p-3">전환율</th>
                        <th className="text-left font-medium p-3">전환당 비용</th>
                        <th className="text-left font-medium p-3">전환 가치</th>
                        <th className="text-left font-medium p-3">ROAS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaignConversions.map((campaign) => (
                        <tr key={campaign.id} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{campaign.name}</td>
                          <td className="p-3">{campaign.conversions}</td>
                          <td className="p-3">{campaign.convRate}%</td>
                          <td className="p-3">₩{campaign.costPerConv.toLocaleString()}</td>
                          <td className="p-3">₩{campaign.convValue.toLocaleString()}</td>
                          <td className="p-3">{campaign.roas}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

const conversionTypes = [
  {
    id: 1,
    name: "구매",
    count: 678,
    percentage: 54.5,
    trend: "up",
    change: 12.3,
    icon: ShoppingCart,
    iconBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "회원가입",
    count: 345,
    percentage: 27.7,
    trend: "up",
    change: 8.5,
    icon: Users,
    iconBg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 3,
    name: "문의하기",
    count: 156,
    percentage: 12.5,
    trend: "down",
    change: 2.1,
    icon: Phone,
    iconBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    name: "뉴스레터 구독",
    count: 66,
    percentage: 5.3,
    trend: "up",
    change: 15.8,
    icon: Zap,
    iconBg: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
]

const campaignConversions = [
  {
    id: 1,
    name: "브랜드 인지도 캠페인",
    conversions: 345,
    convRate: 2.8,
    costPerConv: 12450,
    convValue: 15678000,
    roas: 362,
  },
  {
    id: 2,
    name: "여름 시즌 프로모션",
    conversions: 287,
    convRate: 3.2,
    costPerConv: 10560,
    convValue: 12345000,
    roas: 405,
  },
  {
    id: 3,
    name: "신제품 출시",
    conversions: 312,
    convRate: 2.1,
    costPerConv: 14320,
    convValue: 9876000,
    roas: 215,
  },
  {
    id: 4,
    name: "리타겟팅 캠페인",
    conversions: 198,
    convRate: 4.5,
    costPerConv: 6780,
    convValue: 5432000,
    roas: 398,
  },
  {
    id: 5,
    name: "검색 광고",
    conversions: 103,
    convRate: 1.2,
    costPerConv: 18650,
    convValue: 2345000,
    roas: 108,
  },
]
