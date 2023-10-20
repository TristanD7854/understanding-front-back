
# TODO

--------------------------**test csr vs ssr speed and visual effect**

go faire :
    -next app-router (newer than pages router) (server components)

## HMR -> doc projet vite dessus, tester avec angular/next la diff

Créer un monorepo avec full projets React/Angular :
ok    -projet avec l’ancien mode (pas de server components) -> créer 4 tsx files avec reame pour SSR, ISR, CSR, SSG
ok    -projet expres basique, répondant au front
ok    -projet next avec front/back en même temps
ok    -projet express avec front/back en même temps
ok    -projet angular SSR (Universal)                                       **TODO : add SSG**
ok    -projet angular CSR
    -projet avec le nouveau -> créer server components, tester avec slow network (3g in inspector), avec loading screen     **todo : add app->feed->post + ad-feed svg**






TODO : 
    - add buttons/dropdown, headers + some content not orginating from express, to test non-interactivity in SSR case
    - find a way to see that CSR has slower initial page load than SSR, by using a lot of js if possible

**You can simulate a slower network to see the transition more clearly as follows:**
    Open the Chrome Dev Tools and go to the Network tab.
    Find the Network Throttling dropdown on the far right of the menu bar.
    Try one of the "3G" speeds.








## CSR / SSR / SSG / ISR

See next-with-pages-router/README.md for the comparison.

### Differenciate websites : SPA/CSR or MPA/SSR

Amazon : MPA
Airbnb/Netflix : SPA

Disable JS in browser settings -> no difference for amazon, but the others will not work (freeze or display msg saying to enable JS).

Also possible to see inspect/network in browser, and see the timeline when navigating the wesbite. Amazon resets the timeline because it's SSR.

## SPA vs MPA | CSR / SSR / SSG / ISR

See SPA_MPA_CSR_SSR.drawio
Created from https://youtu.be/kUs-fH1k-aM

==============
