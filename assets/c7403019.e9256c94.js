import{H as y,i as C}from"./92af3e08.b8627cbc.js";import{a as b,D as $,n as h,v as r,i as s,W as i,L as w,F as j,e as f,m as p,s as k,j as m}from"./index.5fb70b6c.js";import"./e3b3f312.e697f330.js";y&&document.addEventListener("touchstart",()=>{},!0);const H=(e=1)=>[...m.exports.range(0,24,e).map(n=>{const a=(n<10?"0":"")+n;return{label:a,value:a}})],M=(e=1)=>[...m.exports.range(0,12,e).map(n=>{const a=(n<10?"0":"")+n;return{label:a,value:a}})],v=(e=1)=>m.exports.range(0,60,e).map(n=>{const a=(n<10?"0":"")+n;return{label:a,value:a}}),S=[{label:"AM",value:"am"},{label:"PM",value:"pm"}],u=e=>{const{disabledHours:n,disabledMinutes:a,disabledSeconds:x}=e.disabledTime();C.prompt({getContainer:()=>document.querySelector(`#${j}`)||document.body,mouseWheel:!0,destroyOnClose:!0,closeOnMaskClick:!0,columns:l=>{const o=f(l.join(":"),p);return[(e.use12Hours?M:H)(e.hourStep).filter(({label:c,value:t})=>!n().includes(Number(t)+(l[3]==="pm"?12:0))),v(e.minuteStep).filter(({label:c,value:t})=>!a(o.hour()).includes(Number(t))),v(e.secondStep).filter(({label:c,value:t})=>!x(o.hour(),o.minute()).includes(Number(t))),...e.use12Hours?[S]:[]]},defaultValue:e.value?e.value.format(e.use12Hours?k:s).split(":"):void 0,onConfirm:l=>{const o=f(l.join(":"),p);e.onChange(o)},onClose:e.onBlur}),e.onFocus()},g=b.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #d7d9e0;

  ${e=>e.$style&&$(e.$style)}
`,d=b.div`
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`,R=e=>h(g,{ref:e.viewRef,$style:e.$style,onClick:()=>{u(e)},children:[r(d,{children:e.value?e.value.format(e.format||s):i("time.placeholder")}),e.suffixIcon]}),V=e=>h(g,{ref:e.viewRef,$style:e.$style,children:[r(d,{onClick:()=>u({...e,value:e.start,onChange:n=>e.onChange(n,e.end)}),children:e.start?e.start.format(e.format||s):i("time.startTime")}),r(w,{}),r(d,{onClick:()=>u({...e,value:e.end,onChange:n=>e.onChange(e.start,n)}),children:e.end?e.end.format(e.format||s):i("time.endTime")}),e.suffixIcon]});export{R as TimeMobileUIView,V as TimeRangeMobileUIView};
