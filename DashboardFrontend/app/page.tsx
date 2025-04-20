import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { CampaignTable } from "@/components/campaign-table"
import { PerformanceChart } from "@/components/performance-chart"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-2 flex items-center gap-2 text-sm">
                <span className="text-gray-500">기간:</span>
                <span className="font-medium">지난 30일</span>
              </div>
            </div>
            <DashboardOverview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PerformanceChart title="클릭 성과" />
              <PerformanceChart title="전환 성과" />
            </div>
            <CampaignTable />
          </div>
        </main>
      </div>
    </div>
  )
}
