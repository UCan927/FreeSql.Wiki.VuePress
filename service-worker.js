if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const i=e=>a(e,d),f={module:{uri:d},exports:r,require:i};s[d]=Promise.all(t.map((e=>f[e]||i(e)))).then((e=>(c(...e),r)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/404.html-c99d9d07.js",revision:"aaf5b5d0cc795b1e2eae2f1d76e74fbc"},{url:"assets/ado.html-5bba03f5.js",revision:"f548c7cdc482671fbc4e40d7f80fecd2"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aggregateroot.html-d4f23358.js",revision:"72f2ef1025d9c719ace4d1899cbaaca1"},{url:"assets/aop-freesql-autofac.html-2c2c43a3.js",revision:"ee09a63756e0043bb3ed80e368a0cca2"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop.html-1b691ebd.js",revision:"15f85378107243b8222ccb1b7b7850ef"},{url:"assets/aop.html-a3acf500.js",revision:"ff64798f8c029c9523c2f8d3df233717"},{url:"assets/api.html-3b54dd43.js",revision:"fd68e9aef37c16376ef5ad96cb3bda02"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/app-505c373b.js",revision:"1ca6fe4e4a57e7e4c6336de77c37e065"},{url:"assets/awesome-freesql.html-0697fe8c.js",revision:"3672176d3916f7670f0b6cc7d389fa66"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/BaseEntity.html-78721daa.js",revision:"4d50730e3350dc2c396aded733331e9f"},{url:"assets/cascade-delete.html-70e2f9dd.js",revision:"b5c3a9bb8d9d621fabc9e53e072a612c"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/Cascade-Saving.html-7d6171ef.js",revision:"3125aacbe69b3284f01e0862d90579a1"},{url:"assets/cascade-saving.html-9aaa9c54.js",revision:"ae0b1a70b9adab30fd66db9834105c7b"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/change-log.html-21ddfc7b.js",revision:"cdf81226490448819bc2395126c11282"},{url:"assets/change-log.html-bb5c3797.js",revision:"f35927afe58361e6ca2b3575e91506ee"},{url:"assets/code-first.html-07a595a3.js",revision:"fd8f588691c32bbe052846404f3b90bf"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/CodeFirst-Mode.html-8e28fbc1.js",revision:"ada144baeeb7fe6577b6da23ca27c245"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/config-entity-from-db-first.html-fb0fc250.js",revision:"13f7b4e966f652397064d04c60141dfa"},{url:"assets/contributing.html-cc1cc959.js",revision:"cee00a09cc17432914a981c66d6f3ae9"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/custom-attribute.html-740b95d1.js",revision:"43a65db2efbccb3d9eb8d70791c356fb"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-context.html-bcef74b1.js",revision:"f315836ee1e0a35ce0040e662d484896"},{url:"assets/db-first.html-7631e783.js",revision:"82694417eaabb66631df657b7a5c6b91"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/Delete-Data.html-965b3e4c.js",revision:"709074aaea8133fd605718f7f76d7557"},{url:"assets/Delete-Data.html-ef978f95.js",revision:"fea197610122fa5f782dc9910f173037"},{url:"assets/delete.html-91d546e3.js",revision:"ffa956d2decae097eb04a6bc886c16fb"},{url:"assets/delete.html-bb10f205.js",revision:"83873218541b1a8af700f0162da656fd"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-7802397c.js",revision:"b97cefc5ca1dcedcfef34f3deb8c19a6"},{url:"assets/donation.html-ba7bdf30.js",revision:"40eeab0551b2f142bdf93b96d8582b2b"},{url:"assets/dynamic.html-cb89472c.js",revision:"5761988f670e4ef0f56fe3f1a9ba0986"},{url:"assets/dynamic.html-e4b7de23.js",revision:"0ea21e28f9aac3f97d86551c42061bd3"},{url:"assets/entity-attribute.html-0caf6592.js",revision:"7112a8f38fd87fe37b1fdd6e7894601f"},{url:"assets/entity-attribute.html-1975d1fe.js",revision:"358221ed70a64c11a3a4ed99feb861c0"},{url:"assets/Entity-Relationship.html-a7c4e178.js",revision:"ddb220a3cdc12e7938ff6e15fda0ee97"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-94b3c6bd.js",revision:"715da2b2e7a0f5819e0196bf752c5f5c"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/faq.html-6112245e.js",revision:"7ee9a33443fd16d66b053f6a643c577a"},{url:"assets/filters.html-cc429386.js",revision:"4fc5c9a373251984724699af92b7c7dd"},{url:"assets/filters.html-f1f4368a.js",revision:"914a57005e9863823504651e33e645a6"},{url:"assets/fluent-api.html-22a95794.js",revision:"3aa88cf08afe55e727b104927e5ab12e"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-1c661eff.js",revision:"9c56de5ec11a0963f40ae6729df5101c"},{url:"assets/freeredis.html-12eeeb25.js",revision:"5390b095457c853235a8c946056bf0b0"},{url:"assets/freeredis.html-e18c45f0.js",revision:"84562047a94f6b28695fcdee4f9ee25d"},{url:"assets/freescheduler.html-7d621bd1.js",revision:"43f371bf1c56c08dea075e77a4dcc9ca"},{url:"assets/freescheduler.html-d9034b8e.js",revision:"f6f48120cc6e7ae4e60899b43157124e"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-auditlog.html-e4cf42f5.js",revision:"b12d9ba718de799514bc4f16350e8c6a"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-cap.html-fc0389ec.js",revision:"7dd689db76dc729933114ec15bd88fa7"},{url:"assets/freesql-docker.html-98bf869b.js",revision:"ece1b1aad8131602a2d95810a67a6b8d"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freeSql-extensions-baseentity.html-289abb1c.js",revision:"eca052e0b63b45889ef2956a7b613e95"},{url:"assets/freeSql-extensions-baseentity.html-7a104d6e.js",revision:"b892ac663c92e2c38b4ab9a1dcc5bfdd"},{url:"assets/freesql-extensions-jsonmap.html-cb489636.js",revision:"833d5138a8c5ab3a7046b81f490e957a"},{url:"assets/freesql-extensions-jsonmap.html-fb42a7ec.js",revision:"e4d670a1d037501f61dc6dab80c8e37b"},{url:"assets/freesql-provider-custom.html-ebbaec56.js",revision:"ec11a8e141a83bbff60a4225613bd52a"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-5dc8c237.js",revision:"aa2ff9ec22431308e51a6f88d7c7b3b6"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-odbc.html-41f81a0c.js",revision:"9823b6cb684d57f24f7385b3e5b5d785"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-oracle.html-2b6610ee.js",revision:"8f5c4c368f8b5f2346d75459e645a1a8"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-postgresql.html-1ce4832a.js",revision:"c394ce70623eadbde8ae8da392c4c405"},{url:"assets/freesql-provider-postgresql.html-6be9a29f.js",revision:"ee07deab46b1d4d2289063adb67aba81"},{url:"assets/freesql-provider-questdb.html-5ed7bd81.js",revision:"c0aeaecac4cf72eabcc5eb8fa0c61e25"},{url:"assets/freesql-provider-questdb.html-868d6c8c.js",revision:"fd77e68433e03bce9edbf35614bdfb3b"},{url:"assets/freesql-provider-sqlitecore.html-427fd703.js",revision:"0fb0208e8560c70af466de4c976e3be3"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesqladminlte.html-360ff70d.js",revision:"64e8332ccf042e0b2ec0fe30f48684b0"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-dad75e36.js",revision:"b7155d9e1acf08ff61a886306be3f1da"},{url:"assets/getting-started.html-edad45fd.js",revision:"46ad464e8449599139524df80f4a1a1e"},{url:"assets/getting-started.html-edc37430.js",revision:"5d760fe29e1bbc45c2f1d7173af44127"},{url:"assets/Greed-Loading.html-af7005c9.js",revision:"0e3cd544f0ddf13d8379970730b3b843"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-345d1d5a.js",revision:"b5a3578c758a9f31c3b6977eb6d517ca"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/idlebus-freesql.html-cd1f3ce2.js",revision:"db8be21cde14390535bff6e32c032206"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/ifreesql-context.html-7a63f0ab.js",revision:"820e85154b088bbb220bb8af1695f523"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-14b8588c.js",revision:"76de8433f8a086f407ca3a003dcdb148"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-4f5d9f3f.js",revision:"e46f0264a21dd2947ec8a0d1a1ac7e40"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-7394738b.js",revision:"8d15935077b7782fdbf6f48ca54603fc"},{url:"assets/index.html-73f12d38.js",revision:"b0052e759f595c3132163deb0e4e5f12"},{url:"assets/index.html-7816f9c4.js",revision:"1cc42ec409dfb782fb95edb6e8b2fe0c"},{url:"assets/index.html-787939fd.js",revision:"596dd5ea461fe21819a3e14ac442cd69"},{url:"assets/index.html-7b1d7050.js",revision:"5eb2018d15cf39da3c74537bf9851518"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-d6351a92.js",revision:"f1625586b4988d7c28ed65745dadbbc6"},{url:"assets/Insert-Data.html-0adb0b74.js",revision:"7f14469cdd143481028af4b45a6c9de5"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-aa2c322b.js",revision:"1d0576c6c184127ec5f17349e5b7323e"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert-or-update.html-d38874e2.js",revision:"77a25a3766ab9baac5e06bce09794de3"},{url:"assets/insert.html-4664cc08.js",revision:"a7c6d469f636203178bb4364ac41dc3a"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-cb4c2ec7.js",revision:"3144cf52402d4dd0b70f84fe01c692b9"},{url:"assets/install.html-e75fd126.js",revision:"a104490d8a4c3a42ce3e284de8a7bda1"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/iselect-depcopy.html-b82202c6.js",revision:"6f418c5d0999a7f4da1dca89f3528576"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-3e0b49c8.js",revision:"697f5f2c471484880dd22a0c294dbf69"},{url:"assets/issues-in-valuetype.html-662955da.js",revision:"f1e61c95d6a7a764babdb7d0cdbdc05b"},{url:"assets/issues-in-valuetype.html-9dd15629.js",revision:"59036e48d25faf5fe57354015543fb74"},{url:"assets/issues-mysql5_5.html-82d7673e.js",revision:"7c84414e21047ef5be6afca45f1a9fba"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Lazy-Loading.html-98442510.js",revision:"5d30e9b8ca2ebf8cb83c65f51659dcfc"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9cf68893.js",revision:"ff9d79156c45469d740d09318077cae0"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/Linq-to-Sql.html-ae3dba4c.js",revision:"71820ccdf57acfcb5c36ed97389bb42d"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-fb23ccc1.js",revision:"af4510bb013e0af45db8358fd55e1f98"},{url:"assets/multi-tenancy.html-7c58c5a3.js",revision:"d112d35faa4938e0c35f49bd9d4167f4"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/navigate-attribute.html-1d0944b7.js",revision:"4772d8a9c888116598e6c0d04519935f"},{url:"assets/navigate-attribute.html-e32cb01f.js",revision:"b79764fa6d9e397ce665d6e0b69156a7"},{url:"assets/otherworks.html-9e61f31d.js",revision:"f35f031ae21d94cb94621ebec93390cd"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/Pagination.html-4c20970f.js",revision:"eafe85f8c5684da9c118619e9b0165b4"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/paging.html-294043ab.js",revision:"fe538edd70302bffecf96d4b4a4128f7"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/Parent-Child-Relationship-Query.html-9ad3e0e8.js",revision:"b10c22dd0d314506d991ac335e99c62f"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/performance.html-22550e7b.js",revision:"e849c1715f97c7184df5430ab4851882"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-6e46edc1.js",revision:"267b92f486d5eebd9b0b5e70149a07a0"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-from-Multi-Table.html-9f6447b4.js",revision:"5ca4522befc36711cc4e6195ccff98e5"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-d4e17d0b.js",revision:"c48804a37caf9271e8f06e4dc9e258c4"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-024e8378.js",revision:"39860cd4abd6230dffe4454c05e3362d"},{url:"assets/read-write-splitting.html-71855a96.js",revision:"b2961b33d31d5359650043654b2b00fb"},{url:"assets/Repository-Layer.html-8817c7f7.js",revision:"2c4725baccfe3e9cc40eaccbaa0c0a8c"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/repository.html-1bd63190.js",revision:"9819d875f2318d352f21d1841aaf9089"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/Return-Data.html-17a8a09d.js",revision:"26a5456ea6fa43d7ce0d8476e150c7e7"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/select-as-tree.html-6d807003.js",revision:"1d8cac18ce1deffe7029c62c5390a9fe"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-group-by.html-d82db709.js",revision:"0045e0bb3805dd456ee8a0a7d8bb50a2"},{url:"assets/select-group-by.html-ec5c058e.js",revision:"b28e5b39811f873e6d14ec31f77f4a51"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-include.html-4776c01e.js",revision:"cd0a7ad9a957ab5edcd0117c2bd46886"},{url:"assets/select-lazy-loading.html-abdebd95.js",revision:"3ba28d48a85c80e3ffe4f26c58a750f3"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-multi-table.html-ae6033f1.js",revision:"e9c531ffa34b6317fa1b00a85ce7a8ac"},{url:"assets/select-return-data.html-c39c356f.js",revision:"03bfb8f308945eba6aa1e0563c737161"},{url:"assets/select-return-data.html-e86b287b.js",revision:"a0d66395b740ca9c070cb2b3edaa1dcb"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select-single-table.html-ef9da131.js",revision:"710562f10aa0b814e0959735ab0eaee2"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/select.html-e7336e51.js",revision:"a69943d028bb0bddbf011d644abc6b68"},{url:"assets/service-support.html-37933585.js",revision:"821e2e39059cdd9bddbe7bef02b8bba2"},{url:"assets/service-support.html-6c2e5a26.js",revision:"cf7131af88b5ad4402e00da94b4d4012"},{url:"assets/sharding.html-5bc622eb.js",revision:"52255b57d4b6af09c181d875e9c322ef"},{url:"assets/sharding.html-730b4d4f.js",revision:"61ded82e847ae6f2a6cdf6c24ed6453e"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-0246cb2b.js",revision:"f8705135191f2573ddfdaf8cf30bb6e2"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/type-mapping.html-c218846b.js",revision:"72511407af427501e2dec1ea2ff3b9a7"},{url:"assets/type-mapping.html-efefc6d4.js",revision:"f9976c993100e196573dd6958297f15a"},{url:"assets/unionall.html-3b2acf70.js",revision:"235cac26dfb602f60a492882b0b0191b"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/Unit-of-Work-Manager.html-3e026259.js",revision:"f58021a881866c585591457dd57cbe21"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/unit-of-work.html-310b1cf9.js",revision:"2bc38a04237ec39ed91035b41166885a"},{url:"assets/Unit-of-Work.html-47506926.js",revision:"f5607bab32c66e40760cd663498aaace"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/unitofwork-manager.html-aba95a40.js",revision:"e07b73603137cacd8c130c3a1b8060b1"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/Update-Data.html-5fb7e113.js",revision:"efbd5ac7c5fb81c950c7f013ab00b78f"},{url:"assets/update.html-3455588d.js",revision:"1d3bff585b6b986589c3c3ae20e93e50"},{url:"assets/update.html-51064491.js",revision:"f08692c4fb80d3c761dd19f20a2cd25b"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-dapper.html-d9703e08.js",revision:"0813cffe64150bfc0df32ef0f9dbc2f2"},{url:"assets/vs-entity-framework.html-5627808a.js",revision:"f5c077a936554494199b5e249147b726"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/With-Sql.html-3f7b2904.js",revision:"9db66c43dbdfea6ac0b5bab1441bb956"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-cfda5b6a.js",revision:"557cbc3700d653b37db886788926f6f7"},{url:"assets/withsql.html-d9aa96ff.js",revision:"081795cbdc2182f6edf5f568f8f33dde"},{url:"assets/withtempquery.html-5562d298.js",revision:"20c7884d56ddeccc0e641afab79d1b6e"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"36c55e8a1cff286e5e80cb4b7b1b0055"},{url:"404.html",revision:"ad56b9539fa0d74409d4e3b92fb30bc9"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map