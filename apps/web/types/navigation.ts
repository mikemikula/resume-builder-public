export interface NavigationItem {
  id: string
  short: string
  label: string
}

export interface NavigationConfig {
  sections: NavigationItem[]
} 