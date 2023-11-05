import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      bg: '#fff',
      base: 'rgb(60,114,204)',
      second: 'rgb(99,142,214)',
      third: 'rgb(216,227,245)',
      assist: 'rgb(240,240,246)',
      list: 'rgb(248,248,252)',
      listTwo: 'rgb(244,244,250)',
      success: 'rgb(77,179,124)',
      error: 'rgb(242,13,94)',
      fail: 'rgb(153,153,153)',
      warm: 'rgb(217,164,38)',
      model: 'rgb(180, 186, 82)'
    },
    fontFamily: {
      opm: 'OPM',
      opb: 'OPB',
      opr: 'OPR'
    }
  },
  shortcuts: [
    {
      aCenter: 'absolute top-50% left-50% translate-x--50% translate-y--50%',
      wordBtn: 'cursor-pointer hover:color-red text-14px',
      count:
        'bg-#3c72cc33 color-base h-32px text-right b-rounded-2 pr-10px pt-5px pb-5px', // 数量类样式
      status:
        'inline-block color-bg leading-32px text-14px b-rounded-4 h-32px pl-16px pr-16px', // 状态框样式
      information:
        'inline-flex items-center bg-#3c72cc33 leading-32px color-base text-14px b-rounded-4 h-32px pl-10px pr-10px', // 重要信息框样式
      // 表格内相关样式
      tableSvg: 'w-20px h-20px',
      spColumn: 'flex leading-32px items-center', // 运营商表格列样式
      timeColumn: 'black-60', // 时间类表格列样式
      // 展开收起键
      expandBtn:
        'inline-flex items-center justify-center b-rounded-2 w-40px h-40px leading-40px text-base bg-third text-16px cursor-pointer hover:b-rounded-4',
      unfold: 'h-auto'
    },
    [/^black-(\d+)$/, ([, d]) => `color-#000 text-opacity-${d}`],
    [/^closed-(\d+)$/, ([, d]) => `overflow-hidden h-${d}px`]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true
    }),
    presetTypography()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-mdi-inbox-full-outline',
    'i-mdi-folder-heart-outline',
    'i-mdi-comment-eye-outline',
    'i-mdi-text-box-check-outline',
    'i-mdi-medal-outline'
  ]
});
