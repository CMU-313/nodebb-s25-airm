
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
    return "<!DOCTYPE html>\n<html lang=\"" + 
      __escape(helper(context, helpers, 'localeToHTML', [guard((context != null) ? context['userLang'] : null), guard((context != null) ? context['defaultLang'] : null)])) + 
      "\" " + 
      (guard((context != null) ? context['languageDirection'] : null) ?
        "data-dir=\"" + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          "\" style=\"direction: " + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          ";\"" :
        "") + 
      ">\n<head>\n<title>" + 
      __escape(guard((context != null) ? context['browserTitle'] : null)) + 
      "</title>\n" + 
      compiled.blocks['metaTags'](helpers, context, guard, iter, helper) + 
      "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/client" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        "-" + 
          __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "") + 
      ((guard((context != null) ? context['languageDirection'] : null) == "rtl") ?
        "-rtl" :
        "") + 
      ".css?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\" />\n" + 
      compiled.blocks['linkTags'](helpers, context, guard, iter, helper) + 
      "\n<script>\nvar config = JSON.parse('" + 
      guard((context != null) ? context['configJSON'] : null) + 
      "');\nvar app = {\nuser: JSON.parse('" + 
      guard((context != null) ? context['userJSON'] : null) + 
      "')\n};\ndocument.documentElement.style.setProperty('--panel-offset', `${localStorage.getItem('panelOffset') || 0}px`);\n</script>\n" + 
      (guard((context != null) ? context['useCustomHTML'] : null) ?
        "\n" + 
          guard((context != null) ? context['customHTML'] : null) + 
          "\n" :
        "") + 
      "\n" + 
      (guard((context != null) ? context['useCustomCSS'] : null) ?
        "\n<style>" + 
          guard((context != null) ? context['customCSS'] : null) + 
          "</style>\n" :
        "") + 
      "\n</head>\n<body class=\"" + 
      __escape(guard((context != null) ? context['bodyClass'] : null)) + 
      " skin-" + 
      (guard((context != null) ? context['bootswatchSkin'] : null) ?
        __escape(guard((context != null) ? context['bootswatchSkin'] : null)) :
        "noskin") + 
      "\">\n<a class=\"visually-hidden-focusable position-absolute top-0 start-0 p-3 m-3 bg-body\" style=\"z-index: 1021;\" href=\"#content\">[[global:skip-to-content]]</a>\n<div class=\"layout-container d-flex justify-content-between pb-4 pb-md-0\">\n<nav component=\"sidebar/left\" class=\"" + 
      (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['openSidebars'] : null) ?
        "open" :
        "") + 
      " text-dark bg-light sidebar sidebar-left start-0 border-end vh-100 d-none d-lg-flex flex-column justify-content-between sticky-top\">\n<ul id=\"main-nav\" class=\"list-unstyled d-flex flex-column w-100 gap-2 mt-2 overflow-y-auto\">\n" + 
      compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<div class=\"sidebar-toggle-container align-self-start\">\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['disableCustomUserSkins'] : null) ?
        "" :
        "\n<div class=\"dropend m-2\" component=\"skinSwitcher\" title=\"[[themes/harmony:skins]]\">\n<a data-bs-toggle=\"dropdown\" href=\"#\" role=\"button\" class=\"nav-link position-relative\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-label=\"[[themes/harmony:skins]]\">\n<span class=\"justify-content-between w-100\">\n<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n<span>\n<i component=\"skinSwitcher/icon\" class=\"fa fa-fw fa-paintbrush\"></i>\n</span>\n<span class=\"nav-text small visible-open fw-semibold\">[[themes/harmony:skins]]</span>\n</span>\n</span>\n</a>\n<ul class=\"dropdown-menu p-1 text-sm overflow-auto p-1\" role=\"menu\">\n<div class=\"d-flex\">\n<div>\n<li class=\"dropdown-header\">Light</li>\n<div class=\"d-grid\" style=\"grid-template-columns: 1fr 1fr;\">\n" + 
          compiled.blocks['bootswatchSkinOptions.light'](helpers, context, guard, iter, helper) + 
          "\n</div>\n</div>\n<div>\n<li class=\"dropdown-header\">Dark</li>\n" + 
          compiled.blocks['bootswatchSkinOptions.dark'](helpers, context, guard, iter, helper) + 
          "\n</div>\n</div>\n<hr class=\"my-1\"/>\n<div class=\"d-grid\" style=\"grid-template-columns: 1fr 1fr;\">\n" + 
          compiled.blocks['bootswatchSkinOptions.default'](helpers, context, guard, iter, helper) + 
          "\n" + 
          compiled.blocks['bootswatchSkinOptions.custom'](helpers, context, guard, iter, helper) + 
          "\n</div>\n</ul>\n</div>\n") + 
      "\n<div class=\"sidebar-toggle m-2 d-none d-lg-block\">\n<a href=\"#\" role=\"button\" component=\"sidebar/toggle\" class=\"nav-link d-flex gap-2 align-items-center p-2 pointer w-100 text-nowrap\" title=\"[[themes/harmony:expand]]\" aria-label=\"[[themes/harmony:sidebar-toggle]]\">\n<i class=\"fa fa-fw fa-angles-right\"></i>\n<i class=\"fa fa-fw fa-angles-left\"></i>\n<span class=\"nav-text visible-open fw-semibold small lh-1\">[[themes/harmony:collapse]]</span>\n</a>\n</div>\n</div>\n</nav>\n<main id=\"panel\" class=\"d-flex flex-column gap-3 flex-grow-1 mt-3\" style=\"min-width: 0;\">\n" + 
      ((guard((context != null) ? context['brand:logo'] : null) || guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null)) ?
        "\n<div class=\"container-lg px-md-4 brand-container\">\n<div class=\"col-12 d-flex border-bottom pb-3 " + 
          (guard((context != null && context['config'] != null && context['config']['theme'] != null) ? context['config']['theme']['centerHeaderElements'] : null) ?
            "justify-content-center" :
            "") + 
          "\">\n<div component=\"brand/wrapper\" class=\"d-flex align-items-center gap-3 p-2 rounded-1 align-content-stretch \">\n" + 
          (guard((context != null) ? context['brand:logo'] : null) ?
            "\n<a component=\"brand/anchor\" href=\"" + 
              (guard((context != null) ? context['brand:logo:url'] : null) ?
                __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
                __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/") + 
              "\" title=\"[[global:header.brand-logo]]\">\n<img component=\"brand/logo\" alt=\"" + 
              (guard((context != null) ? context['brand:logo:alt'] : null) ?
                __escape(guard((context != null) ? context['brand:logo:alt'] : null)) :
                "[[global:header.brand-logo]]") + 
              "\" class=\"" + 
              __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null) ? context['brand:logo'] : null)) + 
              "?" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
              "\" />\n</a>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
            "\n<a component=\"siteTitle\" class=\"text-truncate align-self-stretch align-items-center d-flex\" href=\"" + 
              (guard((context != null) ? context['title:url'] : null) ?
                __escape(guard((context != null) ? context['title:url'] : null)) :
                __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/") + 
              "\">\n<h1 class=\"fs-6 fw-bold text-body mb-0\">" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
              "</h1>\n</a>\n" :
            "") + 
          "\n</div>\n" + 
          (guard((context != null && context['widgets'] != null && context['widgets']['brand-header'] != null) ? context['widgets']['brand-header']['length'] : null) ?
            "\n<div data-widget-area=\"brand-header\" class=\"flex-fill gap-3 p-2 align-self-center\">\n" + 
              compiled.blocks['widgets.brand-header'](helpers, context, guard, iter, helper) + 
              "\n</div>\n" :
            "") + 
          "\n</div>\n</div>\n" :
        "") + 
      "\n<script>\nconst headerEl = document.getElementById('header-menu');\nif (headerEl) {\nconst rect = headerEl.getBoundingClientRect();\nconst offset = Math.max(0, rect.bottom);\ndocument.documentElement.style.setProperty('--panel-offset', offset + `px`);\n} else {\ndocument.documentElement.style.setProperty('--panel-offset', `0px`);\n}\n</script>\n<div class=\"container-lg px-md-4 d-flex flex-column gap-3 h-100 mb-5 mb-lg-0\" id=\"content\">\n<noscript>\n<div class=\"alert alert-danger\">\n<p>\nYour browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in <strong>read-only mode</strong>.\n</p>\n<p>\nPlease download a browser that supports JavaScript, or enable it if it's disabled (i.e. NoScript).\n</p>\n</div>\n</noscript>\n" + 
      (guard((context != null) ? context['noScriptMessage'] : null) ?
        "\n<noscript>\n<div class=\"alert alert-info\">\n<p>\n" + 
          __escape(guard((context != null) ? context['noScriptMessage'] : null)) + 
          "\n</p>\n</div>\n</noscript>\n" :
        "");
  }

  compiled.blocks = {
    'metaTags': function metaTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['metaTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildMetaTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'linkTags': function linkTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['linkTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildLinkTag', [guard(value)]));
      }, function alt() {
        return "";
      });
    },
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\n<li class=\"nav-item mx-2 " + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " dropend" :
                "") + 
              "\" title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\">\n<a class=\"nav-link navigation-link d-flex gap-2 justify-content-between align-items-center " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "dropdown-toggle" :
                "") + 
              "\" " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                " href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" " :
                " href=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
                  "\"") + 
              " " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null) ?
                "id=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
                  "\"" :
                "") + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              " " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "aria-label=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "\"" :
                "") + 
              ">\n<span class=\"d-flex gap-2 align-items-center text-nowrap truncate-open\">\n<span class=\"position-relative\">\n" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\n<i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\n<span component=\"navigation/count\" class=\"visible-closed position-absolute top-0 start-100 translate-middle badge rounded-1 bg-primary " + 
                  (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null) ?
                    "" :
                    "hidden") + 
                  "\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "</span>\n" :
                "") + 
              "\n</span>\n" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "<span class=\"nav-text small visible-open fw-semibold text-truncate\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>" :
                "") + 
              "\n</span>\n<span component=\"navigation/count\" class=\"visible-open badge rounded-1 bg-primary " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null) ?
                "" :
                "hidden") + 
              "\">" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
              "</span>\n</a>\n" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdown'] : null) ?
                "\n<ul class=\"dropdown-menu p-1 shadow\" role=\"menu\">\n" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['dropdownContent'] : null)) + 
                  "\n</ul>\n" :
                "") + 
              "\n</li>\n" :
            "") + 
          "\n";
      }, function alt() {
        return "";
      });
    },
    'bootswatchSkinOptions.light': function bootswatchSkinOptionslight(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['light'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['light'] != null && context['bootswatchSkinOptions']['light'][key0] != null) ? context['bootswatchSkinOptions']['light'][key0]['value'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['light'] != null && context['bootswatchSkinOptions']['light'][key0] != null) ? context['bootswatchSkinOptions']['light'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['light'] != null && context['bootswatchSkinOptions']['light'][key0] != null) ? context['bootswatchSkinOptions']['light'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'bootswatchSkinOptions.dark': function bootswatchSkinOptionsdark(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['dark'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['dark'] != null && context['bootswatchSkinOptions']['dark'][key0] != null) ? context['bootswatchSkinOptions']['dark'][key0]['value'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['dark'] != null && context['bootswatchSkinOptions']['dark'][key0] != null) ? context['bootswatchSkinOptions']['dark'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['dark'] != null && context['bootswatchSkinOptions']['dark'][key0] != null) ? context['bootswatchSkinOptions']['dark'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'bootswatchSkinOptions.default': function bootswatchSkinOptionsdefault(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['default'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['default'] != null && context['bootswatchSkinOptions']['default'][key0] != null) ? context['bootswatchSkinOptions']['default'][key0]['value'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['default'] != null && context['bootswatchSkinOptions']['default'][key0] != null) ? context['bootswatchSkinOptions']['default'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['default'] != null && context['bootswatchSkinOptions']['default'][key0] != null) ? context['bootswatchSkinOptions']['default'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'bootswatchSkinOptions.custom': function bootswatchSkinOptionscustom(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['bootswatchSkinOptions'] != null) ? context['bootswatchSkinOptions']['custom'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n<a href=\"#\" class=\"dropdown-item rounded-1\" data-value=\"" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['custom'] != null && context['bootswatchSkinOptions']['custom'][key0] != null) ? context['bootswatchSkinOptions']['custom'][key0]['value'] : null)) + 
          "\" role=\"menuitem\">" + 
          __escape(guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['custom'] != null && context['bootswatchSkinOptions']['custom'][key0] != null) ? context['bootswatchSkinOptions']['custom'][key0]['name'] : null)) + 
          " <i class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['bootswatchSkinOptions'] != null && context['bootswatchSkinOptions']['custom'] != null && context['bootswatchSkinOptions']['custom'][key0] != null) ? context['bootswatchSkinOptions']['custom'][key0]['selected'] : null) ?
            "" :
            " invisible ") + 
          "\"></i></a>\n</li>\n";
      }, function alt() {
        return "";
      });
    },
    'widgets.brand-header': function widgetsbrandheader(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['brand-header'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n" + 
          guard((context != null && context['widgets'] != null && context['widgets']['brand-header'] != null && context['widgets']['brand-header'][key0] != null) ? context['widgets']['brand-header'][key0]['html'] : null) + 
          "\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
