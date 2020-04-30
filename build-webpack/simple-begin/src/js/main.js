import _ from 'lodash';
import '../css/main.scss';
import Icon from '../images/icon-drag.png';
import data from '../data/base.xml';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.onmouseenter = function () {
    this.classList.add('green');
  }
  element.onmouseleave = function () {
    this.classList.remove('green');
  }
  return element;
}

function addImage() {
  // 将图像添加到我们现有的 div。
  const element = document.createElement('div');
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

function addText(text=''){
  const element = document.createElement('div');
  element.innerText = text;
  document.body.appendChild(element);
}

document.body.appendChild(component());
document.body.appendChild(addImage());

addText(_.join(data.note.from, ' '))
console.log(data);