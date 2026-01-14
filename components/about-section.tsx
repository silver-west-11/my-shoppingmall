export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="aspect-[3/4] border border-border flex flex-col items-center justify-center p-8 bg-card">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Our Story</span>
              <span className="font-serif text-7xl md:text-8xl lg:text-9xl italic text-foreground/10">10</span>
              <span className="mt-4 text-sm tracking-widest uppercase text-muted-foreground">Years of</span>
              <span className="font-serif text-2xl md:text-3xl italic text-foreground mt-2">Excellence</span>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-8 bg-border" />
                <span className="text-xs tracking-widest text-muted-foreground">2015 - 2025</span>
                <div className="h-px w-8 bg-border" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              모던함과 우아함의
              <br />
              <span className="italic">조화</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              2015년 서울에서 시작된 MODERA는 한국 패션의 새로운 장을 열었습니다. 우리는 단순히 옷을 만드는 것이 아닌,
              당신의 이야기를 담은 스타일을 제안합니다.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              최고급 원단과 장인 정신으로 만들어지는 모든 제품은 시대를 초월한 클래식함과 현대적 감각이 어우러집니다.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <span className="font-serif text-4xl md:text-5xl text-foreground">10</span>
                <p className="mt-2 text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <span className="font-serif text-4xl md:text-5xl text-foreground">50+</span>
                <p className="mt-2 text-sm text-muted-foreground">Global Partners</p>
              </div>
              <div>
                <span className="font-serif text-4xl md:text-5xl text-foreground">100K</span>
                <p className="mt-2 text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
