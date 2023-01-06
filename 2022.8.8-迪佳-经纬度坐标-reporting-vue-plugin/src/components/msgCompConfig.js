// 组件可派发事件
export const events = [
  {
    key: "bulr",
    name: "组件失焦",
    payload: [
      {
        name: "内容",
        key: "value",
        dataType: "string",
      },
    ],
  },
];

// 组件可接收事件
export const actions = [
  {
    key: "setValue",
    name: "设值",
    isSupportChild: true, // 是否支持子表
    params: [
      {
        key: "value",
        name: "值",
        dataType: "string",
      },
    ],
  },
  {
    key: "getValue",
    name: "取值",
    isSupportChild: true, // 是否支持子表
    hasReturn: true,
    returns: [
      {
        key: "value",
        name: "值",
        dataType: "string",
      },
    ],
  },
];

export default {
  actions,
  events,
};
