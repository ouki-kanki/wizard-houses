import localfont from 'next/font/local'


export const verdana = localfont({
  src: [
    {
      path: '../fonts/verdana.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/verdana-bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/verdana-bold-italic.ttf',
      weight: '700',
      style: 'italic'
    },
  ]
})