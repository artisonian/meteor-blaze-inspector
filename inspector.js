function getBlazeTmplInstForSelection () {
  var view = (window.Blaze && $0) && Blaze.getView($0) || {};
  var props = Object.getOwnPropertyNames(view);
  var clone = Object.create(null);

  for (var i = 0; i < props.length; i++) {
    clone[props[i]] = view[props[i]];
  }

  window.$instance = clone.templateInstance && clone.templateInstance();

  return window.$instance;
}

chrome.devtools.panels.elements.createSidebarPane("Blaze Template Instance", function (sidebar) {
  function updateSidebar () {
    sidebar.setExpression("(" + getBlazeTmplInstForSelection.toString() + ")()");
  }

  // TODO: make this reactive
  chrome.devtools.panels.elements.onSelectionChanged.addListener(updateSidebar);

  updateSidebar();
});
