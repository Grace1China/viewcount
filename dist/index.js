"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t=e((function(e,{services:t,exceptions:c}){const{ItemsService:a,AuthenticationServicere:i}=t,{ServiceUnavailableException:n}=c;e.get("/:collections/:id",((e,t,c)=>{const i=e.params.collections||"",s=e.params.id||"",o=new a(i,{schema:e.schema,accountability:e.accountability});o.readOne(s,{fields:["*"]}).then((e=>(o.updateOne(s,{views:e.views+1}),t.json(e)))).catch((e=>c(new n(e.message))))}))}));module.exports=t;
