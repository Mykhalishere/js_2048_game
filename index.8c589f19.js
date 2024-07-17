document.addEventListener("DOMContentLoaded",function(){var e=new Game,t=document.querySelector(".game-score"),a=document.querySelector(".button.start"),n=document.querySelector(".message-start"),s=document.querySelector(".message-win"),r=document.querySelector(".message-lose"),o=document.querySelector(".game-field"),d=function(){for(var a=e.getState(),n=o.getElementsByTagName("td"),s=0,r=0;r<a.length;r++)for(var d=0;d<a[r].length;d++){var i=n[s];i.textContent=0===a[r][d]?"":a[r][d],i.className="field-cell field-cell--".concat(a[r][d]),s++}t.textContent=e.getScore()},i=function(){e.start(),d(),a.classList.add("restart"),a.classList.remove("start"),a.textContent="Restart",n.classList.add("hidden"),s.classList.add("hidden"),r.classList.add("hidden")},c=function(){e.restart(),d(),s.classList.add("hidden"),r.classList.add("hidden")};a.addEventListener("click",function(){"idle"===e.getStatus()||"lose"===e.getStatus()||"win"===e.getStatus()?i():c()}),document.addEventListener("keydown",function(t){if("playing"===e.getStatus()){switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;default:return}d(),"win"===e.getStatus()?s.classList.remove("hidden"):"lose"===e.getStatus()&&r.classList.remove("hidden")}});var l=o.getElementsByTagName("td"),u=!0,m=!1,g=void 0;try{for(var f,v=l[Symbol.iterator]();!(u=(f=v.next()).done);u=!0)!function(){var e=f.value;e.addEventListener("animationend",function(){e.classList.remove("animate-merge")})}()}catch(e){m=!0,g=e}finally{try{u||null==v.return||v.return()}finally{if(m)throw g}}});
//# sourceMappingURL=index.8c589f19.js.map
