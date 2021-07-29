<!--
 * @Description: Description
 * @Author: mjqin
 * @Date: 2021-07-26 23:13:37
 * @LastEditors: mjqin
 * @LastEditTime: 2021-07-30 00:54:00
-->
<script>
import MenuItem from "./MenuItem.vue"
import SubMenu from "./SubMenu.vue"
import { cloneDeep } from "lodash"
import Bus from "../utils/eventBus"

export default {
  name: "Menu",
  componentName: "Menu",
  components: { MenuItem, SubMenu },
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
  },
  data() {
    return {
      menuData: cloneDeep(this.data),
      activeName: this.defaultActiveName,
      openedNames: [],
    }
  },
  created() {
    Bus.$on("menu-item-click", (name) => (this.activeName = name))
    Bus.$on("sub-menu-click", (name) => {
      if (this.openedNames.includes(name)) {
        const index = this.openedNames.findIndex((item) => item === name)
        this.openedNames.splice(index, 1)
      } else {
        this.openedNames.push(name)
      }
    })
  },
  methods: {
    childrenMenuRender(menuItemData) {
      return (
        <li>
          {menuItemData.children && (
            <SubMenu key={menuItemData.name} name={menuItemData.name}>
              <div slot="title">{menuItemData.title}</div>
              {menuItemData.children.map((item) => {
                return this.childrenMenuRender(item)
              })}
            </SubMenu>
          )}
          {!menuItemData.children && (
            <MenuItem key={menuItemData.name} name={menuItemData.name}>
              {menuItemData.title}
            </MenuItem>
          )}
        </li>
      )
    },
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
      <ul style={this.menuStyle}>
        {this.data.map((item) => {
          return this.childrenMenuRender(item)
        })}
      </ul>
    )
  },
  beforeDestroy() {
    Bus.$off("menu-item-active")
    Bus.$off("sub-menu-click")
  },
}
</script>
