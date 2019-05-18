import request from "@/utils/request";

export function getArticles(data) {
  return request({
    url: "api/article/list",
    method: "get",
    params: data
  });
}
