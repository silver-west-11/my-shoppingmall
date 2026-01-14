"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl lg:text-3xl tracking-tight text-foreground">
            MODERA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              회사소개
            </Link>
            <Link
              href="#collection"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              컬렉션
            </Link>
            <Link
              href="#values"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              브랜드 가치
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              문의하기
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="#about" className="text-lg text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                회사소개
              </Link>
              <Link href="#collection" className="text-lg text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                컬렉션
              </Link>
              <Link href="#values" className="text-lg text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                브랜드 가치
              </Link>
              <Link href="#contact" className="text-lg text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                문의하기
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
