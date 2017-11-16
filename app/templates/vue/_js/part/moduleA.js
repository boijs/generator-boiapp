export function ModuleA() {
  const Body = document.body;
  const Content = document.createElement('div');
  Content.innerHTML = '同步模块A';
  Content.style = 'height: 50px;line-height: 50px;text-align: center;background-color: #e7e7e7;margin: 20px 0;'
  Body.appendChild(Content);
}