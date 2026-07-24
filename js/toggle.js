(function () {
  function initToggleTasks() {
    // Flag that JS is active so CSS un-hides buttons
    document.documentElement.classList.add('arrm-js');

    const STARTER_CLASS = 'arrm-starter'; 

    document.querySelectorAll('.arrm-toggle-tasks').forEach((button) => {
      if (button.dataset.initialized) return;
      button.dataset.initialized = 'true';

      const targetId = button.getAttribute('aria-controls');
      const tableWrapper = document.getElementById(targetId);

      if (!tableWrapper) return;

      const sectionName = button.dataset.sectionName || 'tasks';

      button.addEventListener('click', (e) => {
        e.preventDefault();

        // Check current state via class or attribute
        const isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';
        const showStartersOnly = isCurrentlyExpanded; // Toggle to opposite

        tableWrapper.classList.toggle('arrm-show-starter-only', showStartersOnly);

        button.setAttribute('aria-expanded', String(!showStartersOnly));
        button.textContent = showStartersOnly
          ? `Show all ${sectionName}`
          : `Show starter ${sectionName} only`;
      });
    });
  }

  // Handle both DOMContentLoaded and already-loaded states
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggleTasks);
  } else {
    initToggleTasks();
  }
})();
