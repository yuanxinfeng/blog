<template>
  <div>
    <div
      class="highlight-title"
      :style="{display:'block', top: curLiTop+'px', height: curLiHeight+'px'}"
    ></div>
    <ul class="nav-list">
      <li v-for="(nav, index) in list" :key="index">
        <a :href="s+nav.index" :class="{active: highlightIndex === nav.index}">{{nav.title}}</a>
        <markdown-titles
          :list="nav.children"
          :highlightIndex="highlightIndex"
          v-if="nav.children.length > 0"
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "markdown-titles",
  props: ["list", "highlightIndex", "curLiHeight", "curLiTop"],
  data() {
    return {
      s: "#titleAnchor-"
    };
  }
  // mounted
};
</script>
<style lang="scss">
.nav-list {
  margin-left: 20px;
  list-style: square;
  padding-left: 0;
  li {
    list-style: square;
  }
  a {
    display: block;
    color: #333;
    font-size: 16px;
    line-height: 35px;
    &:link,
    &:visited {
      text-decoration: none;
    }

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: #009a61;
      font-weight: 600;
    }
  }
}

.highlight-title {
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  background: #f3f3f3;
  z-index: -1;
  border-left: 2px solid #009a61;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
</style>