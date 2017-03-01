module.exports = ()=>{
  console.log('同步模块A执行成功');
  let body = document.body;
  let content = document.createElement('div');
  content.innerHTML = '同步模块A';
  content.style = 'height: 50px;line-height: 50px;text-align: center;background-color: #e7e7e7;margin: 20px 0;'
  body.appendChild(content);
};
