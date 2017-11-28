webpackJsonp([20],{214:function(t,s,a){var e=a(0)(a(239),a(278),null,null);t.exports=e.exports},239:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={components:{"breadcrumbs-example":{template:'<div class="markdown-live-example">\n  <breadcrumbs :items="items"/>\n</div>',data:function(){return{items:[{text:"Home",href:"#"},{text:"Library",href:"#"},{text:"Data",href:"#"}]}}},"breadcrumbs-item":{template:'<div class="markdown-live-example"><breadcrumbs>\n  <breadcrumb-item href="#"><b>Home</b></breadcrumb-item>\n  <breadcrumb-item href="#">Library</breadcrumb-item>\n  <breadcrumb-item active>Data</breadcrumb-item>\n</breadcrumbs>\n\x3c!-- breadcrumbs-item.vue --\x3e</div>'},"breadcrumbs-router-link":{template:'<div class="markdown-live-example">\n  <breadcrumbs :items="items"/>\n</div>',data:function(){return{items:[{text:"Home",to:"/",exact:!0},{text:"Breadcrumbs",to:"/breadcrumbs"}]}}}}}},278:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("markdown-wrapper",[a("h1",{attrs:{id:"breadcrumbs"}},[t._v("Breadcrumbs "),a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbs","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("blockquote",[a("p",[t._v("Indicate the current page's location within a navigational hierarchy.")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[t._v("Example "),a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Use "),a("code",{pre:!0},[t._v("items")]),t._v(" array to create a breadcrumbs nav. "),a("code",{pre:!0},[t._v("active")]),t._v(" state of last element is automatically set if it is undefined.")]),t._v(" "),a("breadcrumbs-example",{ref:"breadcrumbs-example"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumbs")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":items")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"items"')]),t._v("/>")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("items")]),t._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'Home'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#'")]),t._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'Library'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#'")]),t._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'Data'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#'")]),t._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- breadcrumbs-example.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h2",{attrs:{id:"breadcrumb-item"}},[t._v("Breadcrumb Item "),a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb-item","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("You can also use "),a("code",{pre:!0},[t._v("<breadcrumb-item>")]),t._v(" in breadcrumbs directly. This is useful while full control of item text is need (e.g. HTML tags).")]),t._v(" "),a("p",[t._v("Note that "),a("code",{pre:!0},[t._v("active")]),t._v(" state will not automatically set if using this mode.")]),t._v(" "),a("breadcrumbs-item",{ref:"breadcrumbs-item"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumbs")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumb-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("b")]),t._v(">")]),t._v("Home"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("b")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumb-item")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumb-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("Library"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumb-item")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumb-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("active")]),t._v(">")]),t._v("Data"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumb-item")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumbs")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- breadcrumbs-item.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h2",{attrs:{id:"router-link"}},[t._v("Router Link "),a("a",{staticClass:"header-anchor",attrs:{href:"#router-link","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("p",[t._v("Parse "),a("code",{pre:!0},[t._v("to")]),t._v(" (String or Object) instead of "),a("code",{pre:!0},[t._v("href")]),t._v(" will create a "),a("code",{pre:!0},[t._v("router-link")]),t._v(" for the breadcrumb item, which you can use with "),a("a",{attrs:{href:"https://router.vuejs.org/"}},[t._v("Vue-Router")]),t._v(".")]),t._v(" "),a("breadcrumbs-router-link",{ref:"breadcrumbs-router-link"}),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("breadcrumbs")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":items")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"items"')]),t._v("/>")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("items")]),t._v(": [\n          {"),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'Home'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'/'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("exact")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("},\n          {"),a("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'Breadcrumbs'")]),t._v(", "),a("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'/breadcrumbs'")]),t._v("}\n        ]\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("\x3c!-- breadcrumbs-router-link.vue --\x3e")]),t._v("\n")])]),t._v(" "),a("h1",{attrs:{id:"api-reference"}},[t._v("API Reference "),a("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("h2",{attrs:{id:"breadcrumbsjs"}},[a("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/release/src/components/breadcrumbs/Breadcrumbs.js"}},[t._v("Breadcrumbs.js")]),t._v(" "),a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbsjs","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("h3",{attrs:{id:"props"}},[t._v("Props "),a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("items")])]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Breadcrumb items to create. Props defined in each item object is the same with BreadcrumbItem.vue, except "),a("code",{pre:!0},[t._v("text")]),t._v(" will be replace as the breadcrumb item body.")])])])])]),a("h3",{attrs:{id:"slots"}},[t._v("Slots "),a("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("default")])]),t._v(" "),a("td",[t._v("The breadcrumbs body.")])])])])]),a("h2",{attrs:{id:"breadcrumbitemjs"}},[a("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/release/src/components/breadcrumbs/BreadcrumbItem.js"}},[t._v("BreadcrumbItem.js")]),t._v(" "),a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbitemjs","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("h3",{attrs:{id:"props-2"}},[t._v("Props "),a("a",{staticClass:"header-anchor",attrs:{href:"#props-2","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("acive")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Set item to active state.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("href")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("An native link will be created if this prop present.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("target")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("_self")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Native link prop.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("to")])]),t._v(" "),a("td",[t._v("String or Object")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("An Vue-Router link will be created if this prop present.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("replace")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Vue-Router link prop.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("append")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Vue-Router link prop.")])]),t._v(" "),a("tr",[a("td",[a("code",{pre:!0},[t._v("exact")])]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Vue-Router link prop.")])])])])]),a("h3",{attrs:{id:"slots-2"}},[t._v("Slots "),a("a",{staticClass:"header-anchor",attrs:{href:"#slots-2","aria-hidden":"true"}},[t._v("🔗")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[t._v("default")])]),t._v(" "),a("td",[t._v("The breadcrumb item body.")])])])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=20.795629b4aa37b2802110.js.map