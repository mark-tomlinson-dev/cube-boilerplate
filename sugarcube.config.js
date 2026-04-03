// @ts-check
import { defineConfig } from '@sugarcube-sh/cli';

export default defineConfig({
  variables: {
    path: './src/css/global/variables.gen.css',
    transforms: {
      fluid: {
        min: 330,
        max: 1230
      }
    },
  },
  utilities: {
    path: './src/css/utilities/utilities.gen.css',
    classes: {
      // Colors
      'color': {
        source: 'color.*',
        prefix: 'text'
      },
      'background-color': {
        source: 'color.*',
        prefix: 'bg'
      },

      // Spacing with directional variants
      'margin': {
        source: 'space.*',
        prefix: 'm',
        directions: ['all']
      },
      'padding': {
        source: 'space.*',
        prefix: 'p',
        directions: ['all']
      },

      // Typography
      'font-size': {
        source: 'size.*',
        prefix: 'text'
      },
      'line-height': {
        source: 'leading.*',
        prefix: 'leading'
      },
      'font-family': {
        source: 'font.*',
        prefix: 'font'
      },
      'font-weight': {
        source: 'font.weight.*',
        prefix: 'font'
      },

      // CUBE CSS custom property utilities
      '--flow-space': {
        source: 'space.*',
        prefix: 'flow-space'
      },
      '--region-space': {
        source: 'space.*',
        prefix: 'region-space'
      },
      '--gutter': {
        source: 'space.*',
        prefix: 'gutter'
      }

    }
  }
});
