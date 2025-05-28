document.querySelectorAll('.link').forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.getAttribute('data-tab');

      // Fjern active fra alle tabs
      document.querySelectorAll('.link').forEach(link => link.classList.remove('active'));
      tab.classList.add('active');

      // Skjul alle content-sektioner
      document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
        section.setAttribute('hidden', true);
      });

      // Vis den valgte sektion
      const activeContent = document.getElementById(selectedTab);
      if (activeContent) {
        activeContent.classList.add('active');
        activeContent.removeAttribute('hidden');
      }
    });
  });