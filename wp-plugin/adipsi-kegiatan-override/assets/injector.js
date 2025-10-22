(function(){
  const cfg = (typeof window !== 'undefined' && window.adipsiKegiatan) || {};
  const SECTION_SELECTOR = cfg.selector || '#kegiatan';
  const REST_URL = cfg.restUrl || '/wp-json/adipsi/v1/kegiatan';
  const PER_PAGE = Number(cfg.perPage || 6);
  const DEBUG = !!cfg.debug;

  const log = (...args) => { if (DEBUG) console.log('[ADIPSI]', ...args); };

  function ready(fn){
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
  }

  function ensureMount(section){
    let mount = section.querySelector('[data-adipsi-mount]');
    if (!mount){
      mount = document.createElement('div');
      mount.dataset.adipsiMount = '1';
      mount.className = 'adipsi-override-mounted';
      section.prepend(mount);
    }
    return mount;
  }

  async function fetchKegiatan(){
    const url = new URL(REST_URL, window.location.origin);
    if (PER_PAGE) url.searchParams.set('per_page', String(PER_PAGE));
    const res = await fetch(url.toString(), { credentials: 'same-origin' });
    if (!res.ok) throw new Error('Failed to fetch kegiatan: ' + res.status);
    return res.json();
  }

  function renderCards(items){
    const grid = document.createElement('div');
    grid.className = 'adipsi-grid';

    for (const item of items){
      const card = document.createElement('article');
      card.className = 'adipsi-card';

      const figure = document.createElement('div');
      figure.style.position = 'relative';
      const img = document.createElement('img');
      img.src = item.image || item.thumbnail || item.featured_image || '';
      img.alt = item.title || '';

      const badge = document.createElement('div');
      badge.className = 'adipsi-badge';
      badge.textContent = 'Terbaru';

      figure.appendChild(img);
      figure.appendChild(badge);

      const body = document.createElement('div');
      body.className = 'adipsi-card-body';

      const date = document.createElement('div');
      date.className = 'adipsi-date';
      const dateIcon = document.createElement('span');
      dateIcon.textContent = '📅';
      const dateText = document.createElement('span');
      dateText.textContent = item.date || item.published_at || '';
      date.appendChild(dateIcon);
      date.appendChild(dateText);

      const title = document.createElement('h3');
      title.className = 'adipsi-title';
      title.textContent = item.title || '';

      const desc = document.createElement('p');
      desc.className = 'adipsi-desc';
      desc.textContent = item.description || item.excerpt || '';

      body.appendChild(date);
      body.appendChild(title);
      body.appendChild(desc);

      card.appendChild(figure);
      card.appendChild(body);
      grid.appendChild(card);
    }

    return grid;
  }

  function neutralizeTheme(section){
    // Hide all siblings after our mount using CSS rule seeded by style
    // Also remove known static containers if present by heuristics
    const staticGrids = section.querySelectorAll('.grid, [class*="grid-cols-"]');
    staticGrids.forEach(el => el.setAttribute('hidden', 'hidden'));
  }

  async function takeOver(){
    const section = document.querySelector(SECTION_SELECTOR);
    if (!section){ log('section not found, retry later'); return false; }

    const mount = ensureMount(section);
    neutralizeTheme(section);

    try {
      const items = await fetchKegiatan();
      if (!Array.isArray(items)) throw new Error('Invalid payload');
      const grid = renderCards(items);
      // Replace anything after mount
      while (mount.nextSibling) section.removeChild(mount.nextSibling);
      section.appendChild(grid);
      return true;
    } catch (err) {
      console.error('[ADIPSI] injector error', err);
      return false;
    }
  }

  function guardAgainstReinjection(){
    const root = document.querySelector(SECTION_SELECTOR);
    if (!root) return;
    const observer = new MutationObserver(() => {
      const hasOurGrid = root.querySelector('.adipsi-grid');
      const hasMount = root.querySelector('[data-adipsi-mount]');
      if (!hasMount || !hasOurGrid){
        takeOver();
      }
    });
    observer.observe(root, { childList: true, subtree: true });
  }

  ready(async () => {
    log('footer injector LOADED');
    await takeOver();
    guardAgainstReinjection();
  });
})();
