const components = {
    Header: () => "<header>Header</header>",
    Footer: () => "<footer>Footer</footer>",
    Sidebar: () => "<aside>Sidebar</aside>",
    Content: () => "<main>Content</main>",
  };
  
  function renderComponent(name) {
    const component = components[name];
  
    // Ensure it's a valid function before rendering
    if (typeof component === "function") {
      return component();
    }
  
    // Fallback if component not found
    return "<div>Default Component</div>";
  }
  
  // Testing
  console.log(renderComponent("Header"));   // '<header>Header</header>'
  console.log(renderComponent("Unknown"));  // '<div>Default Component</div>'
  