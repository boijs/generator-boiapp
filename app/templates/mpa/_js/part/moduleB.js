export function fn() {
  const Body = document.body;
  const Content = document.createElement('div');
  Content.innerHTML = '异步模块B';
  Content.style = 'height: 50px;line-height: 50px;text-align: center;background-color: #909090;margin: 20px 0;'
  Body.appendChild(Content);
}