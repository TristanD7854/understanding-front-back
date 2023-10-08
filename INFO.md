
# TODO

--------------------------**test csr vs ssr speed and visual effect**

Créer un monorepo avec full projets React/Angular :
ok    -projet avec l’ancien mode (pas de server components) -> créer 4 tsx files avec reame pour SSR, ISR, CSR, SSG
    -projet react basique front, appelant express, SSR vs CSR
ok    -projet expres basique, répondant au front
ok    -projet next avec front/back en même temps
    -projet express avec front/back en même temps
ok    -projet angular SSR (Universal)                                       **TODO : add SSG**
ok    -projet angular CSR
    -projet avec le nouveau -> créer server components, tester avec slow network (3g in inspector), avec loading screen     **todo : add app->feed->post + ad-feed svg**


TODO : add buttons/dropdown, headers + some content not orginating from express
    to test non-interactivity in SSR case


You can simulate a slower network to see the transition more clearly as follows:
    Open the Chrome Dev Tools and go to the Network tab.
    Find the Network Throttling dropdown on the far right of the menu bar.
    Try one of the "3G" speeds.



## CSR / SSR / SSG / ISR

See next-server-with-pages-router app for the comparison.

## SPA vs MPA | CSR / SSR / SSG / ISR

See SPA_MPA_CSR_SSR.drawio
Created from https://youtu.be/kUs-fH1k-aM

==============
