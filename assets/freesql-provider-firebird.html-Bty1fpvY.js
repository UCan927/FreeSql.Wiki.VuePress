import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c,a as n,b as p,d as i,e as a}from"./app-hrK1pXjY.js";const r={},l=a('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>Firebird</code> 是一个开源的关系型数据库管理系统，它支持嵌入式部署。<code>Firebird</code> 嵌入式数据库适用于需要在本地应用程序中直接集成数据库的场景，无需单独的数据库服务器。它提供了强大的事务处理、数据完整性和并发控制功能，同时保持轻量级和高效。适合小型到中型应用程序，特别是那些需要在不依赖外部数据库服务器的情况下进行本地数据存储和操作的情况。</p><p><code>Firebird</code> 和 <code>Sqlite</code> 都是本地数据库，<code>Firebird</code> 支持并发读写，<code>Sqlite</code> 不支持并发写。</p>',3),d={href:"https://firebirdsql.org/en/documentation/",target:"_blank",rel:"noopener noreferrer"},u=a(`<h2 id="安装包" tabindex="-1"><a class="header-anchor" href="#安装包" aria-hidden="true">#</a> 安装包</h2><p>FreeSql.Provider.Firebird</p><p>.NET CLI</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql.Provider.Firebird
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Package Manager</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Install-Package FreeSql.Provider.Firebird
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Firebird<span class="token punctuation">,</span> <span class="token string">&quot;database=localhost:D:\\fbdata\\EXAMPLES.fdb;user=sysdba;password=123456&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Sql：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">cmd<span class="token punctuation">.</span>CommandText</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//自动创建表</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function k(b,h){const s=t("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[n("a",d,[p("Firebird | 官网 "),i(s)])]),u])}const f=e(r,[["render",k],["__file","freesql-provider-firebird.html.vue"]]);export{f as default};