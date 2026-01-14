import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CollectionSection() {
  const collections = [
    {
      title: "Women's",
      category: "여성 컬렉션",
      count: "124 Products",
      letter: "W",
    },
    {
      title: "Men's",
      category: "남성 컬렉션",
      count: "98 Products",
      letter: "M",
    },
    {
      title: "Accessories",
      category: "액세서리",
      count: "67 Products",
      letter: "A",
    },
  ]

  return (
    <section id="collection" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">Collections</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">시즌 컬렉션</h2>
          </div>
          <p className="mt-6 md:mt-0 text-muted-foreground max-w-md">
            2025 S/S 컬렉션에서 당신만의 스타일을 찾아보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href="#"
              className="group relative aspect-[5/6] border border-border bg-card overflow-hidden flex flex-col items-center justify-center p-8 hover:bg-accent/5 transition-colors"
            >
              {/* Large Letter Background */}
              <span className="font-serif text-[12rem] md:text-[10rem] lg:text-[14rem] italic text-foreground/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                {collection.letter}
              </span>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{collection.category}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-4">{collection.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{collection.count}</p>
              </div>

              {/* Arrow */}
              <span className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight className="h-4 w-4 text-foreground group-hover:text-accent-foreground" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
