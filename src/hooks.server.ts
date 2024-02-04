import type { Handle } from '@sveltejs/kit'

const PRELOAD_TYPES = ['js', 'css', 'font']

export const handle = (({ event, resolve }) =>
  resolve(event, {
    preload: ({ type }) => PRELOAD_TYPES.includes(type),
  })) satisfies Handle
