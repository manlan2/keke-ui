/**
 * Created by Administrator on 2018/1/17 0017.
 */
import Home from '../models/Home/home.vue'
import Form from '../models/Home/Form.vue'
import button from '../components/button.vue'
import datePicker from '../components/DatePicker.vue'
import otherBasic from '../components/otherBasic.vue'
import otherBasic2 from '../components/otherBasic2.vue'
import otherBasic3 from '../components/otherBasic3.vue'
import tableAndTree from '../components/dataAndtree.vue'

import dialog from '../components/dialog.vue'
import collapse from '../components/collapse.vue'
import carousel from '../components/carousel.vue'
import charts from '../components/echarts.vue'


export  default {

  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/',
          component:otherBasic,
          name:"Basic-1"
        },
        {
          path:'/button',
          component:button,
          name:"button"
        },
      {
          path:'/datePicker',
          component:datePicker,
        name:"datePicker"
        },
        {
          path:'/otherBasic',
          component:otherBasic,
          name:"Basic-1"
        },
        {
          path:'/otherBasic2',
          component:otherBasic2,
          name:"Basic-2"
        },

        {
          path:'/example',
          component:Form,
          name:"example"
        },
        {
          path:'/otherBasic3',
          component:otherBasic3,
          name:"Basic-3"
        },

        {
          path:'/tableAndTree',
          component:tableAndTree,
          name:"tableAndTree"
        },

        {
          path:'/dialog',
          component:dialog,
          name:"dialog"
        },
        {
          path:'/collapse',
          component:collapse,
          name:"collapse"
        },
        {
          path:'/carousel',
          component:carousel,
          name:"carousel"
        },
        {
          path:'/charts',
          component:charts,
          name:"charts"
        }

      ]
    }
  ]

}
