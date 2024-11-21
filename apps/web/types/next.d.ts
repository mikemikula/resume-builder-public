/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />

import type { NextPage } from 'next'

declare module 'next' {
  interface CustomLayout {
    className: string
  }
} 