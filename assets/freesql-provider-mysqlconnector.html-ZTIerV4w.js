import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as p,c as o,f as c,a as n,b as s,d as l,e as i}from"./app-DYeB6ahU.js";const u={},r=n("code",null,"FreeSql.Provider.MySqlConnector",-1),k=n("code",null,"FreeSql",-1),d={href:"https://github.com/mysql-net/MySqlConnector",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"MySqlConnector",-1),v=n("code",null,"FreeSql.Provider.MySql",-1),y=n("code",null,"MySQL Server, MariaDB, Percona Server, Amazon Aurora, Azure Database for MySQL, Google Cloud SQL for MySQL, OceanBase",-1),b=i(`<p>并且支持BulkCopy，<strong>推荐使用</strong></p><p>如果你使用 <code>FreeSql.Provider.MySql</code> 发生了以下错误，请替换到 FreeSql.Provider.MySqlConnector：</p><ul><li>The given key &#39;0&#39; was not present in the dictionary.</li><li>The given key &#39;25653&#39; was not present in the dictionary.</li><li>The given key &#39;26995&#39; was not present in the dictionary.</li><li>The given key &#39;28261 was not present in the dictionary.</li><li>The given key &#39;65535&#39; was not present in the dictionary.</li><li>The type initializer for &#39;MySql.Data.MySqlClient.Replication.ReplicationManager&#39; threw an exception.</li><li>Parameter &#39;@xxx&#39; must be defined.</li><li>Object cannot be cast from DBNull to other types.</li></ul><h2 id="executemysqlbulkcopy" tabindex="-1"><a class="header-anchor" href="#executemysqlbulkcopy" aria-hidden="true">#</a> ExecuteMySqlBulkCopy</h2><ul><li>主键无值</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Department</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Department<span class="token punctuation">&gt;</span></span> departments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Department<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span><span class="token string">&quot;部门1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span><span class="token string">&quot;部门2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span><span class="token string">&quot;部门3&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>departments<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">InsertIdentity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//这行</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteMySqlBulkCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Id主键有值时</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">List<span class="token punctuation">&lt;</span>Department<span class="token punctuation">&gt;</span></span> departments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Department<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> Name <span class="token operator">=</span><span class="token string">&quot;部门1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> Name <span class="token operator">=</span><span class="token string">&quot;部门2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Department</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> Id<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> Name <span class="token operator">=</span><span class="token string">&quot;部门3&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>departments<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ExecuteMySqlBulkCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function q(h,g){const a=e("ExternalLinkIcon");return p(),o("div",null,[c(" # FreeSql.Provider.MySqlConnector "),n("p",null,[r,s("是"),k,s("基于社区提供的最新的"),n("a",d,[m,l(a)]),s("驱动的实现，兼容性、性能都比"),v,s("好，且支持多种数据库，如："),y]),b])}const f=t(u,[["render",q],["__file","freesql-provider-mysqlconnector.html.vue"]]);export{f as default};