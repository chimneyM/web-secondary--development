import Vue from "vue";
import App from "./App.vue";
// 按需引入组件，引入方式见https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru
import {
  Input,
  Select,
  Option,
  Form,
  FormItem,
  RadioGroup,
  Radio, InputNumber,
  RadioButton,
  Button,
  Switch,
} from "element-ui";
import "./index.css";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Select);
Vue.use(Option);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Switch);
Vue.use(Button);

// Vue.use(Element);

if (process.env.NODE_ENV !== "production") {
  const appArr = [
    { title: "设计页组件", type: "set" },
    { title: "设计页属性组件", type: "designConfiguration" },
    { title: "新增/编辑 主表组件", type: "add" },
    { title: "新增/编辑 主表多字段组件", type: "addMultiple" },
    { title: "新增/编辑 子表组件", type: "child" },
    { title: "列表页组件", type: "table" },
    { title: "详情页组件", type: "preview" },
  ];

  const customConfig = {
    componentId: "111",
    data: "",
    saveValue: [],
    component: {
      columnStyle: {
        title: "二开测试title",
      },
    },

    formConfig: {
      form_name: "二开数据",
    },
    onChange: values => {
      console.log(values);
    },
    changeConfiguration: values => {
      console.log(values);
    },
    configuration: '',
  };

  new Vue({
    render: h => {
      return (
        <div class="app-container">
          {appArr.map((item, index) => {
            return (
              <div class="components">
                <span class="title">{item.title}：</span>
                <App
                  style={{ width: "calc(100% - 220px)" }}
                  customConfig={customConfig}
                  type={item.type}
                />
              </div>
            );
          })}
        </div>
      );
    },
  }).$mount("#app");
} else {
  if (!window.CUSTOM_PLUGIN) {
    window.CUSTOM_PLUGIN = new Map();
  }

  window.CUSTOM_PLUGIN.set(process.env.VUE_APP_CUSTOM_PLUGIN_ID, (dom, props, _, eventBus) => {


    const component = new Vue({
      render: (h) => <App type={props.type} customConfig={props} key={new Date().getTime()} />,
    }).$mount();
    if (dom.childNodes.length > 0) {
      dom.removeChild(dom.childNodes[0]);
    }
    dom.appendChild(component.$el);

    // eventBus.on((props) => {
    // console.log(props, '8000');
    //   const component = new Vue({
    //     render: (h) => <App type={props.type} customConfig={props} key={new Date().getTime()} />,
    //   }).$mount();
    //   if (dom.childNodes.length > 0) {
    //     dom.removeChild(dom.childNodes[0]);
    //   }
    //   dom.appendChild(component.$el);
    // });
    // console.log();
    props.setSetPluginProps((props) => {
      if (dom.childNodes.length > 0) {
        dom.removeChild(dom.childNodes[0]);
      }
      const divs = document.createElement("div");
      dom.appendChild(divs);
      new Vue({
        render: (h) => <App platformProps={{ ...props }} />,
      }).$mount(divs);
    });




  });


}
