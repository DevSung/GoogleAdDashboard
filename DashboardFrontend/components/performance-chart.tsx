"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PerformanceChartProps {
  title: string
}

export function PerformanceChart({ title }: PerformanceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // 캔버스 크기 설정
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // 차트 데이터 (실제로는 API에서 가져올 데이터)
    const data = [12, 19, 15, 22, 25, 30, 28, 32, 35, 40, 38, 42]
    const labels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

    // 차트 그리기
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2
    const maxValue = Math.max(...data) * 1.2

    // 그리드 그리기
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1

    // 수평선
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.stroke()

      // 값 표시
      ctx.fillStyle = "#9ca3af"
      ctx.font = "10px Arial"
      ctx.textAlign = "right"
      ctx.fillText(Math.round(maxValue - (maxValue / 5) * i).toString(), padding - 5, y + 3)
    }

    // 데이터 포인트 그리기
    const pointWidth = chartWidth / (data.length - 1)

    // 선 그리기
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, "#3b82f6") // 파란색 시작
    gradient.addColorStop(0.5, "#6366f1") // 중간에 인디고
    gradient.addColorStop(1, "#8b5cf6") // 보라색으로 끝

    ctx.strokeStyle = gradient
    ctx.lineWidth = 3
    ctx.beginPath()

    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = padding + chartHeight - (data[i] / maxValue) * chartHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      // x축 레이블
      if (i % 2 === 0) {
        ctx.fillStyle = "#9ca3af"
        ctx.font = "10px Arial"
        ctx.textAlign = "center"
        ctx.fillText(labels[i], x, canvas.height - padding / 2)
      }
    }

    ctx.stroke()

    // 포인트 그리기
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = padding + chartHeight - (data[i] / maxValue) * chartHeight

      // 포인트 그림자
      ctx.shadowColor = "rgba(59, 130, 246, 0.5)"
      ctx.shadowBlur = 8
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 2

      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      // 그림자 초기화
      ctx.shadowColor = "transparent"
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      // 포인트 테두리
      const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, 5)
      pointGradient.addColorStop(0, "#3b82f6")
      pointGradient.addColorStop(1, "#6366f1")

      ctx.strokeStyle = pointGradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.stroke()
    }

    // 영역 채우기
    const areaGradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight)
    areaGradient.addColorStop(0, "rgba(99, 102, 241, 0.3)")
    areaGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.15)")
    areaGradient.addColorStop(1, "rgba(59, 130, 246, 0.0)")

    ctx.fillStyle = areaGradient
    ctx.beginPath()
    ctx.moveTo(padding, padding + chartHeight)

    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointWidth
      const y = padding + chartHeight - (data[i] / maxValue) * chartHeight
      ctx.lineTo(x, y)
    }

    ctx.lineTo(padding + chartWidth, padding + chartHeight)
    ctx.closePath()
    ctx.fill()
  }, [])

  return (
    <Card className="border border-gray-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
      </CardContent>
    </Card>
  )
}
