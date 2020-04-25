// 封装数据请求
const FetchAPI = (params = { url: '', method: 'POST', headers: {} }) => {
  return new Promise((resolve, reject) => {
    fetch(params.url, {
      method: params.method,
      headers: params.headers,
    }).then(response => response.json()).then((data) => {
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  });
};

export default FetchAPI;
