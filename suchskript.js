<div style="font-family: sans-serif; display: flex; justify-content: flex-end; margin-bottom: 20px;">
    <input type="text" id="buchSuche" placeholder="Suche" style="width: 50%; padding: 8px; font-size: 16px;" />
</div>

<div id="ergebnisse" style="font-family: sans-serif; display: flex; flex-direction: column; align-items: flex-end;">
</div>
<script>
/* <![CDATA[ */
const daten = [
{
  "title": "Motten tragen keinen Helm",
  "author": "Maren Elbrechtz",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibba3d3ac2f2286f8/version/1442578060/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/maren-elbrechtz-motten-tragen-keinen-helm"
},
{
  "title": "Mehr als schöner Wohnen",
  "author": "Ruth Becker, Eveline Linke",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if8d19378e804b9be/version/1442578137/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ruth-becker-eveline-linke-mehr-als-sch%C3%B6ner-wohnen"
},
{
  "title": "Anders geht immer",
  "author": "Mirjam Müntefering",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if3c0f32933d0d5dd/version/1442578188/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/mirjam-m%C3%BCntefering-anders-geht-immer"
},
{
  "title": "Die Liebsten",
  "author": "Trix Niederhauser",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iecdf57ae2ee677fd/version/1442576731/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/trix-niederhauser-die-liebsten"
},
{
  "title": "In jener Nacht",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i397d772c33978e81/version/1442577049/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-in-jener-nacht"
},
{
  "title": "Vesna",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ic46a62dd03fcfaef/version/1442577298/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-vesna"
},
{
  "title": "Der weibliche Erfolgspfad",
  "author": "Julia Schulz",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if21689ce88233235/version/1442577713/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/julia-schulz-der-weibliche-erfolgspfad"
},
{
  "title": "Aprikose im Kopf",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1c149d8a5daf875f/version/1442838440/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-aprikose-im-kopf"
},
{
  "title": "In roten Schuhen",
  "author": "Heidi Knake-Werner",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib3101590a24be40c/version/1442838262/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/heidi-knake-werner-in-roten-schuhen"
},
{
  "title": "Mein bewegtes Leben",
  "author": "Monika Jaeckel",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i023899eb58ee8600/version/1442839008/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/monika-jaeckel-m-ein-bewegtes-leben"
},
{
  "title": "Andere Heimaten",
  "author": "Miriam Kanne",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia70032295aa7eb25/version/1442840221/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/miriam-kanne-andere-heimaten"
},
{
  "title": "In mir ein Meer",
  "author": "Claudia Lewin",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibd75662982edeee6/version/1442843497/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/claudia-lewin-in-mir-ein-meer"
},
{
  "title": "Frauenfragen sind Menschheitsfragen",
  "author": "Sylvia Heinemann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ieb34b06e3dd9fce5/version/1442921505/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sylvia-heinemann-frauenfragen-sind-menschheitsfragen"
},
{
  "title": "Macht und Politik",
  "author": "Diotima",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iaee1bac4c3e82fd7/version/1442923589/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/diotima-macht-und-politik"
},
{
  "title": "Das Tantenerbe",
  "author": "Trix Niederhauser",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ic4693af53736b3fd/version/1442925024/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/trix-niederhauser-das-tantenerbe"
},
{
  "title": "Riskantes Spiel",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i692753256ae54e11/version/1442926113/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-riskantes-spiel"
}
{
  "title": "Emanzipation",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0d07c07214c191ba/version/1442927630/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/emanzipation"
},
{
  "title": "Männer fahren besser mit Bus und Bahn",
  "author": "Isabel Rohner, Andreas Franken (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i3c01ca1fb679b53c/version/1442928348/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-adreas-franken-hg-m%C3%A4nner-fahren-besser-mit-bus-und-bahn"
},
{
  "title": "Sprache macht Geschlecht",
  "author": "Jutta Hergenhan",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibba41392ffe67c40/version/1442929481/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/jutta-hergenhan-sprache-macht-geschlecht"
},
{
  "title": "Franz rettet Anna",
  "author": "Sylvia Rosenkranz-Hirschhäuser",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4df8b7a244c42005/version/1442929945/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sylvia-rosenkranz-hirschh%C3%A4user-franz-rettet-anna"
},
{
  "title": "Wir werden niemals darüber reden",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iacb3f0b200ec9065/version/1442997362/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-wir-werden-niemals-dar%C3%BCber-reden"
},
{
  "title": "Herzkasper",
  "author": "Julia Dankers",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i399f625210dd1619/version/1442997819/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/julia-dankers-herzkasper"
},
{
  "title": "Caretta",
  "author": "Renate Henstedt",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i75dfb2126c53146b/version/1442998208/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/renate-henstedt-caretta"
},
{
  "title": "Verschieden sein",
  "author": "Andrea Maihofer u.a.",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib69166c5758859d3/version/1442998663/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-maihofer-u-a-verschieden-sein"
},
{
  "title": "Kultur des Ökonomischen",
  "author": "Andrea Günter",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i17a68bf04524c38e/version/1442999110/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-g%C3%BCnter-kultur-des-%C3%B6konomischen"
},
{
  "title": "Selbsterfindung erfolgreicher Führungsfrauen",
  "author": "Silvia Hess-Kottman",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i590574e1f19cb201/version/1442999648/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/silvia-hess-kottman-selbsterfindung-erfolgreicher-f%C3%BChrungsfrauen"
},
{
  "title": "Denn vom Trauern kommt der Tod",
  "author": "Trix Niederhauser",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i164629c6e98fa04b/version/1443000156/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/trix-niederhauser-denn-vom-trauern-kommt-der-tod"
},
{
  "title": "Antipasti",
  "author": "Bettina Isabel Rocha",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i47e0e1a2185be4c2/version/1443000722/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/bettina-isabel-rocha-antipasti"
},
{
  "title": "Verlieren, vergessen, verzeihen",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/icb734d1f9db99191/version/1443003858/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-verlieren-vergessen-verzeihen"
},
{
  "title": "Text, Nation, Geschlecht",
  "author": "Samanta Gorzelniak",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibd7272e547fba060/version/1443004250/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/samanta-gorzelniak-text-nation-geschlecht"
},
{
  "title": "Warum ist der Himmel blau?",
  "author": "Gabriele Metz",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/id359180801cf46a2/version/1443004628/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/gabriele-metz-warum-ist-der-himmel-blau"
},
{
  "title": "Manche Weibspersonen",
  "author": "Karin Schmidt-Kohberg",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9ccac167fe8692a8/version/1443005149/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/karin-schmidt-kohberg-manche-weibspersonen"
},
{
  "title": "Gleiche Moral und gleiches Recht",
  "author": "Bettina Kretzschmar",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i8aaab071450cd44d/version/1443005576/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/bettina-kretzschmar-gleiche-moral-und-gleiches-recht"
},
{
  "title": "Brennnesseljahre",
  "author": "Daniela Schenk",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i906d648b62b02c90/version/1443005957/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/daniela-schenk-brennnesseljahre"
},
{
  "title": "Falscher Zauber",
  "author": "Katarina Struik",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ied0313bdf9e2ba29/version/1443006338/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/katarina-struik-falscher-zauber"
},
{
  "title": "Das Ganze des Lebens",
  "author": "Brigitte Kratzwald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9ed8f8b17233e572/version/1443006676/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/brigitte-kratzwald-das-ganze-des-lebens"
},
{
  "title": "Sexualität und Geschlecht",
  "author": "Barbara Grubner, Veronika Ott (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0ca8ede8133804cc/version/1443007411/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/barbara-grubner-veronika-ott-hg-sexualit%C3%A4t-und-geschlecht"
},
{
  "title": "Todesursache ungeklärt",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib9e1c95d18fa5bba/version/1443013252/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-todesursache-ungekl%C3%A4rt"
},
{
  "title": "Plotting Against Modernity",
  "author": "Sabine Bröck",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9b104c602129d7cb/version/1443008347/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sabine-broeck-plotting-against-modernity"
},
{
  "title": "Führers begeisterte Töchter",
  "author": "Ursula Mahlendorf",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i30714a48fc2e2ea6/version/1443009060/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ursula-mahlendorf-f%C3%BChrers-begeisterte-t%C3%B6chter"
},
{
  "title": "Artemis",
  "author": "Brigitte Bialojahn",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i69f91b7599f4dc1b/version/1443013800/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/brigitte-bialojahn-artemis"
},
{
  "title": "Allah und der Regenbogen",
  "author": "Ulrike Karner",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4ff0dae5c68a76c0/version/1443174045/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-karner-allah-und-der-regenbogen"
},
{
  "title": "Marie Anderswie",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i8d32bda3d6d25b41/version/1460953983/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-marie-anderswie"
},
{
  "title": "Du bist nicht mehr meine Freundin",
  "author": "Sylvia Rosenkranz, Hirschhäuser (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/idb7567c260864662/version/1443176166/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sylvia-rosenkranz-hirschh%C3%A4user-hg-du-bist-nicht-mehr-meine-freundin"
},
{
  "title": "Spuren ins Jetzt",
  "author": "Isabel Rohner",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibf314c0a1f43995d/version/1443176601/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-spuren-ins-jetzt"
},
{
  "title": "Klassikerinnen feministischer Theorie Band II",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2fe4a29c847bcdfa/version/1443178808/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/klassikerinnen-feministischer-theorie-band-ii"
},
{
  "title": "Paradigma Geschlechterdifferenz",
  "author": "Anke Drygala, Andrea Günter",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i61993716d45d6ef8/version/1443179545/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/anke-drygala-andrea-g%C3%BCnter-paradigma-geschlechterdifferenz"
},
{
  "title": "Weiß sehen",
  "author": "Carsten Junker, Julia Roth (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia48ada65fba553a4/version/1443180726/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carsten-junker-julia-roth-hg-wei%C3%9F-sehen"
},
{
  "title": "Das neue Kleid",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i5d1d7f0ebc981c64/version/1460953989/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/das-neue-kleid"
},
{
  "title": "Geschlecht, Gesundheit, Gouvernementalität",
  "author": "Sebastian Scheele",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1aaae6dd34d66d82/version/1460953990/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sebastian-scheele-geschlecht-gesundheit-gouvernementalit%C3%A4t"
},
{
  "title": "Irgendwo auf der Welt",
  "author": "Veneda Mühlenbrink",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if04cf885e34620d6/version/1443183051/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/veneda-m%C3%BChlenbrink-irgendwo-auf-der-welt"
},
{
  "title": "Slipeinlagen",
  "author": "Brigitte Schulz",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i5d8f7c9c984ef79f/version/1460953992/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/brigitte-schulz-slipeinlagen"
},
{
  "title": "Zu Hause in der Welt",
  "author": "Immacolata Amodeo",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i041a83d78e0db499/version/1470419216/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/immacolata-amodeo-zu-hause-in-der-welt"
},
{
  "title": "Lass keine Fremden ins Haus",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i09f83c879c8b312c/version/1547765125/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-lass-keine-fremden-ins-haus"
},
{
  "title": "Das Mädchen mit dem Jungenkopf",
  "author": "Roswitha Hoffmann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0226203489bbcf39/version/1460953994/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/roswitha-hoffmann-das-m%C3%A4dchen-mit-dem-jungenkopf"
},
{
  "title": "Alltäglicher Feminismus",
  "author": "Anja Nordmann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia64d69b26f3bc6f6/version/1460953995/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/anja-nordmann-allt%C3%A4glicher-feminismus"
},
{
  "title": "Femina Migrans",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9f4ce3d55db952d6/version/1460953996/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/femina-migrans"
},
{
  "title": "Feminism Kosher",
  "author": "Christina Thesing",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9c0d9335c156ad40/version/1460953997/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/christina-thesing-feminism-kosher"
},
{
  "title": "Ein Engel",
  "author": "Katja Suren",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie9a6a14e43d3cd23/version/1443185861/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/katja-suren-ein-engel"
},
{
  "title": "Compassion – Kirchen in Afrika",
  "author": "Ulrike Elsdöfer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6c6463a7b0954c75/version/1460953999/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-elsd%C3%B6rfer-compassion-kirchen-in-afrika"
},
{
  "title": "Frauen im Strudel",
  "author": "Jenny Warnecke",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i83d3adc8e3334c4f/version/1443186478/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/jenny-warnecke-frauen-im-strudel"
},
{
  "title": "Bernhardi & Julia Saint-Albain",
  "author": "Sophie Tieck",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i28823571fcca9caf/version/1443186856/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sophie-tieck-bernhardi-julia-saint-albain"
},
{
  "title": "Klamotten fürs Hirn",
  "author": "Ulrike Helmer (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1d26a9c198caf29d/version/1460954002/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-helmer-hg-klamotten-f%C3%BCrs-hirn"
},
{
  "title": "Klassikerinnen feministischer Theorie Band III",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iea410dfca7d30319/version/1460954003/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/klassikerinnen-feministischer-theorie-band-iii"
},
{
  "title": "Amodeo III",
  "author": "Immacolata Amodeo",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i276bdde17d31d969/version/1470419216/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/amodeo-iii"
},
{
  "title": "Gleichstellung im Reformprozess der Hochschulen",
  "author": "Birgit Blättl Mink u.a. (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie73a0c7ca7286ef6/version/1460954005/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/birgit-bl%C3%A4ttl-mink-u-a-hg-gleichstellung-im-reformprozess-der-hochschulen"
},
{
  "title": "Erfolg buchstabiert sich T-U-N",
  "author": "Isabel Rohner, Andreas Franken (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib669e0fac75db61d/version/1443189712/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-andreas-franken-hg-erfolg-buchstabiert-sich-t-u-n"
},
{
  "title": "Die Morgesons",
  "author": "Elizabeth Stoddard",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia2c27b28ee468759/version/1443190137/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/elizabeth-stoddard-die-morgesons"
},
{
  "title": "Regenbogenlicht",
  "author": "Ulrike Karner",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia88f7a9c9caa285d/version/1460954008/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-karner-regenbogenlicht"
},
{
  "title": "Wir 4ever",
  "author": "Daniela Schenk",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibc155ea66f044793/version/1443438946/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/daniela-schenk-wir-4ever"
},
{
  "title": "International National Lokal",
  "author": "Sonja Wölte",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0eec0dd6f3f3650c/version/1460954010/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sonja-w%C3%B6lte-international-national-lokal"
},
{
  "title": "Wissen und Agieren in der feministischen Mädchenarbeit",
  "author": "Andrea Brebeck",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie54a7f55e5ed1d59/version/1460954011/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-brebeck-wissen-und-agieren-in-der-feministischen-m%C3%A4dchenarbeit"
},
{
  "title": "Globale Religionen",
  "author": "Ulrike Elsdöfer (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9d9ec3d2f4d256a1/version/1460954012/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-elsd%C3%B6rfer-hg-globale-religionen"
},
{
  "title": "Das Mädchen mit dem Jungenkopf",
  "author": "Roswitha Hoffmann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0226203489bbcf39/version/1460953994/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/roswitha-hoffmann-das-m%C3%A4dchen-mit-dem-jungenkopf"
},
{
  "title": "Alltäglicher Feminismus",
  "author": "Anja Nordmann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia64d69b26f3bc6f6/version/1460953995/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/anja-nordmann-allt%C3%A4glicher-feminismus"
},
{
  "title": "Femina Migrans",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9f4ce3d55db952d6/version/1460953996/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/femina-migrans"
},
{
  "title": "Feminism Kosher",
  "author": "Christina Thesing",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9c0d9335c156ad40/version/1460953997/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/christina-thesing-feminism-kosher"
},
{
  "title": "Ein Engel",
  "author": "Katja Suren",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie9a6a14e43d3cd23/version/1443185861/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/katja-suren-ein-engel"
},
{
  "title": "Compassion – Kirchen in Afrika",
  "author": "Ulrike Elsdöfer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6c6463a7b0954c75/version/1460953999/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-elsd%C3%B6rfer-compassion-kirchen-in-afrika"
},
{
  "title": "Frauen im Strudel",
  "author": "Jenny Warnecke",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i83d3adc8e3334c4f/version/1443186478/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/jenny-warnecke-frauen-im-strudel"
},
{
  "title": "Bernhardi / Julia Saint-Albain",
  "author": "Sophie Tieck",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i28823571fcca9caf/version/1443186856/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sophie-tieck-bernhardi-julia-saint-albain"
},
{
  "title": "Klamotten fürs Hirn",
  "author": "Ulrike Helmer (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1d26a9c198caf29d/version/1460954002/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-helmer-hg-klamotten-f%C3%BCrs-hirn"
},
{
  "title": "Klassikerinnen feministischer Theorie Band III",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iea410dfca7d30319/version/1460954003/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/klassikerinnen-feministischer-theorie-band-iii"
},
{
  "title": "Amodeo III",
  "author": "",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i276bdde17d31d969/version/1470419216/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/amodeo-iii"
},
{
  "title": "Gleichstellung im Reformprozess der Hochschulen",
  "author": "Birgit Blättl, Mink u.a. (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie73a0c7ca7286ef6/version/1460954005/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/birgit-bl%C3%A4ttl-mink-u-a-hg-gleichstellung-im-reformprozess-der-hochschulen"
},
{
  "title": "Erfolg buchstabiert sich T-U-N",
  "author": "Isabel Rohner, Andreas Franken (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib669e0fac75db61d/version/1443189712/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-andreas-franken-hg-erfolg-buchstabiert-sich-t-u-n"
},
{
  "title": "Die Morgesons",
  "author": "Elizabeth Stoddard",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia2c27b28ee468759/version/1443190137/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/elizabeth-stoddard-die-morgesons"
},
{
  "title": "Regenbogenlicht",
  "author": "Ulrike Karner",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia88f7a9c9caa285d/version/1460954008/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-karner-regenbogenlicht"
},
{
  "title": "Unrechtserfahrungen",
  "author": "Susanne Opfermann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7b244e2ab3e6d5d3/version/1460954042/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/susanne-opfermann-unrechtserfahrungen"
},
{
  "title": "Lustmord",
  "author": "Susanne Komfort-Hein, Susanne Scholz (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i32e153256f5e6716/version/1460954043/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/susanne-komfort-hein-susanne-scholz-hg-lustmord"
},
{
  "title": "Bürgerliche Frauenbewegung",
  "author": "Ulrike Manz",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib1966673c6e6feba/version/1460954790/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulrike-manz-bürgerliche-frauenbewegung"
},
{
  "title": "Gott ist eine Frau",
  "author": "Gisela Brackert",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i41d267552ddf3c39/version/1460954791/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/gisela-brackert-gott-ist-eine-frau"
},
{
  "title": "Die halbierte Emanzipation",
  "author": "Carola Maltry (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7f7a0053a79b2bda/version/1460954792/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carola-maltry-hg-die-halbierte-emanzipation"
},
{
  "title": "O wüsste sie, dass sie es ist",
  "author": "Daniela Schenk",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia324cc0b4f0fc89b/version/1447085352/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/daniela-schenk-o-wüsste-sie-dass-sie-es-ist"
},
{
  "title": "Vorneweg und mittendrin",
  "author": "Christian Böser und Birgit Schaufler (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0e234b2c88f79604/version/1460954794/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/christian-boeser-und-birgit-schaufler-hg-vorneweg-und-mittendrin"
},
{
  "title": "Frauen, Autorität, Pädagogik",
  "author": "Andrea Günter (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4a1eebcb7d5d104d/version/1460954795/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-günter-hg-frauen-autorität-pädagogik"
},
{
  "title": "Menschenformen",
  "author": "Susanne Scholz und Felix Holtschoppen (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i8a91b05aa9c6a2a0/version/1460954796/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/susanne-scholz-und-felix-holtschoppen-hg-menschenformen"
},
{
  "title": "Spitzenfrauen",
  "author": "Anja Schulz (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i491a35f6d79bcf97/version/1460954797/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/anja-schulz-hg-spitzenfrauen"
},
{
  "title": "Kleines ABC der Freiheiten",
  "author": "Hilal Sezgin",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9c17c4b37f2f2e7f/version/1460954798/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/hilal-sezgin-kleines-abc-der-freiheiten"
},
{
  "title": "Die Spitzenkandidatin",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i5cf633730fcbbdc5/version/1447426655/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-die-spitzenkandidatin"
},
{
  "title": "Unzuverlässige Körper",
  "author": "Sabine Mehlmann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i434c1d334601eae5/version/1460954800/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sabine-mehlmann-unzuverlässige-körper"
},
{
  "title": "Frauenbetriebe",
  "author": "Sibylle Plogstedt",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i579505d6e264a254/version/1447428132/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sibylle-plogstedt-frauenbetriebe"
},
{
  "title": "Geschlechter-Revisionen",
  "author": "Sabine Lucia Müller und Sabine Schülting (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i63ee01a3a8e39c28/version/1460954802/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sabine-lucia-müller-und-sabine-schülting-hg-geschlechter-revisionen"
},
{
  "title": "Julia und Satine",
  "author": "Daniela Schenk",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i49debfdce0c4cf6c/version/1447429898/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/daniela-schenk-julia-und-satine"
},
{
  "title": "Grenzgänge",
  "author": "Britta Schinzel und Sigrid Schmitz (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i48e4a3f6724c2ec7/version/1460954804/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/britta-schinzel-und-sigrid-schmitz-hg-grenzgänge"
},
{
  "title": "Inanna, Gilgamesch, Isis, Rhea",
  "author": "Heide Göttner-Abendroth",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/ia40f212a52863fc3/version/1447431470/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/heide-göttner-abendroth-inanna-gilgamesch-isis-rhea"
},
{
  "title": "Zwischen Tradition und Emanzipation",
  "author": "Petra Holz",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i37d07ef0d20b1e8d/version/1460954806/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/petra-holz-zwischen-tradition-und-emanzipation"
},
{
  "title": "Aus der Not eine andere Welt",
  "author": "Friederike Habermann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i2d81a2933b8465c6/version/1447432341/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/friederike-habermann-aus-der-not-eine-andere-welt"
},
{
  "title": "Karrieren und Barrieren",
  "author": "Susanne Sander",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2b3c8ae6c7e17ec0/version/1460954808/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/susanne-sander-karrieren-und-barrieren"
},
{
  "title": "Fee Morgane, der Heilige Gral",
  "author": "Heide Göttner-Abendroth",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/id7d3746006e0387a/version/1447682438/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/heide-göttner-abendroth-fee-morgane-der-heilige-gral"
},
{
  "title": "Frau Holle, das Feenvolk der Dolomiten",
  "author": "Heide Göttner-Abendroth",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i26d3bf3c15510f28/version/1447683288/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/heide-göttner-abendroth-frau-holle-das-feenvolk-der-dolomiten"
},
{
  "title": "Inszenierungen von Subjektivität in der Literatur des Mittelalters",
  "author": "Martin Baisch u.a. (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i5e2b7d03b2f9dd60/version/1460954811/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/martin-baisch-u-a-hg-inszenierungen-von-subjektivität-in-der-literatur-des-mittelalters"
},
{
  "title": "Bombenapplaus",
  "author": "Petra Bonavita",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0a2b8ddf0ed9e21c/version/1460954812/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/petra-bonavita-bombenapplaus"
},
{
  "title": "Weißsein im Widerspruch",
  "author": "Eske Wollrad",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9bff7fca94b9e7c1/version/1460954813/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/eske-wollrad-weißsein-im-widerspruch"
},
{
  "title": "Hänschen Stadt Land Gender",
  "author": "Katharina Fleischmann und Ulrike Meyer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1e5c68a692fdb06a/version/1460954814/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/katharina-fleischmann-und-ulrike-meyer-hanschen-stadt-land-gender"
},
{
  "title": "Frauenbewegungen und Öffentlichkeiten um 1900",
  "author": "Ulla Wischermann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6b5fa2adf936e340/version/1460954815/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulla-wischermann-frauenbewegungen-und-öffentlichkeiten-um-1900"
},
{
  "title": "Historische Inzestdiskurse. Interdisziplinäre Zugänge",
  "author": "Jutta Eming u.a. (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/icd755f86db9b95a2/version/1460955093/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/jutta-eming-u-a-hg-historische-inszestdiskurse-interdisziplinäre-zugänge"
},
  {
    "title": "Lass mich deine Pizza sein",
    "author": "Sandra Wöhe",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iae4b26a0ae5f54f3/version/1460955094/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sandra-wöhe-lass-mich-deine-pizza-sein"
  },
  {
    "title": "Objekte und Erzählungen",
    "author": "Susanne Scholz",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibf2a4084941fbc0c/version/1460955095/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/susanne-scholz-objekte-und-erzählungen"
  },
  {
    "title": "Folgen sexueller Gewalt",
    "author": "Siegfried Rachut und Ellen Rachut",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/icb8d30a05d97ff82/version/1460955096/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/siegfried-rachut-und-ellen-rachut-folgen-sexueller-gewalt"
  },
  {
    "title": "Der Körper, der Leib und die Soziologie",
    "author": "Ulle Jäger",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/id24217a6c8b0d3af/version/1453815126/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ulle-jäger-der-körper-der-leib-und-die-soziologie"
  },
  {
    "title": "Nonne, Königin und Kurtisane",
    "author": "Michaela Hohkamp und Gabriele Jancke (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6d0a67e5df8f47c6/version/1460955098/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/michaela-hohkamp-und-gabriele-jancke-hg-nonne-königin-und-kurtisane"
  },
  {
    "title": "Die Töchter der Loreley",
    "author": "Anne Jüssen",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ied0bbad3b54a7eab/version/1460955099/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/anne-jüssen-die-töchter-der-loreley"
  },
  {
    "title": "Parlamentarierinnen in Deutschland 1918/19–1949",
    "author": "Heide Marie Lauterer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia50c5807f0a216de/version/1460955100/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/heide-marie-lauterer-parlamentarierinnen-in-deutschland-1918-19-1949"
  },
  {
    "title": "Dinge, Medien der Aneignung, Grenzen der Verfügung",
    "author": "Claudia Breger u.a. (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4ab39264779ec0ee/version/1460955101/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/claudia-breger-u-a-hg-dinge-medien-der-aneignung-grenzen-der-verfügung"
  },
  {
    "title": "Zukunft braucht Vergangenheit",
    "author": "Gerda Lerner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i318c939cf637121c/version/1447769296/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/gerda-lerner-zukunft-braucht-vergangenheit"
  },
  {
    "title": "Mohammeds deutsche Töchter",
    "author": "Hiltrud Schröter",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6131043d2a14d70f/version/1460955103/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/hiltrud-schröter-mohammeds-deutsche-töchter"
  },
  {
    "title": "Sophie von La Roche Lesebuch",
    "author": "Sophie La Roche",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/ia6f4b77b44da9f06/version/1447770871/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sophie-la-roche-sophie-von-la-roche-lesebuch"
  },
  {
    "title": "Ich stehe in der Sonne und fühle, wie meine Flügel wachsen",
    "author": "Ute Scherb",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4382f759a2ae0dc9/version/1460955105/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ute-scherb-ich-stehe-in-der-sonne-und-fühle-wie-meine-flügel-wachsen"
  },
  {
    "title": "Frau macht Wissenschaft",
    "author": "Immacolata Amodeo (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6c69c3513a9f7765/version/1460955106/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/immacolata-amodeo-hg-frau-macht-wissenschaft"
  },
  {
    "title": "Malen, Schreiben, Drucken",
    "author": "Jutta Pivecka",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i236aa17efc57de4d/version/1460955107/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/jutta-pivecka-malen-schreiben-drucken"
  },
  {
    "title": "Der andere Blick auf die Frühe Neuzeit. Forschungen 1974–1995",
    "author": "Heide Wunder",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1488e9c068a495ea/version/1460955108/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/heide-wunder-der-andere-blick-auf-die-frühe-neuzeit-forschungen-1974-1995"
  },
  {
    "title": "Lektüren und Brüche",
    "author": "Mechtild M. Jansen und Ingeborg Nordmann (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib62e7578775ff07f/version/1460955109/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/mechtild-m-jansen-und-ingeborg-nordmann-hg-lektüren-und-brüche"
  },
  {
    "title": "Malwida von Meysenbug. Ausgewählte Schriften",
    "author": "Malwida von Meysenbug",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i88a90e79eb54f44e/version/1460955110/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/malwida-von-meysenbug-ausgewählte-schriften"
  },
  {
    "title": "Frauen machen Bücher",
    "author": "Gabriele Kalmbach",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i5df61079d7d9ed70/version/1460955111/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/gabriele-kalmbach-frauen-machen-bücher"
  },
  {
    "title": "Als Fehle die bessere Hälfte",
    "author": "Kirsten Plötz",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i4856d5c1cadd7703/version/1447776481/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/kirsten-plötz-als-fehle-die-bessere-hälfte"
  },
  {
    "title": "Körper, Weiblichkeit, Autorschaft",
    "author": "Andrea Rinnert",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1a1e4d7a9d82f157/version/1460955113/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-rinnert-körper-weiblichkeit-autorschaft"
  },
  {
    "title": "Sammeln, Ausstellen, Wegwerfen",
    "author": "Gisela Ecker u.a. (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6a9935b92e3fa099/version/1460955114/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/gisela-ecker-u-a-hg-sammeln-ausstellen-wegwerfen"
  },
  {
    "title": "Das erste deutsche Fräuleinwunder",
    "author": "Antje Fenner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6d19a7e0f06f6f3c/version/1460955115/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-fenner-das-erste-deutsche-fräuleinwunder"
  },
  {
    "title": "Connys Reise",
    "author": "Veneda Mühlenbrink",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie193d62f339e6997/version/1447853313/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/veneda-mühlenbrink-connys-reise"
  },
  {
    "title": "Ein eigener Tod",
    "author": "Gerda Lerner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ic9c1dce5a89f4536/version/1460955450/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/gerda-lerner-ein-eigener-tod"
  },
  {
    "title": "Sperl organisiert und engagiert",
    "author": "Rita Huber",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia0b47f3a6b79831e/version/1460955451/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/rita-huber-sperl-organisiert-und-engagiert"
  },
  {
    "title": "Frauen in der Aufklärung",
    "author": "Iris Bubenik Bauer und Ute Schalz Laurenze (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i518c18e947fa5caa/version/1460955452/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/iris-bubenik-bauer-und-ute-schalz-laurenze-hg-frauen-in-der-aufklärung"
  },
  {
    "title": "Differenz und Gleichheit",
    "author": "Ute Gerhard und Andrea Maihofer (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0fa25e2399d66af6/version/1460955453/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ute-gerhard-und-andrea-maihofer-hg-differenz-und-gleichheit"
  },
{
  "title": "Geschlecht als Existenzweise",
  "author": "Andrea Maihofer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1a8dfb061a6a3ff6/version/1460955454/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-maihofer-geschlecht-als-existenzweise"
},
{
  "title": "Jenny",
  "author": "Fanny Lewald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6c9b3544a69a5479/version/1460955455/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/fanny-lewald-jenny"
},
{
  "title": "Politische Schriften für und wider die Frauen",
  "author": "Fanny Lewald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/icf916ca2254d2570/version/1460955456/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/fanny-lewald-politische-schriften-für-und-wider-die-frauen"
},
{
  "title": "Italienisches Bilderbuch",
  "author": "Fanny Lewald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i36e7c22ab404a6c8/version/1460955457/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/fanny-lewald-italienisches-bilderbuch"
},
{
  "title": "Alias Iduna, Gräfin H. H. Diogena",
  "author": "Fanny Lewald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2f7eaf1b93d917f7/version/1460955458/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/fanny-lewald-alias-iduna-gräfin-h-h-diogena"
},
{
  "title": "Hans Ibeles in London",
  "author": "Johanna Kinkel",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1cfa85e5aacc1f79/version/1460955459/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/johanna-kinkel-hans-ibeles-in-london"
},
{
  "title": "Denkschrift der Madame de Valmont",
  "author": "Olympe de Gouges",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i76a9fdd7e7379fc6/version/1460955460/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/olympe-de-gouges-denkschrift-der-madame-de-valmont"
},
{
  "title": "Im Vaterhause",
  "author": "Fanny Lewald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i529b6e91e7b9008e/version/1460955461/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/fanny-lewald-im-vaterhause"
},
{
  "title": "Leidensjahre",
  "author": "Fanny Lewald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iac9fc06a79ce1d0f/version/1460955462/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/fanny-lewald-leidensjahre"
},
{
  "title": "Befreiung und Wanderleben",
  "author": "Fanny Lewald",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2a77a95de6e5d63b/version/1460955463/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/fanny-lewald-befreiung-und-wanderleben"
},
{
  "title": "Mir bleiwen hei – Wir bleiben hier",
  "author": "Hildegard Michels",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia3d69d63c4359d84/version/1460955464/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/hildegard-michels-mir-bleiwen-hei-wir-bleiben-hier"
},
{
  "title": "Keine einzige Lüge",
  "author": "Clelia Marchi",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9b148f3f6b18f9db/version/1460955465/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/clelia-marchi-keine-einzige-lüge"
},
{
  "title": "Alles, was ich muss, ist weg",
  "author": "Maren Elbrechtz",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/idc06bb834e6580bd/version/1449500109/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/maren-elbrechtz-alles-was-ich-muss-ist-weg"
},
{
  "title": "Knarrenfrauen",
  "author": "Daniela Schenk",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i23ae5e735f8e9a59/version/1453818591/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/daniela-schenk-knarrenfrauen"
},
{
  "title": "Die Sterne vom Himmel holen",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i20d802734eadf9b7/version/1449500919/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-die-sterne-vom-himmel-holen"
},
{
  "title": "Luftsprünge und Lebenswurzeln",
  "author": "Béatrice Hecht El Minshawi",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ibf3d94cfd4913064/version/1460955469/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/béatrice-hecht-el-minshawi-luftsprünge-und-lebenswurzeln"
},
{
  "title": "Ambivalenzen der Normativität",
  "author": "Karolina Dreit, Nina Schumacher, Anke Abraham, Susanne Maurer (Hg.)",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i5fefb870c206f10f/version/1460955470/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/karolina-dreit-nina-schumacher-anke-abraham-susanne-maurer-hg-ambivalenzen-der-normativität"
},
{
  "title": "Beitragen und äquivalentes Tauschen",
  "author": "Sigrun Preissing",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i79aa408a5673327e/version/1460955471/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sigrun-preissing-beitragen-und-äquivalentes-tauschen"
},
{
  "title": "Ecommony",
  "author": "Friederike Habermann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7648c7ca0e9b6f55/version/1449504996/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/friederike-habermann-ecommony"
},
{
  "title": "Erlebtes und Erkämpftes",
  "author": "Luise Berthold",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i174354ade364e53f/version/1460955473/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/luise-berthold-erlebtes-und-erkämpftes"
},
{
  "title": "Das bedingungslose Grundeinkommen (Hg.)",
  "author": "Antje Schrupp u.a.",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/id5fefb8a4d847e48/version/1474293590/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-schrupp-u-a-hg-das-bedingungslose-grundeinkommen"
},
{
  "title": "Vote for Victoria",
  "author": "Antje Schrupp",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i18f5283943b7d5fb/version/1464872358/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-schrupp-vote-for-victoria"
},
{
  "title": "Frischer Wind am Wolfgangsee",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i2033aacfcf3b57dd/version/1464872583/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-frischer-wind-am-wolfgangsee"
},
{
  "title": "Odéonia Paris",
  "author": "Veneda Mühlenbrink",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i9eb2c66e475bddf2/version/1464872921/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/veneda-mühlenbrink-odéonia-paris"
},
{
  "title": "Zu keiner anderen Zeit",
  "author": "Barbara Martina Strebel",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i6794b02eee855247/version/1464873356/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/barbara-martina-strebel-zu-keiner-anderen-zeit"
},
{
  "title": "Tödliche Verstrickungen",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7630bde1d85a6941/version/1464873525/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-tödliche-verstrickungen"
},
{
  "title": "Zeit der Diebe",
  "author": "Eike Bornemann",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/ib615aaa379614921/version/1464873970/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/eike-bornemann-zeit-der-diebe"
},
{
  "title": "Sommer in Barock",
  "author": "Carolin Schairer",
  "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iee668cee4f7cc670/version/1481299550/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-sommer-in-barock"
},
{
  "title": "Alpenfrauen",
  "author": "Daniela Schenk",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/iee5137841937933a/version/1481300133/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/daniela-schenk-alpenfrauen"
},
{
  "title": "Alle Farben der Nacht",
  "author": "Jonas Zauels",
  "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i43de6d18b536b8d8/version/1481300531/image.jpg",
  "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/jonas-zauels-alle-farben-der-nacht"
},
  {
    "title": "Der Geist der Geschlechter",
    "author": "Brigitte Rauschenbach",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i3fc56cf4d0e59e0b/version/1487756633/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/brigitte-rauschenbach-der-geist-der-geschlechter"
  },
  {
    "title": "Anna Pappritz 1861–1939",
    "author": "Kerstin Wolff",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i567303d5ec3cf238/version/1481301071/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/kerstin-wolff-anna-pappritz-1861-1939"
  },
  {
    "title": "100 Jahre Frauenwahlrecht",
    "author": "Isabel Rohner, Rebecca Beerheide (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2e21a884ded8a9ca/version/1481301247/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-rebecca-beerheide-hg-100-jahre-frauenwahlrecht"
  },
  {
    "title": "Geschichten über 30",
    "author": "Sina Hauer (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ifbbbcb5b3a140ac4/version/1493882125/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sina-hauer-hg-geschichten-über-30"
  },
  {
    "title": "Wir sind nicht da, um zu verschwinden",
    "author": "Olivia Rosenthal",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/idd04b0ac9100c2df/version/1493883873/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/olivia-rosenthal-wir-sind-nicht-da-um-zu-verschwinden"
  },
  {
    "title": "Küsse mit Zukunft",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i874a6319fc25fbf9/version/1493885098/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-küsse-mit-zukunft"
  },
  {
    "title": "Im Schatzfieber",
    "author": "Eike Bornemann",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/idefb12126880b379/version/1493886307/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/eike-bornemann-im-schatzfieber"
  },
  {
    "title": "Fatima und Richard",
    "author": "Iris Groschek, Rainer Hering",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/id8bdf096c3ef4646/version/1493886743/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/iris-groschek-rainer-hering-fatima-und-richard"
  },
  {
    "title": "Böse Weiber",
    "author": "Claudia Opitz-Belakhal",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9155be6caff500ca/version/1493887317/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/claudia-opitz-belakhal-böse-weiber"
  },
  {
    "title": "Pornografisches",
    "author": "Nina Schumacher",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i3c926779cdfc98e3/version/1460955724/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/nina-schumacher-pornografisches"
  },
  {
    "title": "Beständig im Wandel",
    "author": "Journalistinnenbund (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i0b3bdd1a511c29bb/version/1493888772/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/journalistinnenbund-hg-beständig-im-wandel"
  },
  {
    "title": "Der zäheste Fisch seit es Fahrräder gibt",
    "author": "Marie Sichtermann",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7e50c00bcaa97a64/version/1460955726/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/marie-sichtermann-der-zäheste-fisch-seit-es-fahrräder-gibt"
  },
  {
    "title": "Im Netz der Gedichte",
    "author": "Sibylle Plogstedt",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if316227b57ceb1b2/version/1520261043/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sibylle-plogstedt-im-netz-der-gedichte"
  },
  {
    "title": "Schattengesicht",
    "author": "Antje Wagner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ifbb1ca7f7edbbce3/version/1512567045/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-wagner-schattengesicht"
  },
  {
    "title": "Der Seerosencode",
    "author": "Sonja Steinert",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i05398d45e2d535d1/version/1460955729/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sonja-steinert-der-seerosencode"
  },
  {
    "title": "Fluss mit zwei Brücken",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i09f212f882feb48c/version/1512566989/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-fluss-mit-zwei-brücken"
  },
  {
    "title": "Schwimmende Schmetterlinge",
    "author": "Trix Niederhauser",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/id5151e12af336ad0/version/1512566955/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/trix-niederhauser-schwimmende-schmetterlinge"
  },
  {
    "title": "Die Schmugglerin",
    "author": "Rike Feldhoff",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie8016832f6a16698/version/1512566814/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/rike-feldhoff-die-schmugglerin"
  },
  {
    "title": "Die Höhle der Löwin",
    "author": "Andrea Vogelsang",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4424c1fa791b05d8/version/1516872503/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-vogelsang-die-höhle-der-löwin"
  },
  {
    "title": "Sonnenröschenwinter",
    "author": "Mirjam Müntefering",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iddd8bd2b71ef559c/version/1525678176/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/mirjam-müntefering-sonnenröschenwinter"
  },
  {
    "title": "Am richtigen Platz",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/id7524e92da75e987/version/1525678975/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-am-richtigen-platz"
  },
  {
    "title": "Dunkle Erleuchtung",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i8856b1970ca7c09d/version/1525858522/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-dunkle-erleuchtung"
  },
  {
    "title": "Januarrot",
    "author": "Martina Marie Liertz",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib4c50c48874ce79b/version/1525680739/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/martina-marie-liertz-januarrot"
  },
  {
    "title": "Sechs Wochen im Herbst",
    "author": "Bettina Elpers",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i06b6f1460e5b9e17/version/1460955745/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/bettina-elpers-sechs-wochen-im-herbst"
  },
  {
    "title": "Gezähmte Träume",
    "author": "Mechthild Uhle",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7306457c03f0bba1/version/1460955746/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/mechthild-uhle-gezähmte-träume"
  },
  {
    "title": "Ausgetauscht",
    "author": "Friederike Habermann",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9553a65b8b81db1e/version/1525681813/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/friederike-habermann-ausgetauscht"
  },
  {
    "title": "Denkwerkstatt Gerechtigkeit",
    "author": "Andrea Günter, Claudia Conrady et al.",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s63aff590875c2a23/image/i78fab15d9db2ec87/version/1540384324/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andrea-günter-claudia-conrady-et-al-denkwerkstatt-gerechtigkeit"
  },
  {
    "title": "Carola Möller",
    "author": "Stiftung Fraueninitiative, Marlies W. Fröse, Rita Seppelfricke und Annekathrin Linck (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib78e2aa97d0d9e9e/version/1460955749/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/stiftung-fraueninitiative-marlies-w-fröse-rita-seppelfricke-und-annekathrin-linck-hg-carola-möller"
  },
  {
    "title": "Flamingofeuer",
    "author": "Laura Lay",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=375x640:format=jpg/path/s63aff590875c2a23/image/i0aaa816b2248a449/version/1540541486/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/laura-lay-flamingofeuer"
  },
  {
    "title": "Am Anfang war Neuseeland",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s63aff590875c2a23/image/i8ee764715de5a295/version/1543244786/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-am-anfang-war-neuseeland"
  },
  {
    "title": "Indy",
    "author": "Lina Kaiser",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i242bdce731f4c6ee/version/1544026408/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/lina-kaiser-indy"
  },
  {
    "title": "Julipläne",
    "author": "Martina Marie Liertz",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i86b141f2e4f631a9/version/1544026366/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/martina-marie-liertz-julipläne"
  },
  {
    "title": "Mutter durch Geburt, Vater durch Gesetz",
    "author": "Andreas Wolters",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if4a4628847814e85/version/1731054043/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/andreas-wolters-mutter-durch-geburt-vater-durch-gesetz"
  },
  {
    "title": "Backlash – Antifeminismus in Wissenschaft, Politik und Gesellschaft",
    "author": "Marion Näser, Lather, Anna-Lena Oldemeier, Dorothee Beck (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i50c63c65f3007d96/version/1569316928/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/marion-näser-lather-anna-lena-oldemeier-dorothee-beck-hg-backlash-antifeminismus-in-wissenschaft-politik-und-gesellschaft"
  },
  {
    "title": "Meeresschwester",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i8813a28781d601c9/version/1557214258/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-meeresschwester"
  },
  {
    "title": "Stimmt so",
    "author": "Katrin von Consbruch",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9db753a01660002d/version/1557214195/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/katrin-von-consbruch-stimmt-so"
  },
  {
    "title": "Schöner Morden",
    "author": "Isabel Rohner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6bba4eb0ef16d5a3/version/1557214110/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-schöner-morden"
  },
  {
    "title": "Schwangerwerdenkönnen",
    "author": "Antje Schrupp",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7c7c4b32af20cdfe/version/1557214065/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-schrupp-schwangerwerdenkönnen"
  },
  {
    "title": "Habenicht – Die Muse hat genug geküsst, sie schreibt",
    "author": "Erdmute Sylvester",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/icf0b3ac1fb5f85d7/version/1569317123/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/erdmute-sylvester-habenicht-die-muse-hat-genug-geküsst-sie-schreibt"
  },
  {
    "title": "Streit um die Frauen",
    "author": "Claudia Opitz-Belakhal",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if3bdd36fcf1f69bc/version/1557213832/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/claudia-opitz-belakhal-streit-um-die-frauen"
  },
  {
    "title": "Freiheit, Gleichheit, Differenz",
    "author": "Christian Giardina",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie94306e604857e3c/version/1557213788/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/christian-giardina-freiheit-gleichheit-differenz"
  },
  {
    "title": "Antisemitismus – Antifeminismus",
    "author": "Frauen Geschichte Baden-Württemberg e.V. (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6f4039205f02bd9b/version/1557213736/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/frauen-geschichte-baden-württemberg-e-v-hg-antisemitismus-antifeminismus"
  },
  {
    "title": "Aufzeichnungen eines Krokodils",
    "author": "Qiu Miaojin",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i224854af6dd2b7d6/version/1574767574/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/qiu-miaojin-aufzeichnungen-eines-krokodils"
  },
  {
    "title": "Siege Asni",
    "author": "Nasrin",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i9f49a3256d5fa070/version/1574768804/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/nasrin-siege-asni"
  },
  {
    "title": "Zurück auf Los",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i25d6db890bb4fc8c/version/1574769285/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-zurück-auf-los"
  },
  {
    "title": "Der Himmel so rot",
    "author": "Marion Feldhausen",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2c60266fcb8e5b96/version/1574769980/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/marion-feldhausen-der-himmel-so-rot"
  },
  {
    "title": "Von Grenzgängen",
    "author": "Jutta Bahr-Jendges",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i137ae92a7b6a8a22/version/1574770787/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/jutta-bahr-jendges-von-grenzgängen"
  },
  {
    "title": "Konkurrenz für das Alphamännchen",
    "author": "Dorothee Beck, Annette Henninger (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6668d0d546aa063a/version/1575892589/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/dorothee-beck-annette-henninger-hg-konkurrenz-für-das-alphamännchen"
  },
  {
    "title": "Tasche",
    "author": "",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s63aff590875c2a23/image/ie40d8cde9f8a03ba/version/1587380808/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/tasche"
  },
  {
    "title": "Lesezeichen",
    "author": "",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=png/path/s63aff590875c2a23/image/i3d640aecdf3fe2a0/version/1669712695/image.png",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/lesezeichen"
  },
  {
    "title": "Beim nächsten Mann bleib ich solo",
    "author": "Hella Heller",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iaaac7925eec57050/version/1587981275/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/hella-heller-beim-nächsten-mann-bleib-ich-solo"
  },
  {
    "title": "Taugenixen",
    "author": "Isabel Rohner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i21e0e8285331ceb4/version/1587978516/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-taugenixen"
  },
  {
    "title": "So wie im Film",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i8ef92883cf95e494/version/1606397123/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-so-wie-im-film"
  },
  {
    "title": "Brombeerkind",
    "author": "Waltraud Schwab",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ic01a9191b16aad12/version/1606398080/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/waltraud-schwab-brombeerkind"
  },
  {
    "title": "Gretchens Rache",
    "author": "Isabel Rohner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6b3b6c00e7ea5bd4/version/1606398544/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-gretchens-rache"
  },
  {
    "title": "Lebenswende",
    "author": "Julia Hoch",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2ddc6c0a0fd21def/version/1620140116/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/julia-hoch-lebenswende"
  },
  {
    "title": "Tilda",
    "author": "Maiken Brathe",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i18c871fc71ff93a7/version/1620140439/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/maiken-brathe-tilda"
  },
  {
    "title": "In diesem Moment",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i60ae305b31bde77c/version/1620140756/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-in-diesem-moment"
  },
  {
    "title": "Mehr Schatten als Licht",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i390ab78a94da8cf0/version/1620140990/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-mehr-schatten-als-licht"
  },
  {
    "title": "Verliebt in die andere",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i452e07586ccd84d5/version/1636369523/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-verliebt-in-die-andere"
  },
  {
    "title": "Jederstadt",
    "author": "Barbara Martina Strebel",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia224986706a3a797/version/1638260958/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/barbara-martina-strebel-jederstadt"
  },
  {
    "title": "Unversehrt",
    "author": "Mirjam Müntefering",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i00eac0e20475adb9/version/1638261043/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/mirjam-müntefering-unversehrt"
  },
  {
    "title": "Schwarze Petra",
    "author": "Isabel Rohner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib4a89b973b579bcc/version/1638261458/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-schwarze-petra"
  },
  {
    "title": "Luna und Martje",
    "author": "Mirjam Müntefering",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if8ede8262331ba37/version/1651500549/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/mirjam-müntefering-luna-und-martje"
  },
  {
    "title": "Klaus muss raus",
    "author": "Maiken Brathe",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ib2be445828395eb6/version/1651500515/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/maiken-brathe-klaus-muss-raus"
  },
  {
    "title": "Lehrerin mit Herz",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iccf03e700de974b3/version/1651500624/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-lehrerin-mit-herz"
  },
  {
    "title": "Kaiserskinder",
    "author": "Ursula Pickener",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/id1eb58ee10e2f961/version/1651500814/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ursula-pickener-kaiserskinder"
  },
  {
    "title": "Lockdown Welten",
    "author": "Anna Kasten & Anja E. Ritter",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if6035fb10fb4337a/version/1651501113/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/anna-kasten-anja-e-ritter-lockdown-welten"
  },
  {
    "title": "Denkbewegungen zwischen Kritik, Norm und Utopie",
    "author": "Bergold, Caldwell, Dierkes, Georg Spahn (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i80268382de0ccff6/version/1461029403/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/bergold-caldwell-dierkes-georg-spahn-will-hg-denk-bewegungen-zwischen-kritik-norm-und-utopie"
  },
  {
    "title": "Entzwei",
    "author": "Sabine Gelsing",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/icd5b4e37d14b6b2c/version/1672897565/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sabine-gelsing-entzwei"
  },
  {
    "title": "Mit einem Lächeln",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i52f6d89e55129d08/version/1669721837/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-mit-einem-lächeln"
  },
  {
    "title": "Vakuum",
    "author": "Antje Wagner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4e8b21b757e5fc90/version/1669722119/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-wagner-vakuum"
  },
  {
    "title": "Kalte Sophie",
    "author": "Isabel Rohner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if607a10e43d70ab1/version/1669722381/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/isabel-rohner-kalte-sophie"
  },
  {
    "title": "Mit anderen Wurzeln",
    "author": "Shirin Lausch",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i599214dc70d68e37/version/1669722619/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/shirin-lausch-mit-anderen-wurzeln"
  },
  {
    "title": "Partizipation und Geschlecht",
    "author": "Gabi Gumbel, Gabriele Pieri, Corinna Schneider, Prof. Dr. Sylvia Schraut (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if722f7cba11cb298/version/1682065892/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/gabi-gumbel-gabriele-pieri-corinna-schneider-prof-dr-sylvia-schraut-hg-partizipation-und-geschlecht"
  },
  {
    "title": "Räuberleiter",
    "author": "Barbara Imgrund",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6ec85cef72977016/version/1682067185/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/barbara-imgrund-räuberleiter"
  },
  {
    "title": "Tünde weiss alles",
    "author": "Maiken Brathe",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/if2b486079bd90fbc/version/1683632654/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/maiken-brathe-tünde-weiss-alles"
  },
  {
    "title": "Karussell und Glockenklang",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i1566108e9fbc12c6/version/1684134354/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-karussell-und-glockenklang"
  },
  {
    "title": "Unland",
    "author": "Antje Wagner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i4bb18b89345c2c37/version/1683800843/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-wagner-unland"
  },
  {
    "title": "Frau Putz",
    "author": "Julia Hoch",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i77e7087de3a7cbfb/version/1700139320/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/julia-hoch-frau-putz"
  },
  {
    "title": "Zeitlos",
    "author": "Lina Kaiser",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i245a9537335ac687/version/1700139915/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/lina-kaiser-zeitlos"
  },
  {
    "title": "Der Schein",
    "author": "Ella Blix",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ied649bbd6bd0e1e4/version/1700140272/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/ella-blix-der-schein"
  },
  {
    "title": "Zwölf gute Taten",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i70d3c3c92032931e/version/1700141080/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-zwölf-gute-taten"
  },
  {
    "title": "Wissenschaftlerinnen zwischen Empowerment und Unsichtbarkeit",
    "author": "Nina Käsehage",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie052ed296876af9d/version/1700141159/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/nina-käsehage-wissenschaftlerinnen-zwischen-empowerment-und-unsichtbarkeit"
  },
  {
    "title": "Lorettas letzter Trip",
    "author": "Edie Calie",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ia2906c316aea6e4c/version/1714635984/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/edie-calie-lorettas-letzter-trip"
  },
  {
    "title": "Das Flimmern kleiner Lichter",
    "author": "Stephanie Mehnert",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i6cb68067bf7d7ab2/version/1714636980/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/stephanie-mehnert-das-flimmern-kleiner-lichter"
  },
  {
    "title": "Mehr als nur ein Kuss",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i3a271e9c67d8b362/version/1714637502/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-mehr-als-nur-ein-kuss"
  },
  {
    "title": "Warum hat das niemand erzählt?",
    "author": "Sibylle Plogstedt",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i210f460b1ffce1f4/version/1714637709/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sibylle-plogstedt-warum-hat-das-niemand-erzählt"
  },
  {
    "title": "Loving to survive",
    "author": "Dee L. R. Graham",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i504248b09807e429/version/1714637920/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/dee-l-r-graham-loving-to-survive"
  },
  {
    "title": "Für Elise",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s63aff590875c2a23/image/i5084d915d56c84bb/version/1718611974/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-f%C3%BCr-elise"
  },
  {
    "title": "Süßer als Honig",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i5427d937b0c62b37/version/1732009370/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-s%C3%BC%C3%9Fer-als-honig"
  },
  {
    "title": "Mütter in die Politik",
    "author": "Sarah Zöllner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/iff7fde0672b4abf2/version/1732009768/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/sarah-z%C3%B6llner-m%C3%BCtter-in-die-politik"
  },
  {
    "title": "Mittendrin im Lilabunt",
    "author": "Mirjam Müntefering",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i527f586f2711cbcf/version/1732102627/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/mirjam-m%C3%BCntefering-mittendrin-im-lilabunt/"
  },
  {
    "title": "Der Wurm",
    "author": "Barbara Imgrund",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i3dbce579750b9e5c/version/1732429158/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/barbara-imgrund-der-wurm/"
  },
  {
    "title": "Gleichstellung im Wandel",
    "author": "Astrid Franzke, Katrin Springsgut (Hg.)",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i7132c8eed3a8033b/version/1738670328/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/astrid-franzke-katrin-springsgut-hg-gleichstellung-im-wandel/"
  },
  {
    "title": "Hyde",
    "author": "Antje Wagner",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i342dc9773ede1957/version/1746443841/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-wagner-hyde/"
  },
  {
    "title": "Ellen",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/id2f9ad1fa050cfd4/version/1746444389/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-ellen/"
  },
  {
    "title": "Unter allen Umständen frei",
    "author": "Antje Schrupp",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i20a1218475fcca2f/version/1746444799/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/antje-schrupp-unter-allen-umst%C3%A4nden-frei/"
  },
  {
    "title": "Vor mir die Reise",
    "author": "Nasrin Siege",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2f762c898e06d4d1/version/1746445067/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/nasrin-siege-vor-mir-die-reise/"
  },
  {
    "title": "Die Bärin",
    "author": "Daniela Chmelik",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/id85f66c8ce5da716/version/1746605235/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/daniela-chmelik-die-b%C3%A4rin/"
  },
  {
    "title": "Nea Kameni",
    "author": "Carolin Schairer",
    "img": "https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/s63aff590875c2a23/image/ia919decc3483d3c6/version/1752751863/image.jpg",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/carolin-schairer-nea-kameni/"
  },
  {
    "title": "Buchpaket lesbisch queer 1",
    "author": "",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/i2ea53aa2efb1626b/version/1746603518/image.png",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/buchpaket-lesbisch-queer-1/"
  },
  {
    "title": "Buchpaket Crimina",
    "author": "",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/idb3d66212d4b767c/version/1695902657/image.png",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/buchpaket-crimina/"
  },
  {
    "title": "Buchbox Carolin Schairer",
    "author": "",
    "img": "https://image.jimcdn.com/app/cms/image/transf/none/path/s63aff590875c2a23/image/ie9cabbda77c84333/version/1752647116/image.png",
    "link": "https://www.ulrike-helmer-verlag.de/buchbeschreibungen/buchbox-carolin-schairer/"
  }
];

const eingabe = document.getElementById("buchSuche");
const ergebnisse = document.getElementById("ergebnisse");

function zeigeTreffer(liste) {
  if (liste.length === 0) {
    ergebnisse.innerHTML = "<p style='width: 50%; text-align: right;'>Keine Treffer gefunden.<\/p>";
    return;
  }

  ergebnisse.innerHTML = liste.map(item => `
    <div style="width: 50%; display: flex; margin-bottom: 15px; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
      <a href="${item.link}" target="_blank">
        <img src="${item.img}" alt="${item.title}" style="width: 65px; height: auto; margin-right: 15px; object-fit: cover; border-radius: 4px;">
      <\/a>
      <div>
        <a href="${item.link}" target="_blank" style="font-weight: bold; font-size: 18px; color: #5ea3c1; text-decoration: none;">
          ${item.title}
        <\/a><br>
        <span>${item.author}<\/span>
      <\/div>
    <\/div>
  `).join('');
}

ergebnisse.innerHTML = "";

eingabe.addEventListener("input", function () {
  const suchbegriff = this.value.toLowerCase().trim();
  if (suchbegriff === "") {
    ergebnisse.innerHTML = "";
    return;
  }

  const gefiltert = daten.filter(item =>
    item.title.toLowerCase().includes(suchbegriff) ||
    item.author.toLowerCase().includes(suchbegriff)
  );
  zeigeTreffer(gefiltert);
});
/*]]>*/
</script>
