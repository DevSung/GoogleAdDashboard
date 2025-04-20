import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-8">
          <div className="space-y-8 max-w-5xl mx-auto">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">설정</h1>
              <p className="text-gray-500 mt-2">계정 및 광고 설정을 관리합니다.</p>
            </div>

            <Tabs defaultValue="account" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="account">계정 설정</TabsTrigger>
                <TabsTrigger value="billing">결제 정보</TabsTrigger>
                <TabsTrigger value="notifications">알림 설정</TabsTrigger>
                <TabsTrigger value="security">보안</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-6">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>프로필 정보</CardTitle>
                    <CardDescription>계정 정보를 관리합니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">이름</Label>
                        <Input id="name" defaultValue="홍길동" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">이메일</Label>
                        <Input id="email" defaultValue="hong@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">회사명</Label>
                        <Input id="company" defaultValue="ABC 주식회사" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">전화번호</Label>
                        <Input id="phone" defaultValue="010-1234-5678" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button>변경사항 저장</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>계정 기본 설정</CardTitle>
                    <CardDescription>계정 기본 설정을 관리합니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timezone">시간대</Label>
                        <Select defaultValue="asia_seoul">
                          <SelectTrigger>
                            <SelectValue placeholder="시간대 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asia_seoul">아시아/서울 (GMT+9)</SelectItem>
                            <SelectItem value="america_new_york">미국/뉴욕 (GMT-5)</SelectItem>
                            <SelectItem value="europe_london">유럽/런던 (GMT+0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="language">언어</Label>
                        <Select defaultValue="ko">
                          <SelectTrigger>
                            <SelectValue placeholder="언어 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ko">한국어</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="ja">日本語</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">통화</Label>
                        <Select defaultValue="krw">
                          <SelectTrigger>
                            <SelectValue placeholder="통화 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="krw">대한민국 원 (₩)</SelectItem>
                            <SelectItem value="usd">미국 달러 ($)</SelectItem>
                            <SelectItem value="eur">유로 (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button>변경사항 저장</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing" className="space-y-6">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>결제 정보</CardTitle>
                    <CardDescription>결제 방법 및 청구 정보를 관리합니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                            VISA
                          </div>
                          <div>
                            <p className="font-medium">VISA •••• 4242</p>
                            <p className="text-sm text-gray-500">만료: 12/25</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            편집
                          </Button>
                          <Button variant="outline" size="sm">
                            삭제
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline">새 결제 방법 추가</Button>
                    </div>

                    <div className="pt-4 border-t mt-6">
                      <h3 className="font-medium mb-4">청구 주소</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="billing-name">이름</Label>
                          <Input id="billing-name" defaultValue="홍길동" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-company">회사명</Label>
                          <Input id="billing-company" defaultValue="ABC 주식회사" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-address">주소</Label>
                          <Input id="billing-address" defaultValue="서울시 강남구 테헤란로 123" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billing-postal">우편번호</Label>
                          <Input id="billing-postal" defaultValue="06123" />
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button>변경사항 저장</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>알림 설정</CardTitle>
                    <CardDescription>알림 기본 설정을 관리합니다.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3">
                        <div>
                          <h4 className="font-medium">예산 알림</h4>
                          <p className="text-sm text-gray-500">예산 한도에 도달하면 알림을 받습니다.</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between py-3 border-t">
                        <div>
                          <h4 className="font-medium">성과 알림</h4>
                          <p className="text-sm text-gray-500">캠페인 성과에 중요한 변화가 있을 때 알림을 받습니다.</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between py-3 border-t">
                        <div>
                          <h4 className="font-medium">계정 알림</h4>
                          <p className="text-sm text-gray-500">계정 관련 중요 업데이트에 대한 알림을 받습니다.</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between py-3 border-t">
                        <div>
                          <h4 className="font-medium">마케팅 이메일</h4>
                          <p className="text-sm text-gray-500">새로운 기능 및 프로모션에 대한 이메일을 받습니다.</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>비밀번호 변경</CardTitle>
                    <CardDescription>계정 비밀번호를 변경합니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">현재 비밀번호</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">새 비밀번호</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">비밀번호 확인</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <div className="flex justify-end">
                      <Button>비밀번호 변경</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-100 shadow-sm">
                  <CardHeader>
                    <CardTitle>2단계 인증</CardTitle>
                    <CardDescription>계정 보안을 강화하기 위한 2단계 인증을 설정합니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">2단계 인증 활성화</h4>
                        <p className="text-sm text-gray-500">로그인 시 추가 보안 코드가 필요합니다.</p>
                      </div>
                      <Switch />
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
