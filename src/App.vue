<template>
<div class="rtl">
 <div class="flex flex-row" >
<a-menu class="w-2/12 h-screen rtl  bg-red-500 ">
<a-menu-item>
<router-link to="/home" @click.prevent="Add()">
  <i  class="fas fa-home"></i>  
  خانه
  </router-link>
</a-menu-item>
  
  
    

</a-menu>
   
  </div>
</div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import {useRouter} from "vue-router"

export default defineComponent({
  name: 'App',
  
  setup() {
    const Router=useRouter();
    function Add (){
      Router.push("./home")
    }
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
      Add
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
})
</script>

<style>
#app {

}
</style>
