function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t=e((function(e,{services:t,exceptions:a}){const{ItemsService:c,AuthenticationServicere:n}=t,{ServiceUnavailableException:i}=a;e.get("/:collections/:id",((e,t,a)=>{const n=e.params.collections||"",s=e.params.id||"",o=new c(n,{schema:e.schema,accountability:e.accountability});o.readOne(s,{fields:["*"]}).then((e=>(o.updateOne(s,{views:e.views+1}),t.json(e)))).catch((e=>a(new i(e.message))))}))}));export{t as default};
