(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{242:function(t,s,a){"use strict";a.r(s);var r={props:["type"],data:function(){var t=this.$handlebarsVersions;return{urlForType:{awsFull:"http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v".concat(t.latest,".js"),awsRuntime:"http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars.runtime-v".concat(t.latest,".js")}}},computed:{href:function(){var t=this.urlForType[this.$props.type];if(null==t)throw new Error("Unkown url type for DownloadHandlebars: "+this.$props.type);return t}}},e=a(2),n=Object(e.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("a",{attrs:{href:this.href}},[this._t("default")],2)},[],!1,null,null,null);s.default=n.exports}}]);