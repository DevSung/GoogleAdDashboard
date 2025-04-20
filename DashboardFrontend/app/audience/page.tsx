import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Filter, Download, Users, PieChart, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AudiencePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">잠재고객</h1>
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
                  <Plus className="h-4 w-4 mr-2" />새 잠재고객
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((audience) => (
                <Card
                  key={audience.id}
                  className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-2 w-full bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600"></div>
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">{audience.name}</CardTitle>
                      <div className="flex items-center mt-1 gap-2">
                        <Badge
                          variant="secondary"
                          className={
                            audience.type === "리마케팅"
                              ? "bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 hover:from-purple-200 hover:to-indigo-200"
                              : "bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 hover:from-blue-200 hover:to-sky-200"
                          }
                        >
                          {audience.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 h-10 w-10">
                      {audience.type === "리마케팅" ? (
                        <Zap className="h-5 w-5 text-purple-600" />
                      ) : (
                        <Users className="h-5 w-5 text-purple-600" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Users className="h-3 w-3 mr-1" />
                          사용자 수
                        </div>
                        <span className="font-semibold">{audience.users.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <PieChart className="h-3 w-3 mr-1" />
                          전환율
                        </div>
                        <span className="font-semibold">{audience.conversionRate}%</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>활성 캠페인</span>
                        <span className="font-medium">{audience.activeCampaigns}</span>
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

const audiences = [
  {
    id: 1,
    name: "웹사이트 방문자",
    type: "리마케팅",
    users: 45678,
    conversionRate: 3.2,
    activeCampaigns: 3,
  },
  {
    id: 2,
    name: "장바구니 이탈자",
    type: "리마케팅",
    users: 12345,
    conversionRate: 4.5,
    activeCampaigns: 2,
  },
  {
    id: 3,
    name: "20-35세 여성",
    type: "타겟팅",
    users: 78965,
    conversionRate: 2.8,
    activeCampaigns: 4,
  },
  {
    id: 4,
    name: "30-45세 남성",
    type: "타겟팅",
    users: 65432,
    conversionRate: 2.1,
    activeCampaigns: 3,
  },
  {
    id: 5,
    name: "구매 완료 고객",
    type: "리마케팅",
    users: 34567,
    conversionRate: 5.6,
    activeCampaigns: 2,
  },
  {
    id: 6,
    name: "관심사: 스포츠",
    type: "타겟팅",
    users: 98765,
    conversionRate: 1.9,
    activeCampaigns: 3,
  },
]
