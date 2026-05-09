// Server component — no JS shipped to client, schema embedded in HTML.
import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
  light?: boolean // true = white text (for dark hero backgrounds)
}

export default function Breadcrumb({ items, light = true }: Props) {
  const textColor = light ? 'text-slate-400' : 'text-slate-500'
  const activeColor = light ? 'text-white' : 'text-slate-800'
  const linkHover = light ? 'hover:text-amber-400' : 'hover:text-brand-navy'

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${textColor}`} role="list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5" role="listitem">
              {isLast || !item.href ? (
                <span className={isLast ? activeColor : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`${linkHover} transition-colors`}>
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
