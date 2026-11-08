/* ══════════════════════════════════════
   CD Beauty Lash — Story Animation
   story.js
══════════════════════════════════════ */

// Durée totale de l'animation (en ms) avant le restart
const ANIMATION_DURATION = 11500;

/**
 * Remet à zéro toutes les animations CSS
 * pour permettre une boucle infinie.
 */
function restartAnimations() {
  const animated = document.querySelectorAll(
    '.story-content, .link-card, .cta-pill, .top-bar'
  );

  animated.forEach(el => {
    // Couper l'animation
    el.style.animation = 'none';

    // Forcer un reflow pour que le navigateur prenne en compte le reset
    void el.offsetHeight;

    // Remettre l'animation (récupère la valeur depuis le CSS)
    el.style.animation = '';
  });
}

// Boucle automatique
setInterval(restartAnimations, ANIMATION_DURATION);
