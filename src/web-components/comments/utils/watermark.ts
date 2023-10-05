export function waterMarkElementObserver(shadowRoot: ShadowRoot) {
  const superVizCommentsId = shadowRoot.querySelector('#superviz-comments');
  if (superVizCommentsId) {
    const options = {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true,
    };
    const superVizCommentsIdobserver = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach((mutation) => {
        const supervizCommentsDiv = shadowRoot.querySelector('#superviz-comments');

        if (supervizCommentsDiv && supervizCommentsDiv.contains(mutation.target)) {
          observer.disconnect();
          reloadWaterMarkContent(shadowRoot);
        }
      });
    });

    superVizCommentsIdobserver.observe(superVizCommentsId, options);
  }
}

export function reloadWaterMarkContent(shadowRoot: ShadowRoot) {
  const poweredByFooterId = shadowRoot.querySelector('#poweredby-footer');
  if (poweredByFooterId) {
    poweredByFooterId.remove();
  }

  const divPoweredByFooter = document.createElement('div');
  divPoweredByFooter.id = 'poweredby-footer';
  divPoweredByFooter.className = 'footer';

  const divPoweredBy = document.createElement('div');
  divPoweredBy.className = 'powered-by powered-by--horizontal';

  const link = document.createElement('a');
  link.href = 'https://superviz.com/';
  link.target = '_blank';
  link.className = 'link';

  const divText = document.createElement('div');
  divText.textContent = 'Powered by';

  const img = document.createElement('img');
  img.width = 48;
  img.height = 8.86;
  img.src = 'https://production.cdn.superviz.com/static/superviz-gray-logo.svg';

  divPoweredBy.appendChild(link);
  link.appendChild(divText);

  divText.appendChild(img);

  divPoweredByFooter.appendChild(divPoweredBy);

  const supervizCommentsDiv = shadowRoot.getElementById('superviz-comments');

  if (supervizCommentsDiv) {
    supervizCommentsDiv.appendChild(divPoweredByFooter);
  }

  waterMarkElementObserver(shadowRoot);
}
