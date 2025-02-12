
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
    return "<div class=\"px-lg-4\">\n<div class=\"row border-bottom py-2 m-0 sticky-top acp-page-main-header align-items-center\">\n<div class=\"col-12 px-0 mb-1 mb-md-0 d-flex justify-content-between align-items-center\">\n<h4 class=\"fw-bold tracking-tight mb-0\">[[admin/manage/categories:analytics.title, " + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "]]</h4>\n<div component=\"category-selector\" class=\"btn-group dropdown-right category-dropdown-container bottom-sheet\">\n<button type=\"button\" class=\"btn-ghost-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n<span component=\"category-selector-selected\">\n<span class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
      ((guard((context != null) ? context['selectedCategory'] : null) && !guard((context != null) ? context['showCategorySelectLabel'] : null)) ?
        "\n" + 
          __escape(helper(context, helpers, 'buildCategoryIcon', [guard((context != null) ? context['selectedCategory'] : null), "24px", "rounded-circle"])) + 
          "\n" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "\n" :
        "\n<i class=\"fa fa-fw " + 
          (guard((context != null) ? context['selectCategoryIcon'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryIcon'] : null)) :
            "fa-list") + 
          "\"></i>\n" + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread-tools.select-category]]") + 
          "\n") + 
      "\n</span>\n</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden position-absolute\">\n<input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"[[search:type-to-search]]\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu p-1\" role=\"menu\">\n<li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n<a class=\"dropdown-item rounded-1\" role=\"menu-item\">[[search:no-matches]]</a>\n</li>\n" + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n</div>\n</div>\n</div>\n<hr />\n<div class=\"row \">\n<div class=\"col-sm-6 text-center\">\n<div class=\"card\">\n<div class=\"card-body\">\n<div class=\"position-relative\" style=\"aspect-ratio: 2;\">\n<canvas id=\"pageviews:hourly\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.pageviews-hourly]]</div>\n</div>\n</div>\n<div class=\"col-sm-6 text-center\">\n<div class=\"card\">\n<div class=\"card-body\">\n<div class=\"position-relative\" style=\"aspect-ratio: 2;\">\n<canvas id=\"pageviews:daily\" height=\"250\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.pageviews-daily]]</div>\n</div>\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-sm-6 text-center\">\n<div class=\"card\">\n<div class=\"card-body\">\n<div class=\"position-relative\" style=\"aspect-ratio: 2;\">\n<canvas id=\"topics:daily\" height=\"250\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.topics-daily]]</div>\n</div>\n</div>\n<div class=\"col-sm-6 text-center\">\n<div class=\"card\">\n<div class=\"card-body\">\n<div class=\"position-relative\" style=\"aspect-ratio: 2;\">\n<canvas id=\"posts:daily\" height=\"250\"></canvas>\n</div>\n</div>\n<div class=\"card-footer\"><small>[[admin/manage/categories:analytics.posts-daily]]</div>\n</div>\n</div>\n</div>\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n<a href=\"#\" class=\"dropdown-item rounded-1\" role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "\n<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">\n<div class=\"category-item d-inline-flex align-items-center gap-1\">\n" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "\n" + 
              __escape(helper(context, helpers, 'buildCategoryIcon', [guard(value), "24px", "rounded-circle"])) + 
              "\n" :
            "") + 
          "\n" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\n</div>\n</span>\n</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
