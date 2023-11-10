(()=>{"use strict";var e={742:(e,t)=>{function n(){return Object.assign({},t.cookieSecureOption)}Object.defineProperty(t,"__esModule",{value:!0}),t.withSession=t.withAge=t.cookieSecureOption=void 0,t.cookieSecureOption={httpOnly:!0,secure:!0},t.withAge=function(e){return void 0===e?n():Object.assign(Object.assign({},t.cookieSecureOption),{maxAge:e})},t.withSession=n},9:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.connect=void 0;const i=o(n(185)),u=o(n(343)),{MG_HOST:s,MG_PORT:a,MG_NAME:d,MG_USERNAME:c,MG_PASSWORD:l}=u.default;i.default.set("strictQuery",!0);const f=`mongodb+srv://${c}:${l}@${s}/${d}`;console.log(f),t.connect=()=>r(void 0,void 0,void 0,(function*(){return i.default.connect(f)}))},343:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.env=void 0;const o=n(142),i=(r(n(17)),(0,o.config)(void 0).parsed);t.env="production",t.default=Object.assign(Object.assign({},i),{ENV:"production"})},633:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.JWTResetOpt=t.JWTRefreshOpt=t.JWTTokenOpt=void 0;const o=r(n(343));t.JWTTokenOpt={expiresIn:"dev"===o.default.ENV?"10s":"3600s"},t.JWTRefreshOpt={expiresIn:"dev"===o.default.ENV?"60s":"86400s"},t.JWTResetOpt={expiresIn:"dev"===o.default.ENV?"180s":"300s"}},168:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(n(184)),a=u(n(343)),d=s.createTransport({pool:!0,service:a.default.MAIL_SERVICE,auth:{user:a.default.MAIL_USER,pass:a.default.MAIL_PASSWORD}});t.default=d},818:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.startup=t.setupRedisIndex=t.redis=void 0;const i=n(773),u=o(n(343)),s=n(372);function a(){return r(this,void 0,void 0,(function*(){yield(0,s.setTokenIndex)()}))}t.redis=(0,i.createClient)({password:u.default.RD_PASSWORD,username:u.default.RD_USERNAME,socket:{host:u.default.RD_HOST,port:Number(u.default.RD_PORT)}}),t.setupRedisIndex=a,t.startup=function(){return r(this,void 0,void 0,(function*(){yield t.redis.connect(),yield a()}))}},464:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(742),u=n(797),s=o(n(849)),a=o(n(747)),d=o(n(215)),c=o(n(947)),l=n(713),f=o(n(343));t.default=new class{loginByPassword(e,t){return r(this,void 0,void 0,(function*(){const n=e.body;console.log(n),yield(0,s.default)(t,(()=>r(this,void 0,void 0,(function*(){a.default.validateLoginPassword(n);const e=yield d.default.findUserByPassword(n.username,n.password);if(e){const r=(yield c.default.getVersion(e.uid))||"0",o=(0,u.generateToken)(Object.assign(Object.assign({},e),{version:r,remember:n.remember}),!0);yield c.default.insertRefreshToken(o.refreshToken,e.uid,e.role),function(e,t,n,r){r&&e.cookie("refresh_token",r,(0,i.withAge)(864e5)),e.status(200).cookie("token",n,(0,i.withAge)(t?36e5:void 0)).json({message:"success",data:{accessToken:n,refreshToken:r}}).send()}(t,n.remember,o.accessToken,o.refreshToken)}else t.status(401).json({message:"Tài khoản hoặc mật khẩu không chính xác",name:"password"})}))))}))}logout(e,t){return r(this,void 0,void 0,(function*(){const e=t.locals.user;yield(0,s.default)(t,(()=>r(this,void 0,void 0,(function*(){c.default.deleteRefreshToken(e.uid),c.default.updateVersion(e.uid),t.cookie("token",null,(0,i.withAge)(0)),t.cookie("refresh_token",null,(0,i.withAge)(0)),t.sendStatus(200)}))))}))}requestReset(e,t){return r(this,void 0,void 0,(function*(){const n=e.body;console.log(n),yield(0,s.default)(t,(()=>r(this,void 0,void 0,(function*(){a.default.validateRequestReset(n);const e=yield d.default.findUserByInfo(n);if(e){const{username:n,uid:r}=e,o=(0,u.generateResetToken)({username:n,uid:r,role:"admin",version:"0",remember:!1});yield(0,l.sendForgetPasswordMail)(e,o),t.status(200).json({message:"Email đã được gửi thành công tới "+e.email})}else t.status(400).json({message:"Không tồn tại email",name:"email"})}))))}))}verifyReset(e,t){return r(this,void 0,void 0,(function*(){const n=t.locals.user.username,r=1e3*t.locals.user.exp,o=Math.floor((r-(new Date).getTime())/1e3);t.cookie("token",e.query.token,(0,i.withAge)(18e4)).redirect(f.default.FRONTEND+"/resetpassword?ttl="+o+"&user="+n)}))}resetPassword(e,t){return r(this,void 0,void 0,(function*(){const n=e.body;yield(0,s.default)(t,(()=>r(this,void 0,void 0,(function*(){a.default.validateReset(n);const e=t.locals.user;yield d.default.updatePassword(e.uid,n.password),t.json({message:"Password changed successfully"})}))))}))}}},305:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=new class{getStatus(e,t){t.json({message:"OK"})}}},607:function(e,t,n){e=n.nmd(e);var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(n(860)),d=s(n(806)),c=i(n(582)),l=s(n(470)),f=s(n(710)),h=s(n(479)),p=i(n(343)),_=i(n(9)),v=i(n(818)),y=(0,a.default)(),m=p.default.PORT;y.use((0,l.default)("dev"===p.env?"dev":"tiny")),y.use(a.default.json()),y.use(a.default.urlencoded({extended:!0})),y.use((0,f.default)()),y.use((0,d.default)()),y.use(c.default({origin:"http://localhost:3000",credentials:!0,methods:["GET","PUT","POST","DELETE"],optionsSuccessStatus:200,allowedHeaders:["Content-Type, Authorization"]})),(0,h.default)(y),n.c[n.s]===e&&y.listen(m,(()=>u(void 0,void 0,void 0,(function*(){yield v.startup(),console.log("📕 [database]: Connected to redis"),yield _.connect(),console.log("📒 [database]: Connected to mongo"),console.log(`✅ [server]: Server is running at http://localhost:${m}`)})))),t.default=y},322:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkJWT=void 0;const a=i(n(344)),d=s(n(343)),c=n(326),l=s(n(947));t.checkJWT=function(e,t,n){return u(this,void 0,void 0,(function*(){const r=this&&"query"===this.tokenOn?e.query.token:e.cookies.token;if(!r)return t.sendStatus(401);try{const e=a.verify(r,d.default.JWT_KEY),o=yield l.default.getVersion(e.uid);if(o&&o!==e.version)return t.sendStatus(401);t.locals.user=e,n()}catch(r){if(!(r instanceof a.TokenExpiredError))return console.log(r),t.sendStatus(401);(0,c.checkRWT)(e,t,n)}}))}},326:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkRWT=void 0;const a=i(n(344)),d=s(n(343)),c=n(797),l=s(n(947)),f=n(742),h=s(n(849));t.checkRWT=function(e,t,n){return u(this,void 0,void 0,(function*(){const r=e.cookies.refresh_token;(0,h.default)(t,(()=>u(this,void 0,void 0,(function*(){if(!r||!(yield l.default.getRefreshToken(r)))return t.sendStatus(401);try{const e=a.verify(r,d.default.JWT_REFRESH_KEY);e.role=yield l.default.getRole(e.uid),e.version=yield l.default.getVersion(e.uid);const o=(0,c.generateToken)(e,!0);yield l.default.insertRefreshToken(o.refreshToken,e.uid,e.role),t.cookie("refresh_token",o.refreshToken,(0,f.withAge)(864e5)).cookie("token",o.accessToken,(0,f.withAge)(e.remember?36e5:void 0)).locals.user=e,n()}catch(e){console.log(e),t.sendStatus(401)}}))))}))}},990:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkReset=void 0;const s=i(n(344)),a=u(n(343));t.checkReset=function(e,t,n){const r=e.query.token||e.cookies.token;if(!r)return t.sendStatus(401);try{const e=s.verify(r,a.default.JWT_RESET_KEY);t.locals.user=e,n()}catch(e){return console.log(e),t.sendStatus(401)}}},215:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=i(n(432)),a=n(102);t.default=new class{findUserByPassword(e,t){return u(this,void 0,void 0,(function*(){const n=yield a.UserBaseModel.findOne({username:e},{uid:1,role:1,username:1,password:1}).exec();if(!n)return;const{uid:r,username:o,password:i,role:u}=n;return t?(yield s.compare(t,i))&&{uid:r,username:o,role:u}:void 0}))}findUserByInfo(e){return u(this,void 0,void 0,(function*(){const t=yield a.UserBaseModel.findOne({$or:[{username:e.username},{email:e.email},{phone:e.phone},{uid:e.uid}]},{email:!0,username:!0,phone:!0,uid:!0}).exec();if(!t)return;const{username:n,phone:r,uid:o,email:i}=t;return{username:n,phone:r,uid:o,email:i}}))}updatePassword(e,t){return u(this,void 0,void 0,(function*(){a.UserBaseModel.updateOne({uid:e},{password:yield s.hash(t,10)}).exec()}))}}},372:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.setTokenIndex=t.schema=void 0;const o=n(818),i=n(773);t.schema={"$.token":{type:i.SchemaFieldTypes.TEXT,AS:"token"},"$.uid":{type:i.SchemaFieldTypes.TEXT,AS:"uid"}},t.setTokenIndex=function(){return r(this,void 0,void 0,(function*(){try{yield o.redis.ft.create("idx:token",t.schema,{ON:"JSON",PREFIX:"token_"})}catch(e){"Index already exists"===e.message?console.log("Index idx:token exists already, skipped creation."):console.error(e)}}))}},102:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserBaseModel=void 0;const r=n(185),o=new r.Schema({uid:{type:String,required:!0,unique:!0,index:!0},username:{type:String,required:!0,unique:!0,index:!0},password:{type:String,required:!0},role:{type:String,required:!0},version:{type:Number,required:!0},email:{type:String,unique:!0,index:!0},phone:{type:String,unique:!0,index:!0}});t.UserBaseModel=(0,r.model)("User",o)},947:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(818),i=n(816);t.default=new class{insertRefreshToken(e,t,n){return r(this,void 0,void 0,(function*(){if(yield o.redis.set((0,i.getKey)(t,i.NameType.USER_VERSION),0,{NX:!0}),"OK"!==(yield o.redis.json.set((0,i.getKey)(e,i.NameType.TOKEN),"$",{uid:t,token:e}))||"OK"!==(yield o.redis.set((0,i.getKey)(t,i.NameType.USER_ROLE),n)))throw new Error("Unable to add refresh token")}))}getRefreshToken(e){return r(this,void 0,void 0,(function*(){return yield o.redis.json.get((0,i.getKey)(e,i.NameType.TOKEN))}))}deleteRefreshToken(e){return r(this,void 0,void 0,(function*(){const t=yield o.redis.ft.search("idx:token",`@uid:"${e}"`);t&&(yield Promise.all(t.documents.map((e=>o.redis.json.del(e.id)))))}))}updateVersion(e){return r(this,void 0,void 0,(function*(){if(!o.redis.incr((0,i.getKey)(e,i.NameType.USER_VERSION)))throw new Error("Unable to update version")}))}getVersion(e){return r(this,void 0,void 0,(function*(){return yield o.redis.get((0,i.getKey)(e,i.NameType.USER_VERSION))}))}getRole(e){return r(this,void 0,void 0,(function*(){return yield o.redis.get((0,i.getKey)(e,i.NameType.USER_ROLE))}))}}},479:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(961));t.default=function(e){e.use("/v1",o.default)}},413:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(860)),i=r(n(464)),u=n(322),s=n(990),a=o.default.Router();a.post("/login",i.default.loginByPassword),a.post("/logout",[u.checkJWT],i.default.logout),a.post("/reset",i.default.requestReset),a.get("/reset",[s.checkReset],i.default.verifyReset),a.put("/reset",[s.checkReset],i.default.resetPassword),t.default=a},961:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(860),i=r(n(690)),u=r(n(413)),s=(0,o.Router)();s.use("/",i.default),s.use("/auth",u.default),t.default=s},690:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(860)),i=r(n(305)),u=o.default.Router();u.get("/",i.default.getStatus),t.default=u},417:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InputError=void 0;class n extends Error{constructor(e,t){super(e),Object.setPrototypeOf(this,n.prototype),this.field=t}}t.InputError=n},797:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.generate_password=t.generateResetToken=t.generateToken=t.generate_uid=void 0;const i=n(344),u=o(n(343)),s=n(633);function a(e,t){return Math.floor(Math.random()*(t-e))+e}t.generate_uid=function(e=8){return e=e>0?e:8,[...new Array(e)].map((()=>a(0,9).toString())).join("")},t.generateToken=function(e,t){const n=e,{iat:o,exp:a}=n,d=r(n,["iat","exp"]);return{accessToken:(0,i.sign)(d,u.default.JWT_KEY,s.JWTTokenOpt),refreshToken:t&&(0,i.sign)(d,u.default.JWT_REFRESH_KEY,s.JWTRefreshOpt)}},t.generateResetToken=function(e){const t=e,{iat:n,exp:o}=t,a=r(t,["iat","exp"]);return(0,i.sign)(a,u.default.JWT_RESET_KEY,s.JWTResetOpt)},t.generate_password=function(e=8){e=e>0?e:8;return[...new Array(e)].map((()=>"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"[a(0,61)])).join("")}},849:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(417);t.default=function(e,t){return r(this,void 0,void 0,(function*(){try{yield t()}catch(t){console.log(t),t instanceof o.InputError?e.status(400).json({message:t.message,name:t.field}):e.sendStatus(500)}}))}},816:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getKey=t.NameType=void 0,function(e){e[e.USER_VERSION=0]="USER_VERSION",e[e.USER_ROLE=1]="USER_ROLE",e[e.TOKEN=2]="TOKEN"}(n||(t.NameType=n={})),t.getKey=function(e,t){return t===n.USER_VERSION&&e+"_v"||t===n.USER_ROLE&&e+"_r"||t===n.TOKEN&&"token_"+e||e}},713:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.startup=t.sendForgetPasswordMail=t.sendMail=t.renderTemplate=void 0;const a=s(n(168)),d=s(n(343)),c=i(n(97)),l=i(n(147)),f=i(n(17));function h(e,t,n){return u(this,void 0,void 0,(function*(){yield a.default.sendMail({from:`"${d.default.APP_NAME}" <${d.default.MAIL_USER}>`,to:e,subject:t,html:n})}))}t.renderTemplate=(e,t)=>{const n=f.join(f.resolve(),e),r=l.readFileSync(n,"utf-8").toString();return c.compile(r)(t)},t.sendMail=h,t.sendForgetPasswordMail=function(e,n){return u(this,void 0,void 0,(function*(){const r=(0,t.renderTemplate)("/src/templates/forgot-password-email.html",{url:`${d.default.BACKEND}/auth/reset?token=${n}`,name:e.username});return yield h(e.email,"Khôi phục mật khẩu trên "+d.default.APP_NAME,r)}))},t.startup=function(){return u(this,void 0,void 0,(function*(){return yield h("fakenoname02@gmail.com","Server started","Server started now")}))}},747:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(417);t.default=new class{validateUsername(e){if(!e||e.length<3||e.length>50)throw new r.InputError("Username có độ dài từ 3 đến 50 ký tự","username");return!0}validatePassword(e){if(!e||e.length<8||e.length>50)throw new r.InputError("Mật khẩu có độ dài từ 8 đến 50 ký tự","password");return!0}validateEmail(e){if(!e||!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e))throw new r.InputError("Email không hợp lệ","email");return!0}validateRePassword(e,t){if(t!=e)throw new r.InputError("Mật khẩu nhập lại cần giống mật khẩu","re_password")}validateLoginPassword(e){this.validateUsername(e.username),this.validatePassword(e.password)}validateRequestReset(e){e.username&&this.validateUsername(e.username)||this.validateEmail(e.email)}validateReset(e){this.validatePassword(e.password),this.validateRePassword(e.password,e.re_password)}}},432:e=>{e.exports=require("bcryptjs")},710:e=>{e.exports=require("cookie-parser")},582:e=>{e.exports=require("cors")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},97:e=>{e.exports=require("handlebars")},806:e=>{e.exports=require("helmet")},344:e=>{e.exports=require("jsonwebtoken")},185:e=>{e.exports=require("mongoose")},470:e=>{e.exports=require("morgan")},184:e=>{e.exports=require("nodemailer")},773:e=>{e.exports=require("redis")},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.c=t,n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n(n.s=607)})();