(()=>{"use strict";var e={610:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(e){u(e)}}function a(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.featureRouter=void 0;var i=u(n(127)),a=n(552);t.featureRouter=i.default.Router();var c=new a.FeatureService;t.featureRouter.get("/",(function(e,t){return r(void 0,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,c.getAll()];case 1:return e=r.sent(),t.status(200).send(e),[3,3];case 2:return n=r.sent(),t.status(500).send(n.message),[3,3];case 3:return[2]}}))}))}))},552:function(e,t){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(e){u(e)}}function a(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureService=void 0;var u={1:{id:1,name:"F1",description:"Feature One"},2:{id:2,name:"F2",description:"Feature Two"},3:{id:3,name:"F3",description:"Feature Three"}},i=function(){function e(){}return e.prototype.getAll=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,Object.values(u)]}))}))},e.prototype.get=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,u[e]]}))}))},e.prototype.addNewFeature=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(r){return t=(new Date).valueOf(),u[t]=n({id:t},e),[2,u[t]]}))}))},e.prototype.remove=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.get(e)];case 1:return t.sent()?(delete u[e],[2]):[2,null]}}))}))},e.prototype.update=function(e,t){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,null]}))}))},e}();t.FeatureService=i},607:function(e,t,n){e=n.nmd(e);var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(334)),c=i(n(127)),s=i(n(479)),l=i(n(725)),f=n(610);a.config(),process.env.PORT||process.exit(1);var p=parseInt(process.env.PORT),d=c.default();d.use(l.default()),d.use(s.default()),d.use(c.default.json()),d.use("/api/features",f.featureRouter),n.c[n.s]===e&&d.listen(p,(function(){console.log("Web Server Listening on port "+p)})),t.default=d},479:e=>{e.exports=require("cors")},334:e=>{e.exports=require("dotenv")},127:e=>{e.exports=require("express")},725:e=>{e.exports=require("helmet")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}n.c=t,n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n(n.s=607)})();