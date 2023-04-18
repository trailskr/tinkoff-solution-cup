import {
  defineConfig,
  presetUno,
  presetWebFonts
} from 'unocss'

import { screenBreakpoints } from './screenBreakpoints'
import { parentNamedGroupStatusModifier } from './unocss-named-group-status'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  theme: {
    colors: {
    },
    boxShadow: {
    },
    screens: Object.entries(screenBreakpoints).reduce((res, [name, size]) => ({ ...res, [name]: { min: `${size}px` } }), {})
  },
  variants: [
    parentNamedGroupStatusModifier
  ],
  shortcuts: {
    // 'text-theme': 'text-black',
  },
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Roboto'
      }
    })
  ]
})
