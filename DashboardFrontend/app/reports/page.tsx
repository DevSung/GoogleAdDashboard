import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Download, FileText, BarChart2, PieChart, LineChart, Table, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">보고서</h1>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="h-9">
                  <Calendar className="h-4 w-4 mr-2" />
                  날짜 범위
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="h-4 w-4 mr-2" />
                  내보내기
                </Button>
              </div>
            </div>

            <Tabs defaultValue="saved" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="saved">저장된 보고서</TabsTrigger>
                <TabsTrigger value="custom">맞춤 보고서</TabsTrigger>
                <TabsTrigger value="scheduled">예약된 보고서</TabsTrigger>
              </TabsList>

              <TabsContent value="saved" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedReports.map((report) => (
                    <Card
                      key={report.id}
                      className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                          <CardTitle className="text-lg font-semibold">{report.name}</CardTitle>
                          <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                        </div>
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${report.iconBg}`}>
                          <report.icon className={`h-5 w-5 ${report.iconColor}`} />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">마지막 실행: {report.lastRun}</span>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                            보고서 보기
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="custom">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>맞춤 보고서 만들기</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-500">원하는 지표와 차원을 선택하여 맞춤 보고서를 생성하세요.</p>
                      <div className="flex flex-wrap gap-3">
                        <Button>새 보고서 만들기</Button>
                        <Button variant="outline">템플릿에서 시작하기</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="scheduled">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>예약된 보고서</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b text-sm">
                            <th className="text-left font-medium p-3">보고서 이름</th>
                            <th className="text-left font-medium p-3">빈도</th>
                            <th className="text-left font-medium p-3">다음 실행</th>
                            <th className="text-left font-medium p-3">수신자</th>
                            <th className="text-left font-medium p-3">상태</th>
                            <th className="text-left font-medium p-3"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {scheduledReports.map((report) => (
                            <tr key={report.id} className="border-b hover:bg-gray-50">
                              <td className="p-3 font-medium">{report.name}</td>
                              <td className="p-3">{report.frequency}</td>
                              <td className="p-3">{report.nextRun}</td>
                              <td className="p-3">{report.recipients}</td>
                              <td className="p-3">
                                <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                    report.status === "활성"
                                      ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                                      : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {report.status}
                                </span>
                              </td>
                              <td className="p-3">
                                <Button variant="ghost" size="sm">
                                  편집
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

const savedReports = [
  {
    id: 1,
    name: "캠페인 성과 요약",
    description: "모든 캠페인의 주요 성과 지표를 보여주는 보고서",
    lastRun: "2023-07-15",
    icon: BarChart2,
    iconBg: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "전환 분석",
    description: "전환 유형별 성과 및 추이 분석",
    lastRun: "2023-07-14",
    icon: PieChart,
    iconBg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 3,
    name: "키워드 성과",
    description: "상위 성과 키워드 및 개선 필요 키워드 분석",
    lastRun: "2023-07-13",
    icon: Star,
    iconBg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    name: "월간 성과 추이",
    description: "지난 12개월 동안의 주요 지표 추이",
    lastRun: "2023-07-10",
    icon: LineChart,
    iconBg: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 5,
    name: "광고 그룹 분석",
    description: "광고 그룹별 성과 비교 및 분석",
    lastRun: "2023-07-08",
    icon: Table,
    iconBg: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 6,
    name: "예산 사용 현황",
    description: "캠페인별 예산 사용 현황 및 효율성 분석",
    lastRun: "2023-07-05",
    icon: FileText,
    iconBg: "bg-gradient-to-br from-red-50 to-red-100",
    iconColor: "text-red-600",
  },
]

const scheduledReports = [
  {
    id: 1,
    name: "주간 성과 요약",
    frequency: "매주 월요일",
    nextRun: "2023-07-17",
    recipients: "marketing@example.com",
    status: "활성",
  },
  {
    id: 2,
    name: "월간 전환 보고서",
    frequency: "매월 1일",
    nextRun: "2023-08-01",
    recipients: "ceo@example.com, marketing@example.com",
    status: "활성",
  },
  {
    id: 3,
    name: "분기별 ROI 분석",
    frequency: "분기별",
    nextRun: "2023-10-01",
    recipients: "finance@example.com, ceo@example.com",
    status: "활성",
  },
  {
    id: 4,
    name: "키워드 성과 분석",
    frequency: "격주 금요일",
    nextRun: "2023-07-21",
    recipients: "seo@example.com",
    status: "일시중지",
  },
]
