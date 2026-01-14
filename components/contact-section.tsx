import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">Contact Us</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">문의하기</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              MODERA에 대해 궁금한 점이 있으시면 언제든 연락해 주세요. 파트너십, 비즈니스 제안, 또는 고객 서비스까지
              성심껏 답변드리겠습니다.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-sm text-muted-foreground">이메일</p>
                <p className="text-foreground mt-1">contact@modera.co.kr</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">전화</p>
                <p className="text-foreground mt-1">02-1234-5678</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">주소</p>
                <p className="text-foreground mt-1">서울특별시 강남구 도산대로 123</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 lg:p-12 border border-border">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground">
                    이름
                  </label>
                  <Input id="name" placeholder="홍길동" className="mt-2 bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground">
                    이메일
                  </label>
                  <Input id="email" type="email" placeholder="hong@example.com" className="mt-2 bg-background" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm text-muted-foreground">
                  제목
                </label>
                <Input id="subject" placeholder="문의 제목을 입력해 주세요" className="mt-2 bg-background" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  메시지
                </label>
                <Textarea
                  id="message"
                  placeholder="문의 내용을 입력해 주세요"
                  rows={5}
                  className="mt-2 bg-background resize-none"
                />
              </div>
              <Button className="w-full">문의 보내기</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
