import intl from 'react-intl-universal';
const data = [
  [
    intl.get('SRC.MONTH'),
    intl.get('COMM.EXPORT_VOLUME'),
    intl.get('COMM.IMPORT_VOLUME'),
  ],
  [intl.get('SRC.JANUARY'), 300, 400],
  [intl.get('SRC.FEBRUARY'), 310, 230],
  [intl.get('SRC.MARCH'), 510, 630],
];
const singleValueData = [
  [intl.get('SRC.MONTH'), intl.get('COMM.EXPORT_VOLUME')],
  [intl.get('SRC.JANUARY'), 300],
  [intl.get('SRC.FEBRUARY'), 400],
  [intl.get('SRC.MARCH'), 500],
];
const groupData = [
  [
    intl.get('COMM.SALES_CLASSIFICATION'),
    intl.get('COMM.SALES_DATE'),
    intl.get('COMM.SA'),
  ],
  [intl.get('SRC.MARINADE'), '2018-01', 719651],
  [intl.get('SRC.POWDER_COATING'), '2018-01', 549538],
  [intl.get('SRC.SAUCE'), '2018-01', 1082387],
  [intl.get('SRC.DUSTING'), '2018-01', 56481],
  [intl.get('SRC.POWDER_COATING'), '2019-01', 5073430.8],
  [intl.get('SRC.MARINADE'), '2019-01', 189440],
  [intl.get('SRC.SAUCE'), '2019-01', 872831.7],
  [intl.get('SRC.DUSTING'), '2019-01', 611845],
];
const indexData = [[intl.get('SRC.TASK_VOLUME')], [260]];

const data1 = [
  [
    intl.get('SRC.FULL_NAME'),
    intl.get('REPO.SCORE'),
    intl.get('COMM.BACKBOARD'),
    intl.get('COMM.ASSISTS'),
    intl.get('COMM.AN_ERROR'),
  ],
  [intl.get('SRC.JORDAN'), 27.8, 7.8, 6.8, 2.04],
  [intl.get('SRC.KOBE'), 26.3, 5.6, 2.6, 2.4],
  [intl.get('SRC.IVERSON'), 25.6, 3.5, 7.9, 2.8],
];

const showModules = ['report', 'bigScreen'];

export const chartTemplates = [
  {
    type: '110',
    category: 'pie',
    name: intl.get('SRC.RADAR_CHART'),
    thumbnail: 'chart_110.png',
    rawData: data1,
    themes: [],
    showModules,
  },
  {
    type: '114',
    category: 'line',
    name: intl.get('SRC.BLC'),
    thumbnail: 'chart_114.png',
    rawData: data,
    themes: [],
    showModules,
  },
  {
    type: '116',
    category: 'line',
    name: intl.get('SRC.GLC'),
    thumbnail: 'chart_116.png',
    rawData: groupData,
    themes: [],
    showModules,
  },
  {
    type: '102',
    category: 'column',
    name: intl.get('SRC.FOUNDATION_HISTOGRAM'),
    thumbnail: 'chart_102.png',
    rawData: data,
    themes: [],
    showModules,
  },
  {
    type: '108',
    category: 'column',
    name: intl.get('SRC.FBC'),
    thumbnail: 'chart_108.png',
    rawData: data,
    themes: [],
    showModules,
  },
  {
    type: '127',
    category: 'column',
    name: intl.get('SRC.GROUPING_HISTOGRAM'),
    thumbnail: 'chart_127.png',
    rawData: groupData,
    themes: [],
    showModules,
  },
  {
    type: '128',
    category: 'column',
    name: intl.get('SRC.GBC'),
    thumbnail: 'chart_128.png',
    rawData: groupData,
    themes: [],
    showModules,
  },
  {
    type: '201',
    category: 'column',
    name: intl.get('SRC.GSH'),
    thumbnail: 'chart_201.png',
    rawData: groupData,
    themes: [],
    showModules,
  },
  {
    type: '120',
    category: 'area',
    name: intl.get('SRC.LAM'),
    thumbnail: 'chart_120.png',
    rawData: data,
    themes: [],
    showModules,
  },
  {
    type: '121',
    category: 'area',
    name: intl.get('SRC.SLA'),
    thumbnail: 'chart_121.png',
    rawData: groupData,
    themes: [],
    showModules,
  },
  {
    type: '103',
    category: 'pie',
    name: intl.get('SRC.BPC'),
    thumbnail: 'chart_103.png',
    rawData: singleValueData,
    themes: [],
    showModules,
  },
  {
    type: '131',
    category: 'pie',
    name: intl.get('SRC.DPC'),
    thumbnail: 'chart_131.png',
    rawData: groupData,
    themes: [],
    showModules,
  },
  {
    type: '132',
    category: 'pie',
    name: intl.get('SRC.SECTOR_DIAGRAM'),
    thumbnail: 'chart_132.png',
    rawData: singleValueData,
    themes: [],
    showModules,
  },
  {
    type: '133',
    category: 'pie',
    name: intl.get('SRC.RSC'),
    thumbnail: 'chart_133.png',
    rawData: [
      ['Q1', intl.get('COMM.JANUARY').d('1月份'), '', 29],
      [
        'Q1',
        intl.get('COMM.FEBRUARY').d('2月份'),
        intl.get('COMM.FIRST_WEEK'),
        63,
      ],
      ['Q1', intl.get('COMM.FEBRUARY').d('2月份'), intl.get('COMM.TSW'), 54],
      [
        'Q1',
        intl.get('COMM.FEBRUARY').d('2月份'),
        intl.get('COMM.THIRD_WEEK'),
        91,
      ],
      [
        'Q1',
        intl.get('COMM.FEBRUARY').d('2月份'),
        intl.get('COMM.FOURTH_WEEK'),
        78,
      ],
      ['Q1', intl.get('COMM.MARCH').d('3月份'), '', 49],
      ['Q2', intl.get('COMM.APRIL').d('4月份'), '', 66],
      ['Q2', intl.get('COMM.MAY').d('5月份'), '', 110],
      ['Q2', intl.get('COMM.JUNE').d('6月份'), '', 42],
      ['Q3', intl.get('COMM.JULY').d('7月份'), '', 19],
      ['Q3', intl.get('COMM.AUGUST').d('8月份'), '', 73],
      ['Q3', intl.get('COMM.SEPTEMBER').d('9月份'), '', 109],
      ['Q4', intl.get('COMM.OCTOBER').d('10月份'), '', 32],
      ['Q4', intl.get('COMM.NOVEMBER').d('11月份'), '', 112],
      ['Q4', intl.get('COMM.DECEMBER').d('12月份'), '', 99],
    ],
    options: {
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
          },
        },
      },
    },
    themes: [],
    showModules,
  },
  {
    type: '408',
    category: 'pie',
    name: intl.get('SRC.RING_DIAGRAM'),
    thumbnail: 'chart_408.png',
    rawData: singleValueData,
    themes: [],
    showModules,
  },
  {
    type: '405',
    category: 'index',
    name: intl.get('SRC.INDEX_CARD'),
    thumbnail: 'chart_405.png',
    rawData: indexData,
    themes: [],
    renderer: 'indicator',
    showModules,
  },
  {
    type: '109',
    category: 'index',
    name: intl.get('SRC.SPEEDOMETER'),
    thumbnail: 'chart_109.png',
    rawData: indexData,
    themes: [],
    showModules,
  },
  {
    type: '134',
    category: 'index',
    name: intl.get('SRC.DASHBOARD'),
    thumbnail: 'chart_134.png',
    rawData: indexData,
    themes: [],
    showModules,
  },
  {
    type: '601',
    category: 'other',
    name: intl.get('SRC.FORM'),
    thumbnail: 'chart_601.png',
    renderer: 'table',
    rawData: data,
    options: {},
    themes: [],
    columnAttribute: [],
    filterColumns: [],
    displays: [],
    formats: [],
    btns: [],
    showModules,
  },
  {
    type: '602',
    category: 'other',
    name: intl.get('SRC.PROGRESS_BAR'),
    thumbnail: 'chart_602.png',
    renderer: 'echarts',
    rawData: singleValueData,
    themes: [],
    showModules,
  },
  {
    type: '603',
    category: 'other',
    name: intl.get('SRC.WPD'),
    thumbnail: 'chart_603.png',
    renderer: 'echarts',
    rawData: [[intl.get('SRC.TASK_VOLUME')], [0.26]],
    themes: [],
    showModules,
  },
  {
    type: '604',
    category: 'other',
    name: intl.get('SRC.LIST'),
    thumbnail: 'chart_604.png',
    renderer: 'list',
    width: 600,
    height: 360,
    rawData: [
      [
        intl.get('SRC.FULL_NAME'),
        intl.get('SRC.DOE'),
        intl.get('SRC.PCPC'),
        intl.get('SRC.PLACE_NAME'),
        intl.get('SRC.MILITARY_RANK'),
        intl.get('SRC.JOB_LEVEL'),
        intl.get('SRC.NATION'),
        intl.get('SRC.HEALTH'),
        intl.get('SRC.POLITICAL_OUTLOOK'),
        intl.get('SRC.DOB'),
        intl.get('SRC.ENLISTMENT_TIME'),
        intl.get('SRC.EPN'),
        intl.get('SRC.CONNECTION_TIME'),
        intl.get('SRC.WORKING_HOURS'),
        intl.get('SRC.PALT'),
        intl.get('SRC.POST'),
        intl.get('SRC.FIRST_DEGREE'),
        intl.get('SRC.HEIGHT'),
        intl.get('SRC.DATA_TIME'),
      ],
      [
        intl.get('SRC.XIAO_MING'),
        intl.get('SRC.MASTER'),
        intl.get('SRC.AN_INSTRUCTOR'),
        intl.get('SRC.MEISHAN_CITY'),
        intl.get('SRC.MAJOR_GENERAL'),
        intl.get('SRC.HTP'),
        intl.get('SRC.MEISHAN_CITY'),
        intl.get('SRC.HEALTHY'),
        intl.get('SRC.CPC_MEMBER'),
        '1970-10-14',
        '1996-01-13',
        intl.get('SRC.TANGSHAN_CITY'),
        '2015-09-04',
        '1996-11-24',
        '1996-04-01',
        intl.get('SRC.POLITICAL_COMMISSAR'),
        intl.get('SRC.MASTER'),
        '171cm',
        '2016-04-24',
      ],
    ],
    themes: [],
    limitNumber: 1,
    filterColumns: [],
    columnAttribute: [],
    displays: [],
    showModules: ['bigScreen'],
  },
  {
    type: '605',
    category: 'other',
    name: intl.get('SRC.USER_LIST'),
    thumbnail: 'chart_605.png',
    renderer: 'other',
    width: 560,
    height: 180,
    rawData: [],
    themes: [],
    columnAttribute: [
      { name: intl.get('SRC.PICTURE'), mapping: true },
      { name: intl.get('SRC.POST'), mapping: true },
      { name: intl.get('SRC.FULL_NAME'), mapping: true },
      { name: intl.get('SRC.TELEPHONE'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '606',
    category: 'other',
    name: intl.get('SRC.META'),
    thumbnail: 'chart_606.png',
    renderer: 'other',
    width: 560,
    height: 320,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 1,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('SRC.TITLE_FIELD'), mapping: true },
      { name: intl.get('SRC.EMPHASIS_FIELD'), mapping: true },
      { name: intl.get('SRC.CONTENT_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '607',
    category: 'other',
    name: intl.get('SRC.SDA'),
    thumbnail: 'chart_607.png',
    renderer: 'other',
    width: 560,
    height: 240,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 1,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('SRC.TITLE_FIELD'), fixed: true },
      { name: intl.get('SRC.BODY_FIELD'), mapping: true },
      { name: intl.get('SRC.TIME_FIELD'), mapping: true },
    ],
    // {intl.get('SRC.WTASTIE')}
    childTable: true,
    // {intl.get('SRC.ASTV')}
    childTableValue: '',
    // {intl.get('SRC.ASTFP')}
    childTableColumnAttribute: [{ name: 'ID' }],
    // {intl.get('SRC.ASTD')}
    childTableList: [],
    childTableColumnList: [],
    childTableDataList: [],
    showModules: ['bigScreen'],
  },
  {
    type: '608',
    category: 'other',
    name: intl.get('SRC.WEATHER_ZONE'),
    thumbnail: 'chart_608.png',
    renderer: 'other',
    width: 460,
    height: 320,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 1,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('SRC.WEATHER_FIELD'), mapping: true },
      { name: intl.get('SRC.LEVEL_FIELD'), mapping: true },
      { name: intl.get('SRC.TIME_FIELD'), mapping: true },
      { name: intl.get('SRC.REGION_FIELD'), mapping: true },
      { name: intl.get('SRC.ISSUED_BY'), mapping: true },
      { name: intl.get('SRC.CONTENT_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '609',
    category: 'other',
    name: intl.get('SRC.TLWP'),
    thumbnail: 'chart_609.png',
    renderer: 'other',
    width: 560,
    height: 800,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 10,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('SRC.TIME_FIELD'), mapping: true },
      { name: intl.get('SRC.CONTENT_FIELD'), mapping: true },
      { name: intl.get('SRC.PICTURE_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '614',
    category: 'other',
    name: intl.get('SRC.STL'),
    thumbnail: 'chart_614.png',
    renderer: 'other',
    width: 750,
    height: 500,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 10,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('SRC.TIME_FIELD'), mapping: true },
      { name: intl.get('SRC.MAIN_FIELDS'), mapping: true },
      { name: intl.get('SRC.DESCRIPTION_FIELD'), mapping: true },
    ],
    pendingStyle: {
      flagBgColor: '#20FDFA',
      bodyBgColor: '#104CA0',
      valueSize: 18,
      valueColor: '#DCDDDD',
    },
    showModules: ['bigScreen'],
  },
  {
    type: '610',
    category: 'other',
    name: intl.get('SRC.RTPA'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 520,
    height: 404,
    rawData: [
      [
        intl.get('SRC.TITLE_FIELD'),
        intl.get('SRC.BODY_FIELD'),
        intl.get('SRC.PICTURE_FIELD'),
      ],
      [
        intl.get('SRC.LATEST_INSTRUCTIONS'),
        '呼和浩特市人民政府突发公共事件应急管理办公室：\n \t请严密关注防汛动向，加强信息报送，做好各项防汛准备工作。',
        [
          { url: 'image1', name: 'image1' },
          { url: 'image1', name: 'image1' },
          { url: 'image1', name: 'image1' },
          { url: 'image1', name: 'image1' },
        ],
      ],
    ],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 10,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      // { name: intl.get('SRC.TITLE_FIELD'), fixed: true },
      { name: intl.get('SRC.TITLE_FIELD'), mapping: true },
      { name: intl.get('SRC.CONTENT_FIELD'), mapping: true },
      { name: intl.get('SRC.PICTURE_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  // {
  //   type: '616',
  //   category: 'other',
  //   name: intl.get('SRC.ELA'),
  //   thumbnail: 'chart_616.png',
  //   renderer: 'other',
  //   width: 500,
  //   height: 1000,
  //   rawData: [[intl.get('SRC.LABEL_I'), intl.get('SRC.LABEL_II')]],
  //   themes: [],
  //   showModules: ['bigScreen'],
  // },
  // {
  //   type: '618',
  //   category: 'other',
  //   name: intl.get('SRC.RTEA'),
  //   thumbnail: 'chart_618.png',
  //   renderer: 'other',
  //   width: 560,
  //   height: 940,
  //   rawData: [],
  //   themes: [],
  //   columnAttribute: [
  //     { name: intl.get('SRC.EVENT_TYPE'), mapping: true },
  //     { name: '事故灾害', mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: intl.get('APP.TIME'), mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: '所在路径', mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: '所在方向', mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: '起点桩号', mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: '止点桩号', mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: '影响程度', mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: intl.get('CUST.SOI'), mapping: true, type: intl.get('COMM.TRAFFIC_ACCIDENT') },
  //     { name: '事故灾害', mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: intl.get('APP.TIME'), mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: '所在路径', mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: '所在方向', mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: '起点桩号', mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: '止点桩号', mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: '影响程度', mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: intl.get('CUST.SOI'), mapping: true, type: intl.get('COMM.TRAFFIC_CONTROL') },
  //     { name: '事故灾害', mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: intl.get('APP.TIME'), mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: '所在路径', mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: '所在方向', mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: '起点桩号', mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: '止点桩号', mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: '影响程度', mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: intl.get('CUST.SOI'), mapping: true, type: intl.get('COMM.NATURAL_DISASTER') },
  //     { name: '事故灾害', mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: intl.get('APP.TIME'), mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: '受阻路段', mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: '阻断类型', mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: '起点桩号', mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: '止点桩号', mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: '阻断原因', mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: '处置措施', mapping: true, type: intl.get('COMM.BLOCK_INFORMATION') },
  //     { name: intl.get('SRC.STATE'), mapping: true },
  //     { name: intl.get('SRC.LINK_JUMP'), mapping: true },
  //   ],
  //   showModules: ['bigScreen'],
  // },
  {
    type: '619',
    category: 'other',
    name: intl.get('SRC.BUSINESS_CARD'),
    thumbnail: 'chart_619.png',
    renderer: 'other',
    width: 560,
    height: 300,
    rawData: [],
    themes: [],
    columnAttribute: [
      { name: intl.get('SRC.NAME_FIELD'), mapping: true },
      { name: intl.get('SRC.SECONDARY_FIELD'), mapping: true },
      { name: intl.get('SRC.SUFFIX'), fixed: true },
      { name: intl.get('SRC.DETAIL_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  // {
  //   type: '620',
  //   category: 'other',
  //   name: intl.get('SRC.DSLA'),
  //   thumbnail: 'chart_620.png',
  //   renderer: 'other',
  //   width: 560,
  //   height: 300,
  //   rawData: [],
  //   themes: [],
  //   displayKind: [{ value: '', type: 1 }],
  //   columnAttribute: [
  //     { name: intl.get('SRC.GROUPING_FIELD'), mapping: true, multiple: true },
  //     { name: intl.get('SRC.TITLE'), mapping: true },
  //     { name: intl.get('SRC.DF1'), mapping: true },
  //     { name: intl.get('SRC.DF2'), mapping: true },
  //     { name: intl.get('SRC.AGGREGATE_FIELD'), mapping: true },
  //     { name: intl.get('SRC.ATF'), mapping: true },
  //     { name: intl.get('SRC.PREFIX'), fixed: true },
  //     { name: intl.get('SRC.SUFFIX'), fixed: true },
  //   ],
  //   showModules: ['bigScreen'],
  // },
  {
    type: '611',
    category: 'pie',
    name: intl.get('SRC.ROSE_CHART'),
    thumbnail: 'chart_611.png',
    renderer: 'echarts',
    rawData: singleValueData,
    themes: [],
    showModules,
  },
  {
    type: '613',
    category: 'other',
    name: intl.get('SRC.TDL'),
    thumbnail: 'chart_613.png',
    renderer: 'other',
    rawData: [],
    themes: [],
    width: 518,
    height: 525,
    pendingStyle: {
      title: intl.get('SRC.TDL'),
      titleSize: 24,
      titleColor: '#ffffff',
      valueSize: 18,
      valueColor: '#2070fb',
      pageSize: 5,
    },
    showModules: ['bigScreen'],
  },
  {
    type: '612',
    category: 'other',
    name: intl.get('SRC.ARROW_ANIMATION'),
    thumbnail: 'chart_612.png',
    renderer: 'other',
    rawData: [],
    themes: [],
    showModules: ['bigScreen'],
  },
  {
    type: '621',
    category: 'other',
    name: intl.get('SRC.USER_INFORMATION'),
    thumbnail: 'chart_605.png',
    renderer: 'other',
    width: 534,
    height: 294,
    rawData: [],
    themes: [],
    columnAttribute: [
      { name: intl.get('SRC.PICTURE'), mapping: true },
      { name: intl.get('SRC.NAME'), mapping: true },
      { name: intl.get('SRC.GENDER'), mapping: true },
      { name: intl.get('COMM.AGE'), mapping: true },
      { name: intl.get('SRC.NATIVE_PLACE'), mapping: true },
      { name: intl.get('SRC.MOBILE_PHONE'), mapping: true },
      { name: intl.get('SRC.DOCUMENT_TYPE'), mapping: true },
      { name: intl.get('SRC.IDENTIFICATION_NUMBER'), mapping: true },
      { name: intl.get('SRC.LICENSE_PLATE'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  // {
  //   type: '625',
  //   category: 'other',
  //   name: intl.get('SRC.SCROLL_CARD'),
  //   thumbnail: 'chart_601.png',
  //   renderer: 'other',
  //   width: 502,
  //   height: 302,
  //   rawData: [],
  //   themes: [],
  //   // {intl.get('SRC.SCROLL_DURATION')}
  //   timerFlag: true,
  //   timer: 500,
  //   speed: 3000,
  //   // {intl.get('SRC.OSIVIS')}
  //   assetsOnly: true,
  //   scrollData: {},
  //   // {intl.get('EX.DST')}
  //   dataSourceType: 3,
  //   // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值, unit是否需要添加单位
  //   columnAttribute: [
  //     { name: intl.get('SRC.TITLE_FIELD'), mapping: true },
  //     { name: intl.get('COMM.CF1').d('内容字段1'), mapping: true, unit: true },
  //     { name: intl.get('COMM.CF2').d('内容字段2'), mapping: true, unit: true },
  //     { name: intl.get('COMM.CF3').d('内容字段3'), mapping: true, unit: true },
  //     { name: intl.get('COMM.CF4').d('内容字段4'), mapping: true, unit: true },
  //   ],
  //   colorArrOn: true,
  //   pendingStyle: {
  //     unitColor: { value: '#ffffff', label: intl.get('SRC.UNIT_COLOR') },
  //     columnColor: { value: '#ffffff', label: intl.get('SRC.COLUMN_COLOR') },
  //     titleColor: { value: '#ffffff', label: intl.get('SRC.TITLE_COLOR') },
  //     valueColor: { value: '#ffffff', label: intl.get('SRC.TEXT_COLOR') },
  //   },
  //   unitArr: [],
  //   showModules: ['bigScreen'],
  // },
  {
    type: '626',
    category: 'other',
    name: intl.get('SRC.EWPW'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 520,
    height: 404,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 10,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      // { name: intl.get('SRC.TITLE_FIELD'), fixed: true },
      { name: intl.get('SRC.TITLE'), fixed: true },
      { name: intl.get('SRC.CONTENT_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '627',
    category: 'other',
    name: intl.get('SRC.ALARM_LOG'),
    thumbnail: 'chart_605.png',
    renderer: 'other',
    width: 400,
    height: 200,
    rawData: [],
    themes: [],
    columnAttribute: [
      { name: intl.get('SRC.TITLE'), mapping: true },
      { name: intl.get('SRC.TOTAL_ALARM'), mapping: true },
      { name: intl.get('SRC.ADV'), mapping: true },
      { name: intl.get('SRC.RECORD_TIME'), mapping: true },
      { name: intl.get('SRC.CRV'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '628',
    category: 'other',
    name: intl.get('SRC.EQUIPMENT_ALARM'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 640,
    height: 144,
    rawData: [],
    themes: [],
    columnAttribute: [
      { name: intl.get('SRC.PICTURE_ADDRESS'), mapping: true },
      { name: intl.get('SRC.EQUIPMENT_NAME'), mapping: true },
      { name: intl.get('SRC.RECORD_TOTAL'), mapping: true },
      { name: intl.get('SRC.RECORD_TIME'), mapping: true },
      { name: intl.get('SRC.TAD'), mapping: true },
      { name: intl.get('SRC.FILTER_FIELD'), mapping: true },
      { name: intl.get('SRC.JUMP_ADDRESS'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '629',
    category: 'other',
    name: intl.get('SRC.MLIC'),
    thumbnail: 'chart_619.png',
    renderer: 'other',
    width: 420,
    height: 180,
    rawData: [],
    themes: [],
    title: intl.get('SRC.CARD_NAME'),
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('SRC.DTNOLE')}
    numberOn: true,
    // {intl.get('SRC.DTNOEITL')}
    number: 5,
    columnAttribute: [
      { name: intl.get('SRC.TITLE'), mapping: true, unit: false },
      { name: intl.get('SRC.LABEL'), mapping: true, unit: false },
      { name: intl.get('COMM.CF1').d('内容字段1'), mapping: true, unit: true },
      { name: intl.get('COMM.CF2').d('内容字段2'), mapping: true, unit: true },
      { name: intl.get('COMM.CF3').d('内容字段3'), mapping: true, unit: true },
      { name: intl.get('COMM.CF4').d('内容字段4'), mapping: true, unit: true },
      { name: intl.get('COMM.CF5').d('内容字段5'), mapping: true, unit: true },
    ],
    // {intl.get('SRC.ECMS')}
    colorArrOn: true,
    pendingStyle: {
      lineColor: { value: 'rgba(0,0,0,0)', label: intl.get('SRC.LINE_COLOR') },
      tagColor: { value: '#ffd7d7', label: intl.get('SRC.LABEL_BACKGROUND') },
      tagTextColor: { value: '#f25959', label: intl.get('SRC.LABEL_FONT') },
      nameColor: { value: '#333', label: intl.get('SRC.NAME_COLOR') },
      titleColor: { value: '#333', label: intl.get('SRC.TITLE_COLOR') },
      valueColor: { value: '#333', label: intl.get('SRC.TEXT_COLOR') },
      keyColor: { value: '#666', label: intl.get('SRC.COLUMN_COLOR') },
      unitColor: { value: '#666', label: intl.get('SRC.UNIT_COLOR') },
      bgColor: {
        value: 'rgba(0,0,0,0)',
        label: intl.get('SRC.BACKGROUND_COLOR'),
      },
    },
    unitArr: [],
    analysisId: '',
    // {intl.get('SRC.TOFS')}
    styleOn: true,
    customizeStyle: '',
    showModules: ['bigScreen'],
  },
  {
    type: '630',
    category: 'other',
    name: intl.get('SRC.AIC'),
    thumbnail: 'chart_619.png',
    renderer: 'other',
    width: 420,
    height: 180,
    cardData: [],
    themes: [],
    title: intl.get('SRC.CARD_NAME'),
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.LARGE_SCREEN')}id
    bigscreenId: '',
    analysisId: '',
    // {intl.get('SRC.ECMS')}
    colorArrOn: true,
    pendingStyle: {
      lineColor: { value: '#ffffff', label: intl.get('SRC.LINE_COLOR') },
      titleColor: { value: '#333', label: intl.get('SRC.NAME_COLOR') },
      valueColor: { value: '#333', label: intl.get('SRC.TEXT_COLOR') },
      keyColor: { value: '#666', label: intl.get('SRC.COLUMN_COLOR') },
      bgColor: { value: '#fff', label: intl.get('SRC.BACKGROUND_COLOR') },
    },
    showModules: ['bigScreen'],
  },
  // {
  //   type: '631',
  //   category: 'other',
  //   name: intl.get('SRC.IWAI'),
  //   thumbnail: 'chart_631.png',
  //   renderer: 'other',
  //   width: 500,
  //   height: 200,
  //   rawData: [],
  //   themes: [],
  //   title: '',
  //   // {intl.get('EX.DST')}
  //   dataSourceType: 3,
  //   // {intl.get('SRC.OSIVIS')}
  //   assetsOnly: true,
  //   customizeLayer: '', // 分析仪的图层设置
  //   // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值, unit是否需要添加单位
  //   columnAttribute: [],
  //   showModules: ['bigScreen'],
  // },
  // {
  //   type: '632',
  //   category: 'other',
  //   name: intl.get('SRC.STATISTICAL_TABLES'),
  //   thumbnail: 'chart_632.png',
  //   renderer: 'other',
  //   width: 500,
  //   height: 300,
  //   rawData: [],
  //   themes: [],
  //   title: '',
  //   // {intl.get('EX.DST')}
  //   dataSourceType: 3,
  //   // {intl.get('SRC.OSIVIS')}
  //   assetsOnly: true,
  //   columnAttribute: [],
  //   customizeLayer: '', // 分析仪的图层设置
  //   showModules: ['bigScreen'],
  // },
  // {
  //   type: '633',
  //   category: 'other',
  //   name: intl.get('SRC.NOTIFICATION_BAR'),
  //   thumbnail: 'chart_610.png',
  //   renderer: 'other',
  //   width: 800,
  //   height: 50,
  //   rawData: [],
  //   themes: [],
  //   // {intl.get('SRC.OSIVIS')}
  //   assetsOnly: true,
  //   // {intl.get('EX.DST')}
  //   dataSourceType: 3,
  //   // {intl.get('APP.RETURN')}1条数据
  //   limitNumber: 10,
  //   // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
  //   columnAttribute: [
  //     { name: intl.get('SRC.TITLE'), fixed: true },
  //     { name: intl.get('SRC.CONTENT_FIELD'), mapping: true },
  //     { name: intl.get('SRC.TITLE_FIELD'), mapping: true },
  //     { name: intl.get('SRC.LONGITUDE'), mapping: true },
  //     { name: intl.get('SRC.LATITUDE'), mapping: true },
  //     { name: intl.get('SRC.ABSTRACT'), mapping: true },
  //   ],
  //   showModules: ['bigScreen'],
  // },
  {
    type: '640',
    category: 'other',
    name: intl.get('SRC.CHANGE_SHIFTS'),
    thumbnail: 'chart_631.png',
    renderer: 'other',
    width: 1040,
    height: 400,
    title: '',
    rawData: [],
    themes: [],
    limitNumber: 50,
    columnAttribute: [
      { name: intl.get('SRC.ESSENTIAL_FACTOR'), mapping: true },
      { name: intl.get('SRC.SEAT'), mapping: true },
      { name: intl.get('SRC.FULL_NAME'), mapping: true },
      { name: intl.get('SRC.REPORT_WORDS'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '634',
    category: 'other',
    name: intl.get('SRC.PW'),
    thumbnail: 'chart_634.png',
    renderer: 'other',
    width: 300,
    height: 140,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 1,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值,hasAdd后面有+号
    columnAttribute: [
      { name: intl.get('SRC.PICTURE_FIELD'), mapping: true },
      { name: intl.get('COMM.NAME_1').d('名称1'), fixed: true },
      {
        name: intl.get('COMM.FIELD_1').d('字段1'),
        mapping: true,
        hasAdd: true,
      },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '635',
    category: 'other',
    name: intl.get('SRC.PICTURE_WALL'),
    thumbnail: 'chart_635.png',
    renderer: 'other',
    width: 250,
    height: 140,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    // {intl.get('APP.RETURN')}1条数据
    limitNumber: 8,
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('SRC.PICTURE_FIELD'), mapping: true },
      { name: intl.get('SRC.NAME_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '636',
    category: 'other',
    name: intl.get('SRC.GMS'),
    thumbnail: 'chart_636.png',
    renderer: 'other',
    width: 300,
    height: 300,
    rawData: [],
    themes: [],
    // {intl.get('SRC.OSIVIS')}
    assetsOnly: true,
    // {intl.get('EX.DST')}
    dataSourceType: 3,
    columnAttribute: [
      { name: intl.get('SRC.GROUP_NAME'), mapping: true },
      { name: intl.get('SRC.TARGET_NAME'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '650',
    category: 'other',
    name: intl.get('SRC.ORGANIZATION_CHART'),
    thumbnail: 'chart_640.png',
    renderer: 'other',
    width: 600,
    height: 400,
    rawData: [],
    dataSourceType: 3,
    columnAttribute: [
      { name: 'id', mapping: true },
      { name: intl.get('SRC.NAME'), mapping: true },
      { name: intl.get('COMM.PARENT_ID').d('上级id'), mapping: true },
      { name: intl.get('SRC.SORT'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '637',
    category: 'other',
    name: intl.get('SRC.AGH'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 640,
    height: 100,
    dataSourceType: 3,
    rawData: [
      [
        intl.get('REPO.PNF'),
        intl.get('SRC.SCORE_FIELD'),
        intl.get('SRC.TITLE_FIELD'),
        intl.get('SRC.DATE_FIELD'),
      ],
      ['', '95', intl.get('SRC.TOTAL_SCORE'), 1608710700],
      ['0', '8', '0', 5],
    ],
    themes: [],
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('COMM.HR-PNF').d('分层规则-父节点字段'), mapping: true },
      { name: intl.get('COMM.HR-PKF').d('分层规则-主键字段'), mapping: true },
      { name: intl.get('SRC.SCORE_FIELD'), mapping: true },
      { name: intl.get('SRC.TITLE_FIELD'), mapping: true },
      { name: intl.get('SRC.DATE_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  {
    type: '638',
    category: 'other',
    name: intl.get('SRC.AGP'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 640,
    height: 230,
    dataSourceType: 3,
    rawData: [
      [
        intl.get('REPO.PNF'),
        intl.get('SRC.SCORE_FIELD'),
        intl.get('SRC.TITLE_FIELD'),
      ],
      ['', '95', intl.get('SRC.TOTAL_SCORE')],
      ['0', '8', '0'],
    ],
    themes: [],
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('COMM.HR-PNF').d('分层规则-父节点字段'), mapping: true },
      { name: intl.get('COMM.HR-PKF').d('分层规则-主键字段'), mapping: true },
      { name: intl.get('SRC.SCORE_FIELD'), mapping: true },
      { name: intl.get('SRC.TITLE_FIELD'), mapping: true },
      { name: intl.get('SRC.DATE_FIELD'), mapping: true },
    ],
    condition: [],
    groupWidth: 90,
    groupFontSize: 30,
    groupTitleFontSize: 12,
    defaultSettingBg: '',
    defaultSettingColor: '#50E1A6',
    defaultSettingSelectedBg: '',
    defaultSettingSelectedColor: '#04F9FC',
    showModules: ['bigScreen'],
  },
  {
    type: '641',
    category: 'other',
    name: intl.get('SRC.VRT'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 400,
    height: 300,
    dataSourceType: 3,
    rawData: [],
    themes: [],
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [],
    showModules: ['bigScreen'],
  },
  {
    type: '639',
    category: 'other',
    name: intl.get('SRC.ROTATION_COMPONENT'),
    thumbnail: 'chart_639.png',
    renderer: 'other',
    width: 640,
    height: 230,
    dataSourceType: 3,
    rawData: [],
    themes: [],
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [{ name: intl.get('SRC.CONTENT_FIELD'), mapping: true }],
    condition: [],
    groupWidth: 160,
    showModules: ['bigScreen'],
  },
  {
    type: '642',
    category: 'other',
    name: intl.get('SRC.ICE'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 164,
    height: 54,
    direction: 'left', // 方向
    dataSourceType: 3,
    rawData: [],
    // {intl.get('REPO.FIELD_PROPERTIES')}, mapping需要映射, fixed用户输入固定值
    columnAttribute: [
      { name: intl.get('SRC.PKF'), mapping: true },
      { name: intl.get('SRC.SCORE_FIELD'), mapping: true },
      { name: intl.get('SRC.TITLE_FIELD'), mapping: true },
    ],
    showModules: ['bigScreen'],
  },
  // intl.get('SRC.SBC')
  {
    type: '643',
    category: 'other',
    name: intl.get('SRC.SEARCH_BOX'),
    thumbnail: 'chart_610.png',
    renderer: 'other',
    width: 300,
    height: 30,
    dataSourceType: 3,
    title: '',
    rawData: [],
    condition: [],
    columnAttribute: [
      { name: intl.get('SRC.TITLE'), mapping: true },
      { name: intl.get('SRC.SUBTITLE'), mapping: true },
      { name: intl.get('SRC.SEARCH_PARAMETERS'), mapping: true },
      { name: intl.get('SRC.TRANSFER_PARAMETERS'), mapping: true },
    ],
    contentSize: [
      {
        name: intl.get('SRC.LIST_HEIGHT'),
        value: 300,
      },
      {
        name: intl.get('SRC.CONDITIONAL_HEIGHT'),
        value: 300,
      },
      {
        name: intl.get('SRC.CONDITION_WIDTH'),
        value: 300,
      },
    ], // {intl.get('SRC.CONTENT_HEIGHT')}
    showModules: ['bigScreen'],
  },
];
