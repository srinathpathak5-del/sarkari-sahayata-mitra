// File location: types/scheme.ts
// CHANGE: Added "type" field to Scheme interface (line 28)

export interface SchemeDocument {
  name: string
  mandatory: boolean
}

export interface ApplicationStep {
  step: number
  title: string
  desc: string
}

export interface FAQ {
  q: string
  a: string
}

export interface YoutubeVideo {
  title: string
  videoId: string
}

export interface Scheme {
  id: string
  type: 'yojana' | 'loan' | 'insurance'
  slug: string
  name: string
  nameEn: string
  icon: string
  category: string[]
  tag: string
  benefit: string
  ministry: string
  launchYear: number
  officialUrl: string
  metaTitle: string
  metaDesc: string
  shortDesc: string
  fullDesc: string
  eligibility: string[]
  notEligible: string[]
  documents: SchemeDocument[]
  benefits: string[]
  applicationSteps: ApplicationStep[]
  commonMistakes: string[]
  faq: FAQ[]
  helplineNumber: string
  youtubeVideos: YoutubeVideo[]
  lastUpdated: string
  active: boolean
}