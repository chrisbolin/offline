import React from 'react';

import { A, OfflineLink } from './link';

const MOBILE = /Mobile|Android/.test(navigator.userAgent);

export const languages = {
	// ------------------------------------ ENGLISH (original) ------------------------------------
	en: {
		name: 'english',
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
				Look up; there was not a single link to distract readers.
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
				<span role="img" aria-label="love">❤️</span> Chris Bolin, <OfflineLink href="https://www.twitter.com/bolinchris">@bolinchris</OfflineLink>
			</p>,

			<p>
				<i>P.S.</i> If you liked this little experiment you could <OfflineLink href="https://twitter.com/bolinchris/status/890216223367213058">share it on Twitter.</OfflineLink> (But isn’t it ironic to spread a message of disconnection using social media? Yes, yes it is. And the real world is full of irony, so strap in.)
			</p>,
		],
	},

	// ------------------------------------ FRENCH ------------------------------------
	fr: {
		name: 'français',
		onlineElements: () => [
			<h1>
				Vous devez être déconnecté pour consulter cette page.
			</h1>,
			<br />,
			<h2>
				{ MOBILE ? 'Activez le mode Avion.' : 'Déconnectez-vous pour continuer.'}
			</h2>
		],
		title: () => 'Déconnexion',
		bodyParagraphs: () => [
			<p><i>2017. Temps de lecture : 2 minutes.</i></p>,
			<p>
				Vous voulez être productif ? Déconnectez-vous, car maintenir un lien permanent à Internet, c’est maintenir un lien avec des sources de distraction, internes et externes.
			</p>,

			<p>
				Les interruptions externes sont nombreuses et bien connues : vous recevez un nouveau message sur Gmail, Slack, Twitter, Facebook, Instagram, Snapchat, LinkedIn. Vos amis, votre famille, vos collègues ou les spammeurs : chacun a un accès direct à votre précieuse attention.
			</p>,

			<p>
				Mais ce sont les distractions internes qui sont les plus pernicieuses. Vous pouvez désactiver les notifications de Twitter et vous déconnecter de Slack, mais comment empêcher votre propre esprit de vous distraire ?
			</p>,

			<p>
				J'ai passé des heures dans les méandres de ma propre curiosité. Vous savez... l'idée qui vous traverse l'esprit en une fraction de seconde ? C'est la plus dangereuse. "Quelle est la deuxième langue la plus fréquemment parlée ?" Ces 500 millisecondes peuvent changer votre journée, car ce n'est jamais qu'une recherche sur Google, jamais qu'une seule lecture sur Wikipédia. Se déconnecter d'Internet, c'est court-circuiter ces idées soudaines, vous permettant d'avancer sans encombre.
			</p>,

			<p>
				(C'est l'Espagnol, au passage.)
			</p>,

			<p>
			Cette page elle-même est une expérience dans cette veine : que se passe-t-il si certains contenus nous obligent à nous déconnecter ?
Et si les lecteurs avaient accès à cette inestimable attention qui rend la lecture d'un roman si passionnante pendant des heures ? Et si les créateurs pouvaient coupler cela avec la puissance des nouvelles technologies ? Nos téléphones et nos ordinateurs portables sont des outils incroyables pour de nouveaux contenus — si seulement nous pouvions maîtriser notre propre attention.
			</p>,

			<p>
				Un contenu accessible hors ligne uniquement obligerait les créateurs à réfléchir différemment. Regardez cette page : il n'y a pas de lien pour distraire les lecteurs. Combien de bons articles avez-vous laissés en cours de lecture parce que vous avez suivi un lien attirant votre attention ? Lorsque vous n'avez plus Internet, vous êtes présent et attentif.
			</p>,

			<p>
				Je peux déjà entendre les critiques : "Mais je dois être en ligne pour mon travail." Peu importe. Prenez le temps. Je parie que ce qui vous valorise n'est pas votre capacité à effectuer une recherche sur Google, mais votre capacité à synthétiser l'information. Faites vos recherches en ligne; créer hors ligne.
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
				Traduit par Kévin Zanon et Edouard Alvard.
			</p>
		],
	},

	// ------------------------------------ ITALIAN ------------------------------------
	it: {
		name: 'italiano',
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
			<p><i>2017. Tempo di Lettura: 2 minuti.</i></p>,
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

	// ------------------------------------ SPANISH ------------------------------------
	es: {
		name: 'español',
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
			<p><i>2017. Tiempo de lectura: 2 minutos.</i></p>,

			<p>
				¿Quieres ser productivo?
				Desconéctate, puesto que mantenerte constantemente conectado a Internet es mantener una conexión constante a las interrupciones, tanto internas como externas.
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

	// ------------------------------------ GERMAN ------------------------------------
	de: {
		name: 'deutsch',
		onlineElements: () => [
			<h1>
				Du must Offline gehen, um diese Seite anzuzeigen.
			</h1>,
			<br />,
			<h2>
				{ MOBILE ? 'Flugzeugmodus aktivieren' : 'Internetverbindung trennen um fortzufahren'}
			</h2>
		],
		title: () => 'Nur Offline',
		bodyParagraphs: () => [
			<p><i>2017. Eine 2 Minuten Lektüre.</i></p>,
			<p>
				Du möchtest produktiv sein?
				Geh einfach offline. Denn eine permanente Verbindung zum Internet bedeutet ständig auf Unterbrechungen zu reagieren, externe und interne.
			</p>,

			<p>
				Die externen Unterbrechungen sind bekannt und gut documentiert:
				du hast neue Nachrichten auf Gmail, Slack, Twitter, Facebook, Instagram, Snapchat, LinkedIn. Freunde, Familie, Kollegen und Spammer: jeweils mit direkten Zugriff auf deine wertvolle Aufmerksamkeit.
			</p>,

			<p>
				Aber es sind die inneren Ablenkungen, die wirklich schädlich sind.
				Du kannst Benachrichtigungen von Twitter stumm schalten und dich bei Slack ausloggen. Aber wie verhinderst Du, dass dein Verstand ständig abschweift?
			</p>,

			<p>
				Stundenlang war ich gefangen im Netz meiner eigenen Neugier.
				Am gefährlichsten ist der Moment einer Laune zu folgen.
				»Ich frage mich, was die zweithäufigste gesprochene Sprache ist?«
				Diese 500 Millisekunden können deinen Tag verändern, denn es ist nie nur eine einzige Suchabfrage bei Google, nie nur ein einziger Artikel bei Wikipedia.
				Eine Trennung vom Internet unterbindet diese Launen und erlaubt es dir unbehindert weiter zu machen.
			</p>,

			<p>
				(Nur nebenbei. Es ist Spanisch.)
			</p>,

			<p>
				Diese Seite selbst ist ein Experiment in diesem Zusammenhang: Was wäre, wenn bestimmte Inhalte es erfordern unsere Verbinung zu trennen?
				Was, wenn die Leser Zugang zu diesem wunderbaren Fokus bekommen, welcher das stundenlange Verschlingen eines Roman so befriedigend macht?
				Was, wenn die Urheber es mit dem Potenzial moderner Geräte verbinden könnten?
				Unsere Handys und Laptops sind erstaunliche Plattformen erfinderische Inhalte - wenn wir nur unsere eigene Aufmerksamkeit nutzen könnten.
			</p>,

			<p>
				Inhalte, die nur offline zugänglich sind, würden auch die Urheber zwingen anders zu denken.
				Nimm diese Seite: hier ist nicht ein einziger Link, der den Leser ablenkt.
				Wie viele gute Artikel hast du nur zur Hälfte gelesen, weil du einem strahlend unterstrichenen Link gefolgt bist.
				Wenn du offline bist, wie gerade jetzt, dann ist das der einzige Ort an dem du sein kannst.
			</p>,

			<p>
				Ich kann schon das Stöhnen hören: »Aber ich muss für meinen Job online sein«. Es ist mir egal. Schaffe dir Zeit.
				I wette, das was dich auszeichnet ist nicht deine Fähigkeit irgendetwas zu googeln, sondern deine Fahigkeit Informationen zu verarbeiten.
				Mach deine Recherche online; schaffe offline.
			</p>,

			<p>
				Nun kehre zurück zum regulären Internet. Denke nur daran, dir gelegentlich selbst das Geschenk der Trennung davon zu machen.
			</p>,

			<p>
				<span role="img" aria-label="love">❤️</span> Chris Bolin
				<br/>
				<i>(@bolinchris wenn du wieder online bist)</i>
			</p>,
			<p>
				Übersetzt von Frank Dietrich
			</p>
		],
	},

	// ------------------------------------ RUSSIAN ------------------------------------
	ru: {
		name: 'русский',
		onlineElements: () => [
			<h1>
				Чтобы просмотреть эту страницу, вам нужно отключиться от интернета.
			</h1>,
			<br />,
			<h2>
				{ MOBILE ?
					'Пожалуйста отключитесь  от интернета, чтобы продолжить. (авиарежим)'
					: 'Пожалуйста отключитесь  от интернета, чтобы продолжить.'
				}
			</h2>
		],
		title: () => 'Теперь мы вне сети',
		bodyParagraphs: () => [
			<p><i>2017. (Чтение этой страницы займёт две минуты.)</i></p>,
			<p>
				Вы хотите стать более производительным? Тогда просто отключитесь  от интернета. Ведь постоянный доступ к интернету - это постоянные прерывания, как внешние, так и внутренние.
			</p>,

			<p>
				Существует множество внешних прерываний, и мы их часто испытываем: то у вас новое сообщение в Gmail, то в Slack, то в Twitter, то в Facebook, то в Instagram, то в Snapchat, то в LinkedIn. Друзья, члены семьи, сотрудники или спаммеры имеют доступ к вашему ценному вниманию.
			</p>,

			<p>
				Но всё же более пагубные прерывания в работе - внутренние. Конечно же вы можете выключить звук уведомлений в Twitter или выйти из Slack. Но каким образом можно выключить свой мозг и не реагировать на свои же мысли?
			</p>,

			<p>
				Я провел много времени находясь в такой же ситуации. Те доли секунды, когда вдруг задумываешься над самым банальным вопросом: "А какой второй наиболее распространённый в мире язык?" - это и есть самое опасное время! Ведь эти пятьсот миллисекунд могут испортить ваш день. Никогда же не бывает только одного поиска в Google или одной статьи в Википедии. Но, отключив интернет, вы сразу сможете отложить свои желания и беспрепятственно двигаться вперед.
			</p>,

			<p>
				(Кстати ответ на вопрос - испанский)
			</p>,

			<p>
				Вот эта страница действует как эксперимент в том же духе: а что, если некоторый контент обязал бы вас выйти из сети? Вы же получаете удовлетворение от беспрерывного прочтения книг? Ну а если с интернетом было бы так же? А что, если бы создатели могли бы объединить это всё вместе с мощью современных устройств? Ведь наши телефоны и ноутбуки - великолепные платформы для создания изобретательного контента. Ах, если б мы только умели правильно управлять нашим вниманием!
			</p>,

			<p>
				Контент вне сети также принудит разработчиков программ и устройств думать иначе. Посмотрите опять на эту страницу: ведь здесь нет ни одной ссылки, которaя отвлечет читателей. Сколько хороших статей вы оставили полупрочитанными, погнавшись за блестящей, подчеркнутой ссылкой? Когда вы вне сети, тогда вы только тут и находитесь.
			</p>,

			<p>
				Я уже слышу жалобы: "Но чтобы работать мне ведь нужно находиться в сети!" А мне все равно. Теперь и вы найдите на это время. Я абсолютно уверен, что единственная вещь создающая ценность вашего человеческого капитала - это ваша способность синтезировать информацию. А не навык работы в поисковых системах типа Google. Занимайтесь в сети только поиском. А вот работайте вне её.
			</p>,

			<p>
				Ну, теперь возвращайтесь к вашему регулярно-назначенному интернету. Только не забудьте иногда сделать себе подарок в виде его отключения.
			</p>,

			<p>
				<span role="img" aria-label="love">❤️</span> Крис (Chris Bolin, @bolinchris)
			</p>,
			<p>
				Перевод Никиты Н.
			</p>
		],
	},

	// ------------------------------------ ARABIC ------------------------------------
	ar: {
		name: 'عربى',
		rightToLeft: true,
		onlineElements: () => [
			<h1>
				عليك أن تقطع اتصالك بالإنترنت لتشاهد الصفحة
			</h1>,
			<br />,
			<h2>
				{ MOBILE ? 'فعل وضعية الطيران' : 'اقطع اتصالك لتكمل'}
			</h2>
		],
		title: () => 'دون اتصال بالإنترنت فقط',
		bodyParagraphs: () => [
			<p><i>ستستغرق القراءة منك دقيقتان</i></p>,
			<p>
				هل تريد أن تكون شخصا  منتجاً؟ فقط اقطع اتصالك بالإنترنت، لان الاتصال الدائم بالانترنت يعني اتصالا دائم بالمقاطعات، الخارجية والداخلية.
			</p>,

			<p>
				المقاطعات الخارجية هي عبارة عن حشد وموثقة بشكل جيد: لديك رسالة جديدة على الجيميل، السلاك، التويتر، الفيسبوك، السنابشات، اللنكد إن. الأصدقاء، العائلة، زملاء العمل و مرسلي رسائل "السبام": كل من هذه الأشياء لديها منفذ مباشر لتركيزك الثمين.
			</p>,

			<p>
				لكن المقاطعات الداخلية هي المضرة بحق. باستطاعتك كتم تنبيهات تويتر أو الخروج من السلاك، ولكن كيف يمكنك إيقاف عقلك من عرقلتك؟
			</p>,

			<p>
				قضيت ساعات عالقاً في الشبكة العنكوتية لارضاء فضولي. الأكثر خطورة هي النزوات المفاجئة: "أتسائل ماهي ثاني أكثر لغة منطوقة؟" هذه ال ٥٠٠ الجزء من الثانية قد تغير يومك، لأن ذلك ليس مجرد بحث في جوجل، وليس فقط مقالة ويكيبيديا واحدة. الإنقطاع من الانترنت يقصر من دوائر تلك النزوات، وتدعك تتحرك بحرية ومن غير قيود.
			</p>,

			<p>
				هذه الصفحة بحد ذاتها هي تجربة: ماذا لو تطلب محتوى معين منا ان نقطع الاتصال بالإنترنت؟ ماذا لو حظي القرّاء بامكانية الحصول على ذلك التركيز العظيم الذي يجعلنا نلتهم رواية لساعات؟ ماذا لو تمكن المطورون من دمج هذين الشيئين عن طريق قوة الأجهزة الحديثة؟ هواتفنا و أجهزة الكمبيوتر المحمولة هي منصات مذهلة لمحتوى إبداعي فقط اذا تمكنا من استخدام تركيزنا.
			</p>,

			<p>
				المحتويات التي يمكن  قرائتها فقط اذا كنت منقطع الاتصال عن الانترنت ستجبر أيضا المخترعين بأن يفكروا بشكل مختلف. انظر الى هذه الصفحة: ليس هناك رابط واحد يشتت انتباه القرّاء. كم من المقالات الجيدة قرأت النصف منها لأنك لاحقت رابط لامع؟ عندما تكون منقطع الاتصال عن الانترنت، هنا هو المكان الوحيد الذي ستكون فيه.
			</p>,

			<p>
				بإمكاني سماع تذمرات من الآن: " ماذا لو علي ان أكون متصل بالإنترنت من أجل وظيفتي." انا لا اهتم. جد وقتاً. أراهن بأن الأشياء التي تجعل لك قيمة ليست قدرتك على البحث عن شَيْءٍ ما في قوقل  ولكن قدرتك على ربط المعلومات. قم ببحثك وانت متصل بالإنترنت؛ وابتكر وانت منقطع عن الاتصال بالانترنت.
			</p>,

			<p>
				الآن عد إلى جدولك الاعتيادي على الانترنت. فقط تذكر ان تعطي نفسك هدايا دورية من الانقطاع عن الانترنت.
			</p>,

			<p style={{direction: 'ltr'}}>
				<span role="img" aria-label="love">❤️</span> Chris Bolin
				<br/>
				<i>(@bolinchris when you reconnect)</i>
			</p>,
			<p>
				ترجمة جميلة ري
			</p>,
		],
	},
};


export const bodyParagraphs = (language) => languages[language].bodyParagraphs();
export const onlineElements = (language) => languages[language].onlineElements();
export const title = (language) => languages[language].title();
export const textStyle = (language) => ({
	direction: languages[language].rightToLeft ? 'rtl' : 'inherit',
});
