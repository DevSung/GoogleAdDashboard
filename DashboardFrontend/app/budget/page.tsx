import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, DollarSign, TrendingUp, BarChart2, PieChart } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function BudgetPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">예산</h1>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="h-4 w-4 mr-2" />
                  보고서 내보내기
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">이번 달 총 지출</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100">
                    <DollarSign className="h-4 w-4 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₩12,450,000</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    전월 대비 12.5% 증가
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"></div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">예산 소진율</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100">
                    <BarChart2 className="h-4 w-4 text-indigo-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68.5%</div>
                  <div className="mt-2">
                    <Progress value={68.5} className="h-2" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">월 예산 ₩18,000,000 중 ₩12,450,000 사용</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">평균 CPC</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-green-100">
                    <PieChart className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₩1,245</div>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <TrendingUp className="mr-1 h-3 w-3 rotate-180" />
                    전월 대비 3.2% 감소
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>캠페인별 예산 사용</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgets.map((budget) => (
                    <div key={budget.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="font-medium">{budget.campaign}</span>
                          <span className="ml-2 text-xs text-gray-500">
                            일 예산: ₩{budget.dailyBudget.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm font-medium">
                          {budget.spent.toLocaleString()} / {budget.budget.toLocaleString()} 원
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={(budget.spent / budget.budget) * 100} className="h-2" />
                        <span className="text-xs font-medium w-12 text-right">
                          {Math.round((budget.spent / budget.budget) * 100)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

const budgets = [
  {
    id: 1,
    campaign: "브랜드 인지도 캠페인",
    budget: 5000000,
    spent: 3450000,
    dailyBudget: 166000,
  },
  {
    id: 2,
    campaign: "여름 시즌 프로모션",
    budget: 3000000,
    spent: 2100000,
    dailyBudget: 100000,
  },
  {
    id: 3,
    campaign: "신제품 출시",
    budget: 4500000,
    spent: 2800000,
    dailyBudget: 150000,
  },
  {
    id: 4,
    campaign: "리타겟팅 캠페인",
    budget: 2000000,
    spent: 1200000,
    dailyBudget: 66000,
  },
  {
    id: 5,
    campaign: "검색 광고",
    budget: 3500000,
    spent: 2900000,
    dailyBudget: 116000,
  },
]
