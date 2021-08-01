<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:13:37
 * @LastEditors: mjqin
 * @LastEditTime: 2021-08-01 22:41:46
-->
<script>
import MenuItem from "./MenuItem.vue"
import MenuChildern from "./MenuChildren.vue"
import { Icon } from "view-design"
import { cloneDeep } from "lodash"
import Bus from "../../utils/eventBus"

export default {
  name: "Menu",
  componentName: "Menu",
  components: { MenuItem, Icon, MenuChildern },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    defaultActiveName: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "240px",
    },
    menuKey: {
      type: String,
      default: "",
    },
  },
  provide() {
    return {
      rootMenu: this,
    }
  },
  computed: {
    menuStyle() {
      return {
        width: this.width,
      }
    },
    menuClass() {
      return {
        "menu-container": true,
      }
    },
  },
  data() {
    return {
      menuData: cloneDeep(this.data),
      activeName: this.defaultActiveName,
      openedNames: [],
    }
  },
  created() {
    Bus.$on("menu-item-click" + this.menuKey, (name) => {
      this.activeName = name
      this.$emit("change", name)
    })
    Bus.$on("sub-menu-click" + this.menuKey, (name) => {
      if (this.openedNames.includes(name)) {
        const index = this.openedNames.findIndex((item) => item === name)
        this.openedNames.splice(index, 1)
      } else {
        this.openedNames.push(name)
      }
    })
    Bus.$on("opened-menu" + this.menuKey, (parentMenus) => {
      this.openedNames = [...this.openedNames, ...parentMenus]
    })
  },
  methods: {
    // childrenMenuRender(menuItemData) {
    //   return (
    //     <li>
    //       {menuItemData.children && (
    //         <SubMenu key={menuItemData.name} name={menuItemData.name}>
    //           <div slot="title">
    //             <Icon
    //               size="20"
    //               type={menuItemData.icon}
    //             />
    //             {menuItemData.title}
    //           </div>
    //           {menuItemData.children.map((item) => {
    //             return this.childrenMenuRender(item)
    //           })}
    //         </SubMenu>
    //       )}
    //       {!menuItemData.children && (
    //         <MenuItem key={menuItemData.name} name={menuItemData.name}>
    //           {menuItemData.title}
    //         </MenuItem>
    //       )}
    //     </li>
    //   )
    // },
    getFlatArr(list) {
      const arr = []
      const flat = (data) => {
        data.forEach((item) => {
          arr.push(item)
          if (item.children && item.children.length > 0) {
            flat(item.children)
          }
        })
      }
      flat(list)
      return arr
    },
    // 根据 name 找到树结构当前项
    getTreeDataItemById(name) {
      const arr = this.getFlatArr(this.treeData)
      const item = arr.find((item) => String(item.name) === String(name))
      return item
    },
  },
  render() {
    return (
      <ul style={this.menuStyle} class={this.menuClass}>
        {this.data.length > 0 &&
          this.data.map((item) => {
            // return this.childrenMenuRender(item)
            return <MenuChildren data={item}></MenuChildren>
          })}
        {this.data.length === 0 && this.$slots.default}
      </ul>
    )
  },
  beforeDestroy() {
    Bus.$off("menu-item-active" + this.menuKey)
    Bus.$off("sub-menu-click" + this.menuKey)
    Bus.$off("opened-menu" + this.menuKey)
  },
}
</script>
<style lang="scss" scoped>
@import url("../../style/index.scss");
</style>
