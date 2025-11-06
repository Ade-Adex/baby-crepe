export interface MarketItem {
  id: number
  title: string
  description: string
  chance: number
  volume: string
  votes: number
  category: 'Crypto' | 'Politics' | 'Stock' | 'Technology'
  yesLabel?: string
  noLabel?: string
}
