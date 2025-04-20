import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Filter, Download, Target, BarChart2, Users, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdGroupsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">광고 그룹</h1>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="h-4 w-4 mr-2" />
                  내보내기
                </Button>
                <Button size="sm" className="h-9">
                  <Plus className="h-4 w-4 mr-2" />새 광고 그룹
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adGroups.map((group) => (
                <Card
                  key={group.id}
                  className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`h-2 w-full ${
                      group.status === "활성"
                        ? "bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600"
                        : "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500"
                    }`}
                  ></div>
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">{group.name}</CardTitle>
                      <div className="flex items-center mt-1 gap-2">
                        <Badge variant={group.status === "활성" ? "success" : "secondary"} className="mt-1">
                          {group.status}
                        </Badge>
                        <span className="text-xs text-gray-500">캠페인: {group.campaign}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <BarChart2 className="h-3 w-3 mr-1" />
                          클릭
                        </div>
                        <span className="font-semibold">{group.clicks.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Users className="h-3 w-3 mr-1" />
                          노출
                        </div>
                        <span className="font-semibold">{group.impressions.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Target className="h-3 w-3 mr-1" />
                          CTR
                        </div>
                        <span className="font-semibold">{group.ctr}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const adGroups = [
  {
    id: 1,
    name: "브랜드 키워드",
    status: "활성",
    campaign: "브랜드 인지도 캠페인",
    clicks: 1245,
    impressions: 28432,
    ctr: 4.4,
  },
  {
    id: 2,
    name: "제품 카테고리",
    status: "활성",
    campaign: "브랜드 인지도 캠페인",
    clicks: 987,
    impressions: 19876,
    ctr: 5.0,
  },
  {
    id: 3,
    name: "여름 프로모션",
    status: "활성",
    campaign: "여름 시즌 프로모션",
    clicks: 1432,
    impressions: 32456,
    ctr: 4.4,
  },
  {
    id: 4,
    name: "할인 상품",
    status: "활성",
    campaign: "여름 시즌 프로모션",
    clicks: 876,
    impressions: 15678,
    ctr: 5.6,
  },
  {
    id: 5,
    name: "신제품 출시",
    status: "활성",
    campaign: "신제품 출시",
    clicks: 2345,
    impressions: 45678,
    ctr: 5.1,
  },
  {
    id: 6,
    name: "경쟁사 키워드",
    status: "일시중지",
    campaign: "리타겟팅 캠페인",
    clicks: 765,
    impressions: 12345,
    ctr: 6.2,
  },
]
