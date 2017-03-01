module.exports = ()=>{
  console.log('异步模块B加载成功');
  let body = document.body;
  let content = document.createElement('div');
  content.innerHTML = '异步模块B';
  content.style = 'height: 50px;line-height: 50px;text-align: center;background-color: #909090;margin: 20px 0;'
  body.appendChild(content);
};
