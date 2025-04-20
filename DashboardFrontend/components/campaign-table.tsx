import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"

interface CampaignTableProps {
  showHeader?: boolean
}

export function CampaignTable({ showHeader = true }: CampaignTableProps) {
  return (
    <Card className={showHeader ? "border border-gray-100 shadow-sm" : "shadow-none border-0"}>
      {showHeader && (
        <CardHeader className="flex flex-row items-center">
          <CardTitle>캠페인</CardTitle>
          <Button size="sm" className="ml-auto gap-1 bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4" /> 새 캠페인
          </Button>
        </CardHeader>
      )}
      <CardContent className={showHeader ? "" : "p-0"}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-sm">
                <th className="text-left font-medium p-3">캠페인 이름</th>
                <th className="text-left font-medium p-3">상태</th>
                <th className="text-left font-medium p-3">예산</th>
                <th className="text-left font-medium p-3">클릭 수</th>
                <th className="text-left font-medium p-3">노출 수</th>
                <th className="text-left font-medium p-3">CTR</th>
                <th className="text-left font-medium p-3">CPC</th>
                <th className="text-left font-medium p-3">변화</th>
                <th className="text-left font-medium p-3"></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{campaign.name}</td>
                  <td className="p-3">
                    <Badge variant={campaign.status === "활성" ? "success" : "secondary"} className="font-normal">
                      {campaign.status}
                    </Badge>
                  </td>
                  <td className="p-3">₩{campaign.budget.toLocaleString()}</td>
                  <td className="p-3">{campaign.clicks.toLocaleString()}</td>
                  <td className="p-3">{campaign.impressions.toLocaleString()}</td>
                  <td className="p-3">{campaign.ctr}%</td>
                  <td className="p-3">₩{campaign.cpc.toLocaleString()}</td>
                  <td className="p-3">
                    <div className={`flex items-center ${campaign.change > 0 ? "text-green-600" : "text-red-600"}`}>
                      {campaign.change > 0 ? (
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 mr-1" />
                      )}
                      <span className="text-xs font-medium">{Math.abs(campaign.change)}%</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

// 샘플 데이터 (실제로는 API에서 가져올 데이터)
const campaigns = [
  {
    id: 1,
    name: "브랜드 인지도 캠페인",
    status: "활성",
    budget: 500000,
    clicks: 3245,
    impressions: 78432,
    ctr: 4.1,
    cpc: 154,
    change: 12.5,
  },
  {
    id: 2,
    name: "여름 시즌 프로모션",
    status: "활성",
    budget: 300000,
    clicks: 2187,
    impressions: 45678,
    ctr: 4.8,
    cpc: 137,
    change: 8.3,
  },
  {
    id: 3,
    name: "신제품 출시",
    status: "활성",
    budget: 450000,
    clicks: 4532,
    impressions: 98765,
    ctr: 4.6,
    cpc: 99,
    change: 15.2,
  },
  {
    id: 4,
    name: "리타겟팅 캠페인",
    status: "일시중지",
    budget: 200000,
    clicks: 1876,
    impressions: 34567,
    ctr: 5.4,
    cpc: 106,
    change: -3.1,
  },
  {
    id: 5,
    name: "검색 광고",
    status: "활성",
    budget: 350000,
    clicks: 3987,
    impressions: 87654,
    ctr: 4.5,
    cpc: 88,
    change: 6.7,
  },
]
