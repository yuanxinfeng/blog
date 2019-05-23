<template>
  <div class="app-container">
    <div class="card" v-for="(item, index) in article_list" :key="index">
      <h3 class="title">{{ item.article_title }}</h3>
      <div class="content">
        <span>{{ item.article_desc | subString }}</span>
        <router-link :to="{ path: 'article', query: { id: item._id }}">阅读全文</router-link>
      </div>
      <div class="footer">
        <span class="info-item">标签：{{ item.article_tags | joinString }}</span>
        <span class="info-item">阅读人数：{{ item.article_ready }}</span>
        <span class="info-item">发布时间：{{ item.article_create_time | formatMsgTime }}</span>
      </div>
    </div>
    <Paginator
      :cur_page="Number(pagination.current_page)"
      :page_size="Number(pagination.page_size)"
      :total="Number(pagination.total)"
      @jump="jump"
    ></Paginator>
  </div>
</template>
<script>
import { getArticles } from "@/api/article";
import Paginator from "@/components/Paginator";
import { formatMsgTime } from "@/utils";
export default {
  data() {
    return {
      article_list: [],
      pagination: {
        current_page: 1,
        page_size: 10,
        total: 100
      }
    };
  },
  components: {
    Paginator
  },
  filters: {
    subString: string => {
      return (string = string.substring(0, string.length / 2) + "...");
    },
    joinString: arr => {
      return arr
        .map(a => {
          return a.tags_name;
        })
        .join(",");
    },
    formatMsgTime: time => {
      return formatMsgTime(time);
    }
  },
  created() {
    this.$nextTick(() => {
      this.$loading.show();
      this.get_article();
    });
  },
  methods: {
    get_article() {
      getArticles(this.pagination).then(res => {
        this.article_list = res.list;
        this.pagination = res.pagination;
        this.$loading.hide();
      });
    },
    jump(num) {
      this.pagination.current_page = Number(num);
      this.get_article();
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  border: #ebebeb 1px solid;
  margin-top: 5px;
  padding: 10px;
  display: table;
  border-radius: 3px;
  padding-top: 5px;
  cursor: default;
  &:hover {
    box-shadow: 0px 0px 3px 3px #e6e6e6;
    transition: all 0.5s;
  }
  .title {
    border-bottom: 1px solid #e8eaec;
    font-size: 22px;
    padding: 5px;
  }
  .content {
    text-align: justify;
    word-break: break-all;
    min-height: 38px;
    opacity: 1;
    transition: opacity 0.4s ease-out;
    padding: 5px;
  }
  .footer {
    float: right;
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }
}
</style>
