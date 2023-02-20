/**
 * @description  按需引入Vant
*/
import type { App } from 'vue'
import { Button, Cell, CellGroup, DropdownItem, DropdownMenu, Field, Form, Icon, Image, Lazyload, List, NavBar, Search, Sticky, Tab, Tabbar, TabbarItem, Tabs, Toast } from 'vant'
const pluginsVant = [
  Button,
  Tabbar,
  TabbarItem,
  Sticky,
  NavBar,
  Icon,
  Search,
  DropdownMenu,
  DropdownItem,
  Image,
  Lazyload,
  Tabs,
  Tab,
  Toast,
  Field,
  Cell,
  CellGroup,
  Form,
  List,
]
export const vantPlugins = {
  install(vm: App<Element>) {
    pluginsVant.forEach((item: any) => {
      vm.component(item.name, item)
    })
  },
}
