(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{303:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"registering-tokens-with-users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registering-tokens-with-users","aria-hidden":"true"}},[t._v("#")]),t._v(" Registering Tokens with Users")]),t._v(" "),s("p",[t._v("When a user opens their MetaMask, they are shown a variety of assets, including tokens. By default, MetaMask auto-detects some major popular tokens and auto-displays them, but for most tokens, the user will need to add the token themselves.")]),t._v(" "),s("p",[t._v("While this is possible using our UI with the "),s("code",[t._v("Add Token")]),t._v(" button, that process can be cumbersome, and involves the user interacting with contract addresses, and is very error prone.")]),t._v(" "),s("p",[t._v("You can greatly improve the security and experience of users adding your token to their MetaMask by taking advantage of the "),s("code",[t._v("wallet_watchAsset")]),t._v(" API as defined in "),s("a",{attrs:{href:"https://github.com/estebanmino/EIPs/blob/master/EIPS/eip-747.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP 747"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"code-free-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-free-example","aria-hidden":"true"}},[t._v("#")]),t._v(" Code-free Example")]),t._v(" "),s("p",[t._v("Here are a couple live web applications that let you enter your token details, and then share them with a simple web link:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vittominacori.github.io/watch-token/create.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watch Token"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://metamask.github.io/Add-Token/#edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add Token App"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("If you'd like to integrate suggesting a token into your own web app, you can follow this code snippet to implement it:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tokenAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xd00981105e61274c8a5cd5a88fe7e037d935b513'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tokenSymbol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TUT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tokenDecimals "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tokenImage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://placekitten.com/200/300'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wallet_watchAsset'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ERC20'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenSymbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        decimals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenDecimals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenImage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" added")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("added"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Thanks for your interest!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your loss!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"default-token-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-token-list","aria-hidden":"true"}},[t._v("#")]),t._v(" Default Token List")]),t._v(" "),s("p",[t._v("If you're a major and popular token, you may qualify to be listed in our "),s("a",{attrs:{href:"https://github.com/MetaMask/eth-contract-metadata",target:"_blank",rel:"noopener noreferrer"}},[t._v("eth-contract-metadata"),s("OutboundLink")],1),t._v(" registry. This is a centralized solution and takes a larger toll on our development team, so we prefer to avoid the politics of picking and choosing tokens that get auto-detected in users' accounts, so please see if the EIP-747 method above can suit your needs before submitting a new token there for inclusion.")]),t._v(" "),s("p",[t._v("If you have a user on your site, asking them to click once to add a token is a small burden on them, and allows you to leverage the trusting relationship you already have with your user instead of our central repository.")])])},[],!1,null,null,null);a.default=n.exports}}]);