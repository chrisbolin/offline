import React from 'react';

const MOBILE = /Mobile|Android/.test(navigator.userAgent);

export const languages = {
	en: {
		onlineElements: () => [
			<h1>
				You must go offline to view this page.
			</h1>,
			<br />,
			<h2>
				{ MOBILE ? 'Enable Airplane Mode.' : 'Disconnect to continue'}
			</h2>
		],
		title: () => 'Offline Only',
		bodyParagraphs: () => [
			<p><i>2017. 2-minute read.</i></p>,
			<p>
				Do you want to be productive?
				Just go offline, because to maintain a constant connection to the internet is to maintain a constant connection to interruptions, both external and internal.
			</p>,

			<p>
				The external interruptions are legion and well documented:
				you have a new message on Gmail, Slack, Twitter, Facebook, Instagram, Snapchat, LinkedIn. Friends, family, coworkers, and spammers: each have direct access to your precious attention.
			</p>,

			<p>
				But it’s the internal distractions that are truly pernicious.
				You can mute Twitter notifications and log off from Slack, but how do you stop your own mind from derailing you?
			</p>,

			<p>
				I have spent hours caught in webs of my own curiosity.
				Most dangerous is the split-second whim:
				“I wonder what the second most commonly spoken language is?”
				Those 500 milliseconds could change your day, because it's never just one Google search, never just one Wikipedia article.
				Disconnecting from the internet short-circuits those whims, allowing you to move on unencumbered.
			</p>,

			<p>
				(It’s Spanish, by the way.)
			</p>,

			<p>
				This page itself is an experiment in that vein: What if certain content required us to disconnect?
				What if readers had access to that glorious focus that makes devouring a novel for hours at a time so satisfying?
				What if creators could pair that with the power of modern devices?
				Our phones and laptops are amazing platforms for inventive content—if only we could harness our own attention.
			</p>,

			<p>
				Offline-only content would also force creators to think differently.
				Look at this page: there is not a single link to distract readers.
				How many good articles have you left half-read because you chased a shiny underlined link?
				When you are offline, right here is the only place you can be.
			</p>,

			<p>
				I can already hear the groans: “But I have to be online for my job.” I don’t care. Make time.
				I bet the thing that makes you valuable is not your ability to Google something but your ability to synthesize information.
				Do your research online; create offline.
			</p>,

			<p>
				Now back to your regularly scheduled internet. Just remember to give yourself an occasional gift of disconnection.
			</p>,

			<p>
				<span role="img" aria-label="love">❤️</span> Chris Bolin
				<br/>
				<i>(@bolinchris when you reconnect)</i>
			</p>,
		],
	},
	fr: {
		onlineElements: () => [
			<h1>
				Vous devez être déconnecté pour consulter cette page.
			</h1>,
			<br />,
			<h2>
				{ MOBILE ? 'Activer le mode Avion.' : 'Déconnectez-vous pour continuer.'}
			</h2>
		],
		title: () => 'Déconnecté uniquement',
		bodyParagraphs: () => [
			<p><i>2017. 2 minutes pour lire.</i></p>,
			<p>
				Vous voulez être productif ? Il suffit de passer en mode « hors connexion », car maintenir une connexion constante à internet est le meilleur moyen de maintenir une connexion constante aux interruptions, à la fois externes et internes.
			</p>,

			<p>
				Les interruptions externes sont légion et bien présentes : vous avez un nouveau message sur Gmail, Twitter, Facebook, Instagram, Snapchat, LinkedIn. Amis, famille, collègues et spammeurs : chacun a un accès direct à votre précieuse attention.
			</p>,

			<p>
				Mais ce sont les distractions internes qui sont les plus pernicieuses. Vous pouvez annuler les notifications de Twitter et vous déconnecter de Facebook, mais comment empêcher votre esprit de vous distraire ? J’ai passé des heures dans les méandres de ma propre curiosité. Le plus dangereux est le caprice de la fraction de seconde, à propos de presque rien : “ Je me demande quelle est la deuxième langue la plus fréquemment parlée ? ”. Comment ces 500 millisecondes pourraient-elles changer votre journée ? Car ce n’est jamais qu’une seule recherche sur Google, juste un article sur Wikipédia. Se déconnecter d’internet, c’est court-circuiter ces caprices, vous permettant de vous déplacer sans encombre.
			</p>,

			<p>
				(C’est l’espagnol, soit dit en passant).
			</p>,

			<p>
				Cette page elle-même est une expérience inspirée de cette idée : que faire si certains contenus nous obligaient à nous déconnecter ? Et si les lecteurs avaient accès à cette inestimable attention qui rend le roman si passionnant pendant des heures ? Et si les créateurs pouvaient coupler cela avec la puissance des appareils modernes ? Nos téléphones et ordinateurs portables sont des plates-formes incroyables pour de nouveaux contenus — si seulement nous pouvions attirer notre attention.
			</p>,

			<p>
				Un contenu disponible uniquement hors ligne obligerait les créateurs à réfléchir différemment. Regardez cette page : il n’y a pas de lien, pas de note de bas de page pour distraire les lecteurs. Combien de bons articles avez-vous laissés en cours de lecture parce que vous avez suivi un lien ? Lorsque vous êtes hors ligne, vous êtes présent et attentif.
			</p>,

			<p>
				Je peux déjà en entendre se plaindre : “ Mais je dois être en ligne pour mon travail. ” Peu importe. Prenez le temps. Je parie que ce qui vous rend si précieux n’est pas votre capacité à aller sur Google, mais votre capacité à synthétiser l’information. Faites vos recherches en ligne, mais créez déconnecté.
			</p>,

			<p>
				Reconnectez-vous à présent. Mais n’oubliez pas de vous offrir occasionnellement une déconnexion.
			</p>,

			<p>
				<span role="img" aria-label="love">❤️</span> Chris Bolin
				<br/>
				<i>(@bolinchris quand vous serez reconnecté)</i>
			</p>,
			<p>
				Traduit par Kévin Zanon.
			</p>
		],
	},
	it: {
		onlineElements: () => [
			<h1>
				Devi disconnetterti per leggere questa pagina.
			</h1>,
			<br />,
			<h2>
				{ MOBILE ? 'Abilita la modalità aereo.' : 'Disconnettiti per continuare'}
			</h2>
		],
		title: () => 'Solo Offline',
		bodyParagraphs: () => [
			<p><i>2017 - Tempo di Lettura: 2 minuti</i></p>,
			<p>
				Vorresti essere più produttivo? Allora passa all’offline, perché avere una connessione costante a internet significa avere un contatto costante con le interruzioni, sia esterne che interne.
			</p>,
			<p>
				Le interruzioni esterne sono infinite e ben documentate: è quando ricevi un nuovo messaggio su Gmail, Slack, Twitter, Facebook, Instagram, Snapchat e LinkedIn. Amici, famigliari, colleghi e mittenti indesiderati: ognuno ha direttamente accesso alla tua preziosa attenzione.
			</p>,
			<p>
				Sono però le interruzioni interne ad essere davvero pericolose. Puoi silenziare le notifiche di Twitter e scollegarti da Slack, è vero, ma come si fa a rimanere concentrati?
			</p>,
			<p>
				Trascorro ore sui siti web di mio interesse. La minaccia più grande alla mia capacità di rimanere concentrato è proprio quel capriccio improvviso: “Mi domando quale sia la seconda lingua più parlata al mondo”.
			</p>,
			<p>
				Quei 500 millisecondi potrebbero cambiare la tua giornata, perché non è mai solo una ricerca su Google o un articolo su Wikipedia.
			</p>,
			<p>
				Disconnettersi ti permetterà di sabotare quelle voglie dell’ultimo secondo e potrai procedere liberamente. (Per tornare al quesito: la seconda lingua più parlata al mondo è lo spagnolo, comunque).
			</p>,
			<p>
				In un certo senso, la pagina che stai leggendo è un esperimento: cosa succederebbe se per accedere ad alcuni contenuti fosse necessario disconnettersi?
			</p>,
			<p>
				Cosa accadrebbe se i lettori potessero arrivare proprio al momento più importante di un racconto, in cui sono così concentrati da evitare di pensare ad altro e potessero davvero immergersi nella storia?
			</p>,
			<p>
				Cosa accadrebbe se i creativi potessero combinare questa particolarità, sfruttando la potenza dei dispositivi tecnologici? I nostri cellulari e i nostri computer sono piattaforme straordinarie per creare contenuti ingegnosi, se solo potessimo controllare la nostra attenzione.
			</p>,
			<p>
				Rendere disponibili i contenuti esclusivamente offline obbligherebbe i creativi a pensare diversamente. Guarda questa pagina: non c’è alcun link che possa distrarre il lettore. Quanti articoli interessanti hai lasciato a metà, perché un link sottolineato tutto scintillante ha catturato la tua attenzione? Quando sei offline, è quello l’unico posto in cui ti trovi.
			</p>,
			<p>
				Già le sento le lamentele: “Ma io ci devo essere online, è per lavoro”. Non mi importa. Trova il tempo. Scommetto che ciò che ti rende così speciale non è la tua capacità di cercare qualcosa su Google, bensì la capacità di sintesi. Fa’ ricerca online e crea offline.
			</p>,
			<p>
				Ora torna pure alle tue attività su Internet. Ricorda solo di fare a te stesso un piccolo regalo ogni tanto: disconnettiti.
			</p>,
			<p>
				<span role="img" aria-label="love">❤️</span> Chris Bolin
				<br/>
				<i>(@bolinchris quando ti riconnetti)</i>
			</p>,
			<p>
				Tradotto da Emanuela Goldoni.
			</p>

		],
	},
	es: {
		onlineElements: () => [
			<h1>
				Tienes que desconectarte para consultar esta página.
			</h1>,
			<br />,
			<h2>
				{ MOBILE ? 'Activa el modo avión' : 'Desconéctate para continuar'}
			</h2>
		],
		title: () => 'Sólo sin conexión',
		bodyParagraphs: () => [
			<p><i>2017 - Tiempo de lectura: 2 minutos</i></p>,

			<p>
				¿Quieres ser productivo?
				Sólo tienes que pasar en modo "sin conexión" puesto que mantenerte constantemente conectado a Internet es mantener una conexión constante a las interrupciones, tanto internas como externas.
			</p>,

			<p>
				Las interrupciones externas son innumerables y están bien documentadas:
				tienes un nuevo mensaje en Gmail, Slack, Twitter, Facebook, Instagram, Snapchat, LinkedIn. Amigos, familiares, compañeros de trabajo y spammers: todos tienen acceso directo a tu preciada atención.
			</p>,

			<p>
				Pero las distracciones verdaderamente dañinas son las internas.
				Puedes silenciar las notificaciones de Twitter y cerrar tu sesión de Slack, pero ¿cómo evitas que tu mente se distraiga?
			</p>,

			<p>
				He perdido horas atrapado en webs que me parecían interesantes.
				Lo más peligroso es ese instante impulsivo que me hace preguntarme:
				"¿Cúal será la segunda lengua más hablada?"
				Esos 500 milisegundos pueden cambiar tu día, porque al final nunca es una sola búsqueda en Google o un solo artículo en la Wikipedia.
				Desconectarse de internet cortocircuita estos caprichos, permitiéndote avanzar sin obstáculos.
			</p>,

			<p>
				(Es el español, por cierto.)
			</p>,

			<p>
				Esta página es un experimento en esa línea: ¿Qué pasaría si para acceder a cierto contenido fuese obligatorio desconectarse?
				¿Qué pasaría si los lectores tuvieran acceso a esa gloriosa capacidad de atención que hace el devorarse una novela durante horas tan placentero?
				¿Qué pasaría si los creadores pudieran juntar eso con el poder de los dispositivos modernos?
				Nuestros teléfonos y ordenadores portátiles son plataformas increíbles para crear contenidos creativos -si tan solo pudiéramos explotar nuestra capacidad de atención.
			</p>,

			<p>
				El contenido sin conexión también forzaría a los creadores a pensar de manera diferente.
				Mira esta página: no tiene ni un solo enlace que distraiga a los lectores.
				¿Cuántos buenos artículos has dejado a la mitad por haber seguido un enlace llamativo?
				Cuando estás sin conexión, el único sitio donde puedes estar es aquí mismo.
			</p>,

			<p>
				Ya puedo oír las quejas: "Pero tengo que estar conectado para trabajar." Me da igual. Haz tiempo.
				Apuesto que lo que te hace valioso no es tu habilidad para buscar algo en Google sino tu capacidad para sintetizar información.
				Busca en línea, crea sin conexión.
			</p>,

			<p>
				Ahora vuelve a tu actividad normal en Internet. Lo único, no te olvides hacerte de vez en cuando un regalo a tí mismo: desconectar.
			</p>,

			<p>
				<span role="img" aria-label="love">❤️</span> Chris Bolin
				<br/>
				<i>(@bolinchris cuando te conectes)</i>
			</p>,
			<p>
				Traducido por Javier Blanco García-Lomas y Rodrigo Solís.
			</p>

		],
	},
};


export const bodyParagraphs = (language) => languages[language].bodyParagraphs();
export const onlineElements = (language) => languages[language].onlineElements();
export const title = (language) => languages[language].title();
