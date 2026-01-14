import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight text-balance">
            당신만의 스타일을
            <br />
            <span className="italic">완성하다</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            MODERA는 현대적이고 세련된 디자인으로
            <br className="hidden md:block" />
            일상에 특별함을 더하는 프리미엄 패션 브랜드입니다.
          </p>

          <div className="mt-16 w-full max-w-4xl">
            <div className="relative py-16 px-8 border border-border">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-6">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Since 2015</span>
              </div>
              <div className="flex flex-col items-center gap-6">
                <span className="font-serif text-6xl md:text-8xl lg:text-9xl italic text-foreground/10">M</span>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-border" />
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Premium Fashion</span>
                  <div className="h-px w-12 bg-border" />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background px-6">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Seoul, Korea</span>
              </div>
            </div>
          </div>

          {/* CTA Links */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
            <Link href="#about" className="group flex flex-col items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-muted-foreground">브랜드 스토리</span>
              <span className="w-10 h-10 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="#collection" className="group flex flex-col items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-muted-foreground">컬렉션 보기</span>
              <span className="w-10 h-10 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
