<template>
  <div :class="classPrint">
    <table cellspacing="0">
      <thead>
        <tr>
          <td :class="classHeader">
            <slot name="header"></slot>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td :class="classBody">
            <slot name="body"></slot>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td :class="classFooter">
            <slot name="footer"></slot>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  name: "Print",
  props: {
    classPrint: {
      type: String,
      require: false,
      default: "",
    },
    classHeader: {
      type: String,
      require: false,
      default: "print",
    },
    classBody: {
      type: String,
      require: false,
      default: "print",
    },
    classFooter: {
      type: String,
      require: false,
      default: "print",
    },
  },
};
</script>
<style scoped>
table > tbody {
  overflow: visible;
}
thead {
  display: table-header-group;
}
tfoot {
  display: table-footer-group;
}
thead th,
thead td {
  position: static;
}
thead tr {
  position: static;
}
table tfoot tr {
  position: static;
}
</style>
