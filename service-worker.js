if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let i={};const f=e=>a(e,d),c={module:{uri:d},exports:i,require:f};s[d]=Promise.all(t.map((e=>c[e]||f(e)))).then((e=>(r(...e),i)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/404.html-edea8d80.js",revision:"3390ae646e4f2f1cde41220f77b66459"},{url:"assets/ado.html-65e652c1.js",revision:"92548d99f0b7dfc99993dd144c939061"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/aggregateroot.html-1cb567ca.js",revision:"c47c14d0d21fd075655b9fcf57006415"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aop-freesql-autofac.html-619e1d18.js",revision:"e197b85d5fdf694d0c058fe4e19a6060"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop.html-855b8c79.js",revision:"8ab06e9d8bc10df8a0d77e7b66cab7ee"},{url:"assets/aop.html-cf84b2ff.js",revision:"63101d66ce96a974c10153842f9fc45d"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/api.html-f57af989.js",revision:"f168cf972cda98ba303e6ae67d827c15"},{url:"assets/app-cccbf2df.js",revision:"7537f261b9231b5438a381543e128cdf"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/awesome-freesql.html-6d5e9708.js",revision:"198eb81e22227b01e4c6fbba53849e48"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/BaseEntity.html-9716aa63.js",revision:"5044bc3d69bff8b9768cde5ee795e806"},{url:"assets/cascade-delete.html-61435fb7.js",revision:"8ed79b7ad6cdeea36baa3e638f686999"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/cascade-saving.html-41ad63fb.js",revision:"bc74aedd5f656ba5a05a5833e81cdb79"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/Cascade-Saving.html-fa1d4dff.js",revision:"f9544322d0f8cb15e28c6039e0127eac"},{url:"assets/change-log.html-4d00b59a.js",revision:"839e40e9c07fd49a5e7e0d6f8c524b61"},{url:"assets/change-log.html-c176b855.js",revision:"00a4b09ce68f24b832f60d4fe483ae39"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/code-first.html-5d327398.js",revision:"595bb04e26c903fedfa3ebbadb09d45e"},{url:"assets/CodeFirst-Mode.html-43e3e031.js",revision:"76d39514e2e4d27fdf168b34479f9c18"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/config-entity-from-db-first.html-b05e52e8.js",revision:"82b7a5ac525c5ce5c9d51e4d4321f1cf"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/contributing.html-e1e903b3.js",revision:"53d0a31f419f177e30395353162f0333"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/custom-attribute.html-96eba883.js",revision:"6a057c10875bef679c5bdb10dc74547c"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-context.html-f864d58f.js",revision:"8a7e4487ddcd892223bb9a8ccc2fede3"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/db-first.html-ffe61a64.js",revision:"aae1ff9ff3a20fce7726b10aa7c8e104"},{url:"assets/Delete-Data.html-3d555f2d.js",revision:"f1c95c91c042f1ad0b7aef092156ca87"},{url:"assets/Delete-Data.html-ef978f95.js",revision:"fea197610122fa5f782dc9910f173037"},{url:"assets/delete.html-2a15af7f.js",revision:"7a423ff2d088cb0f70e93d11a169c13f"},{url:"assets/delete.html-bb10f205.js",revision:"83873218541b1a8af700f0162da656fd"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-28690ae4.js",revision:"645eda6a737d8b15f8e3dc3d365d1f61"},{url:"assets/donation.html-45f7f5a6.js",revision:"12b32db0e3321f46083ad96def08ea8e"},{url:"assets/dynamic.html-35f7f61e.js",revision:"f65a319595ffeb7ccbfa2c22da27bc57"},{url:"assets/dynamic.html-81571363.js",revision:"b4cab015d6e7714461f6de096be22521"},{url:"assets/entity-attribute.html-311a631c.js",revision:"073d22d2d4266dcfd8b7257a70a3972b"},{url:"assets/entity-attribute.html-f62f6710.js",revision:"928c1dd62f7fa7234ef998b61fdac491"},{url:"assets/Entity-Relationship.html-9f381bf5.js",revision:"dd43fb0c4ce8a8c160c41b928de9b655"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-7339f86f.js",revision:"91366011c9c60a72347ee33058199c38"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/faq.html-17da0e56.js",revision:"9f6f3f78ee7bc6bafe8bee3438314d28"},{url:"assets/filters.html-a8a1f039.js",revision:"b07994570060dd6210ab53383d105d7d"},{url:"assets/filters.html-f1f4368a.js",revision:"914a57005e9863823504651e33e645a6"},{url:"assets/fluent-api.html-4b2085d8.js",revision:"b4fc3c9d8c9d4ef8d620516dd521c36a"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-50ecf906.js",revision:"d90e559fe930de83a12a03e2b5e868ba"},{url:"assets/freeredis.html-12537e76.js",revision:"a4ed8e46fd69d808fe02487296c56259"},{url:"assets/freeredis.html-1355d9b4.js",revision:"5b44cc453d09c7ef2f0a8f3ea8a1a375"},{url:"assets/freescheduler.html-9817f4e8.js",revision:"2d2a0a18363f7e23664b5d056a5611df"},{url:"assets/freescheduler.html-bc7dc61e.js",revision:"fde6cda8dabb140fadd200b164bd9297"},{url:"assets/freesql-auditlog.html-1b8d64bc.js",revision:"01e1b9334e528e8c2472b9908633ce83"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-cap.html-a3057776.js",revision:"dbd6855a86f82ff64cae6ee58fa49ccf"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-docker.html-8adfc174.js",revision:"1fcaccb4ce024b7a6f325ed1eba1dc35"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freeSql-extensions-baseentity.html-7a104d6e.js",revision:"b892ac663c92e2c38b4ab9a1dcc5bfdd"},{url:"assets/freeSql-extensions-baseentity.html-ad3b88ae.js",revision:"159768b944e758e2081aa29fbe6aaaa9"},{url:"assets/freesql-extensions-jsonmap.html-68881117.js",revision:"fcb3861462186fba3c77ab298c95b37f"},{url:"assets/freesql-extensions-jsonmap.html-e87eb7f2.js",revision:"b1a74a0d193c95a575ea9ff24647a325"},{url:"assets/freesql-provider-custom.html-0b351ae7.js",revision:"dcbf6381e7699c48bb3d4168525cdcbe"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-mysqlconnector.html-d9687a77.js",revision:"a027b7f157216bac4114f37a027f009c"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-odbc.html-931a598a.js",revision:"0d108559c7967c5d0643d61200a87b98"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-oracle.html-b4591b0a.js",revision:"4a4ed7b6ce0d5a92eeb939599baf9282"},{url:"assets/freesql-provider-postgresql.html-143b8a32.js",revision:"7abca64fcc1f62c8ed475d582170e8bb"},{url:"assets/freesql-provider-postgresql.html-1ce4832a.js",revision:"c394ce70623eadbde8ae8da392c4c405"},{url:"assets/freesql-provider-questdb.html-5a956104.js",revision:"dbc862b3160ed21bbd209d3518a9a597"},{url:"assets/freesql-provider-questdb.html-5ed7bd81.js",revision:"c0aeaecac4cf72eabcc5eb8fa0c61e25"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesql-provider-sqlitecore.html-e907f3da.js",revision:"bf3b4bc5c63e2c55fe346096e66dd8e0"},{url:"assets/freesqladminlte.html-76a81a8a.js",revision:"c26a34bdcb6c40879abd723a637a8985"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/getting-started.html-1f21948c.js",revision:"60e0893ed33825c4d8ab091320125901"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-66bd1108.js",revision:"4012c53676046c93d1756efc5559fdd5"},{url:"assets/getting-started.html-dad75e36.js",revision:"b7155d9e1acf08ff61a886306be3f1da"},{url:"assets/Greed-Loading.html-bc4b2ff5.js",revision:"42764c85e7fc08777400bd4d49075a7f"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-188ca003.js",revision:"116658c50bcf643189defbe2a35a3eeb"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/idlebus-freesql.html-a1481b40.js",revision:"254f600d50231b7945203904d69132fc"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/ifreesql-context.html-86b8e781.js",revision:"87e4754d658d4649f8da375a69037495"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-04a5eef5.js",revision:"4e688680dfdfb25f953b4fa847d3b095"},{url:"assets/index.html-1344bd39.js",revision:"a62bb8cee0bc655c3646b9bdeea56812"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-5748698c.js",revision:"ca0f89d74f2c79194bcf941fb51f294b"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-7628a239.js",revision:"1d395b1431008e5079c23e4c57f9703a"},{url:"assets/index.html-763986e5.js",revision:"7013f504e5070f9ad8c9081299557f8c"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8b32eae3.js",revision:"5605aea17b1664b9ccebfed042e85a57"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-95813018.js",revision:"9c731df32319e812ab6854109b96e21d"},{url:"assets/index.html-df8a5624.js",revision:"8341613f6ac00cd8a2483ab2ddc41e52"},{url:"assets/Insert-Data.html-34ae4f9e.js",revision:"9ea35c9fcfcac0eef1f9a1feb17f2fe3"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/insert-or-update.html-619d0f91.js",revision:"9984b020c2381ad54d36eab29d03a62f"},{url:"assets/insert-or-update.html-9f923866.js",revision:"667069c5507bd346b91b18e58dd77865"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert.html-506f4bc4.js",revision:"8e677010d100628694cc0c6535af2655"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-1f1658bb.js",revision:"d401aeb6925563ac65ba49b8d6c91ecd"},{url:"assets/install.html-7c3a8f56.js",revision:"411a7b79ec8169168105f7920a6d721e"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/iselect-depcopy.html-633fe7a9.js",revision:"f9c705697fc9c671f7a3a736517d0ac9"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-7ec8a4e3.js",revision:"2cbfa02df45bff2b0b24cf2e1929ea0f"},{url:"assets/issues-in-valuetype.html-9dd15629.js",revision:"59036e48d25faf5fe57354015543fb74"},{url:"assets/issues-in-valuetype.html-cfcb84b3.js",revision:"2a94c1035956e91f3f2747e8b211cfe2"},{url:"assets/issues-mysql5_5.html-c1f27b65.js",revision:"6dde1eb0fab2ff5a4befe5195de41928"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/Lazy-Loading.html-25bcbb5c.js",revision:"96a8eca9b44f1594bba240bfa1e24189"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Linq-to-Sql.html-723001c2.js",revision:"f663461fde2668f8407fb0db8ebae57e"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/linq-to-sql.html-f3d5aa78.js",revision:"c5823106e950b7c0a34b15b387d401fb"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-b389661f.js",revision:"2bebefa73b8956d22a3c78ccca05773e"},{url:"assets/multi-tenancy.html-6f1004ef.js",revision:"a838df4184282b333ffa1cc4cac2634b"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/navigate-attribute.html-1d0944b7.js",revision:"4772d8a9c888116598e6c0d04519935f"},{url:"assets/navigate-attribute.html-6de849ad.js",revision:"cc17eddda4dcaddffd6f71e1e8167d2c"},{url:"assets/otherworks.html-29fd7fdf.js",revision:"0c6f8878da2bab5778ef867c15a54bde"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/Pagination.html-2aa6e09d.js",revision:"e7cde860c105ab7d23570dc21b7c9334"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/paging.html-769fde77.js",revision:"17d13c2ef68ef5e03c03e548d2924517"},{url:"assets/Parent-Child-Relationship-Query.html-6dc2f988.js",revision:"57559afd3bf848eeed7cbd9c8561071a"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/performance.html-fe8e26be.js",revision:"54240e494ae67c42110b8c7272df6739"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-9895d78e.js",revision:"f994c4f99935559a56d3c525c6e7f2b2"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-from-Multi-Table.html-b85fb494.js",revision:"fc88836574d562de1668bd0a4274732f"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-14a51854.js",revision:"4d2abdca84f70dc4b0b149ce784c5638"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-28dbbaf0.js",revision:"cfc5cff3c185a5e06aa8b85a946e966f"},{url:"assets/read-write-splitting.html-71855a96.js",revision:"b2961b33d31d5359650043654b2b00fb"},{url:"assets/Repository-Layer.html-2bf8994f.js",revision:"e058f795c85ee4449f13d77f0e6938dd"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/repository.html-d0193703.js",revision:"e413f6a39f69201c6d0ae1d3631b52a3"},{url:"assets/Return-Data.html-3364f45c.js",revision:"134a599717000ee038b748d74825ff80"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/select-as-tree.html-78128c91.js",revision:"6745f1581b8d2b731a0ade7012c4d21b"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-group-by.html-ea5993ea.js",revision:"7a522f526aa0579b484ebed3edeb9e9f"},{url:"assets/select-group-by.html-ec5c058e.js",revision:"b28e5b39811f873e6d14ec31f77f4a51"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-include.html-de517e1e.js",revision:"a02f3e73c8c17d3dda2d2b03eb1fd3a5"},{url:"assets/select-lazy-loading.html-2fd16be4.js",revision:"773b39e024a060361bda983bf183eabd"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-328c7511.js",revision:"e06ca9e0d4829ab40625844b30fd69cf"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-return-data.html-72b8894a.js",revision:"bc6a68bfdd6fedaa956125be58b1fab5"},{url:"assets/select-return-data.html-96380762.js",revision:"99d87884b9b830cc63b7cf6d3b6bdd62"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select-single-table.html-a8cca9f7.js",revision:"3d0344c9a806c8e415fc80a88330d0b7"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/select.html-bf4ec8dd.js",revision:"92695a7b634cdf240a7339ae7d505f30"},{url:"assets/service-support.html-395c213a.js",revision:"2a3f65304faa8423772213a2bb79d28f"},{url:"assets/service-support.html-a7de3cce.js",revision:"3d4f273318d4a935ba6728462c2cd701"},{url:"assets/sharding.html-63bd3e81.js",revision:"a68350e377e67963081ae45be21b7cfa"},{url:"assets/sharding.html-9b2c4d2f.js",revision:"5485667c48cea1717b061a2483b585a1"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/transaction.html-7674d13f.js",revision:"2f27102c18616c3efdf50c37c9ca39b1"},{url:"assets/type-mapping.html-ace73f1e.js",revision:"09dab5bda2aa89a901693f3c77e53a51"},{url:"assets/type-mapping.html-e814b57c.js",revision:"ea4be33f01a74fd4ded00f027829e069"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/unionall.html-89f8ee6c.js",revision:"7448551d4bb330abdf534f1d3d1cb61c"},{url:"assets/Unit-of-Work-Manager.html-2f633b17.js",revision:"a40f81b4582f81853e0d92f8e06f8d1d"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/unit-of-work.html-7c09f571.js",revision:"1a8e5a2e13ec9c465a8ada168d9e82e7"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/Unit-of-Work.html-f7eb9138.js",revision:"7404bbe09e3c8207444e1152ae84d200"},{url:"assets/unitofwork-manager.html-7500e814.js",revision:"a51e158485915cc94a2f926a49e73504"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/Update-Data.html-e06b8574.js",revision:"65cd191ac1630abf03f0e3cbcdc8d49e"},{url:"assets/update.html-3455588d.js",revision:"1d3bff585b6b986589c3c3ae20e93e50"},{url:"assets/update.html-54663cb7.js",revision:"a488dcba12b62f1af50b7babca9e009c"},{url:"assets/vs-dapper.html-26908692.js",revision:"580aadab7f382380625806fe6dbfdf6a"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/vs-entity-framework.html-fc7bb90f.js",revision:"0c8520a647fb6a06f0289ff12931bf29"},{url:"assets/With-Sql.html-e8757930.js",revision:"b3a59c16dafe70dd9b24d330f59d0c55"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-1da6487e.js",revision:"6e58f2b88fb947a69bcea1ee1aef8312"},{url:"assets/withsql.html-691111f7.js",revision:"cdd6d1cade4380e4f3a4eefc6db35cb0"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"assets/withtempquery.html-fba349ea.js",revision:"25ad29f5720e5874315725f55a899c1a"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"03f8962705af16295bb383bd31940d99"},{url:"404.html",revision:"3fb17d621baf2c60f672195d314fb582"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map