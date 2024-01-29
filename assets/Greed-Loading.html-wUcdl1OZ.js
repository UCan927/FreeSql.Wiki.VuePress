import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-HfBgxduK.js";const p={},o=t(`<h1 id="greed-loading" tabindex="-1"><a class="header-anchor" href="#greed-loading" aria-hidden="true">#</a> Greed-Loading</h1><h2 id="navigation-properties-manytoone" tabindex="-1"><a class="header-anchor" href="#navigation-properties-manytoone" aria-hidden="true">#</a> Navigation Properties - ManyToOne</h2><p>ManyToOne navigation properties are loaded by <code>ToList(includeNestedMembers: false)</code>, parameter description:</p><p><code>false</code>: Return the navigation data of Level 2 Join (default);</p><p><code>true</code>: Return the navigation data of all levels of depth Join (unused navigation data will not be returned).</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Parent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//Write in this way, no need to mark Join, </span>
<span class="token comment">//it will be automatically processed into LeftJoin when parsing the expression</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navigation-properties-onetomany-manytomany" tabindex="-1"><a class="header-anchor" href="#navigation-properties-onetomany-manytomany" aria-hidden="true">#</a> Navigation Properties - OneToMany/ManyToMany</h2><p>IncludeMany greedily loads the navigation properties of the collection. In fact, it is queried twice, and data is assembled after <code>ToList</code>.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IncludeMany has a second parameter, which can be modified before the second query.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">,</span> 
    then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>song <span class="token operator">=&gt;</span> song<span class="token punctuation">.</span>User <span class="token operator">==</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In fact, in <code>Then</code>, you can continue to use <code>Include</code>/<code>IncludeMany</code>. As long as you like it, it’s okay to go down 100 levels.</p><h2 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations" aria-hidden="true">#</a> Mutations</h2><p>It can also be greedily loaded without configuring the navigation relationship.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TestManys<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>TagId <span class="token operator">==</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Only query the first few pieces of data in each sub-collection to avoid poor IO performance caused by loading all data like EfCore (for example, there are 2000 comments under a product).</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TestManys<span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The sub-collection returns a part of the fields to avoid the problem of too many fields.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TestManys<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestMany</span> <span class="token punctuation">{</span> Title <span class="token operator">=</span> b<span class="token punctuation">.</span>Title <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="includemany-extensions" tabindex="-1"><a class="header-anchor" href="#includemany-extensions" aria-hidden="true">#</a> IncludeMany Extensions</h2><p>When the main data already exists in the memory, how to load the sub-data? So we added the List&lt;T&gt; extension method, the example is as follows:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> song1<span class="token punctuation">,</span> song2<span class="token punctuation">,</span> song3 <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Tags<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> song1<span class="token punctuation">,</span> song2<span class="token punctuation">,</span> song3 <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IncludeByPropertyName</span><span class="token punctuation">(</span>
        <span class="token named-parameter punctuation">orm</span><span class="token punctuation">:</span> fsql<span class="token punctuation">,</span> 
        <span class="token named-parameter punctuation">property</span><span class="token punctuation">:</span> <span class="token string">&quot;Tags&quot;</span><span class="token punctuation">,</span> 
        <span class="token keyword">where</span><span class="token punctuation">:</span> <span class="token string">&quot;ParentId=Code&quot;</span><span class="token punctuation">,</span> 
        <span class="token named-parameter punctuation">take</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> 
        <span class="token keyword">select</span><span class="token punctuation">:</span> <span class="token string">&quot;id,name&quot;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//v3.2.605+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comparison-of-the-two-ways-of-includemany" tabindex="-1"><a class="header-anchor" href="#comparison-of-the-two-ways-of-includemany" aria-hidden="true">#</a> Comparison of the Two Ways of IncludeMany</h2><p><strong>Way 1: IncludeMany extensions</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list111 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SysModule<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//Query data id</span>
    <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SysModule</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//Memory operation</span>
    <span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Permissions<span class="token punctuation">,</span> then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> as1 
<span class="token keyword">FROM</span> <span class="token string">&quot;SysModule&quot;</span> a 
<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>

<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span> 
a__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> as5<span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EventName&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EnCode&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Icon&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Sort&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;CreateTime&quot;</span> 
<span class="token keyword">FROM</span> <span class="token string">&quot;SysModulePermission&quot;</span> a 
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token string">&quot;SysModuleButton&quot;</span> a__Button <span class="token keyword">ON</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span> 
<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;menu2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>Way 2: Directly IncludeMany + ToList</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list222 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SysModule<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>m <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>Permissions<span class="token punctuation">,</span> then <span class="token operator">=&gt;</span> then<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Button<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;ParentId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Icon&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;UrlAddress&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;IsShow&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Sort&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Description&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;CreateTime&quot;</span> 
<span class="token keyword">FROM</span> <span class="token string">&quot;SysModule&quot;</span> a 
<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>

<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token string">&quot;Status&quot;</span><span class="token punctuation">,</span> 
a__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> as5<span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EventName&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;EnCode&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Icon&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Sort&quot;</span><span class="token punctuation">,</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;CreateTime&quot;</span> 
<span class="token keyword">FROM</span> <span class="token string">&quot;SysModulePermission&quot;</span> a 
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token string">&quot;SysModuleButton&quot;</span> a__Button <span class="token keyword">ON</span> a__Button<span class="token punctuation">.</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleButtonId&quot;</span> 
<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token string">&quot;SysModuleId&quot;</span><span class="token punctuation">)</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;menu2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Case: Query Vod table, 10 data for each of category 1, category 2, and category 3</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Vod</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TypeId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Define a temporary class, it can also be a DTO</span>
<span class="token keyword">class</span> <span class="token class-name">Dto</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TypeId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Vod<span class="token punctuation">&gt;</span></span> Vods <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dto</span> <span class="token punctuation">{</span> TypeId <span class="token operator">=</span> a <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dto<span class="token punctuation">.</span><span class="token function">IncludeMany</span><span class="token punctuation">(</span>fsql<span class="token punctuation">,</span> d <span class="token operator">=&gt;</span> d<span class="token punctuation">.</span>Vods<span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>vod <span class="token operator">=&gt;</span> vod<span class="token punctuation">.</span>TypeId <span class="token operator">==</span> d<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//After execution, each element.Vods of DTO will only have 10 records</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Query-from-Multi-Tablea">《Query from Multi Tables》</a></li><li><a href="Return-Data">《Return Data》</a></li><li><a href="Linq-to-Sql">《LinqToSql》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Expression-Function">《Expression Function》</a></li></ul>`,35),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","Greed-Loading.html.vue"]]);export{r as default};