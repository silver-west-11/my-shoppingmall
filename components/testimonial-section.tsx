"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "MODERA의 옷은 단순한 의류가 아닌, 하나의 예술 작품입니다. 착용할 때마다 특별한 기분이 듭니다.",
      author: "김수진",
      role: "패션 에디터",
    },
    {
      quote: "품질과 디자인 모두 최고입니다. 10년 동안 MODERA만 입었는데 단 한 번도 실망한 적이 없어요.",
      author: "이정현",
      role: "비즈니스 컨설턴트",
    },
    {
      quote: "지속가능한 패션을 추구하는 MODERA의 철학에 깊이 공감합니다. 앞으로도 응원하겠습니다.",
      author: "박민서",
      role: "환경 활동가",
    },
  ]

  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">Testimonials</span>

        <blockquote className="mt-8">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic">
            "{testimonials[current].quote}"
          </p>
          <footer className="mt-8">
            <p className="text-foreground font-medium">{testimonials[current].author}</p>
            <p className="text-sm text-muted-foreground mt-1">{testimonials[current].role}</p>
          </footer>
        </blockquote>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-foreground" : "bg-border"
                }`}
              />
            ))}
          </div>
          <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
