(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9461:function(e,n,t){Promise.resolve().then(t.bind(t,5622))},5622:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var o=t(7437),i=t(5913),l=t(2265),r=t(2914),s=t(6238),c=t(4387),a=t(4697),d=t(9190),h=t(3364),u=t(357);function p(e,n,t,o,i,r){let[s,c]=(0,l.useState)(""),a=()=>{let i=new Date(e).getTime()/1e3-Date.now()/1e3,l=Math.floor(i/86400),s=Math.floor(i%86400/3600),a=Math.floor(i%86400%3600/60);var d=[];0!=l&&d.length<n&&d.push("".concat(l," ").concat((0,h._6)(l,"день","дня","дней"))),0!=s&&d.length<n&&d.push("".concat(s," ").concat((0,h._6)(s,"час","часа","часов"))),0!=a&&d.length<n&&d.push("".concat(a," ").concat((0,h._6)(a,r,"минуты","минут"))),0===d.length&&d.push("1 ".concat(r)),c(o.replace("$$TIME",d.join(t)))},d=setInterval(()=>{let n=new Date(e).getTime()/1e3;Date.now()/1e3<n?a():(clearInterval(d),c(i))},1e3);return s}function x(e,n){var t,o,i,l,r;let s=null!==(l=null==n?void 0:n.headers)&&void 0!==l?l:new Headers;return s.set("Authorization",u.env.NEXT_PUBLIC_IS_DEV?"tma-nocheck ".concat(null===(t=window.Telegram)||void 0===t?void 0:t.WebApp.initData):"tma ".concat(null===(o=window.Telegram)||void 0===o?void 0:o.WebApp.initData)),s.set("X-Start-Param",null!==(r=null===(i=window.Telegram)||void 0===i?void 0:i.WebApp.initDataUnsafe.start_param)&&void 0!==r?r:"empty"),fetch(g(e),{...n,headers:s})}function g(e){let n=u.env.NEXT_PUBLIC_IS_DEV?"https://shieldtunnel-dev-api.wonky-dev.tw1.su":"https://api.shieldtunnel.io";return"".concat(n).concat(e)}var j=t(6920),v=t(5079),b=t(357);let m=l.createContext([void 0,()=>{}]);function f(e){let[n,t]=(0,l.useState)(),i=()=>{var e,o;let i=new Headers;i.set("Authorization",b.env.NEXT_PUBLIC_IS_DEV?"tma-nocheck ".concat(null===(e=window.Telegram)||void 0===e?void 0:e.WebApp.initData):"tma ".concat(null===(o=window.Telegram)||void 0===o?void 0:o.WebApp.initData)),x("/me",{method:"PUT",headers:i}).then(e=>e.json()).then(e=>{t(e),console.log("meData updated",n)}).catch(e=>console.log(e))};return(0,l.useEffect)(()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.ready(),i()},[]),console.log("me data",n),(0,o.jsx)(m.Provider,{value:[n,i],children:e.children})}function w(){return(0,l.useContext)(m)}var C=t(5940);function _(e){let{profileId:n,setProfileId:t,currentPaidTo:r,paidCallback:s}=e,[h,p]=w(),[g,b]=(0,l.useState)("monthly"),[m,f]=(0,l.useState)(void 0),[_,y]=(0,l.useState)(!1),[k,S]=(0,l.useState)(!1),[P,T]=(0,l.useState)(!1),[A,I]=(0,l.useState)(void 0);return(0,l.useEffect)(()=>{if(void 0!==m&&clearInterval(m),void 0!==n){var e,o;null===(e=window.Telegram)||void 0===e||e.WebApp.MainButton.hideProgress(),null===(o=window.Telegram)||void 0===o||o.WebApp.MainButton.hide(),f(setInterval(()=>{x("/vpn-profiles/paid-to",{body:JSON.stringify({profile_id:n}),method:"POST"}).then(e=>e.json()).then(e=>{(e.paid_to?new Date(e.paid_to).getTime():0)>(r?new Date(r).getTime():0)&&(clearInterval(m),p(),t(void 0),s(!0),void 0===A&&I("Оплата прошла успешно"))}).catch(e=>console.log(e))},2e3))}},[n]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.u_,{header:(0,o.jsx)(a.x,{after:(0,o.jsx)(d.A,{children:(0,o.jsx)(c.w,{onClick:()=>{t(void 0),s(!1)},style:{color:"var(--tgui--plain_foreground)"}})}),children:"Оплата"}),onOpenChange:e=>{e||(t(void 0),s(!1))},open:void 0!==n,children:(0,o.jsx)("div",{style:{height:"100%",width:"100%",background:"var(--tgui--secondary_bg_color)",paddingBottom:20},children:(0,o.jsxs)(i.aV,{children:[(0,o.jsx)(i.$0,{header:"Тариф",footer:"Подписка продлевается автоматически. Сможете настроить подписку в любой момент.",children:(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{defaultChecked:!0,name:"tariff",value:"1",onChange:()=>b("monthly")}),description:"VPN + Блокировка рекламы",multiline:!0,children:"1 месяц за 99₽"})}),(null==h?void 0:h.has_first_use_discount)?(0,o.jsx)(i.$0,{header:"Промокоды и акции",footer:"Акция действует для новых пользователей. Нажмите, чтобы активировать бесплатный период.",children:(0,o.jsx)(i.bL,{before:(0,o.jsx)(j.G,{icon:v.Tab,size:"2x",style:{width:40,color:"var(--tgui--button_color)"}}),multiline:!0,subtitle:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:"10 дней"}),onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.requestWriteAccess(e=>{if(e)x("/vpn-profiles/first-use-discount",{body:JSON.stringify({profile_id:n}),method:"POST"}).then(e=>e.json()).then(e=>{I("Пробный период активирован")}).catch(e=>console.log(e));else{var t;null===(t=window.Telegram)||void 0===t||t.WebApp.showAlert("Вам нужно разрешить боту отправить вам сообщения, чтобы сохранить переписку")}})},children:"Попробовать бесплатно"})}):(0,o.jsx)(o.Fragment,{}),(0,o.jsx)(i.$0,{header:"Способ оплаты",footer:(0,o.jsxs)(i.$0.Footer,{children:["Доступ к VPN появится сразу после оплаты. Получая доступ к VPN, вы принимаете ",(0,o.jsx)("u",{onClick:()=>window.Telegram.WebApp.openLink("https://telegra.ph/Polzovatelskoe-soglashenie-ispolzovaniya-servisa-Konfigurator-VPN-11-24"),style:{color:"var(--tgui--link_color)"},children:"Пользовательское соглашение"}),"."]}),children:(0,o.jsx)(i.bL,{before:(0,o.jsx)(j.G,{icon:v.X5K,size:"2x",style:{width:35,color:"var(--tgui--button_color)"}}),description:"СБП, SberPay, Тinkoff Pay, Зарубежная карта",multiline:!0,after:(0,o.jsx)(i.YS,{style:{color:"var(--tgui--hint_color)"},children:"Дешевле"}),disabled:P,onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.requestWriteAccess(e=>{if(e){let e=new cp.CloudPayments,t={Items:[{label:"Доступ на месяц для VPN #".concat(n),price:99,quantity:1,amount:99,vat:0,method:0,object:0}],taxationSystem:0,isBso:!1,amounts:{electronic:99,advancePayment:0,credit:0,provision:0}};e.pay("charge",{publicId:"pk_dadb31d8e5b77cdec4f0770190207",description:"Доступ на месяц для VPN #".concat(n),amount:99,currency:"RUB",accountId:"".concat(n),skin:"modern",data:{profileId:"".concat(n),CloudPayments:{CustomerReceipt:t,recurrent:{interval:"Month",period:1,customerReceipt:t,StartDate:new Date(Date.now()+(u.env.NEXT_PUBLIC_IS_DEV?15e3:23328e5)).toISOString()}}},configuration:{common:{successRedirectUrl:"https://t.me/confvpnbot?startapp",failRedirectUrl:"https://t.me/confvpnbot?startapp"}}},{onSuccess:function(e){},onFail:function(e,n){},onComplete:function(e,n){}})}else{var t;null===(t=window.Telegram)||void 0===t||t.WebApp.showAlert("Вам нужно разрешить боту отправить вам сообщение сссылкой на оплату")}})},children:"Банковская карта"})})]})})}),_&&(0,o.jsx)(i.A9,{style:{zIndex:1e4,textAlign:"center"},onClose:()=>y(!1),before:(0,o.jsx)(j.G,{icon:v.slZ}),description:"Сверните мини-приложение и проверьте свои личные сообщения",duration:1e4,children:"Отправили вам ссылку"}),void 0!==A&&(0,o.jsx)(i.A9,{style:{zIndex:1e4,textAlign:"center"},onClose:()=>I(void 0),before:(0,o.jsx)(j.G,{icon:C.by}),description:A,duration:1e4,children:"Добавлен новый VPN"})]})}var y=t(357);function k(e){let{open:n,setOpen:t}=e,r=(0,l.useRef)(null),[s,h]=(0,l.useState)("outline"),[u,p]=(0,l.useState)("nl"),[g,j]=(0,l.useState)(void 0),v=e=>{var n,t;j(e),void 0===e?null===(n=window.Telegram)||void 0===n||n.WebApp.MainButton.hideProgress():null===(t=window.Telegram)||void 0===t||t.WebApp.MainButton.showProgress(!0)},b=()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.MainButton.showProgress(!1),x("/vpn-profiles",{body:JSON.stringify({protocol:s,country_code:u}),method:"POST"}).then(e=>e.json()).then(e=>{v(e.profile_id)}).catch(e=>console.log(e))};return(0,l.useEffect)(()=>{var e,t,o,i,l,r,s;if(n&&void 0===g){null===(e=window.Telegram)||void 0===e||e.WebApp.MainButton.hideProgress(),null===(t=window.Telegram)||void 0===t||t.WebApp.MainButton.enable(),null===(o=window.Telegram)||void 0===o||o.WebApp.MainButton.setText("Добавить конфигурацию"),null===(i=window.Telegram)||void 0===i||i.WebApp.MainButton.show();let n=Math.random();localStorage.setItem("mainButtonCbHash",n.toString()),null===(l=window.Telegram)||void 0===l||l.WebApp.MainButton.onClick(()=>{n.toString()==localStorage.getItem("mainButtonCbHash")&&b()}),null===(r=window.Telegram)||void 0===r||r.WebApp.MainButton.setParams({has_shine_effect:!0})}else null===(s=window.Telegram)||void 0===s||s.WebApp.MainButton.hide()},[n,u,s,g]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.u_,{nested:!0,header:(0,o.jsx)(a.x,{after:(0,o.jsx)(d.A,{children:(0,o.jsx)(c.w,{onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.MainButton.hide(),t(!1)},style:{color:"var(--tgui--plain_foreground)"}})}),children:"Новая конфигурация"}),onOpenChange:e=>t(e),open:n,children:(0,o.jsx)("div",{style:{height:"100%",width:"100%",background:"var(--tgui--secondary_bg_color)",paddingBottom:20},children:(0,o.jsxs)(i.aV,{children:[(0,o.jsxs)(i.$0,{header:"Страна подключения",footer:(0,o.jsx)(i.$0.Footer,{style:{color:"var(--tgui--hint_color)"},children:"Для стабильной работы рекомендуем взять Нидерланды"}),children:[(0,o.jsx)(i.bL,{Component:"label",ref:r,before:(0,o.jsx)(i.Nx,{name:"country",value:"1",defaultChecked:!0,onChange:()=>p("nl")}),multiline:!0,children:"\uD83C\uDDF3\uD83C\uDDF1 Нидерланды"}),(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{name:"country",value:"2",onChange:()=>p("ru")}),multiline:!0,children:"\uD83C\uDDF7\uD83C\uDDFA Россия"})]}),(0,o.jsxs)(i.$0,{header:"Протокол соединения",footer:(0,o.jsx)(i.$0.Footer,{style:{color:"var(--tgui--hint_color)"},children:"Вы можете поменять протокол в любой момент. Подробную инструкцию по подключению к VPN вы найдете после добавления конфигурации."}),children:[(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{defaultChecked:!0,name:"protocol",value:"3",onChange:()=>h("outline")}),description:"Выбирайте, если не знаете, какой протокол выбрать. Защищает ваш трафик лучше всего. Подключается через приложение Outline.",multiline:!0,children:"Outline"}),(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{name:"protocol",value:"2",onChange:()=>h("wg")}),description:"Подключается через приложение WireGuard. Имеет блокировщик рекламы. Работает почти со всеми российскими интернет-провайдерами.",multiline:!0,children:"WireGuard"}),(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{name:"protocol",value:"1",onChange:()=>h("ikev2")}),description:(0,o.jsx)(o.Fragment,{children:"Добавляется через настройки вашего устройства. Не требует скачивания никаких сторонних приложений. Имеет блокировщик рекламы. Может не работать с некоторыми российскими интернет-провайдерами."}),multiline:!0,children:"IKEv2/IPSec MSCHAPv2"})]}),y.env.NEXT_PUBLIC_IS_DEV?(0,o.jsx)(i.$0,{header:"Test Zone",children:(0,o.jsx)(i.zx,{stretched:!0,onClick:()=>b(),children:"Main button"})}):(0,o.jsx)(o.Fragment,{})]})})}),(0,o.jsx)(_,{profileId:g,setProfileId:v,currentPaidTo:void 0,paidCallback:e=>{e&&t(!1)}})]})}var S=t(3757),P=t(5854),T=t(568),A=t(4085),I=t(1970),D=t(6407),W=t(7693);function N(e){let{icon:n,title:t,children:r,defaultOpen:s}=e,[c,a]=(0,l.useState)(s);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.UQ,{expanded:c,onChange:()=>a(!c),children:[(0,o.jsx)(i.UQ.Summary,{children:(0,o.jsxs)("div",{style:{display:"flex",gap:10},children:[n,(0,o.jsx)("span",{children:t})]})}),(0,o.jsx)(i.UQ.Content,{style:{background:"var(--tgui--bg_color)"},children:(0,o.jsx)("div",{style:{padding:20},children:r})})]})})}var z=t(42),L=t.n(z);let G=l.createContext(e=>()=>{});function V(e){let[n,t]=(0,l.useState)(!1);return(0,o.jsxs)(G.Provider,{value:e=>()=>{L()(e),n?(t(!1),setTimeout(()=>t(!0),100)):t(!0)},children:[e.children,n&&(0,o.jsx)(i.A9,{style:{zIndex:1e4,textAlign:"center"},onClose:()=>t(!1),before:(0,o.jsx)(j.G,{icon:v.LEp}),children:"Текст скопирован"})]})}var M=t(4790),E=t(357);function O(e){let{color:n}=e;return(0,o.jsxs)("svg",{width:33,height:32,viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("rect",{fill:n,height:"32",rx:"20%",width:"33"}),(0,o.jsx)("path",{d:"M18.459 13.2759H22.9912C23.1351 13.2759 23.2568 13.2261 23.3564 13.1265C23.4561 13.0269 23.5059 12.9051 23.5059 12.7612C23.5059 12.6174 23.4561 12.4984 23.3564 12.4043C23.2568 12.3047 23.1351 12.2549 22.9912 12.2549H18.459C18.3096 12.2549 18.1851 12.3047 18.0854 12.4043C17.9858 12.4984 17.936 12.6174 17.936 12.7612C17.936 12.9051 17.9858 13.0269 18.0854 13.1265C18.1851 13.2261 18.3096 13.2759 18.459 13.2759ZM18.459 16.5298H22.9912C23.1351 16.5298 23.2568 16.48 23.3564 16.3804C23.4561 16.2808 23.5059 16.1562 23.5059 16.0068C23.5059 15.8685 23.4561 15.7523 23.3564 15.6582C23.2568 15.5586 23.1351 15.5088 22.9912 15.5088H18.459C18.3096 15.5088 18.1851 15.5586 18.0854 15.6582C17.9858 15.7523 17.936 15.8685 17.936 16.0068C17.936 16.1562 17.9858 16.2808 18.0854 16.3804C18.1851 16.48 18.3096 16.5298 18.459 16.5298ZM18.459 19.7754H22.9912C23.1351 19.7754 23.2568 19.7284 23.3564 19.6343C23.4561 19.5347 23.5059 19.4157 23.5059 19.2773C23.5059 19.1335 23.4561 19.0117 23.3564 18.9121C23.2568 18.807 23.1351 18.7544 22.9912 18.7544H18.459C18.3096 18.7544 18.1851 18.807 18.0854 18.9121C17.9858 19.0117 17.936 19.1335 17.936 19.2773C17.936 19.4157 17.9858 19.5347 18.0854 19.6343C18.1851 19.7284 18.3096 19.7754 18.459 19.7754ZM9.80957 19.8335H16.2925C16.4253 19.8335 16.5249 19.792 16.5913 19.709C16.6632 19.626 16.6992 19.5236 16.6992 19.4019C16.6992 19.2026 16.6245 18.9508 16.4751 18.6465C16.3312 18.3366 16.1071 18.0267 15.8027 17.7168C15.5039 17.4014 15.1248 17.1385 14.6655 16.9282C14.2062 16.7179 13.6667 16.6128 13.0469 16.6128C12.4271 16.6128 11.8875 16.7179 11.4282 16.9282C10.9744 17.1385 10.5954 17.4014 10.291 17.7168C9.99219 18.0267 9.76807 18.3366 9.61865 18.6465C9.47477 18.9508 9.40283 19.2026 9.40283 19.4019C9.40283 19.5236 9.43604 19.626 9.50244 19.709C9.57438 19.792 9.67676 19.8335 9.80957 19.8335ZM13.0469 16.0317C13.5505 16.0317 13.9793 15.8436 14.3335 15.4673C14.6877 15.091 14.8647 14.6178 14.8647 14.0479C14.8647 13.6937 14.7817 13.37 14.6157 13.0767C14.4552 12.7834 14.2367 12.5482 13.96 12.3711C13.6888 12.194 13.3844 12.1055 13.0469 12.1055C12.7148 12.1055 12.4105 12.194 12.1338 12.3711C11.8571 12.5482 11.6357 12.7834 11.4697 13.0767C11.3092 13.37 11.229 13.6937 11.229 14.0479C11.229 14.6178 11.4061 15.091 11.7603 15.4673C12.12 15.8436 12.5488 16.0317 13.0469 16.0317ZM9.31982 23.6519C8.45101 23.6519 7.79801 23.436 7.36084 23.0044C6.9292 22.5783 6.71338 21.9391 6.71338 21.0869V10.9434C6.71338 10.0856 6.9292 9.44368 7.36084 9.01758C7.79801 8.58594 8.45101 8.37012 9.31982 8.37012H23.6802C24.5545 8.37012 25.2075 8.58594 25.6392 9.01758C26.0708 9.44922 26.2866 10.0911 26.2866 10.9434V21.0869C26.2866 21.9391 26.0708 22.5783 25.6392 23.0044C25.2075 23.436 24.5545 23.6519 23.6802 23.6519H9.31982Z",fill:"white"})]})}function B(e){let{color:n}=e;return(0,o.jsxs)("svg",{width:33,height:32,viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("rect",{fill:n,height:"512",rx:"20%",width:"512"}),(0,o.jsx)("path",{d:"m238 53 35 8v2c-15 2-30-4-45-5 11 7 23 11 35 15-19 16-35-5-56 9 20 10 19 8 21 27-9 1-24 10-27 16 13 3 28 0 41 8-4 3-14 7-18 10 9 2 20-2 25 1 19 16 54 38 64 60 17 37-22 77-60 83-53 11-83 66-64 117 19 50 78 72 125 46 66-40 56-108 16-145-2-2-4-2-6 0-14 9-29 17-45 24 36 8 41 35 37 54-13 48-78 37-85-4-3-19 7-38 24-46 59-26 87-30 104-97 6-38-3-58-31-80-11-11-33-18-40-35-1-2 1-6 3-6 10-2 49-3 49-1 7 7 13-4 16-9-10-2-21-1-29-1-1 0-3-2-4-3 1-1 3-2 4-2h41c0-7-9-17-18-19v3c-8 1-16-1-24-4-4-3-7-9-11-11-16-9-33-16-54-16-10 0-17 1-23 1zm74 30 3 3-4 2c-2 1-3 0-4-1-2-3 4-5 5-4zm-120 96c-54 33-51 109-3 139 4 2 6 2 8-1 12-15 23-22 36-30-25-4-38-16-37-33-4-60 83-54 74 2-2 10-8 19-16 25 27-6 47-21 55-48 2-8 2-19-2-26-30-44-75-53-115-28zm-62 195c16-7 33-10 49-13 1-13 5-26 13-36-30 0-55 20-62 49z",fill:"#fff"})]})}function F(e){let{color:n}=e;return(0,o.jsxs)("svg",{width:33,height:32,viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("rect",{fill:n,height:"512",rx:"20%",width:"512"}),(0,o.jsx)("ellipse",{stroke:"null",ry:"176.00001",rx:"176.00001",id:"svg_3",cy:"262.59998",cx:"255.00001",fill:"#ffffff"}),(0,o.jsx)("rect",{stroke:"null",id:"svg_5",height:"450.56005",width:"50",y:"36.43995",x:"240.88",fill:n}),(0,o.jsx)("path",{stroke:"null",fill:n,d:"m253.24001,128.83997l0,269.28001c67.32,0 134.64001,-67.32 134.64001,-134.64001c0,-67.32 -67.32,-134.64001 -134.64001,-134.64001",id:"svg_7"})]})}function $(e){let{currentName:n,profileId:t}=e,[r,s]=(0,l.useState)(!1),[h,u]=(0,l.useState)(n),[p,g]=(0,l.useState)(!1),[b,m]=w(),f=()=>{var e,n;g(!0);let o=new Headers;o.set("Authorization",E.env.NEXT_PUBLIC_IS_DEV?"tma-nocheck ".concat(null===(e=window.Telegram)||void 0===e?void 0:e.WebApp.initData):"tma ".concat(null===(n=window.Telegram)||void 0===n?void 0:n.WebApp.initData)),x("/vpn-profiles/title",{body:JSON.stringify({profile_id:t,new_title:h}),method:"PATCH",headers:o}).then(e=>{m()}).catch(e=>{console.error(e)}).finally(()=>{g(!1)}),s(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Tn,{before:(0,o.jsx)(j.G,{icon:v.IwR,size:"xl"}),mode:"default",onClick:()=>s(!0),children:"Переименовать"}),(0,o.jsx)(i.u_,{header:(0,o.jsx)(a.x,{after:(0,o.jsx)(d.A,{children:(0,o.jsx)(c.w,{onClick:()=>s(!1),style:{color:"var(--tgui--plain_foreground)"}})}),children:"Новое имя"}),nested:!0,onOpenChange:e=>s(e),open:r,children:(0,o.jsxs)(i.$0,{header:"Новое имя",children:[(0,o.jsx)(i.II,{onKeyDown:e=>"Enter"===e.key?f():null,placeholder:"Введите новое имя",value:h,onChange:e=>u(e.target.value)}),(0,o.jsx)(i.zx,{stretched:!0,disabled:h==n,loading:p,onClick:f,children:"Сохранить"})]})})]})}function H(e){let{vpnProfile:n,setVpnPreviewModel:t}=e,[r,s]=(0,l.useState)(!1),[h,u]=(0,l.useState)(!1),[p,g]=w(),[b,m]=(0,l.useState)("IKev2IPsec"==n.settings.protocol?"ikev2":"WG"==n.settings.protocol?"wg":"outline"),[f,C]=(0,l.useState)(n.country_code),[_,y]=(0,l.useState)(!1),k=()=>{m("IKev2IPsec"==n.settings.protocol?"ikev2":"WG"==n.settings.protocol?"wg":"outline"),C(n.country_code),y(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Tn,{before:(0,o.jsx)(j.G,{size:"xl",icon:v.gr5}),onClick:()=>s(!0),children:"Перегенерировать настройки"}),(0,o.jsx)(i.u_,{header:(0,o.jsx)(a.x,{after:(0,o.jsx)(d.A,{children:(0,o.jsx)(c.w,{onClick:()=>{k(),s(!1)},style:{color:"var(--tgui--plain_foreground)"}})}),children:"Настройки профиля"}),nested:!0,onOpenChange:e=>{k(),s(e)},open:r,style:{background:"var(--tgui--secondary_bg_color)"},children:(0,o.jsxs)(i.aV,{children:[(0,o.jsxs)(i.$0,{header:"Страна подключения",footer:"Для обхода ограничений рекомендуется взять Нидерланды",children:[(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{name:"country",value:"1",defaultChecked:"nl"==n.country_code,onChange:()=>C("nl")}),multiline:!0,children:"\uD83C\uDDF3\uD83C\uDDF1 Нидерланды"}),(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{name:"country",value:"2",defaultChecked:"ru"==n.country_code,onChange:()=>C("ru")}),multiline:!0,children:"\uD83C\uDDF7\uD83C\uDDFA Россия"}),(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{name:"country",defaultChecked:"tr"==n.country_code,value:"2",onChange:()=>C("tr")}),multiline:!0,children:"\uD83C\uDDF9\uD83C\uDDF7 Турция"})]}),(0,o.jsxs)(i.$0,{header:"Протокол соединения",footer:(0,o.jsx)(i.$0.Footer,{style:{color:"var(--tgui--hint_color)"},children:"Подробную инструкцию по подключению к VPN вы найдете после добавления конфигурации"}),children:[(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{defaultChecked:"Outline"===n.settings.protocol,name:"protocol",value:"3",onChange:()=>m("outline")}),description:"Обходит любые блокировки провайдеров и сервисов. Не имеет блокировщика рекламы. Подключается через приложение Outline",multiline:!0,children:"Outline"}),(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{defaultChecked:"WG"===n.settings.protocol,name:"protocol",value:"2",onChange:()=>m("wg")}),description:"Подключается через приложение WireGuard. Имеет блокировщик рекламы. Работает почти со всеми российскими интернет-провайдерами",multiline:!0,children:"WireGuard"}),(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.Nx,{defaultChecked:"IKev2IPsec"===n.settings.protocol,name:"protocol",value:"1",onChange:()=>m("ikev2")}),description:(0,o.jsx)(o.Fragment,{children:"Добавляется через настройки вашего устройства. Не требует скачивания никаких сторонних приложений. Имеет блокировщик рекламы. Может не работать с некоторыми российскими интернет-провайдерами"}),multiline:!0,children:"IKEv2/IPSec MSCHAPv2"})]}),(0,o.jsx)(i.$0,{header:"Настройки для входа",footer:"После обновления настроек старые конфигурации на ваших устройствах перестанут работать, даже если вы не отмечали сброс текущего доступа",children:(0,o.jsx)(i.bL,{Component:"label",before:(0,o.jsx)(i.XZ,{onChange:e=>y(e.target.checked),name:"checkbox",value:"2"}),description:"Текущая конфигурация перестанет работать на устройствах. Будет создан новый пользователь.",multiline:!0,children:"Сбросить текущий доступ"})}),(0,o.jsx)(i.$0,{header:"Сохранить",children:(0,o.jsx)(i.zx,{stretched:!0,disabled:b===("IKev2IPsec"==n.settings.protocol?"ikev2":"WG"==n.settings.protocol?"wg":"outline")&&f===n.country_code&&!_,loading:h,onClick:()=>{u(!0),x("/vpn-profiles/new-configuration",{body:JSON.stringify({profile_id:n.id,new_country_code:f,new_protocol:b}),method:"POST"}).then(e=>{s(!1),t(!1),g()}).catch(e=>{console.error(e)}).finally(()=>{u(!1)}),s(!1)},children:"Обновить настройки"})})]})})]})}function K(e){var n;let{vpnProfile:t}=e,r=(0,l.useContext)(G),[s,h]=(0,l.useState)(!1),u=new Date(t.paid_to).getTime()<Date.now(),[b,m]=w(),f=p(t.paid_to,1,"","$$TIME","Не оплачен","минута"),C=p(t.paid_to,2," и ","Истекает через $$TIME","Ваша прошлая подписка истекла. Продлите подпсику, чтобы снова пользоваться VPN","минуту"),[y,k]=(0,l.useState)(void 0),z=e=>{k(e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.bL,{before:"WG"==t.settings.protocol?(0,o.jsx)(B,{color:u?"var(--tgui--hint_color)":"var(--tgui--button_color)"}):"Outline"==t.settings.protocol?(0,o.jsx)(F,{color:u?"var(--tgui--hint_color)":"var(--tgui--button_color)"}):(0,o.jsx)(O,{color:u?"var(--tgui--hint_color)":"var(--tgui--button_color)"}),subtitle:"nl"==(n=t.country_code)?"Нидерланды":"tr"==n?"Турция":"ru"==n?"Россия":void 0,after:t.cloudpayments_sub_id?(0,o.jsx)(i.YS,{style:{color:"var(--tgui--hint_color)"},children:"∞"}):(0,o.jsx)(i.YS,{style:{color:"var(--tgui--hint_color)"},children:f}),onClick:()=>h(!0),children:t.title}),(0,o.jsx)(i.u_,{header:(0,o.jsx)(a.x,{after:(0,o.jsx)(d.A,{children:(0,o.jsx)(c.w,{onClick:()=>h(!1),style:{color:"var(--tgui--plain_foreground)"}})}),children:t.title}),nested:!0,onOpenChange:e=>h(e),open:s,children:(0,o.jsx)("div",{style:{height:"100%",width:"100%",background:"var(--tgui--secondary_bg_color)",paddingBottom:20},children:(0,o.jsxs)(i.aV,{children:[t.cloudpayments_sub_id?(0,o.jsx)(o.Fragment,{}):(0,o.jsx)(i.$0,{header:"Тариф",children:(0,o.jsx)(i.bL,{before:(0,o.jsx)(j.G,{icon:W.T,style:{fontSize:20,color:"var(--tgui--button_color)"}}),multiline:!0,subtitle:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:C}),style:{},onClick:()=>z(t.id),children:"Продлить подписку"})}),"IKev2IPsec"==t.settings.protocol?(0,o.jsxs)(i.$0,{header:"Способы подключения",footer:"Одновременно может работать только 1 устройство. Можно подключить любое устройство с поддержкой протокола IKEv2/IPSec через добавление VPN соединения вручную",children:[(0,o.jsxs)(N,{title:"IPhone, IPad",icon:(0,o.jsx)(j.G,{size:"lg",icon:T.Av$}),defaultOpen:!1,children:[(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{style:{wordBreak:"break-all"},children:[(0,o.jsx)(D.c,{onClick:r(g(t.settings.settings.mobileconfig_uri)),style:{width:"100%"},mode:"bezeled",text:"Скопировать ссылку",children:(0,o.jsx)(j.G,{icon:I.kZ_,size:"xl"})}),(0,o.jsx)("br",{}),(0,o.jsx)(D.c,{onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.openLink(g(t.settings.settings.mobileconfig_uri))},style:{width:"100%"},mode:"bezeled",text:"Открыть в браузере",children:(0,o.jsx)(j.G,{icon:I.GTN,size:"xl"})}),"\xa0"]})}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Откройте ссылку в браузере ",(0,o.jsx)(j.G,{icon:I.GTN})," ",(0,o.jsx)("b",{children:"Safari"})," и подтвердите установку. Перейдите в ",(0,o.jsx)("b",{children:"Настройки > Профили"})," и установите предложенный профиль. После этого вы можете включить соединение в ",(0,o.jsx)("b",{children:"Настройки > VPN > Telegram VPN"})]})}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:[(0,o.jsxs)("b",{children:["Ссылка открывается только в браузере ",(0,o.jsx)(j.G,{icon:I.GTN})," Safari"]}),"."]})})]}),(0,o.jsxs)(N,{title:"MacOS",icon:(0,o.jsx)(j.G,{size:"lg",icon:A.tc}),defaultOpen:!1,children:[(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{style:{wordBreak:"break-all"},children:[(0,o.jsx)(D.c,{onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.openLink(g(t.settings.settings.mobileconfig_uri))},style:{width:"100%"},mode:"bezeled",text:"Скачать файл",children:(0,o.jsx)(j.G,{icon:I.gMD,size:"xl"})}),"\xa0"]})}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Скачайте файл и кликните дважды. Перейдите в ",(0,o.jsx)("b",{children:"Настройки > Профили"})," и установите предложенный профиль. После этого вы можете включить соединение в ",(0,o.jsx)("b",{children:"Настройки > VPN > Telegram VPN"}),"."]})})]}),(0,o.jsxs)(N,{title:"Windows",icon:(0,o.jsx)(j.G,{size:"lg",icon:T.ts2}),defaultOpen:!1,children:[(0,o.jsx)("p",{}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Для Windows рекомендуем сменить тип конфигурации на ",(0,o.jsx)("b",{children:"WireGuard"}),", чтобы процесс установки был проще."]})}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Перейдите в настройки и добавьте новое VPN соединение ",(0,o.jsx)("b",{children:"MSCHAPv2 IKEv2/IPsec"})," вручную с значением из полей в разделе ниже."]})})]}),(0,o.jsxs)(N,{title:"Android",icon:(0,o.jsx)(j.G,{size:"lg",icon:T.usd}),defaultOpen:!1,children:[(0,o.jsx)("p",{}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Для Android рекомендуем сменить тип конфигурации на ",(0,o.jsx)("b",{children:"WireGuard"}),", чтобы процесс установки был проще"]})}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Перейдите в настройки и добавьте новое VPN соединение ",(0,o.jsx)("b",{children:"MSCHAPv2 IKEv2/IPsec"})," вручную с значением из полей в разделе ниже."]})})]}),(0,o.jsxs)(N,{title:"Linux",icon:(0,o.jsx)(j.G,{size:"lg",icon:T.qJE}),defaultOpen:!1,children:[(0,o.jsx)("p",{}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Перейдите в настройки и добавьте новое VPN соединение ",(0,o.jsx)("b",{children:"MSCHAPv2 IKEv2/IPsec"})," вручную с значением из полей в разделе ниже."]})})]})]}):"Outline"==t.settings.protocol?(0,o.jsxs)(i.$0,{header:"VPN & Proxy",footer:"Для подключения используйте приложение Outline",children:[(0,o.jsx)(i.gx,{style:{fontSize:14,marginBottom:16,fontFamily:"Consolas,Monaco",resize:"none"},value:t.settings.settings.ss_url}),(0,o.jsx)(i.zx,{before:(0,o.jsx)(S.c,{}),onClick:r(t.settings.settings.ss_url),stretched:!0,children:"Скопировать ссылку"})]}):(0,o.jsx)(i.$0,{header:"Способы установки",children:(0,o.jsxs)(N,{title:"Любая платформа",icon:(0,o.jsx)(P.J,{}),defaultOpen:!0,children:[(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{style:{wordBreak:"break-all"},children:[(0,o.jsx)(D.c,{onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.openLink(g(t.settings.settings.wireguard_uri))},style:{width:"100%"},mode:"bezeled",text:"Скачать конфигурацию",children:(0,o.jsx)(j.G,{icon:I.gMD,size:"xl"})}),(0,o.jsx)("br",{}),(0,o.jsx)(D.c,{onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.openLink("https://www.wireguard.com/install/")},style:{width:"100%"},mode:"bezeled",text:"Скачать приложение",children:(0,o.jsx)(j.G,{icon:v.hVM,size:"xl"})}),"\xa0"]})}),(0,o.jsx)("p",{children:(0,o.jsx)(i.YS,{})}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:(0,o.jsxs)(i.YS,{children:["Скачайте конфигурацию и подгрузите ее в приложение ",(0,o.jsx)("b",{children:"WireGuard"}),". Приложение и конфигурация работают на всех устройствах, куда можно скачать ",(0,o.jsx)("b",{children:"WireGuard"})," "]})})]})}),"Outline"==t.settings.protocol?(0,o.jsx)(i.$0,{header:"Скачайте приложение",footer:"C помощью приложения получится подключиться к VPN",children:(0,o.jsxs)("div",{style:{backgroundColor:"var(--tgui--bg_color)"},children:[(0,o.jsx)(D.c,{onClick:()=>{window.Telegram.WebApp.openLink("https://apps.apple.com/ru/app/outline-app/id1356177741")},style:{width:"100%",background:"color-mix(in srgb, var(--tgui--button_color) 20%, transparent)"},mode:"bezeled",text:"IPhone, IPad",children:(0,o.jsx)(j.G,{icon:T.Av$,size:"xl"})}),(0,o.jsx)("br",{}),(0,o.jsx)(D.c,{onClick:()=>{window.Telegram.WebApp.openLink("https://apps.apple.com/us/app/outline-secure-internet-access/id1356178125")},style:{width:"100%",background:"color-mix(in srgb, var(--tgui--button_color) 20%, transparent)"},mode:"bezeled",text:"MacOS",children:(0,o.jsx)(j.G,{icon:A.tc,size:"xl"})}),(0,o.jsx)("br",{}),(0,o.jsx)(D.c,{onClick:()=>{window.Telegram.WebApp.openLink("https://play.google.com/store/apps/details?id=org.outline.android.client")},style:{width:"100%",background:"color-mix(in srgb, var(--tgui--button_color) 20%, transparent)"},mode:"bezeled",text:"Google Play",children:(0,o.jsx)(j.G,{icon:M.YU,size:"xl"})}),(0,o.jsx)("br",{}),(0,o.jsx)(D.c,{onClick:()=>{window.Telegram.WebApp.openLink("https://github.com/Jigsaw-Code/outline-apps/releases/download/v1.10.1/Outline-Client.exe")},style:{width:"100%",background:"color-mix(in srgb, var(--tgui--button_color) 20%, transparent)"},mode:"bezeled",text:"Windows",children:(0,o.jsx)(j.G,{icon:T.ts2,size:"xl"})})]})}):(0,o.jsx)(o.Fragment,{}),(0,o.jsx)(i.$0,{header:"Техническая поддержка",children:(0,o.jsx)(i.bL,{before:(0,o.jsx)(j.G,{icon:I.X8G,color:"#FEDA71",size:"xl"}),subtitle:(0,o.jsx)("span",{children:"Нажмите, чтобы открыть диалог с технической поддержкой"}),multiline:!0,onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.openTelegramLink("https://t.me/confvpnsup")},children:"Есть вопросы?"})}),"IKev2IPsec"==t.settings.protocol?(0,o.jsxs)(i.$0,{header:"Ручная настройка VPN соединения",footer:"Значения копируются при нажатии",children:[(0,o.jsx)(i.bL,{after:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:"IKEv2/IPSec"}),onClick:r("IKEv2/IPSec"),children:"Протокол"}),(0,o.jsx)(i.bL,{after:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:t.settings.settings.host}),onClick:r(t.settings.settings.host),children:"Адрес хоста"}),(0,o.jsx)(i.bL,{after:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:t.settings.settings.eap_login}),onClick:r(t.settings.settings.eap_login),children:"Логин"}),(0,o.jsx)(i.bL,{after:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:t.settings.settings.eap_password}),onClick:r(t.settings.settings.eap_password),children:"Пароль"}),(0,o.jsx)(i.bL,{after:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:t.settings.settings.eap_login}),onClick:r(t.settings.settings.eap_login),children:"Локальный ID"}),(0,o.jsx)(i.bL,{after:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:t.settings.settings.host}),onClick:r(t.settings.settings.host),children:"Удаленный ID"}),(0,o.jsx)(i.bL,{after:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:"MSCHAPv2"}),onClick:r("MSCHAPv2"),children:"Авторизация"})]}):(0,o.jsx)(o.Fragment,{}),(0,o.jsxs)(i.$0,{header:"Управление конфигурацией",footer:"Генерация новых настроек поможет изменить протокол, страну и данные авторизации, сохраняя подписку на эту конфигурацию. После перегенераци конфигурацию нужно будет установить на устройство заново. Удаление профиля позволит отменить автосписание за подписку",children:[(0,o.jsx)($,{currentName:t.title,profileId:t.id}),(0,o.jsx)(H,{vpnProfile:t,setVpnPreviewModel:h}),(0,o.jsx)(i.Tn,{before:(0,o.jsx)(j.G,{icon:I.Vui,size:"xl"}),onClick:()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.showPopup({title:"Подтвердите удаление",message:new Date(t.paid_to).getTime()>Date.now()?"У этой конфигурации еще есть подписка. Удаление профиля не вернет ваши средства. Удаление профиля отменит автосписание. Вы можете изменить тип и страну конфигурации в настройках профиля без удаления, чтобы сохранить подписку":void 0,buttons:[{id:"remove",type:"destructive",text:"Удалить"},{id:"cancel",type:"default",text:"Отменить"}]},e=>{if("remove"===e){var n,o;let e=new Headers;e.set("Authorization",E.env.NEXT_PUBLIC_IS_DEV?"tma-nocheck ".concat(null===(n=window.Telegram)||void 0===n?void 0:n.WebApp.initData):"tma ".concat(null===(o=window.Telegram)||void 0===o?void 0:o.WebApp.initData)),x("/vpn-profiles",{body:JSON.stringify({profile_id:t.id}),method:"DELETE",headers:e}).then(e=>{m(),h(!1)}).catch(e=>{console.error(e)}).finally(()=>{})}})},mode:"destructive",children:"Удалить конфигурацию"})]})]})})}),(0,o.jsx)(_,{profileId:y,setProfileId:z,currentPaidTo:t.paid_to,paidCallback:e=>{e&&h(!1)}})]})}function Y(){let[e,n]=w(),[t,c]=(0,l.useState)(!1);return console.log(),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{open:t,setOpen:c}),(0,o.jsxs)(i.aV,{style:{padding:15},children:[(0,o.jsx)(i.$0,{style:{borderRadius:10,boxShadow:"0px 0px 10px 1px rgba(0, 0, 0, 0.05)"},header:"Управление конфигурациями",children:(0,o.jsx)(i.bL,{before:(0,o.jsx)(s.Q,{color:"var(--tgui--button_color)"}),subtitle:(0,o.jsx)("span",{style:{color:"var(--tgui--hint_color)"},children:"Подключите новое устройство"}),onClick:()=>{var e;null===(e=window)||void 0===e||e.Telegram.WebApp.HapticFeedback.impactOccurred("soft"),c(!0)},children:"Добавить VPN"})}),void 0!==e?e.vpn_profiles.length>0?(0,o.jsx)(i.$0,{header:"VPN Конфигурации",footer:"Нажмите на конфигурацию, чтобы подключить VPN соединение",children:e.vpn_profiles.map(e=>(0,o.jsx)(K,{vpnProfile:e},e.id))}):(0,o.jsx)("div",{style:{display:"flex"},children:(0,o.jsx)(i.Vm,{header:"VPN не подключен",description:"Добавьте новый VPN и подключите свое устройство к безопасной сети",style:{width:"100%"},children:(0,o.jsx)(r.J5,{autoplay:!0,loop:!0,src:"/ph.json",style:{height:180}})})}):(0,o.jsx)(o.Fragment,{})]})]})}function U(){let[e,n]=(0,l.useState)("base"),[t,r]=(0,l.useState)("light");return(0,l.useEffect)(()=>{let e=setTimeout(()=>{var t;if((null===(t=window.Telegram)||void 0===t?void 0:t.WebApp)!==void 0){window.Telegram.WebApp.ready(),window.Telegram.WebApp.expand(),n("ios"===window.Telegram.WebApp.platform||"macos"===window.Telegram.WebApp.platform?"ios":"base"),r(window.Telegram.WebApp.colorScheme),clearTimeout(e);let t=()=>{var e;null===(e=window.Telegram)||void 0===e||e.WebApp.requestWriteAccess(e=>{if(!e){var n;null===(n=window.Telegram)||void 0===n||n.WebApp.showAlert("Чтобы использовать мини-приложение, вам нужно разрешить боту отправлять вам сообщения"),t()}})};t()}},50)}),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.h7,{platform:e,appearance:t,children:(0,o.jsx)(V,{children:(0,o.jsx)("div",{style:{height:"100%",width:"100%",background:"var(--tgui--secondary_bg_color)"},children:(0,o.jsx)(f,{children:(0,o.jsx)(Y,{})})})})})})}}},function(e){e.O(0,[676,958,943,125,971,23,744],function(){return e(e.s=9461)}),_N_E=e.O()}]);