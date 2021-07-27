<script>
import MenuItem from "./MenuItem.vue"
import SubMenu from "./SubMenu.vue"
export default {
  name: "Menu",
  components: { MenuItem, SubMenu },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    activeName: {
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
        width: this.width
      }
    }
  },
  methods: {
    childrenMenuRender(menuItemData) {
      return (
        <li>
          {menuItemData.children && (
            <SubMenu key={menuItemData.name}>
              <div slot="title">{menuItemData.title}</div>
              {menuItemData.children.map((item) => {
                return this.childrenMenuRender(item)
              })}
            </SubMenu>
          )}
          {!menuItemData.children && (
            <MenuItem key={menuItemData.name}>{menuItemData.title}</MenuItem>
          )}
        </li>
      )
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
}
</script>
