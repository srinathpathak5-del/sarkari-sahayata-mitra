import schemesData from '../data/schemes.json'
import type { Scheme } from '../types/scheme'

export function getAllSchemes(): Scheme[] {
  return (schemesData.schemes as Scheme[]).filter(s => s.active)
}

export function getSchemeBySlug(slug: string): Scheme | null {
  return (schemesData.schemes as Scheme[]).find(s => s.slug === slug) ?? null
}

export function getSchemesByCategory(category: string): Scheme[] {
  return (schemesData.schemes as Scheme[]).filter(
    s => s.category.includes(category) && s.active
  )
}

export function searchSchemes(query: string): Scheme[] {
  const q = query.toLowerCase()
  return (schemesData.schemes as Scheme[]).filter(
    s =>
      s.name.toLowerCase().includes(q) ||
      s.tag.includes(q) ||
      s.shortDesc.toLowerCase().includes(q)
  )
}