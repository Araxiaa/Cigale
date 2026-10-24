(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const p=(e,s)=>`<div class="col-box ${e}">${s}</div>`,P=e=>`<ul>${e.map(([s,a])=>`<li><strong>${s} :</strong> ${a}</li>`).join("")}</ul>`,l=e=>`<h2 class="pane-title">${e}</h2>`,m=(e,s,a,i,t)=>`
  <article class="family-card ${e}">
    <h3>${s} <span class="meta">(${a})</span></h3>
    ${i?`<p class="appearance-line">🧬 <em>${i}</em></p>`:""}
    <p>${t}</p>
  </article>`,o=(e,s,a,i)=>`<div class="node ${e}"><span class="node-relation">${s}</span><strong>${a}</strong><small>${i}</small></div>`,F=[{id:"racines",label:"🌱 Racines",subs:[{id:"nom",label:"Nomenclature",html:`
      ${l("Nomenclature de la Lande")}
      <p class="intro-quote">« Chaque nom porte l'écho des insectes et des herbes folles qui tapissent notre foyer. »</p>
      <div class="nomenclature-tree">
        <div class="tree-item past"><span class="age">Chaton</span><h3>Petite Cigale</h3><p class="desc">Donné par sa mère Harmonie des Prés pour perpétuer l'héritage de sa lignée.</p></div>
        <div class="tree-item past"><span class="age">Apprentie</span><h3>Nuage de Cigale</h3></div>
        <div class="tree-item active"><span class="age">Nom Actuel</span><h3>Chant de Cigale</h3><p class="desc">Le préfixe "Chant" honore sa voix particulièrement douce et mélodieuse.</p></div>
        <div class="tree-item future"><span class="age">Chef potentiel</span><h3>Étoile de Cigale</h3></div>
      </div>`}]},{id:"ame",label:"☀️ Âme",subs:[{id:"global",label:"📖 Résumé global",html:`${l("Portrait Global de l'Âme")}
        <p class="global-psycho">Chant de Cigale avance la tête haute, le regard rivé sur ses interlocuteurs. Confiante et sociable, elle n’hésite jamais à engager la conversation ou à s'imposer s'il le faut. Derrière sa bienveillance et sa patience naturelle se cache une chatte particulièrement exigeante qui adore que le camp fonctionne comme elle l'entend. Née de l'éducation rigoureuse d'Harmonie des Prés et de l'influence d'Éclat du Scarabée, elle s'avère indomptable, parfois cynique face aux lois, et terriblement bornée.</p>`},{id:"qualites",label:"✨ Qualités",html:`${l("✨ Éclats de Lumière (Qualités)")}${p("light-green",P([["Confiante","Elle croit fermement en ses compétences médicales et prend ses décisions sans hésiter."],["Sociable","Elle aime la compagnie, adore discuter avec ses camarades de clan et briser la glace."],["Bienveillante","Son cœur de guérisseuse bat pour le bien-être de tous, sans distinction."],["Patiente","Sait garder son calme face aux malades les plus grognons ou agités."]]))}`},{id:"defauts",label:"🍂 Défauts",html:`${l("🍂 Ombres de la Lande (Défauts)")}${p("light-amber",P([["Exigeante","Supporte mal le travail bâclé ou le laisser-aller au sein du camp."],["Bornée","Quand elle a une idée en tête, il est presque impossible de la faire changer d'avis."],["Indomptable","Fière, elle refuse de se plier aveuglément à une autorité qu'elle juge injuste."],["Cynique","Pose un regard parfois critique et piquant sur les vieilles coutumes immuables."]]))}`},{id:"perso",label:"💭 Personnalité",html:`${l("💭 Intériorité & Traits Secrets")}
        <div class="dual-columns">
          ${p("plain",`<h3>💚 Attraits & Aversions</h3>
            <p><strong>Aime :</strong> Savourer un lièvre bien tendre, étudier les insectes (cigales, lucioles) et lézarder sous un grand soleil chaud.</p>
            <p><strong>Déteste :</strong> L'odeur et le goût du poisson, les têtes de mule inefficaces, et le gel mordant de la mauvaise saison.</p>`)}
          ${p("lavender-tint",`<h3>⚡ Ombres & Rituels</h3>
            <p><strong>Peurs :</strong> Les tempêtes de neige qui rappellent le Grand Blanc, l'eau profonde car elle ne sait pas nager, et la menace abstraite des chiens.</p>
            <p><strong>Habitudes :</strong> Nettoyer obsessionnellement son stock de plantes au lever du jour et cligner nerveusement des yeux en cas de grosse fatigue.</p>`)}
        </div>`}]},{id:"silhouette",label:"🌾 Silhouette",subs:[{id:"global",label:"📖 Aperçu global",html:`${l("Silhouette Générale")}
        <p class="measurements">📏 27,5 cm au garrot — 3 kg</p>
        <p class="global-psycho">Chant de Cigale est une petite femelle fine et svelte. Son pelage court possède une teinte très particulière : un <strong>faon délicat, presque rosâtre</strong>, hérité de sa lignée. Ses grands yeux jaunes brillent d'intelligence.</p>`},{id:"forts",label:"💪 Points forts",html:`${l("⚡ Points Forts Physiques")}${p("light-green",`
        <p><strong>Vitesse Pure :</strong> Sa morphologie légère lui permet de traverser la lande comme un éclair.</p>
        <p><strong>Agilité & Souplesse :</strong> Capable de se faufiler dans les recoins les plus étroits des gorges pour cueillir ses herbes.</p>`)}`},{id:"faibles",label:"⚠️ Points faibles",html:`${l("⚠️ Points Faibles Physiques")}${p("light-amber",`
        <p><strong>Griffes de Chaton :</strong> Ses griffes sont anormalement minuscules. Elles ne lui permettent ni d'infliger de lourdes blessures, ni de grimper efficacement.</p>
        <p><strong>Frilosité :</strong> Ayant souffert de sa naissance hivernale, elle tolère très mal le froid et s'engourdit vite.</p>`)}`},{id:"marques",label:"🪻 Marques",html:`${l("🪻 Ornements & Marques")}${p("lavender-tint",`
        <p><strong>Ailes de Cigale :</strong> Deux paires d'ailes transparentes et irisées, soigneusement glissées derrière ses oreilles.</p>
        <p><strong>Brins de Lavande :</strong> Toujours noués autour de sa queue, un cadeau précieux de son frère Cri de l'Épervier.</p>
        <p><strong>Cicatrices :</strong> Aucune balafre majeure de combat, sa peau est préservée grâce à son rôle de guérisseuse.</p>`)}`}]},{id:"famille",label:"🐾 Famille",subs:[{id:"liste",label:"🌿 Liste des membres",html:`${l("Les Liens du Sang")}
        <h3 class="section-subtitle">🌿 La Famille Proche</h3>
        <div class="family-list-container">
          ${m("sick","Harmonie des Prés","Mère — 90 Lunes — PNJ / Vivante","Pelage faon ticked tabby, yeux jaunes, corps longiligne.","Une mère profondément aimante, autant avec ses petits biologiques qu'avec ses enfants de substitution. Autrefois pilier très actif du clan, elle partageait sa fidélité et sa dualité sans douleur entre Étoile de Griffe et Éclat du Scarabée. Aujourd'hui très malade et affaiblie, elle passe ses journées dans la tanière de Chant de Cigale qui veille sur elle. S'occuper d'elle est une lourde charge au quotidien, et elle vit peut-être ses derniers instants prématurés.")}
          ${m("standard","Plumage de Gypaète","Père — 110 Lunes — PNJ / Vivant","Pelage blue mink (corps blanc cassé, extrémités grises), long museau, physique longiligne.","Un mâle particulièrement taiseux, calme et peu bavard. Depuis sa séparation d'avec Harmonie des Prés, la distance s'est installée et Chant de Cigale n'est plus aussi proche de lui. Bien qu'âgé, il n'est pas en mauvaise santé.")}
          ${m("precious","Cri de l'Épervier","Frère — PNJ / Vivant","Pelage bleu ticked, très grandes oreilles pleines de charme.","Considéré par Cigale comme le félin le plus gentil et bienveillant qui soit. Doté d'un cœur immense où chacun trouve sa place, il n'est pas naïf pour autant, mais sa simple présence apporte un bien-être immédiat. C'est son grand repère.")}
          ${m("tense","Envol du Bombyx","Sœur — PNJ / Vivante","Pelage faon ticked mink remarquable, long museau altier.","Depuis quelque temps, cette jeune femelle s'est forgé une carapace et se distancie de sa propre famille. Chant de Cigale la trouve de plus en plus désagréable, lançant constamment des piques acérées et provoquant tous ceux qu'elle estime le mériter.")}
        </div>
        <h3 class="section-subtitle">🍂 La Parenté Éloignée & Mentorat</h3>
        <div class="family-list-container">
          ${m("legacy","Éclat du Scarabée","Cousine & Mentor — PNJ / Morte","","Le modèle absolu de Cigale. Elle lui a tout transmis : la chasse, le combat, et ses rudiments de savoir sur les plantes. Sa disparition a laissé un vide colossal et un deuil douloureux de deux lunes. Cigale s'efforce aujourd'hui de porter son flambeau et de veiller sur sa descendance.")}
          ${m("precious-pj","Petite Mygale","Petite-cousine — PJ joué par @.araxia. / Vivante","","L'unique enfant survivante d'Éclat du Scarabée (ses frères et sœurs Petite Puce et Petite Noctuelle étant morts). Chant de Cigale s'occupe d'elle en partie et la couve d'un œil protecteur.")}
        </div>`},{id:"arbre",label:"🌳 Arbre visuel",html:`${l("🌳 Lignée de la Lande")}
        <p class="intro-quote">Visualisation graphique des liens de sang directs et des ramifications maternelles.</p>
        <div class="tree-graph-v2">
          <div class="tree-section"><span class="generation-label">Génération Parents & Oncles</span>
            <div class="tree-row">
              ${o("dead","Oncle Maternel","Aile de Cigale","Disparu")}
              <div class="node-link-dash">🤝</div>
              ${o("dead","Tante par alliance","Bruissement Moustique","Morte")}
              <div class="tree-spacer-line"></div>
              ${o("parent-node","Père","Plumage de Gypaète","110 Lunes")}
              <div class="node-link-love">❤️</div>
              ${o("parent-node sick","Mère","Harmonie des Prés","90 Lunes — Malade")}
            </div>
          </div>
          <div class="tree-divider">𓆣 ┈┈┈┈ 🌿 LIGNÉES DIRECTES 🌿 ┈┈┈┈ 𓆣</div>
          <div class="tree-section core-family-box"><span class="generation-label">Fratrie Nucléaire</span>
            <div class="tree-row">
              ${o("precious","Frère","Cri de l'Épervier","Vivant")}
              ${o("current","Moi","Chant de Cigale","Guérisseuse")}
              ${o("tense-node","Sœur","Envol du Bombyx","Vivante")}
            </div>
          </div>
          <div class="tree-divider">🍂 COUSINAGES (Issus d'Aile de Cigale) 🍂</div>
          <div class="tree-section"><span class="generation-label">Branches Éloignées</span>
            <div class="tree-row">
              ${o("dead","Cousin","Nuage de Luciole","Mort")}
              ${o("dead highlight","Cousine & Mentor","Éclat du Scarabée","Morte")}
            </div>
            <div class="node-link-down" aria-hidden="true">⬇️</div>
            <div class="tree-row">
              ${o("dead","P-Cousin","Petite Puce","Mort")}
              ${o("dead","P-Cousin","Petite Noctuelle","Mort")}
              ${o("pj","P-Cousine","Petite Mygale","PJ joué")}
            </div>
          </div>
        </div>`}]},{id:"alliances",label:"𓆣 Alliances",subs:[{id:"clans",label:"Clans",html:`${l("Regards sur les Clans")}
      <div class="opinion-card"><h3>🍃 Clan du Vent</h3><p>Elle y a grandi heureuse parmi les papillons, mais les tensions montent avec le Chef depuis le décès d'Éclat du Scarabée.</p></div>
      <div class="opinion-card"><h3>✨ Clan des Étoiles & Foi</h3><p>Déchirée. Sa mentor lui a légué un cynisme aiguisé envers les ancêtres qu'elle juge responsables du chaos ambiant.</p></div>`}]},{id:"memoires",label:"📖 Mémoires",subs:[{id:"sommaire",label:"🗂️ Sommaire",html:`${l("Le Grimoire des Saisons")}
        <p class="intro-quote">Sélectionnez un chapitre dans le menu pour explorer ses souvenirs.</p>
        <div class="opinion-card"><h3>📜 Chronique d'une Guérisseuse</h3><p>L'histoire de Chant de Cigale est consignée dans les parchemins secrets de la lande. Naviguez à travers ses trois grands âges marquants pour comprendre ses traumatismes et ses ambitions.</p></div>`},{id:"ch1",label:"❄️ Ch. 1 : Grand Blanc",html:`${l("❄️ Chapitre 1 : Le Grand Blanc")}<p class="global-psycho">Née au cœur d'un hiver d'une violence inouïe, ses tout premiers souvenirs sont teintés du blanc immaculé de la neige et de la sensation de faim qui tenaillait la pouponnière. Survivre à cette période a forgé son esprit indomptable, mais a scellé à tout jamais sa haine profonde de la mauvaise saison.</p>`},{id:"ch2",label:"🌱 Ch. 2 : L'Éveil",html:`${l("🌱 Chapitre 2 : L'Éveil de la Lande")}<p class="global-psycho">Le dégel amena la renaissance. Fascinée par la réapparition de la verdure et la symphonie des insectes chanteurs, elle passa son adolescence à répertorier les mystères de la flore sauvage, trouvant sa véritable vocation loin des sentiers guerriers classiques.</p>`},{id:"ch3",label:"🪻 Ch. 3 : Le Flambeau",html:`${l("🪻 Chapitre 3 : Le Flambeau Solitaire")}<p class="global-psycho">Formée par la brillante mais acérée Éclat du Scarabée, Chant de Cigale a appris à manier la science des plantes autant qu'un regard critique sur le Clan des Étoiles. Désormais seule herboriste du clan, elle doit porter ce fardeau sur ses épaules.</p>`}]},{id:"galerie",label:"🎨 Galerie",subs:[{id:"herbier",label:"Herbier",html:`${l("Herbier Visuel")}
      <div class="gallery-grid">
        <figure class="gallery-card-item"><div class="art-placeholder">🎨 Illustration par @.araxia.</div><figcaption>Chant de Cigale</figcaption></figure>
        <figure class="gallery-card-item"><div class="art-placeholder">🌿 Croquis d'accessoires</div><figcaption>Ailes & Lavande</figcaption></figure>
      </div>`}]}],G="https://eqyriepznjcjgmmwaheg.supabase.co",q="sb_publishable_CxSGYq_D2haTjjaHR7iAkQ_neUlVoSc",T="960962216327270480,1476986559365644290".split(",").map(e=>e.trim()).filter(Boolean),x="Chant de Cigale",A="cigale:player:v1";async function S(e){const s=await fetch(`${G}/rest/v1/${e}`,{headers:{apikey:q,Authorization:`Bearer ${q}`}});if(!s.ok)throw new Error(`Supabase ${s.status}`);return s.json()}function I(){try{return JSON.parse(sessionStorage.getItem(A))}catch{return null}}let b=null;function k(){return b??(b=(async()=>{const e="id,name,clan,rank,gender,prefix,avatar_url,hp_current,hp_max,pa_current,pa_max,lives,initial_age_lunes,aging_start_date,dead,archived,missing,afterlife",[s,a]=await Promise.all([S(`characters?select=${e}&user_id=in.(${T.join(",")})&archived=eq.false&order=dead.asc,name.asc`),S("faction_ranks?select=rank_name,hp_max,pa_max,rank_order").catch(()=>[])]),i={characters:s,ranks:a,at:Date.now()};try{sessionStorage.setItem(A,JSON.stringify(i))}catch{}return i})().finally(()=>{b=null})),b}const C=15*864e5,u=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),O=e=>/^https:\/\//.test(e||"")?u(e):"";function y(e,s=Date.now()){const a=s-new Date(e.aging_start_date).getTime(),i=e.initial_age_lunes+Math.max(0,Math.floor(a/C)),t=Math.max(0,a%C)/C;return{lunes:i,progress:t,daysLeft:Math.ceil((1-t)*15)}}const j=e=>e.dead?["☠️ Décédé·e","dead"]:e.missing?["❓ Disparu·e","missing"]:["🌿 En vie","alive"];function E(e,s=""){const a=O(e.avatar_url),i=u(e.name.trim()[0]||"?");return`<div class="avatar ${s}"><span>${i}</span>${a?`<img src="${a}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:""}</div>`}function M(e,s,a,i){const t=a>0?Math.min(100,Math.round(s/a*100)):0;return`<div class="meter ${i}"><div class="meter-head"><span>${e}</span><span><b data-count="${s}">${s}</b>/${a}</span></div>
    <div class="meter-track"><div class="meter-fill" style="--w:${t}%"></div></div></div>`}function V(e,s){const a=y(e),[i,t]=j(e),n=s.find(r=>r.rank_name===e.rank);return`<article class="dash-hero card-in">
    ${E(e,"avatar-lg")}
    <div class="hero-main">
      <span class="chip ${t}">${i}</span>
      <h3>${u(e.name)}</h3>
      <p class="muted">${u(e.rank)} · ${u(e.clan)} · ${u(e.gender)}</p>
      ${M("❤️ Points de vie",e.hp_current,e.hp_max,"hp")}
      ${e.pa_max?M("⚡ Points d’action",e.pa_current??0,e.pa_max,"pa"):""}
      <div class="meter age"><div class="meter-head"><span>🌙 Prochaine lune</span><span>~${a.daysLeft} j</span></div>
        <div class="meter-track"><div class="meter-fill" style="--w:${Math.round(a.progress*100)}%"></div></div></div>
    </div>
    <dl class="kpis">
      <div><dt>Âge (lunes)</dt><dd data-count="${a.lunes}">${a.lunes}</dd></div>
      <div><dt>Vies</dt><dd data-count="${e.lives}">${e.lives}</dd></div>
      ${n?`<div><dt>PV max du rang</dt><dd data-count="${n.hp_max}">${n.hp_max}</dd></div>`:""}
    </dl>
  </article>`}function B(e){const s=y(e),[a,i]=j(e),t=e.hp_max>0?Math.round(e.hp_current/e.hp_max*100):0;return`<article class="mini card-in ${e.dead?"is-dead":""}">
    ${E(e)}
    <div><h4>${u(e.name)}</h4><p class="muted">${u(e.rank)} · ${u(e.clan)}</p>
    <p class="mini-meta"><span class="chip ${i}">${a}</span> <span>${s.lunes} lunes</span></p>
    <div class="meter-track slim"><div class="meter-fill" style="--w:${t}%"></div></div></div>
  </article>`}function N(e){matchMedia("(prefers-reduced-motion: reduce)").matches||e.querySelectorAll("[data-count]").forEach(s=>{const a=Number(s.dataset.count);if(!Number.isFinite(a)||a===0)return;const i=performance.now(),t=n=>{const r=Math.min(1,(n-i)/900);s.textContent=Math.round(a*(1-(1-r)**3)),r<1&&requestAnimationFrame(t)};requestAnimationFrame(t)})}function _(e,s){const{characters:a,ranks:i,at:t}=s,n=a.find(h=>h.name===x)||a[0],r=a.filter(h=>h!==n),g=a.filter(h=>!h.dead).length,H=new Date(t).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"});e.innerHTML=n?`
    <div class="dash-top"><p class="muted">Données en direct de la base du serveur · mises à jour à ${H}</p>
      <button class="btn" data-refresh type="button">↻ Actualiser</button></div>
    ${V(n,i)}
    <h3 class="section-subtitle">🐾 Personnages du joueur <span class="muted">(${g} en vie / ${a.length})</span></h3>
    <div class="mini-grid">${r.map(B).join("")||'<p class="muted">Aucun autre personnage.</p>'}</div>`:'<p class="muted">Aucun personnage trouvé pour ce joueur.</p>',N(e)}function R(e,s){const a=async()=>{try{const t=await k();if(!e.isConnected)return;_(e,t),s?.(t)}catch(t){e.isConnected&&(e.innerHTML=`<p class="error">Impossible de joindre Supabase (${u(t.message)}). <button class="btn" data-refresh type="button">Réessayer</button></p>`)}};e.addEventListener("click",t=>{t.target.closest("[data-refresh]")&&a()});const i=I();i?_(e,i):e.innerHTML='<div class="skeleton"></div><div class="skeleton short"></div>',a()}const J={id:"dashboard",label:"📊 Tableau de bord",subs:[{id:"live",label:"📊 En direct",dash:!0}]},d=[...F,J],c=e=>document.querySelector(e),$=c("#tabs"),f=c("#side"),U=c("#content"),z=c(".tab-layout");let L={tab:d[0].id,sub:d[0].subs[0].id};$.innerHTML=d.map(e=>`<button role="tab" class="tab" data-tab="${e.id}" id="t-${e.id}">${e.label}</button>`).join("");function w(){const[e,s]=location.hash.slice(1).split("/"),a=d.find(i=>i.id===e)||d[0];return{tab:a.id,sub:(a.subs.find(i=>i.id===s)||a.subs[0]).id}}function v({tab:e,sub:s},a=!0){const i=d.find(r=>r.id===e),t=i.subs.find(r=>r.id===s);L={tab:e,sub:s},a&&history.replaceState(null,"",`#${e}/${s}`),$.querySelectorAll(".tab").forEach(r=>{const g=r.dataset.tab===e;r.classList.toggle("active",g),r.setAttribute("aria-selected",g),r.tabIndex=g?0:-1}),f.hidden=i.subs.length<2,z.classList.toggle("no-side",f.hidden),f.innerHTML=`<div class="side-title">${i.label}</div>`+i.subs.map(r=>`<button class="sub ${r.id===s?"active":""}" data-sub="${r.id}">${r.label}</button>`).join("");const n=document.createElement("div");n.className="pane",t.dash?R(n,D):n.innerHTML=t.html,U.replaceChildren(n)}$.addEventListener("click",e=>{const s=e.target.closest("[data-tab]");s&&v({tab:s.dataset.tab,sub:d.find(a=>a.id===s.dataset.tab).subs[0].id})});$.addEventListener("keydown",e=>{const s=d.findIndex(t=>t.id===L.tab),a=e.key==="ArrowRight"?s+1:e.key==="ArrowLeft"?s-1:null;if(a===null)return;const i=d[(a+d.length)%d.length];v({tab:i.id,sub:i.subs[0].id}),c(`#t-${i.id}`).focus()});f.addEventListener("click",e=>{const s=e.target.closest("[data-sub]");s&&v({tab:L.tab,sub:s.dataset.sub})});addEventListener("hashchange",()=>v(w(),!1));function D({characters:e}){const s=e.find(i=>i.name===x);if(!s)return;const a=y(s);c("#subtitle").textContent=`${a.lunes} Lunes — ${s.gender} Lesbienne`,c("#header-stats").innerHTML=`<div class="stat-bubble">❤️ <span data-count="${s.hp_current}">${s.hp_current}</span> / ${s.hp_max} PV</div>
    ${s.pa_max?`<div class="stat-bubble">⚡ ${s.pa_current??0} PA</div>`:""}
    <div class="stat-bubble clan-rank">🌿 ${s.rank}</div>`,N(c("#header-stats"))}c("#header-stats").innerHTML='<div class="stat-bubble clan-rank">🌿 Guérisseuse</div>';k().then(D).catch(()=>{});matchMedia("(prefers-reduced-motion: reduce)").matches||(c("#petals").innerHTML=Array.from({length:10},(e,s)=>`<i style="--x:${s*37%100}vw;--d:${14+s*3%9}s;--s:${-(s*2.3)}s;--z:${.6+s%4*.2}"></i>`).join(""));v(w(),!1);
