import {
  defineConfig,
  presetUno,
  presetWebFonts
} from 'unocss'

import { screenBreakpoints } from './src/screenBreakpoints'
import { themeColors } from './src/themeColors'
import { parentNamedGroupStatusModifier } from './unocss-named-group-status'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  theme: {
    colors: themeColors,
    boxShadow: {
    },
    screens: Object.entries(screenBreakpoints).reduce((res, [name, size]) => ({ ...res, [name]: { min: `${size}px` } }), {})
  },
  variants: [
    parentNamedGroupStatusModifier
  ],
  shortcuts: {
    'text-theme': 'text-main dark:text-maind',
    'bg-theme': 'bg-mainbg dark:bg-mainbgd'
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
