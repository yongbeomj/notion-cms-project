import Link from 'next/link'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { MobileNav } from '@/components/layout/mobile-nav'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: '홈', href: '/' },
  { label: '예제', href: '/showcase' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">🚀</span>
          <span className="hidden sm:inline">Starter Kit</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <div className="hidden md:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 오른쪽 액션 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  )
}
