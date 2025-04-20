import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Settings, AlertTriangle, CheckCircle, Info, TrendingUp, TrendingDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h1 className="text-3xl font-bold text-gray-900">알림</h1>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="h-9">
                  <Bell className="h-4 w-4 mr-2" />
                  모두 읽음 표시
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Settings className="h-4 w-4 mr-2" />
                  알림 설정
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="unread">읽지 않음</TabsTrigger>
                <TabsTrigger value="alerts">경고</TabsTrigger>
                <TabsTrigger value="updates">업데이트</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {notifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </TabsContent>

              <TabsContent value="unread" className="space-y-4">
                {notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <NotificationCard key={notification.id} notification={notification} />
                  ))}
              </TabsContent>

              <TabsContent value="alerts" className="space-y-4">
                {notifications
                  .filter((n) => n.type === "alert")
                  .map((notification) => (
                    <NotificationCard key={notification.id} notification={notification} />
                  ))}
              </TabsContent>

              <TabsContent value="updates" className="space-y-4">
                {notifications
                  .filter((n) => n.type === "update")
                  .map((notification) => (
                    <NotificationCard key={notification.id} notification={notification} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

interface Notification {
  id: number
  title: string
  message: string
  time: string
  type: "alert" | "update" | "success" | "info"
  read: boolean
}

interface NotificationCardProps {
  notification: Notification
}

function NotificationCard({ notification }: NotificationCardProps) {
  const getIcon = () => {
    switch (notification.type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "update":
        return notification.title.includes("증가") ? (
          <TrendingUp className="h-5 w-5 text-green-500" />
        ) : (
          <TrendingDown className="h-5 w-5 text-blue-500" />
        )
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  const getBgColor = () => {
    if (notification.read) return "bg-white"

    switch (notification.type) {
      case "alert":
        return "bg-gradient-to-r from-red-50 to-white"
      case "update":
        return "bg-gradient-to-r from-blue-50 to-white"
      case "success":
        return "bg-gradient-to-r from-green-50 to-white"
      case "info":
        return "bg-gradient-to-r from-indigo-50 to-white"
      default:
        return "bg-white"
    }
  }

  return (
    <Card className={`border border-gray-100 shadow-sm ${getBgColor()}`}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">{getIcon()}</div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className={`font-medium ${notification.read ? "text-gray-700" : "text-gray-900"}`}>
                {notification.title}
              </h3>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "예산 한도 도달 경고",
    message: "'브랜드 인지도 캠페인'이 일일 예산 한도의 90%에 도달했습니다. 예산을 검토하세요.",
    time: "10분 전",
    type: "alert",
    read: false,
  },
  {
    id: 2,
    title: "클릭률 15% 증가",
    message: "'여름 시즌 프로모션' 캠페인의 클릭률이 지난 주 대비 15% 증가했습니다.",
    time: "1시간 전",
    type: "update",
    read: false,
  },
  {
    id: 3,
    title: "새 키워드 추천",
    message: "귀하의 캠페인에 추가할 수 있는 10개의 새로운 키워드 추천이 있습니다.",
    time: "3시간 전",
    type: "info",
    read: false,
  },
  {
    id: 4,
    title: "캠페인 승인 완료",
    message: "'신제품 출시' 캠페인이 검토를 통과하고 현재 활성화되었습니다.",
    time: "어제",
    type: "success",
    read: true,
  },
  {
    id: 5,
    title: "전환율 5% 감소",
    message: "'검색 광고' 캠페인의 전환율이 지난 주 대비 5% 감소했습니다. 최적화가 필요합니다.",
    time: "어제",
    type: "update",
    read: true,
  },
  {
    id: 6,
    title: "광고 그룹 일시 중지됨",
    message: "정책 위반으로 인해 '경쟁사 키워드' 광고 그룹이 일시 중지되었습니다. 자세한 내용을 확인하세요.",
    time: "2일 전",
    type: "alert",
    read: true,
  },
  {
    id: 7,
    title: "월간 성과 보고서 준비 완료",
    message: "6월 월간 성과 보고서가 준비되었습니다. 지금 확인하세요.",
    time: "3일 전",
    type: "info",
    read: true,
  },
]
