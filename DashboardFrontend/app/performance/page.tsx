import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Download, Filter, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, Users, Zap } from "lucide-react"

export default function PerformancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">성과</h1>
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

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="clicks">클릭</TabsTrigger>
                <TabsTrigger value="impressions">노출</TabsTrigger>
                <TabsTrigger value="ctr">CTR</TabsTrigger>
                <TabsTrigger value="conversions">전환</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {performanceMetrics.map((metric) => (
                    <Card key={metric.name} className="border border-gray-100 shadow-sm overflow-hidden">
                      <div className={`h-1 w-full ${metric.gradient}`}></div>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">{metric.name}</CardTitle>
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${metric.iconBg}`}>
                          <metric.icon className={`h-4 w-4 ${metric.iconColor}`} />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                          <span
                            className={`flex items-center font-medium ${metric.change > 0 ? "text-green-600" : "text-red-600"}`}
                          >
                            {metric.change > 0 ? (
                              <ArrowUpRight className="mr-1 h-3 w-3" />
                            ) : (
                              <ArrowDownRight className="mr-1 h-3 w-3" />
                            )}
                            {metric.change > 0 ? "+" : ""}
                            {metric.change}%
                          </span>{" "}
                          지난 주 대비
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>성과 추이</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-b from-transparent to-gray-50 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">성과 차트가 여기에 표시됩니다</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>캠페인별 성과</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b text-sm">
                            <th className="text-left font-medium p-3">캠페인</th>
                            <th className="text-left font-medium p-3">클릭</th>
                            <th className="text-left font-medium p-3">노출</th>
                            <th className="text-left font-medium p-3">CTR</th>
                            <th className="text-left font-medium p-3">평균 CPC</th>
                            <th className="text-left font-medium p-3">전환</th>
                            <th className="text-left font-medium p-3">전환율</th>
                          </tr>
                        </thead>
                        <tbody>
                          {campaignPerformance.map((campaign) => (
                            <tr key={campaign.id} className="border-b hover:bg-gray-50">
                              <td className="p-3 font-medium">{campaign.name}</td>
                              <td className="p-3">{campaign.clicks.toLocaleString()}</td>
                              <td className="p-3">{campaign.impressions.toLocaleString()}</td>
                              <td className="p-3">{campaign.ctr}%</td>
                              <td className="p-3">₩{campaign.avgCpc.toLocaleString()}</td>
                              <td className="p-3">{campaign.conversions}</td>
                              <td className="p-3">{campaign.convRate}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clicks">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>클릭 분석</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-b from-transparent to-gray-50 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">클릭 분석 차트가 여기에 표시됩니다</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="impressions">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>노출 분석</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-b from-transparent to-gray-50 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">노출 분석 차트가 여기에 표시됩니다</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ctr">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>CTR 분석</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-b from-transparent to-gray-50 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">CTR 분석 차트가 여기에 표시됩니다</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="conversions">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>전환 분석</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-b from-transparent to-gray-50 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">전환 분석 차트가 여기에 표시됩니다</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

const performanceMetrics = [
  {
    name: "클릭 수",
    value: "45,678",
    change: 12.5,
    icon: BarChart2,
    iconBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    gradient: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
  },
  {
    name: "노출 수",
    value: "1,234,567",
    change: 8.3,
    icon: Users,
    iconBg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    gradient: "bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600",
  },
  {
    name: "CTR",
    value: "3.7%",
    change: 1.2,
    icon: ArrowUpRight,
    iconBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    gradient: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600",
  },
  {
    name: "전환율",
    value: "2.8%",
    change: -0.5,
    icon: Zap,
    iconBg: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
    gradient: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
  },
]

const campaignPerformance = [
  {
    id: 1,
    name: "브랜드 인지도 캠페인",
    clicks: 12345,
    impressions: 345678,
    ctr: 3.6,
    avgCpc: 450,
    conversions: 234,
    convRate: 1.9,
  },
  {
    id: 2,
    name: "여름 시즌 프로모션",
    clicks: 9876,
    impressions: 234567,
    ctr: 4.2,
    avgCpc: 380,
    conversions: 198,
    convRate: 2.0,
  },
  {
    id: 3,
    name: "신제품 출시",
    clicks: 15432,
    impressions: 456789,
    ctr: 3.4,
    avgCpc: 520,
    conversions: 312,
    convRate: 2.0,
  },
  {
    id: 4,
    name: "리타겟팅 캠페인",
    clicks: 8765,
    impressions: 198765,
    ctr: 4.4,
    avgCpc: 320,
    conversions: 287,
    convRate: 3.3,
  },
  {
    id: 5,
    name: "검색 광고",
    clicks: 10987,
    impressions: 287654,
    ctr: 3.8,
    avgCpc: 410,
    conversions: 176,
    convRate: 1.6,
  },
]
