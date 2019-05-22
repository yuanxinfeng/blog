import request from "@/utils/request";

export function getArticles(data) {
  return request({
    url: "api/article/list",
    method: "get",
    params: data
  });
}

export function getArticle(id) {
  return request({
    url: "api/article/",
    method: "get",
    params: { id: id }
  });
}

export function addArticleReady(id) {
  return request({
    url: "api/article/addReady",
    method: "get",
    params: { id: id }
  });
}
