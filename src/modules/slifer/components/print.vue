<template>
  <div :class="`sprint ${classCard}`">
    <table cellspacing="0">
      <thead>
        <tr>
          <td :class="`print-header ${classHeader}`"><slot name="header"></slot></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td :class="`print-header ${classBody}`"><slot name="body"></slot></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td :class="`print-footer ${classFooter}`"><slot name="footer"></slot></td>
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
      default: "",
    },
    classBody: {
      type: String,
      require: false,
      default: "",
    },
    classFooter: {
      type: String,
      require: false,
      default: "",
    },
  },
};
</script>
<style scoped>
div.conteudodatabela {
  overflow: visible;
}
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
