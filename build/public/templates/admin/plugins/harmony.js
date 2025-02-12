
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"acp-page-container\">\n<div component=\"settings/main/header\" class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 col-md-8 px-0 mb-1 mb-md-0\">\n<h4 class=\"fw-bold tracking-tight mb-0\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h4>\n</div>\n<div class=\"col-12 col-md-4 px-0 px-md-3\">\n<button id=\"save\" class=\"btn btn-primary btn-sm fw-semibold ff-secondary w-100 text-center text-nowrap\">[[admin/admin:save-changes]]</button>\n</div>\n</div>\n<div class=\"row m-0\">\n<div id=\"spy-container\" class=\"col-12 col-md-8 px-0 mb-4\" tabindex=\"0\">\n<form role=\"form\" class=\"harmony-settings\">\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"enableQuickReply\" name=\"enableQuickReply\" />\n<label for=\"enableQuickReply\" class=\"form-check-label\">[[themes/harmony:settings.enableQuickReply]]</label>\n</div>\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"enableBreadcrumbs\" name=\"enableBreadcrumbs\" />\n<label for=\"enableBreadcrumbs\" class=\"form-check-label\">[[themes/harmony:settings.enableBreadcrumbs]]</label>\n</div>\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"centerHeaderElements\" name=\"centerHeaderElements\" />\n<label for=\"centerHeaderElements\" class=\"form-check-label\">[[themes/harmony:settings.centerHeaderElements]]</label>\n</div>\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"mobileTopicTeasers\" name=\"mobileTopicTeasers\" />\n<label for=\"mobileTopicTeasers\" class=\"form-check-label\">[[themes/harmony:settings.mobileTopicTeasers]]</label>\n</div>\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"stickyToolbar\" name=\"stickyToolbar\" />\n<div for=\"stickyToolbar\" class=\"form-check-label\">\n[[themes/harmony:settings.stickyToolbar]]\n<p class=\"form-text\">\n[[themes/harmony:settings.stickyToolbar.help]]\n</p>\n</div>\n</div>\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"autohideBottombar\" name=\"autohideBottombar\" />\n<div for=\"autohideBottombar\" class=\"form-check-label\">\n[[themes/harmony:settings.autohideBottombar]]\n<p class=\"form-text\">\n[[themes/harmony:settings.autohideBottombar.help]]\n</p>\n</div>\n</div>\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"openSidebars\" name=\"openSidebars\" />\n<label for=\"openSidebars\" class=\"form-check-label\">[[themes/harmony:settings.openSidebars]]</label>\n</div>\n<div class=\"form-check form-switch\">\n<input type=\"checkbox\" class=\"form-check-input\" id=\"chatModals\" name=\"chatModals\" />\n<div for=\"chatModals\" class=\"form-check-label\">\n[[themes/harmony:settings.chatModals]]\n</div>\n</div>\n</form>\n</div>\n<div class=\"col-md-4 d-none d-md-block px-3 hidden\" component=\"settings/toc\">\n<div class=\"sticky-top\" style=\"top: 4.0rem;\">\n<div class=\"fw-bold text-xs text-muted mb-1\">[[admin/settings/general:on-this-page]]</div>\n<nav id=\"settings-navbar\" class=\"h-100 flex-column align-items-stretch\">\n<nav class=\"nav nav-pills flex-column gap-2\" component=\"settings/toc/list\">\n<!-- this is filled by public/src/admin/settings.js populateTOC function -->\n</nav>\n</nav>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
