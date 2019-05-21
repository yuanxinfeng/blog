import request from "@/utils/request";

export function getCreateTime() {
  return request({
    url: "api/createtime",
    method: "get"
  });
}
