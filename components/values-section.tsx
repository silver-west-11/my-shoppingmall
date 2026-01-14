export function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "지속가능성",
      description: "환경을 생각하는 친환경 소재와 제조 과정으로 지구와 미래 세대를 위한 책임을 다합니다.",
    },
    {
      number: "02",
      title: "장인정신",
      description: "모든 제품은 숙련된 장인들의 손에서 탄생합니다. 세심한 디테일과 완벽한 마감이 우리의 자부심입니다.",
    },
    {
      number: "03",
      title: "혁신",
      description: "전통과 현대의 조화를 통해 끊임없이 새로운 스타일과 트렌드를 선도합니다.",
    },
  ]

  return (
    <section id="values" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">Our Values</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">핵심 가치</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.number} className="p-8 border border-border hover:border-accent transition-colors">
              <span className="font-serif text-5xl text-foreground/20">{value.number}</span>
              <h3 className="mt-4 text-xl font-medium text-foreground">{value.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
