import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, DollarSign, MousePointer, Users, Target } from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">총 지출</CardTitle>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100">
            <DollarSign className="h-4 w-4 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₩1,245,000</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-600 flex items-center font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              +12.5%
            </span>{" "}
            지난 달 대비
          </p>
        </CardContent>
      </Card>
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">클릭 수</CardTitle>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100">
            <MousePointer className="h-4 w-4 text-indigo-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,345</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-600 flex items-center font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              +8.2%
            </span>{" "}
            지난 달 대비
          </p>
        </CardContent>
      </Card>
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">노출 수</CardTitle>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-50 to-purple-100">
            <Users className="h-4 w-4 text-purple-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">234,567</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-red-600 flex items-center font-medium">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              -3.1%
            </span>{" "}
            지난 달 대비
          </p>
        </CardContent>
      </Card>
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">전환율</CardTitle>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-green-100">
            <Target className="h-4 w-4 text-green-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.2%</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-600 flex items-center font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              +1.2%
            </span>{" "}
            지난 달 대비
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
