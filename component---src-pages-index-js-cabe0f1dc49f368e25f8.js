(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1NdR":function(e,t,n){},EDuE:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("zufY"),a=n("q1tI"),i=n.n(a),o=n("Wbzz"),s=(n("KKXr"),n("Vd3H"),n("+ZDr")),c=n.n(s),l=n("VgBE"),d=(n("1NdR"),l.sorter),u=function(e){var t=e.content,n=e.title;console.log(d);var r=t.map((function(e){return e.node.frontmatter})).sort(d).reduce((function(e,t){return e.length?(e[e.length-1][0].section.split(",")[0]===t.section.split(",")[0]?e[e.length-1].push(t):e.push([t]),e):(e.push([t]),e)}),[]);return i.a.createElement("div",{className:"main-card"},i.a.createElement("h1",{className:"lesson-title gradient"},n),i.a.createElement("div",{className:"lesson-content"},i.a.createElement("ol",{className:"sections-name"},r.map((function(e){return i.a.createElement("li",{key:e[0].section},i.a.createElement("h3",{className:"lesson-section-title"},e[0].section),i.a.createElement("ol",null,e.map((function(e){return i.a.createElement("li",{key:e.path},i.a.createElement(c.a,{to:e.path},e.title))}))))})))))};n("EDuE"),t.default=function(){return i.a.createElement(o.a,{query:"2707967039",render:function(e){return i.a.createElement("div",{className:"index"},i.a.createElement("div",{className:"jumbotron gradient"},i.a.createElement("h1",null,e.site.siteMetadata.title),i.a.createElement("h2",null,e.site.siteMetadata.subtitle)),i.a.createElement(u,{title:"فهرست مطالب",content:e.allMarkdownRemark.edges}))},data:r})}},VgBE:function(e,t,n){function r(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}n("KKXr");var a=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.splitSections=r,e.exports.sorter=function(e,t){var n,i;e.attributes&&e.attributes.order?(n=e.attributes.order,i=t.attributes.order):(n=e.order,i=t.order);var o=r(n),s=o[0],c=o[1],l=r(i),d=l[0],u=l[1];return s!==d?s-d:a(c)-a(u)}},zufY:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"معماری کامپیوتر","subtitle":"یو یو یو یو یو ","description":"---------------دسکریپشون","keywords":["this is","a list of keywords and phrase","that search engines","will index your page for"]}},"allMarkdownRemark":{"edges":[{"node":{"id":"f129a1af-bf98-5f1d-84f0-6c108ceb3f2d","frontmatter":{"order":"1A","path":"/intro","title":"Introduction","section":"The First Section","description":"this is the description that will show up in social shares"}}},{"node":{"id":"6c5bce73-4e03-5416-ac80-4d59e049bec7","frontmatter":{"order":"2A","path":"/vhdl001","title":"انواع داده","section":"آموزش VHDL","description":"انواع داده"}}},{"node":{"id":"992ad41e-8c4e-5155-96e4-207e9351266a","frontmatter":{"order":"2B","path":"/page-3","title":"Page 3","section":"The Second Section","description":"The third page"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-cabe0f1dc49f368e25f8.js.map