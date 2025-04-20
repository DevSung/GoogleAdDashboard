import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { CampaignTable } from "@/components/campaign-table"
import { Button } from "@/components/ui/button"
import { Plus, Filter, Download } from "lucide-react"

export default function CampaignsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">캠페인</h1>
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
                  <Plus className="h-4 w-4 mr-2" />새 캠페인
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <CampaignTable showHeader={false} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
