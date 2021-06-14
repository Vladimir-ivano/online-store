'use strict';
function VK_Widget_Init(){
  document.getElementById('vk_widget').innerHTML = '<div id="vk_groups"></div>';
  VK.Widgets.Group("vk_groups", {mode: 0, width: "auto", height: "241", color1: "507299", color2: "FFFFFF", color3: "507299"}, 26292363);
};
window.addEventListener('load', VK_Widget_Init, false);
window.addEventListener('resize', VK_Widget_Init, false);