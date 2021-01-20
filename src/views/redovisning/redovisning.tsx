import React, { useState } from 'react'
import Text from '../../components/text/text'
import Layout from '../../components/layout/layout'
import Button from '../../components/text-button/text-button'
import './redovisning.scss'
// import { Helmet } from 'react-helmet'

const Redovisning = () => {
    const [kmom, setKmom] = useState('10')

    console.log(window.location)

    return (
        <Layout>
            {/* <Helmet>
                <title>Ida Lam</title>
            </Helmet> */}
            <div className="buttons">
                <Button setKmom={setKmom} kmom="01" />
                <Button setKmom={setKmom} kmom="02" />
                <Button setKmom={setKmom} kmom="03" />
                <Button setKmom={setKmom} kmom="04" />
                <Button setKmom={setKmom} kmom="05" />
                <Button setKmom={setKmom} kmom="06" />
                <Button setKmom={setKmom} kmom="10" />
            </div>
            <div className="rd">
                <Text kmom="01" className={kmom === '01' ? kmom : 'none'}>
                    <h2>
                        Är du sedan tidigare bekant med Unix, Linux, Debian och/eller terminalen?
                    </h2>
                    <p>
                        Sedan 1:an så har jag val att dualboota både min desktop och laptop med
                        ubuntu desktop och under sommaren även testade på Linux mint. Jag har från
                        början valt att inte jobba med windows då jag upplevde många problem och
                        rekommenderades att utveckla på ubuntu. Vilken jag nu fortsätter att göra.
                        Jag känner mig även relativt bekvämt med dess terminal.
                    </p>
                    <h2>
                        Hur känns det med Unix-kommandon på terminalen, är det udda eller bekvämt?
                    </h2>
                    <p>
                        Jag skulle nog säga att jag är ganska säker på tex cd och de “grundliga”
                        kommandon. Jag har annars inte riktigt använt av de mer komplicerade. Annars
                        utöver det så är jag ganska bekväm med att använda terminalen.
                    </p>
                    <h2>
                        Valde du att köra standard med VirtualBox och Debian eller hur gjorde du?
                    </h2>
                    <p>
                        Jag har valt att inte använda mig av VirtualBox och debian. Jag har istället
                        valt att jobba från en Intel nuc som jag har hemma. På den nucen så körs
                        ubuntu server.
                    </p>
                    <h2>
                        Hur kändes det att jobba med VirtualBox och ser du fördelar med det
                        arbetssättet?
                    </h2>
                    <p>
                        Jag har sett andra använda VirtualBox och kan se att det är användbart då
                        man kan köra en egen isolerad “box” och göra något annat på. Men att
                        dessutom att man köra flera boxar samtidigt.
                    </p>
                    <h2>Hur gick det att installera Guest Additions?</h2>
                    <p>
                        Jag har valt att inte jobba med VirtualBox och har därmed inte strulat med
                        det.
                    </p>
                    <h2>Var det något som krånglade eller tog extra mycket tid?</h2>
                    <p>
                        Eftersom jag redan hade allt från början så har jag inte hakat på något
                        strul. Annars skulle jag bara säga att det var struligt att få upp me sidan
                        med react, så att man skulle slippa klicka på foldrar för att hitta
                        me-sidan. Det löstes genom att ha en index.html som skickar dig vidare till
                        där “sidan” faktisk sitter.
                    </p>
                    <p>
                        Det som strulade med att använda sig av react är att när man laddar om sidan
                        på studentservern medan man är i om eller redovisning så blir det 404.
                    </p>
                </Text>
                <Text kmom="02" className={kmom === '02' ? kmom : 'none'}>
                    <h2>
                        Hur känns konceptet med Apache name-based Virtual Hosts? Känner du igen det
                        sedan tidigare?
                    </h2>
                    <p>
                        Jag har inte jobbat på detta viset innan, och inte alls med Apache
                        name-based Virtual Hosts. Jag känner smått igen att jobba med DNS. Det som
                        bekantar mig är att jag har jobbat lite med ett eget domännamn på loopia som
                        är kopplad till hemmaservern. Trots det så är jag inte super bekant med det.
                    </p>
                    <h2>
                        Det blir allt fler kommandon i terminalen, hur känns det med terminalen och
                        dess kommandon?
                    </h2>
                    <p>
                        Jag känner mig bekant med grunderna men när det kom till alla flaggor så
                        började allt att bli ganska komplicerat. Dessutom så har vissa kommandon en
                        längre manual än andra så det tog tid att hitta rätt. Annars tycker jag att
                        det känns relativt bra med att sitta i terminalen, vilket inte känns
                        främmande.
                    </p>
                    <h2>Gick det bra med ssh-nycklar och rsync över ssh?</h2>
                    <p>
                        Jag har sedan innan konfigurerat och kopplat upp med ssh nycklar till
                        servern så jag slapp göra den delen. Medan rsync delen strulade först men
                        som löste sig sen.
                    </p>
                    <p>
                        När jag flyttade över allt och körde lynx kommandot så får jag “you need to
                        enable javascript to run this app” för att jag har byggt min
                        redovisningssida i react vilket i sin tur bygger upp sidan i javascript. Jag
                        antar att jag får upp det meddelandet för att lynx inte kan köra javascript.
                    </p>
                    <h2>Hur kändes det att jobba med tmux?</h2>
                    <p>
                        Det har gått bra med att jobba med tmux, lite förvirrande i början med ctr+b
                        d och sånt men det löste sig till slut. Dock saknar jag färgerna som finns i
                        den vanliga terminalen, men jag anar att man kan göra några speciella
                        configs.
                    </p>
                    <h2>
                        Reflektera över hur du känner inför Unix som operativsystem så här långt?
                    </h2>
                    <p>
                        Eftersom jag är bekant med det operativsystemet jag använder, ubuntu
                        desktop, så känns det fortfarande bra. Dock så kör servern på ubuntu server,
                        som är lite mer ovant där man endast kör från terminalen. Men vilket
                        förmodligen är något positivt då man lär sig att använda terminalen med
                        kommandon med alla dess flaggor.
                    </p>
                </Text>
                <Text kmom="03" className={kmom === '03' ? kmom : 'none'}>
                    <h2>Är detta din första bekantskap med skriptprogrammering i Bash?</h2>
                    <p>
                        Jag skulle nog säga att det är den första gången jag har skrivit något
                        “avancerat” i Bash. Men jag har innan gjort något enkelt script som kör
                        några commands. Jag är bekant med Bash innan men har inte direkt jobbat med
                        det.
                    </p>
                    <h2>
                        Berätta om din uppfattning om Bash som programmeringsmiljö, relatera till
                        andra programspråk du kan.
                    </h2>
                    <p>
                        Grunderna kan jag känna igen men hur man skriver allt ser annorlunda ut än
                        de språken jag har skrivit i. Det känns som någon kombination mellan PHP och
                        JS, eller något sådant. Dock har jag aldrig tänkt mig att skriva ett
                        “program” i Bash utan bara trodde att man endast kör kommandon i Bash
                        istället för att skriva ut flera kommandon själv.{' '}
                    </p>
                    <p>
                        Jag hade även problem med att skriva i ett icke arithmetic expansion sätt
                        för mina ifs och for loops. Förstod inte riktigt varför.
                    </p>
                    <h2>
                        Vilka möjligheter/utmaningar ser du med denna typen av skriptprogrammering?
                    </h2>
                    <p>
                        Jag ser att det är bättre att skriva ett script på alla kommandon man ska
                        köra, i sekvens, istället för att skriva alla kommandon i en terminal. Som
                        blir speciellt jobbigt om man ska köra många. Det som jag skulel tänka är
                        utmanande är att skriva ett avancerat skript likt “nya språk” som man ska
                        lära sig i början är det alltid svårt att komma in i.
                    </p>
                    <h2>Var det något som var extra svårt eller utmanande i uppgifterna?</h2>
                    <p>
                        Jag tyckte labben var extra svår, jag visste inte riktigt hur man skulle gå
                        tillväga utan att använda sig av grep och regex. jag kom inte på ett bra
                        sätt att lösa uppgifterna med de kommandon vi fick lära oss. Så jag tyckte
                        att det var mer enkelt att lösa dem med grep och regex som jag sedan
                        pipe:ande till ett annat kommando.
                    </p>
                    <h2>Har du arbetat med Docker innan?</h2>
                    <p>
                        Jag har under sommaren jobbat med docker men mycket mer med docker-compose
                        än bara docker. Jag känner igen mig i Dockerfilen och förstår grunderna i
                        run, copy, entrypoint mm. Men jag har inte sedan innan jobbat eller bekantat
                        mig med docker innan.
                    </p>
                    <h2>
                        Anser du att det är någon fördel/nackdel med Docker om du jämför med
                        VirtualBox?
                    </h2>
                    <p>
                        Det som är bra med docker, i alla fall med den kunskapen jag har, så är det
                        ganska snabbt att skapa flera containrar medan i VirtualBox så är det endast
                        en container. Dessutom så är det snabbare att starta en container i Docker
                        men att det även finns färdigkonfigurerade docker containers som man kan
                        hämta hem. Istället för att starta en VB som tar mer minne osv så skulle jag
                        nog föredra att jobba med docker.
                    </p>
                </Text>
                <Text kmom="04" className={kmom === '04' ? kmom : 'none'}>
                    <h2>Vilken väg valde du för servern?</h2>
                    <p>
                        Eftersom jag har en lite större vana för JavaScript så valde jag att använda
                        mig av express. Jag tycker att det är mer naturligt att köra något med
                        JavaScript då det är ett språk jag har använt mig mest av.
                    </p>
                    <p>
                        Det gick ganska bra att sätta upp allt för servern. Stötte inte på några
                        större problem eller snarare några problem som inte gick att söka upp.
                    </p>
                    <h2>Hur kommer det sig att du valde det?</h2>
                    <p>
                        Jag har innan använt mig av express för server delen när har jobbat med
                        hobbyprojekt. Trots att man har glömt bort lite så var det inte riktigt
                        svårt att sätta sig tillbaka i det. Men som jag nämnde innan så tycker jag
                        om JavaScript mycket bättre än vad jag gör PHP eller andra språk.
                    </p>
                    <h2>Gick det bra med Docker?</h2>
                    <p>
                        Det gick relativt bra med docker. Eftersom jag har jobbat lite grann med det
                        innan så känner jag igen vad som ska skrivas och vad jag behöver skapa och
                        kopiera men även hur entrypointen ser ut. Det enda som strulade var nog när
                        jag skulle köra volymen till servern där pathen inte stämde och jag inte
                        fick ett bra felmeddelande att gå på.
                    </p>
                    <h2>Hänger du med på koncepten kring klient och server?</h2>
                    <p>
                        Eftersom jag har jobbat lite med klient/server innan så känner jag igen mig.
                        Så det känns ganska naturligt att man kan fetcha osv från en server del. Jag
                        tycker att konceptet funkar och jag fattar vad som sker.
                    </p>
                    <h2>
                        Strukturerade du Bash-scriptet annorlunda jämfört med förra kursmomentet?
                    </h2>
                    <p>
                        Det var till den största delen likadant, dock använde jag mig av kommandot
                        curl som jag inte har använt i förra kursmomentet. Denna gången kändes det
                        bättre och jag förstod hur man skulle skriva i bash för att få allt att
                        funka.
                    </p>
                </Text>
                <Text kmom="05" className={kmom === '05' ? kmom : 'none'}>
                    <h2>
                        Hur kändes det att skriva ett litet större bash-skript? Var det något som
                        var mer eller mindre utmanande och tidskrävande?
                    </h2>
                    <p>
                        Jag upplevde att det var straightforward i början tills jag insåg att jag
                        inte hade något sätt att spara datan på. Efter lite omskrivning så löste
                        allt sig. Till en början valde jag att använda mig av en check om ordet
                        finns i en array, men jag lyckades inte att få det att funka. Jag valde
                        tillslut att skriva en ful case istället, vilket jag är mer eller mindre
                        nöjd med.
                    </p>
                    <p>
                        Det tog även en lång stund för att förstå docker med alla dess images och
                        containrar för att förstå vad jag behövde göra i kmom05.bash. Jag insåg även
                        att jag hade gjort en fel entrypoint till kmom03 där jag inte hade gjort så
                        att man kunde skicka med parametrar. Vilket var något jag fick lära mig
                        under detta kursmomentet.
                    </p>
                    <h2>
                        Kikade du på källkoden till maze-servern? Har du några reflektioner kring
                        den?
                    </h2>
                    <p>
                        Jag har kikat lite granna på källkoden inte så mycket. Det ser ut som att
                        använda sig av JavaScript i express. Där datan är i json format.{' '}
                    </p>
                    <h2>Gjorde du nåt speciellt i din mazerunner som du vill lyfta fram?</h2>
                    <p>
                        Jag tycker att det har varit relativt “svårt”, vet inte om jag har gjort de
                        på fel sätt men jag var tvungen att parsa ut all data och spara dem separat.
                        Jag valde att göra på det viset för att jag var lite lat för att skriva en
                        funktion som parsar allt åt mig. Men i slutändan så skulle det nog varit
                        bättre att skriva en sådan funktion. Annars tycker jag att det har varit
                        relativt lärorikt kmom med både bash skrift och regex.
                    </p>
                </Text>
                <Text kmom="06" className={kmom === '06' ? kmom : 'none'}>
                    <h2>Kan du se fördelar/nackdelar med Compose?</h2>
                    <p>
                        Jag har innan jobbat lite grann med docker compose och skulle nog säga att
                        jag inte har jättemycket kunskap inom det. Men än så länge så tycker jag att
                        det endast har varit smidigt med docker compose. Jag tycker att det har
                        varit smidigt att “få ihop” det jämfört med att man själv kör kommandon med
                        massa taggar för att koppla samman allt. Den enda nackdelen i detta fall är
                        bara att man måste bygga om sin container om och om igen när man ändrar
                        något. Dock så finns det ju volymer som kan “motverka” det, så man slipper
                        builda varje gång.
                    </p>
                    <h2>Hur väl har du fått ordning på begreppen kring klient och server?</h2>
                    <p>
                        Jag har sedan innan arbetat me klient och server och tycker att det är
                        mycket smidigt. Dessutom så tycker jag även att det är ett bra sätt att
                        separera allt. Så jag tycker att det är ett bra sätt att jobba på, då man
                        inte vill att tex klienten ska göra allt. Alltså fylla funktionen som server
                        och klient. Dessvärre om man har känslig data på sin server så vill man ju
                        inte att alla ska kunna ha tillgång till det.
                    </p>
                    <h2>Känner du dig bekväm med Docker överlag?</h2>
                    <p>
                        Nu när vi har jobbat med det i kursen så känner jag mig ganska bekväm. Som
                        sagt så har jag snuddat med det innan så jag är van med hur det ser ut. Dock
                        är jag ju mer ovan med att bara köra “ren” docker utan docker compose.
                        Annars tycker jag att det har gått smidigt och guiderna på dbwebb funkar
                        bra.
                    </p>
                    <h2>Kommer du använda Docker utanför kursens ramar?</h2>
                    <p>
                        Jag ser ingen anledning till varför man inte ska använda docker, smidigt
                        snabbt och lätt att ta bort jämfört om man ska installera allt på sin egen
                        dator. Så jag kommer definitivt använda docker där jag ser en nytta att
                        använda det.
                    </p>
                    <h2>Gjorde du någon uppdatering av Mazerunnerns struktur?</h2>
                    <p>
                        Jag har till den största delen återanvänt all kod som var där sedan innan
                        funktioner mm. Det enda jag var tvungen att lägga in var loopen och if
                        satser för att se vad användaren skriver in, och med den informationen så
                        kallar jag de funktionerna som fanns innan.
                    </p>
                    <h2>Vad tycker du om regex så här långt?</h2>
                    <p>
                        Till en början så var det en wtf, men nu när man har jobbat lite med det så
                        blir det klarare. Jag fattar det grundliga till en utsträckning men om man
                        skulle skriva något avancerat så tror jag att man får öva lite till. Annars
                        har det varit helt okej med regex i denna uppgiften.
                    </p>
                </Text>
                <Text kmom="10" className={kmom === '10' ? kmom : 'none'}>
                    <h1>Krav 1:</h1>
                    <p>
                        När jag tittade på kravet så lät det inte supersvår att lösa men jag kom
                        även på att vi hade gjort vissa delar i labbarna. Så jag kikade igenom dem
                        och pysslade ihop en fungerande regex utav det. Dock så funkade det delvist,
                        den delen som mappade ip:t funkade inte alls så jag fick lösa det på ett
                        annat sätt.
                    </p>
                    <p>
                        Det visade sig att detta kravet var inte så svår att lösa eftersom vi hade
                        jobbat med bash, grupperingar, sed och regex innan i kursen, vilket var
                        mycket smidigt.
                    </p>
                    <p>
                        Jag lade ner lite extra tid på att formatera det snyggt med tabbar och nya
                        rader, om man nu skulle öppna JSON filen. Detta underlättade att läsa av
                        rader medan man felsökte, jämfört med att titta på en “ihoptryckt” JSON fil.
                    </p>
                    <h1>Krav 2:</h1>
                    <p>
                        Eftersom språk var valfritt i kravet så valde jag att använda mig av
                        TypeScript och mer specifikt Express.js. Jag valde TypeScript eftersom det
                        är ett språk jag tycker om att använda mig av och tycker att det är enklast.
                    </p>
                    <p>
                        Det tog en liten stund att komma igång eftersom jag kände mig lite rostig
                        med routes men jag lyckades lösa det.
                    </p>
                    <p>
                        Jag hade lite problem med att tänka ut hur man skulle bygga upp
                        filtreringen. Men jag lyckades lösa det med att filtrera queryn och utifrån
                        det se vad som matchade i datan och sortera ut de som inte var relevant.
                        Till en början så jämförde jag bara queryn och värdet på datan, men då kunde
                        jag inte söka delar av tex queryn, så jag valde istället att “jämföra” med
                        includes istället. Jag byggde upp ett “system” som funkade bra och var
                        dynamisk på det sättet att man lätt kunde implementera krav 5.
                    </p>
                    <p>
                        Annars så tyckte jag att det var en av de största utmaningarna i detta
                        projektet, att man skulle få allt att fungera med filtreringen.
                    </p>
                    <h1>Krav 3:</h1>
                    <p>
                        Lik krav 1 så hade vi jobbat med en sådan bash script innan, så jag valde
                        att titta igenom det. Den klurigaste delen av detta var att få kommandot
                        view att funka. Jag hade problem med att få endast kommandot view att funka
                        om man inte hade skickat något annat. Tillslut så löste jag det med att köra
                        en “om input antalet av parametrarna är 0” eftersom det jag skrev innan inte
                        funkade.
                    </p>
                    <p>
                        Annars träffade jag inte på några större svårigheter med att implementera
                        detta kravet. Jag upplevde att det var ganska straightforward om vad som
                        behövdes göra. Annars var det lite komplicerat att få allt att funka med
                        krav 5.
                    </p>
                    <p>
                        Jag skulle också vilja påpeka att min server namn fil heter server.log
                        istället för server.txt som visas i videon.
                    </p>
                    <h1>Krav 4:</h1>
                    <p>
                        Eftersom valet var öppet så valde jag att skriva det i React med TypeScript,
                        vilket var ett naturligt val då det var något jag höll på i parallell
                        kursen.
                    </p>
                    <p>
                        Här valde jag att lägga till checkboxes för vad man ville söka och en
                        searchbar. Tanken är att man kryssar i text månad och skriver in tex aug, så
                        kan man bygga upp sin query som skrivs ut ovan. Så man kan alltså klicka in
                        och skriva in på alla boxes så söker det efter matchningar. Efter den queryn
                        så hämtas matchande data.
                    </p>
                    <p>
                        Undertill så har jag valt att skriva ut hur många matchningar som finns men
                        även paginerat dem. Varje sida visar 50 matchningar.
                    </p>
                    <p>
                        Det som var ganska klurigt att fixa, något jag inte tänkte på efter jag hade
                        spelat in redovisnings videon, var att när man gör en ny sökning så ska det
                        ta dig tillbaka till page 0. Jag var tvungen att bygga om lite och det
                        funkar som det ska nu.
                    </p>
                    <p>
                        Varje “log” del får sitt eget kort, ett index och all data som togs med i
                        krav 1.
                    </p>
                    <h1>Krav 5:</h1>
                    <p>
                        Att implementera denna delen var ganska lätt att göra speciellt i
                        log2json.bash filen. Jag var bara tvungen att lägga till lite mappning mot
                        datum och tid. Det var relativt smidigt och smärtfritt.
                    </p>
                    <p>
                        Dock när det var dags att implementera sökningen via servern så var det
                        struligt. Till en början lyckades jag inte lösa det med tiden, hur man
                        skulle kunna söka tex 14 och få ut all för tiden 14 - 14:59, jag lyckades
                        tillslut lösa det med en enkel “startsWith”. Jag fick även lära mig .every()
                        som jag inte har använt innan, i mitt fall så var det att om den inte
                        hittade något resultat alls så returnerar den allt.
                    </p>
                    <p>
                        Implementationen till client delen var lite mekig, jag var tvungen att klura
                        ut hur man skulle kolla när man skulle köra vad. Den lösningen jag kom till
                        var att kolla på antalet input. Kanske inte det bästa sättet, då flertal
                        buggar kan uppstå.
                    </p>
                    <h1>Allmänt:</h1>
                    <p>
                        Den enkla delen av docker var nog att skriva Dockerfile för klient, server,
                        webbclient och webbservern. Till skillnad från de andra docker filerna så
                        har jag för webbklienten valt att göra det i en 2 step build. Att få ihop
                        det i docker-compose var inte heller så jätte svårt.
                    </p>
                    <p>
                        Annars så tycker jag att projektet har gått bra att utföra, jag har inte
                        riktigt träffat på större problem. Grundkraven tycker jag ha varit relativt
                        enkla att utföra då vi har gjort mycket innan. Det var mycket man kunde
                        återanvända tex med regex, bash script. Vilket jag tycker är en bra sak. Det
                        tog inte heller för lång tid att göra alla krav på projektet, och jag tror
                        om jag hade jobbat mer effektivt så skulle det ha gått 40% snabbare.
                    </p>
                    <p>
                        Jag tycker att detta projektet har varit jätte rimlig. Eftersom vi har gått
                        igenom allt innan så tycker jag att denna examination momentet har passat
                        bra.{' '}
                    </p>
                    <h1>Avslutning:</h1>
                    <p>
                        Jag tycker att materialet för kursen har varit bra och mycket hjälpsam,
                        speciellt för regex, något som jag tyckte var svårt att fatta i början. Jag
                        tycker att det har varit jätteroligt att jobba med docker. Något som jag
                        tycker är intressant att jobba med. Dock den enda delen jag inte har använt
                        mig av är VM, speciellt då jag sitter på linux, så har jag inga direkta
                        åsikter om det.
                    </p>
                    <p>
                        Annars tycker jag att kursmomenten har varit rimliga och ligger rätt bra i
                        svårighetsnivån medan arbetsbördan har inte varit skyhög. Jag är annars nöjd
                        med kursen och dess examinationsmoment. Om jag skulle rekommendera andra
                        denna kursen så skulle jag nog sagt att det är inte en av de tunga kurserna,
                        men ändå en av de kurserna som är mest lärorika.
                    </p>
                    <p>
                        Jag skulle ge kursen en 9/10. Kanske för att jag inte har strulat med docker
                        osv då jag sitter på en linux miljö.
                    </p>
                </Text>
            </div>
        </Layout>
    )
}

export default Redovisning
