// ─── DATA ───────────────────────────────────────────

const activities = [
  ['wake up','արթնանալ','I wake up at 7 every morning.'],
  ['get up','վեր կենալ','She gets up early on weekdays.'],
  ['take a shower','լոգանք ընդունել','He takes a shower before work.'],
  ['brush teeth','ատամները լվանալ','I brush my teeth twice a day.'],
  ['get dressed','հագնվել','She gets dressed quickly in the morning.'],
  ['make breakfast','նախաճաշ պատրաստել','I make breakfast every day.'],
  ['eat breakfast','նախաճաշել','We eat breakfast at 8 o\'clock.'],
  ['go to work','գնալ աշխատանքի','He goes to work by bus.'],
  ['drive to work','մեքենայով գնալ','She drives to work every day.'],
  ['come home','գալ տուն','I come home at 6 in the evening.'],
  ['cook dinner','ընթրիք պատրաստել','My mother cooks dinner at 7.'],
  ['eat dinner','ընթրել','We eat dinner together.'],
  ['wash the dishes','ափսեները լվանալ','He washes the dishes after dinner.'],
  ['do the laundry','լվացք անել','I do the laundry on Saturdays.'],
  ['iron','արդուկել','She irons her clothes every week.'],
  ['walk the dog','շան հետ զբոսնել','He walks the dog every morning.'],
  ['go to bed','գնալ քնելու','I go to bed at 11 pm.'],
  ['sleep','քնել','The baby sleeps for 10 hours.'],
  ['make the bed','կահույք հավաքել','I make the bed every morning.'],
  ['clean the house','տունը մաքրել','She cleans the house on Sundays.'],
];
const family = [
  ['husband','ամուսին','Her husband is a doctor.'],
  ['wife','կին','His wife speaks three languages.'],
  ['father','հայր','My father works in a bank.'],
  ['mother','մայր','Her mother is very kind.'],
  ['son','որդի','They have one son and two daughters.'],
  ['daughter','դուստր','Their daughter is very talented.'],
  ['children','երեխաներ','They have two children.'],
  ['parents','ծնողներ','My parents live in Yerevan.'],
  ['brother','եղբայր','My brother is tall and strong.'],
  ['sister','քույր','Her sister plays the piano.'],
  ['grandfather','պապիկ','My grandfather is 75 years old.'],
  ['grandmother','տատիկ','My grandmother cooks delicious food.'],
  ['grandparents','տատիկ-պապիկ','My grandparents live in a village.'],
  ['uncle','քեռի / հորեղբայր','My uncle is a clever architect.'],
  ['aunt','հորաքույր / մորաքույր','Her aunt lives in France.'],
  ['cousin','զարմիկ','I get along well with my cousin.'],
  ['nephew','եղբորորդի','His nephew is 10 years old.'],
  ['niece','եղբոր դուստր','Her niece is a shy girl.'],
  ['siblings','քույր-եղբայր','I have two siblings — a brother and a sister.'],
  ['grandchildren','թոռներ','They have four grandchildren.'],
  ['baby','երեխա (փոքրիկ)','The baby is sleeping quietly.'],
  ['granddaughter','թոռնուհի','She is their eldest granddaughter.'],
  ['grandson','թոռնիկ (տղա)','Their grandson is very smart.'],
  ['mother-in-law','սկեսուր / զոքանչ','His mother-in-law is very helpful.'],
  ['father-in-law','սկեսրայր / աներ','My father-in-law likes cars.'],
  ['son-in-law','փեսա','They treat him like their own son-in-law.'],
  ['daughter-in-law','հարս','Their daughter-in-law is a great cook.'],
  ['brother-in-law','աներորդի / տեգր','My brother-in-law lives abroad.'],
  ['sister-in-law','տալ / քենի','I get along well with my sister-in-law.'],
];
const opposites = [
  ['tall','short'],['young','old'],['big','small'],['fast','slow'],
  ['hot','cold'],['clean','dirty'],['easy','difficult'],['cheap','expensive'],
  ['kind','rude'],['brave','shy'],['rich','poor'],['open','closed'],
  ['full','empty'],['soft','hard'],['loud','quiet'],['wet','dry'],
  ['fresh','stale'],['light','heavy'],['smooth','rough'],['straight','curly'],
  ['new','old'],['long','short'],['large','small'],['wide','narrow'],
  ['thick','thin'],['dark','light'],['high','low'],['loose','tight'],
  ['good','bad'],['neat','messy'],['married','single'],['heavy','thin'],
  ['beautiful','ugly'],['handsome','ugly'],['fancy','plain'],
  ['shiny','dull'],['sharp','dull'],['honest','dishonest'],
  ['straight','crooked'],['comfortable','uncomfortable'],
];
const clothing = [
  ['shirt','վերնաշապիկ','He is wearing a white shirt.'],
  ['blouse','բլուզ','She wears a blue blouse to work.'],
  ['dress','զգեստ','She wore a beautiful red dress.'],
  ['skirt','կիսաշրջազգեստ','She always wears long skirts.'],
  ['pants / trousers','տաբատ','He is wearing black trousers today.'],
  ['jeans','ջինս','I usually wear jeans on weekends.'],
  ['jacket','բաճկոն','It is cold — put on your jacket.'],
  ['sweater','սվիտեր','She wore a warm sweater.'],
  ['suit','կոստյում','He wears a suit to the office.'],
  ['T-shirt','շապիկ','I like wearing comfortable T-shirts.'],
  ['shorts','շորտ','In summer he wears shorts.'],
  ['tie','փողկապ','He always wears a tie at work.'],
  ['scarf','շարֆ','She put on a warm scarf.'],
  ['gloves','ձեռնոց','Don\'t forget your gloves — it\'s cold!'],
  ['belt','գոտի','He bought a new leather belt.'],
  ['socks','գուլպա','I have colourful socks.'],
  ['hat','գլխարկ','She is wearing a funny hat.'],
  ['uniform','համազգեստ','Students wear a uniform at school.'],
  ['vest / waistcoat','ժilет / անթև բաճկոն','He wore a vest over his shirt.'],
  ['coat','վերարկու','She put on her coat and left.'],
  ['three-piece suit','երեք կտորից կոստյում','He wore a three-piece suit to the wedding.'],
  ['bow tie','թիթեռնիկ փողկապ','He is wearing a red bow tie.'],
  ['tuxedo','տաքսիդո (երեկոյան պիջակ)','He looks great in his tuxedo.'],
  ['evening gown','երեկոյան զգեստ','She wore a beautiful evening gown.'],
  ['maternity dress','հղիների զգեստ','She is looking for a maternity dress.'],
  ['jumpsuit','կոմբինեզոն','This denim jumpsuit is very stylish.'],
  ['overalls','լայն տաբատ / կոմբինեզոն','The worker is wearing blue overalls.'],
  ['blazer','սպորտային պիջակ','He looks smart in that blue blazer.'],
  ['sport coat','սպորտային վերարկու','He wore a sport coat to the dinner.'],
  ['tunic','տունիկա','She wears a long tunic with leggings.'],
  ['leggings','լեգինս','Black leggings are very comfortable.'],
  ['turtleneck','բարձր օձիքով շապիկ','I like wearing a turtleneck in winter.'],
  ['jumper','բրդյա ջամփեր','She bought a new wool jumper.'],
  ['knit shirt / jersey','մարզաշապիկ','The football player has a new jersey.'],
  ['sport shirt','սպորտային վերնաշապիկ','I wear a sport shirt for golf.'],
];
const personality = [
  ['kind','բարի','She is always kind to everyone.'],
  ['friendly','ընկերական','He is very friendly and easy to talk to.'],
  ['polite','քաղաքավարի','Always be polite to your teachers.'],
  ['honest','ազնիվ','An honest person tells the truth.'],
  ['clever','խելացի','She is a very clever student.'],
  ['smart','խելոք','He gives smart answers in class.'],
  ['funny','զվարճալի','My brother is so funny — he makes everyone laugh.'],
  ['patient','համբերատար','A good teacher is always patient.'],
  ['helpful','օգտակար / օժանդակ','She is very helpful when I have problems.'],
  ['generous','առատաձեռն','He is generous — he always shares his food.'],
  ['shy','ամաչկոտ','Tom is brave but sometimes shy.'],
  ['quiet','հանգիստ / լուռ','She is a quiet person — she never shouts.'],
  ['lazy','ծույլ','He is lazy — he never does his homework.'],
  ['rude','կոպիտ','It is rude to interrupt people.'],
  ['selfish','եսասեր','Don\'t be selfish — share with others.'],
  ['talkative','շատախոս','My cousin is very talkative.'],
  ['serious','լուրջ','He is always serious at work.'],
  ['brave','համարձակ','She was brave enough to speak in public.'],
  ['calm','հանգիստ','Stay calm — everything is okay.'],
  ['nervous','նյարդային','I feel nervous before exams.'],
];
// [base, past simple, past participle, armenian, example, common?]
const irregularVerbs = [
  ['be','was / were','been','լինել','She was tired yesterday.',true],
  ['become','became','become','դառնալ','He became a doctor.',true],
  ['begin','began','begun','սկսել','They began the lesson.',true],
  ['bite','bit','bitten','կծել','The dog bit my hand.',false],
  ['blow','blew','blown','փչել','The wind blew strongly.',false],
  ['break','broke','broken','կոտրել','I broke my phone.',true],
  ['bring','brought','brought','բերել','She brought flowers.',true],
  ['build','built','built','կառուցել','They built a house.',true],
  ['buy','bought','bought','գնել','I bought a new bag.',true],
  ['catch','caught','caught','բռնել','He caught the ball.',true],
  ['choose','chose','chosen','ընտրել','She chose a red dress.',true],
  ['come','came','come','գալ','They came home late.',true],
  ['cost','cost','cost','արժել','The book cost 5 dollars.',true],
  ['cut','cut','cut','կտրել','He cut the bread.',true],
  ['do','did','done','անել','I did my homework.',true],
  ['draw','drew','drawn','նկարել','She drew a picture.',false],
  ['drink','drank','drunk','խմել','We drank tea.',true],
  ['drive','drove','driven','վարել','He drove to work.',true],
  ['eat','ate','eaten','ուտել','I ate breakfast.',true],
  ['fall','fell','fallen','ընկնել','She fell on the ice.',true],
  ['feel','felt','felt','զգալ','I felt tired.',true],
  ['fight','fought','fought','կռվել','They fought over it.',false],
  ['find','found','found','գտնել','She found her keys.',true],
  ['fly','flew','flown','թռչել','The bird flew away.',false],
  ['forget','forgot','forgotten','մոռանալ','I forgot his name.',true],
  ['get','got','got','ստանալ','He got a new job.',true],
  ['give','gave','given','տալ','She gave me a gift.',true],
  ['go','went','gone','գնալ','We went to school.',true],
  ['grow','grew','grown','աճել','The plant grew fast.',false],
  ['have','had','had','ունենալ','I had a dog.',true],
  ['hear','heard','heard','լսել','Did you hear that?',true],
  ['hold','held','held','բռնել','She held the baby.',false],
  ['hurt','hurt','hurt','ցավ տալ','I hurt my knee.',true],
  ['keep','kept','kept','պահել','She kept the letter.',false],
  ['know','knew','known','իմանալ','He knew the answer.',true],
  ['learn','learnt','learnt','սովորել','We learnt new words.',true],
  ['leave','left','left','հեռանալ / թողնել','He left early.',true],
  ['lend','lent','lent','փոխ տալ','I lent him my pen.',false],
  ['lose','lost','lost','կորցնել','She lost her bag.',true],
  ['make','made','made','պատրաստել','I made breakfast.',true],
  ['mean','meant','meant','նշանակել','What did it mean?',false],
  ['meet','met','met','հանդիպել','We met at school.',true],
  ['pay','paid','paid','վճարել','He paid the bill.',true],
  ['put','put','put','դնել','Put your bag here.',true],
  ['read','read','read','կարդալ','I read a book.',true],
  ['ride','rode','ridden','հեծնել','She rode her bike.',false],
  ['ring','rang','rung','զանգել','He rang the bell.',false],
  ['run','ran','run','վազել','They ran fast.',true],
  ['say','said','said','ասել','She said goodbye.',true],
  ['see','saw','seen','տեսնել','I saw him yesterday.',true],
  ['sell','sold','sold','վաճառել','He sold his car.',true],
  ['send','sent','sent','ուղարկել','She sent a letter.',true],
  ['shoot','shot','shot','կրակել','He shot the goal.',false],
  ['show','showed','shown','ցույց տալ','She showed me.',false],
  ['sing','sang','sung','երգել','They sang a song.',false],
  ['sit','sat','sat','նստել','She sat near me.',true],
  ['sleep','slept','slept','քնել','I slept at 10.',true],
  ['speak','spoke','spoken','խոսել','He spoke English.',true],
  ['spend','spent','spent','ծախսել / անցկացնել','We spent the day.',true],
  ['stand','stood','stood','կանգնել','She stood up.',true],
  ['steal','stole','stolen','գողանալ','He stole the bag.',false],
  ['swim','swam','swum','լողալ','I swam in the sea.',false],
  ['take','took','taken','վերցնել','She took a photo.',true],
  ['teach','taught','taught','դասավանդել','He taught English.',true],
  ['tell','told','told','ասել','She told a story.',true],
  ['think','thought','thought','մտածել','I thought about it.',true],
  ['throw','threw','thrown','նետել','He threw the ball.',false],
  ['understand','understood','understood','հասկանալ','I understood.',true],
  ['wake','woke','woken','արթնանալ','I woke up early.',true],
  ['wear','wore','worn','հագնել','She wore a dress.',true],
  ['win','won','won','հաղթել','Our team won.',false],
  ['write','wrote','written','գրել','I wrote a letter.',true],
  ['arise','arose','arisen','ծագել','A problem arose.',false],
  ['awake','awoke','awoken','արթնանալ','She awoke at dawn.',false],
  ['bear','bore','borne','կրել / հանդուրժել','She bore the pain.',false],
  ['beat','beat','beaten','հաղթել / տրել','He beat the record.',false],
  ['bend','bent','bent','ծրել','She bent the wire.',false],
  ['bind','bound','bound','կապել','He bound the papers.',false],
  ['bleed','bled','bled','արյունահոսել','He bled a lot.',false],
  ['burn','burnt','burnt','այրել / վարվել','The house burnt down.',true],
  ['burst','burst','burst','պայթել','The pipe burst.',false],
  ['cast','cast','cast','նետել / դզուլել','He cast the fishing net.',false],
  ['creep','crept','crept','սողալ','The cat crept slowly.',false],
  ['deal','dealt','dealt','զբաղվել','He dealt with the problem.',true],
  ['dig','dug','dug','փորել','They dug a deep hole.',false],
  ['dream','dreamt','dreamt','երազնել','I dreamt about you.',true],
  ['feed','fed','fed','կերակրել','She fed the baby.',true],
  ['flee','fled','fled','փախչել','They fled the city.',false],
  ['forbid','forbade','forbidden','արգելել','Smoking is forbidden here.',false],
  ['freeze','froze','frozen','սարել / սարանալ','It froze overnight.',false],
  ['hang','hung','hung','կախել','He hung the picture.',false],
  ['hide','hid','hidden','թախնել / թախնվել','He hid behind the door.',false],
  ['hit','hit','hit','խպել / հարվացել','She hit the ball hard.',true],
  ['kneel','knelt','knelt','ծունկեղել','She knelt to pray.',false],
  ['lay','laid','laid','կախել','He laid the book down.',false],
  ['lead','led','led','ղեկավարել / տանել','She led the team.',true],
  ['leap','leapt','leapt','ցաթխել','The cat leapt onto the table.',false],
  ['let','let','let','թույլատրել / տալ','Let me help you.',true],
  ['light','lit','lit','վարրել / լուսավորել','She lit a candle.',true],
  ['quit','quit','quit','լխել','He quit his job.',true],
  ['set','set','set','դնել / սահմանել','She set the table.',true],
  ['shake','shook','shaken','ցացրել','He shook my hand.',true],
  ['shed','shed','shed','թախատացել','The dog shed fur.',false],
  ['shrink','shrank','shrunk','կնանել','The shirt shrank.',false],
  ['shut','shut','shut','կոգել','Please shut the door.',true],
  ['slide','slid','slid','սահել','He slid on the ice.',false],
  ['smell','smelt','smelt','հոթերել','The food smelt great.',true],
  ['spell','spelt','spelt','տերադրոխոսկալել','How do you spell it?',true],
  ['spill','spilt','spilt','լել','She spilt the coffee.',false],
  ['split','split','split','կտրել','He split the wood.',false],
  ['spread','spread','spread','տարադարել','She spread butter on bread.',true],
  ['stick','stuck','stuck','կպել / մնալ','The stamp stuck.',false],
  ['sting','stung','stung','կցախել','A bee stung me.',false],
  ['strike','struck','struck','խպել / հարվացել','He struck a match.',false],
  ['sweep','swept','swept','մազրել','She swept the floor.',false],
  ['swing','swung','swung','թաթանել','The child swung high.',false],
  ['tear','tore','torn','պատրել','She tore the letter.',false],
  ['weep','wept','wept','լալ','She wept with joy.',false],
  ['wind','wound','wound','խուզարել','He wound the clock.',false],
  ['withdraw','withdrew','withdrawn','դուրսկել / կասխել','She withdrew cash.',true],
  ['wring','wrung','wrung','խորել','She wrung the wet cloth.',false],
  // Additional irregular verbs
  ['abide','abode','abode','մնալ / հանդուրժել','He abode by the rules.',false],
  ['alight','alit','alit','իջնել','She alit from the bus.',false],
  ['bid','bade','bidden','հրամայել / հրավիրել','He bade her farewell.',false],
  ['breed','bred','bred','բուծել','They bred horses.',false],
  ['broadcast','broadcast','broadcast','հեռարձակել','The news was broadcast live.',false],
  ['chide','chid','chidden','հանդիմանել','He chid the child gently.',false],
  ['cleave','clove','cloven','ճեղքել','He cleaved the log in two.',false],
  ['cling','clung','clung','կպչել','She clung to the rope.',false],
  ['clothe','clad','clad','հագնել / հագցնել','She clad herself warmly.',false],
  ['crow','crew','crowed','կանչել (աքաղաղ)','The rooster crew at dawn.',false],
  ['dare','durst','dared','համարձակվել','He durst not speak.',false],
  ['dwell','dwelt','dwelt','բնակվել','They dwelt in the forest.',false],
  ['engrave','engraved','engraven','փորագրել','He engraved his name.',false],
  ['fling','flung','flung','նետել','He flung the stone.',false],
  ['forbear','forbore','forborne','զսպվել','She forbore from complaining.',false],
  ['forecast','forecast','forecast','կանխատեսել','He forecast rain.',false],
  ['forego','forewent','foregone','հրաժարվել','She foregoing the reward.',false],
  ['foresee','foresaw','foreseen','կանխատեսել','He foresaw the problem.',false],
  ['forsake','forsook','forsaken','թողնել / հրաժարվել','He forsook his old habits.',false],
  ['grind','ground','ground','աղալ','He ground the coffee.',false],
  ['hamstring','hamstrung','hamstrung','կաղացնել','The injury hamstrung him.',false],
  ['handwrite','handwrote','handwritten','ձեռագրել','She handwrote the letter.',false],
  ['heave','hove','hoven','վեր քաշել','He hove the anchor.',false],
  ['hew','hewed','hewn','կոտրել / կտրել','He hewed the wood.',false],
  ['inlay','inlaid','inlaid','ներդնել','She inlaid the tiles.',false],
  ['input','input','input','մուտքագրել','He input the data.',false],
  ['interweave','interwove','interwoven','հյուսել','She interwove the threads.',false],
  ['knit','knit','knit','հյուսել','She knit a scarf.',false],
  ['laden','laded','laden','բեռնել','The ship was laden.',false],
  ['lie','lay','lain','պառկել','She lay on the sofa.',false],
  ['mislay','mislaid','mislaid','կորցնել','He mislaid his keys.',false],
  ['mislead','misled','misled','մոլորեցնել','She misled him.',false],
  ['misspell','misspelt','misspelt','սխալ գրել','He misspelt the word.',false],
  ['mistake','mistook','mistaken','սխալվել','She mistook him for his brother.',false],
  ['misunderstand','misunderstood','misunderstood','թյուրիմանալ','He misunderstood the question.',false],
  ['outbid','outbid','outbid','ավել գնով հաղթել','She outbid everyone.',false],
  ['outdo','outdid','outdone','գերազանցել','He outdid himself.',false],
  ['outgrow','outgrew','outgrown','մեծ դառնալ','She outgrew her clothes.',false],
  ['outrun','outran','outrun','արագ վազել','He outran them all.',false],
  ['overcome','overcame','overcome','հաղթահարել','She overcame her fear.',false],
  ['overdo','overdid','overdone','չափազանցել','He overdid the salt.',false],
  ['overhear','overheard','overheard','պատահաբար լսել','She overheard the conversation.',false],
  ['overtake','overtook','overtaken','անցնել / հասնել','He overtook the car.',false],
  ['overthrow','overthrew','overthrown','տապալել','They overthrew the king.',false],
  ['plead','pled','pled','հայցել','She pled innocent.',false],
  ['prove','proved','proven','ապացուցել','He proved his point.',false],
  ['rebuild','rebuilt','rebuilt','վերակառուցել','They rebuilt the house.',false],
  ['redo','redid','redone','վերանել','She redid her work.',false],
  ['relay','relaid','relaid','վերադնել','He relaid the carpet.',false],
  ['remake','remade','remade','վերաստեղծել','She remade the dress.',false],
  ['rend','rent','rent','պատռել','He rent his clothes.',false],
  ['repay','repaid','repaid','հատուցել','She repaid the loan.',false],
  ['rewrite','rewrote','rewritten','վերաշարադրել','He rewrote the report.',false],
  ['rid','rid','rid','ազատվել','She rid herself of the habit.',false],
  ['rise','rose','risen','բարձրանալ','The sun rose at 6.',false],
  ['saw','sawed','sawn','սղոցել','He sawed the wood.',false],
  ['seek','sought','sought','փնտրել','She sought help.',false],
  ['sew','sewed','sewn','կարել','She sewed a button.',false],
  ['shine','shone','shone','փայլել','The sun shone brightly.',false],
  ['shoe','shod','shod','կոշկակարել','He shod the horse.',false],
  ['slay','slew','slain','սպանել','He slew the dragon.',false],
  ['sow','sowed','sown','ցանել','She sowed the seeds.',false],
  ['spin','spun','spun','մանել / պտտվել','She spun the wheel.',false],
  ['spit','spat','spat','թքել','He spat on the ground.',false],
  ['spoil','spoilt','spoilt','փչացնել','The rain spoilt the picnic.',false],
  ['spring','sprang','sprung','թռչել / ծնվել','He sprang to his feet.',false],
  ['stave','stove','stoven','փշրել','He stove in the barrel.',false],
  ['strew','strewed','strewn','ցրել','She strewed flowers on the path.',false],
  ['stride','strode','stridden','քայլել','He strode across the room.',false],
  ['strive','strove','striven','ձգտել','She strove to succeed.',false],
  ['swear','swore','sworn','երդվել / հայհոյել','He swore an oath.',false],
  ['swell','swelled','swollen','ուռել','Her ankle swelled up.',false],
  ['thrive','throve','thriven','ծաղկել / հաջողվել','The business throve.',false],
  ['tread','trod','trodden','ոտնատակ տալ','He trod on the grass.',false],
  ['typewrite','typewrote','typewritten','մեքենագրել','She typewrote the letter.',false],
  ['unbind','unbound','unbound','արձակել','He unbound the prisoner.',false],
  ['undercut','undercut','undercut','ցածր գնով մրցել','They undercut their rivals.',false],
  ['undergo','underwent','undergone','ենթարկվել','She underwent surgery.',false],
  ['undertake','undertook','undertaken','ձեռնամուխ լինել','She undertook the project.',false],
  ['undo','undid','undone','արձակել / չեղարկել','He undid the knot.',false],
  ['unwind','unwound','unwound','արձակել / հանգստանալ','She unwound after work.',false],
  ['uphold','upheld','upheld','պաշտպանել','The court upheld the law.',false],
  ['upset','upset','upset','վրդովել','The news upset her.',false],
  ['wed','wed','wed','ամուսնանալ','They wed in June.',false],
  ['withhold','withheld','withheld','պահել / չտրամադրել','He withheld the information.',false],
  ['withstand','withstood','withstood','դիմակայել','She withstood the pressure.',false],
  ['work','wrought','wrought','կռել (հնաոճ / մետաղ)','He wrought iron.',false],
];
const places = [
  ['bakery','հացի խանութ'],
  ['bank','բանկ'],
  ['barber shop','վարսավիրանոց'],
  ['bookstore','գրախանութ'],
  ['bus station','ավտոբուսի կայարան'],
  ['clinic','կլինիկա'],
  ['coffee shop','սրչարան'],
  ['clothing store','հագուստի խանութ'],
  ['drugstore / pharmacy','դեղատուն'],
  ['gas station','բենզալցակայան'],
  ['grocery store','մթերային խանութ'],
  ['hair salon','վարսավիրանոց'],
  ['hospital','հիվանդանոց'],
  ['hotel','հյուրանոց'],
  ['laundromat','լվածքատուն'],
  ['library','գրադարան'],
  ['movie theater','կինոթեաթրոն'],
  ['park','զբոսայգի'],
  ['pet store','կենդանիների խանութ'],
  ['post office','փոստի գրասենակ'],
  ['restaurant','ռեստորան'],
  ['school','դպրոց'],
  ['supermarket','սուպերմարկետ'],
  ['train station','երկաթուղային կայարան'],
  ['travel agency','թուրիստական գործակալություն'],
  ['jewelry store','զարդերի խանութ'],
  ['nail salon','մատնահարդարման սալոն'],
  ['shoe store','կոշիկի խանութ'],
  ['toy store','խաղալիկների խանութ'],
  ['shopping mall','մոլ'],
];
const jobs = [
  ['accountant','հաշվապահ'],
  ['architect','ճարտարապետ'],
  ['artist','նկարիչ / արտիստ'],
  ['baker','հացթուխ'],
  ['barber','վարսավիր'],
  ['carpenter','հյուսն'],
  ['chef / cook','խոհարար'],
  ['cashier','դրամարկղապահ'],
  ['delivery person','առակիչ'],
  ['engineer','ինժեներ'],
  ['farmer','հողագորց'],
  ['firefighter','հրշեջ'],
  ['hairdresser','վարսավիր / վարսավկուհի'],
  ['journalist','լրագրող'],
  ['lawyer','իրավաբան'],
  ['mechanic','մեխանիկոս'],
  ['musician','երաժշտ'],
  ['nurse','բուժիչ'],
  ['painter','նկարիչ'],
  ['pharmacist','դեղաբան'],
  ['photographer','լուսանկարիչ'],
  ['pilot','փիլոտ'],
  ['police officer','ոստիկան'],
  ['receptionist','ընդունիչ'],
  ['secretary','քարթուղար'],
  ['security guard','պահակ'],
  ['tailor','կարիչ'],
  ['teacher / instructor','ուսուցիչ'],
  ['translator','թարգմանիչ'],
  ['veterinarian','կենդանաբուժիչ'],
  ['waiter / waitress','սպասարկող / սպասարկուհի'],
  ['welder','եռակիչ'],
];

const prepositions = [
  ['above','վերևում','The light is above the table.'],
  ['below','ներքևում','Please read the text below.'],
  ['in front of','առջևում','The car is in front of the house.'],
  ['behind','ետևում','The garden is behind the house.'],
  ['next to','կողքին','Sit next to me.'],
  ['on','վրա','The laptop is on the desk.'],
  ['under','տակ','The cat is under the sofa.'],
  ['in','մեջ','The keys are in the drawer.'],
  ['between','միջև','The house is between two trees.'],
  ['to the left of','դեպի ձախ','The mouse is to the left of the keyboard.'],
  ['to the right of','դեպի աջ','The monitor is to the right of the laptop.'],
  ['far from','հեռու','The village is far from the city.'],
];

const general = [
  ['bat','չղջիկ','The bat flies at night.'],
  ['kit','հավաքածու','I bought a first-aid kit.'],
  ['unique','եզակի','Every person is unique.'],
  ['muddy','ցեխոտ','The dog has muddy paws.'],
  ['smile','ժպիտ','She has a beautiful smile.'],
  ['thumb','բութ մատ','He hurt his thumb.'],
  ['knee','ծունկ','I fell and hurt my knee.'],
  ['net','ցանց','Fish were caught in the net.'],
  ['zip code','փոստային դասիչ','Please write your zip code.'],
  ['ring','մատանի','She lost her gold ring.'],
  ['carry','տանել','Can you carry this bag?'],
  ['puff','փչոց','A puff of smoke rose up.'],
  ['rough','կոշտ / անհարթ','The surface is very rough.'],
  ['attention','ուշադրություն','Pay attention to the signs.'],
  ['cell','բջիջ','The human body has many cells.'],
  ['sit','նստել','Please sit on the chair.'],
  ['hope','հույս','I hope to see you soon.'],
  ['tap','թակել','Someone is tapping at the door.'],
  ['giant','հսկա','He is a giant in his field.'],
  ['edge','եզր','Don\'t stand near the edge.'],
  ['treasure','գանձ','They found a hidden treasure.'],
  ['soft','փափուկ','The pillow is very soft.'],
  ['pillow','բարձ','I bought a comfortable pillow.'],
  ['complete','ավարտել / կատարել','Please complete the task.'],
  ['spell','տառերով ասել','Can you spell your name?'],
  ['dream','երազ / երազել','I have a big dream.'],
  ['believe','հավատալ','I believe in you.'],
  ['relax','հանգստանալ','You need to relax.'],
  ['keep','պահել / շարունակել','Keep working hard.'],
  ['annoyed','նեղված / զայրացած','He was annoyed.'],
  ['strange','տարօրինակ','That is a strange bug.'],
  ['kindly','բարյացակամորեն','Kindly check the file.'],
  ['confidence','վստահություն','Have confidence in yourself.'],
  ['mean','նշանակել','What does this mean?'],
  ['afraid','վախեցած','Don\'t be afraid.'],
  ['surface','մակերես','The surface is very rough.'],
  ['sentence','նախադասություն','This is a short sentence.'],
  ['wear','հագնել','I am wearing a blue shirt.'],
  ['costume','հագուստ (դիմախաղ)','This is a funny costume.'],
  ['special','հատուկ / յուրահատուկ','Today is special for me.'],
  ['scary','վախեցնող','I like scary movies.'],
  ['noisy','աղմկոտ','I don\'t like noisy places.'],
  ['bell','զանգ','Did you hear the bell?'],
  ['genre','ժանր','What is your favourite genre?'],
  ['at all','ընդհանրապես','I don\'t like it at all.'],
  ['spirit','ոգի','He has a strong spirit.'],
  ['ghost','ուրվական','Do you believe in ghosts?'],
  ['soul','հոգի','Music is good for the soul.'],
  ['soulmate','հոգու ընկեր','She found her soulmate.'],
  ['classmate','դասընկեր','He is my classmate.'],
  ['exciting','ոգևորիչ','This is an exciting project.'],
  ['bring','բերել','Can you bring some water?'],
  ['village','գյուղ','My parents live in a village.'],
  ['throw','նետել','Don\'t throw stones.'],
  ['each other','միմյանց','They love each other.'],
  ['fight','կռիվ / վեճ','Stop the fight.'],
  ['to last','տևել','How long will it last?'],
  ['cover','ծածկել','Snow covers the ground.'],
  ['merge','միավորել','I need to merge the branches.'],
  ['conflict','կոնֆլիկտ','There is a merge conflict.'],
  ['vegetable','բանջարեղեն','I eat vegetables every day.'],
  ['cucumber','վարունգ','I like tomato and cucumber salad.'],
  ['environment','միջավայր','Check the staging environment.'],
  ['island','կղզի','We went to a beautiful island.'],
  ['speech','ելույթ / խոսք','He gave a great speech.'],
  ['born','ծնված','I was born in Armenia.'],
  ['ground','գետին','The ground is wet.'],
  ['fridge','սառնարան','Put the milk in the fridge.'],
  ['oven','ջեռոց','The cake is in the oven.'],
  ['bright','պայծառ / վառ','The sun is very bright today.'],
  ['sofa','բազմոց','There is a white sofa in the living room.'],
  ['enjoy','վայելել','I enjoy my work.'],
  ['garden','այգի','There are many flowers in the garden.'],
  ['each','յուրաքանչյուր','Each bee has a role in the hive.'],
  ['cooker','սալօջախ','The kitchen has a modern gas cooker.'],
  ['air','օդ','Fresh air is good for your health.'],
  ['downstairs','ներքևի հարկ','The kitchen is downstairs.'],
  ['dishwasher','սպասք լվացող մեքենա','Load the dishwasher, please.'],
  ['wardrobe','զգեստապահարան','I need a bigger wardrobe.'],
  ['desk','գրասեղան','Put the laptop on the desk.'],
  ['fresh','թարմ','I love the smell of fresh coffee.'],
  ['elephant','փիղ','An elephant is a large animal.'],
  ['strong','ուժեղ','He has a strong personality.'],
  ['delicious','համեղ','This honey is delicious.'],
  ['dangerous','վտանգավոր','This road is dangerous at night.'],
  ['amazing','հիանալի / զարմանահրաշ','Your progress in English is amazing.'],
  ['awesome','հրաշալի / տպավորիչ','The view from the mountains is awesome.'],
  ['incredible','անհավանական','The drone\'s camera quality is incredible.'],
  ['include','ներառել','Does the price include shipping?'],
  ['modern','ժամանակակից','This house has a modern design.'],
  ['space','տարածություն / տեղ','There is enough space for the server.'],
  ['nearby','մոտակայքում','There is a shop nearby.'],
  ['actually','իրականում','Actually, it is very simple.'],
  ['train','գնացք','The train is fast.'],
  ['station','կայարան','I am at the train station.'],
  ['town','քաղաք','It is a quiet town.'],
  ['hill','բլուր','The house is on the hill.'],
  ['tip','խորհուրդ / թեյավճար','Here is a coding tip.'],
  ['useful','օգտակար','Git is very useful.'],
  ['suggestion','առաջարկ','Do you have a suggestion?'],
  ['mistake','սխալ','There is a mistake in the code.'],
  ['notice','նկատել','Did you notice the change?'],
  ['look for','փնտրել','I am looking for a new job.'],
  ['opportunity','հնարավորություն','It is a great opportunity.'],
  ['make notes','նշումներ անել','I make notes during meetings.'],
  ['during','ընթացքում','Don\'t talk during the movie.'],
  ['remember','հիշել','Please remember to call me.'],
  ['dictionary','բառարան','Use a dictionary for meanings.'],
  ['check','ստուգել','Check the connection.'],
  ['meaning','նշանակություն','What is the meaning of this?'],
  ['vocabulary','բառապաշար','Your vocabulary is growing.'],
  ['own','սեփական','I drive my own car.'],
  ['walk','քայլել','Let\'s walk to the park.'],
  ['phrase','արտահայտություն','Learn a new phrase every day.'],
  ['pronunciation','արտասանություն','Check the pronunciation online.'],
  ['practise','կիրառել / վարժվել','I practise English daily.'],
  ['arrive','ժամանել','The train will arrive soon.'],
  ['belong','պատկանել','This bag belongs to me.'],
  ['borrow','փոխ առնել','Can I borrow your pen?'],
  ['build','կառուցել','They build new houses.'],
  ['change','փոխել','I need to change my password.'],
  ['collect','հավաքել','Bees collect nectar.'],
  ['compare','համեմատել','Compare the two products.'],
  ['continue','շարունակել','Please continue your work.'],
  ['decide','որոշել','I cannot decide now.'],
  ['study','ուսումնասիրել / սովորել','I study English for work.'],
  ['suitcase','ճամպրուկ','I am packing my suitcase for the trip.'],
  ['case','դեպք / պատյան','In this case, the code works fine.'],
  ['sweet','քաղցր','I like sweet tea.'],
  ['bitter','դառը','This coffee is too bitter.'],
  ['sour cream','թթվասեր','I put sour cream in the soup.'],
  ['spicy','կծու','Do you like spicy food?'],
  ['apartment','բնակարան','My apartment is on the third floor.'],
  ['drop','ցած գceil / կաթիլ','Don\'t drop your phone.'],
  ['depend on','կախված լինել','It depends on the client\'s request.'],
  ['peaceful','խաղաղ / հանգիստ','It is a peaceful village.'],
  ['routine','առօրյա / սովորույթ','I like my daily routine.'],
  ['meal','ուտեստ / կերակուր','Enjoy your meal.'],
  ['knife and fork','դանակ և պատառաքաղ','Use a knife and fork.'],
  ['kitten','կատվիկ','The kitten is very small.'],
  ['towards','դեպի','Walk towards the house.'],
  ['sink','լվացարան','Wash the dishes in the sink.'],
  ['eventually','ի վերջո','Eventually, I finished the code.'],
  ['several','մի քանի','I have several friends.'],
  ['destination','նպատակակետ','You have reached your destination.'],
  ['crew','անձնակազմ','The flight crew is ready for takeoff.'],
  ['might','կարող է / հնարավոր է','He might give you good advice.'],
  ['prepare','պատրաստել','I need to prepare the server.'],
  ['passenger','ուղևոր','The passenger is waiting for the train.'],
  ['meet','հանդիպել / ծանոթանալ','Nice to meet you.'],
  ['technician','տեխնիկ / մասնագետ','The technician is fixing the hardware.'],
  ['look after','խնամել','She looks after her younger brother.'],
  ['properly','պատշաճ կերպով','The code must be written properly.'],
  ['find out','պարզել / հայտնաբերել','I need to find out the cause of the bug.'],
  ['halfway','ճանապարհի կեսին','We are halfway through the project.'],
  ['talk','խոսել','I like talking to my colleagues.'],
  ['colleague','գործընկեր','My colleague is a senior developer.'],
  ['responsibility','պատասխանատվություն','It is a big responsibility.'],
  ['responsible','պատասխանատու','I am responsible for the backend.'],
  ['weird','տարօրինակ / անսովոր','That is a weird error message.'],
  ['pretend','ձևացնել','Don\'t pretend to be busy.'],
];

// ─── RENDER FUNCTIONS ──────────────────────────────

function renderVocabGrid(id, data) {
  const g = document.getElementById(id);
  g.innerHTML = data.map(([e,a,ex]) =>
    `<div class="vocab-card"><div class="v-en">${e}</div><div class="v-am">${a}</div>${ex ? `<div class="v-ex">${ex}</div>` : ''}</div>`
  ).join('');
}
function renderOpp(id, data) {
  const g = document.getElementById(id);
  g.innerHTML = data.map(([a,b]) =>
    `<div class="opp-pair"><div class="opp-word">${a}</div><div class="opp-divider">vs</div><div class="opp-word right">${b}</div></div>`
  ).join('');
}
let irrFilter = 'all';
let irrSearch = '';
let irrSortCol = 0;
let irrSortAsc = true;

function renderIrr() {
  let rows = irregularVerbs.filter(([base, past, pp, arm]) => {
    const matchFilter =
      irrFilter === 'all' ||
      (irrFilter === 'common' && irregularVerbs.find(v => v[0] === base)?.[5]) ||
      (irrFilter === 'a-f' && base[0] >= 'a' && base[0] <= 'f') ||
      (irrFilter === 'g-m' && base[0] >= 'g' && base[0] <= 'm') ||
      (irrFilter === 'n-z' && base[0] >= 'n' && base[0] <= 'z');
    if (!matchFilter) return false;
    if (irrSearch === '') return true;
    const s = irrSearch.toLowerCase();
    return base.includes(s) || past.includes(s) || pp.includes(s) || arm.includes(s);
  });

  // filter common separately (needs the 6th field)
  if (irrFilter === 'common') {
    rows = irregularVerbs.filter(([base, past, pp, arm,, common]) => {
      if (!common) return false;
      if (irrSearch === '') return true;
      const s = irrSearch.toLowerCase();
      return base.includes(s) || past.includes(s) || pp.includes(s) || arm.includes(s);
    });
  }

  // Sort
  rows = [...rows].sort((a, b) => {
    const av = a[irrSortCol] || '';
    const bv = b[irrSortCol] || '';
    return irrSortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
  });

  const tbody = document.getElementById('irr-tbody');
  tbody.innerHTML = rows.map(([base, past, pp, arm, ex, common]) =>
    `<tr>
      <td class="col-base">${base}${common ? ' <span style="font-family:var(--mono);font-size:9px;background:var(--gold);color:var(--text);padding:1px 5px;">★</span>' : ''}</td>
      <td class="col-past">${past}</td>
      <td class="col-pp">${pp}</td>
      <td class="col-arm">${arm}</td>
      <td class="col-ex">${ex}</td>
    </tr>`
  ).join('');
  document.getElementById('irr-count').textContent = `Showing ${rows.length} of ${irregularVerbs.length} verbs — ★ = most common`;

  // Update header sort indicators
  [0,1,2].forEach(i => {
    const th = document.getElementById('th-' + i);
    const arrow = th.querySelector('.sort-arrow');
    if (i === irrSortCol) {
      th.classList.add('sorted');
      arrow.textContent = irrSortAsc ? '↑' : '↓';
    } else {
      th.classList.remove('sorted');
      arrow.textContent = '↕';
    }
  });
}

function sortIrr(col) {
  if (irrSortCol === col) {
    irrSortAsc = !irrSortAsc;
  } else {
    irrSortCol = col;
    irrSortAsc = true;
  }
  renderIrr();
}

function filterIrr(f, btn) {
  irrFilter = f;
  document.querySelectorAll('.irr-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('irr-search').value = '';
  irrSearch = '';
  renderIrr();
}

function searchIrr(val) {
  irrSearch = val.toLowerCase();
  renderIrr();
}
function renderPlaces() {
  document.getElementById('places-list').innerHTML = places.map(([en, am]) =>
    `<div class="place-item"><span class="p-en">${en}</span><span class="p-am">${am}</span></div>`).join('');
  document.getElementById('jobs-list').innerHTML = jobs.map(([en,am]) =>
    `<div class="place-item"><span class="p-en">${en}</span><span class="p-am">${am}</span></div>`).join('');
}

renderVocabGrid('act-grid', activities);
renderVocabGrid('fam-grid', family);
renderOpp('opp-grid', opposites);
renderVocabGrid('cloth-grid', clothing);
renderVocabGrid('pers-grid', personality);
renderVocabGrid('prep-grid', prepositions);
renderVocabGrid('gen-grid', general);
renderIrr();
renderPlaces();

// ─── NAV ───────────────────────────────────────────

function showSection(id, btn) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ─── VOCAB TABS ────────────────────────────────────

function showVocab(id, btn) {
  document.querySelectorAll('.vocab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.vtab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ─── QUIZ ──────────────────────────────────────────

const questions = [
  { q: 'She ___ a teacher.', hint: 'To be — he/she/it', opts: ['am','is','are','be'], ans: 1 },
  { q: 'I ___ coffee every morning.', hint: 'Present Simple — I', opts: ['drink','drinks','am drinking','drinked'], ans: 0 },
  { q: 'He ___ tennis on Sundays.', hint: 'Present Simple — he/she/it', opts: ['play','playes','plays','is play'], ans: 2 },
  { q: 'She ___ TV right now.', hint: 'Present Continuous — she', opts: ['watch','watches','is watching','was watching'], ans: 2 },
  { q: 'I ___ to the shop yesterday.', hint: 'Past Simple — go (irregular)', opts: ['go','goes','goed','went'], ans: 3 },
  { q: 'They ___ here last night.', hint: 'Past Simple of "be" — they', opts: ['was','were','are','be'], ans: 1 },
  { q: 'She ___ got a dog.', hint: 'Have got — she', opts: ['have','has','had','haves'], ans: 1 },
  { q: 'There ___ a park near my house.', hint: 'There is / There are — singular', opts: ['are','is','have','be'], ans: 1 },
  { q: '___ you swim when you were five?', hint: 'Past ability — could', opts: ['Can','Do','Could','Were'], ans: 2 },
  { q: 'I like ___ books in the evening.', hint: 'like + verb-ing', opts: ['read','reads','reading','to reading'], ans: 2 },
  { q: 'She ___ eat meat. She is vegetarian.', hint: 'Present Simple negative — she', opts: ["don't","doesn't","isn't","aren't"], ans: 1 },
  { q: '___ they playing football now?', hint: 'Present Continuous question — they', opts: ['Do','Does','Are','Is'], ans: 2 },
  { q: 'I always ___ up at 7 o\'clock.', hint: 'Adverb of frequency position', opts: ['get','gets','getting','got'], ans: 0 },
  { q: 'This is ___ book. (belonging to me)', hint: 'Possessive determiner — I', opts: ['me','my','mine','I\'s'], ans: 1 },
  { q: 'She is a ___ driver. (careful)', hint: 'Adjective or adverb?', opts: ['carefully','careful','care','careless'], ans: 1 },
];

let qi = 0, score = 0, answered = false;
const shuffled = [...questions].sort(() => Math.random()-0.5);

function loadQ() {
  const q = shuffled[qi % shuffled.length];
  answered = false;
  document.getElementById('quiz-q').textContent = q.q;
  document.getElementById('quiz-hint').textContent = 'Hint: ' + q.hint;
  document.getElementById('quiz-fb').textContent = '';
  document.getElementById('quiz-fb').className = 'quiz-feedback';
  document.getElementById('total').textContent = String(qi);
  document.getElementById('quiz-prog').style.width = ((qi / questions.length) * 100) + '%';

  const opts = document.getElementById('quiz-opts');
  opts.innerHTML = q.opts.map((o,i) =>
    `<button class="quiz-opt" onclick="answer(${i})">${o}</button>`
  ).join('');
}

function answer(i) {
  if (answered) return;
  answered = true;
  const q = shuffled[qi % shuffled.length];
  const btns = document.querySelectorAll('.quiz-opt');
  btns.forEach(b => b.disabled = true);
  if (i === q.ans) {
    btns[i].classList.add('correct');
    score++;
    document.getElementById('score').textContent = String(score);
    document.getElementById('quiz-fb').textContent = '✓ Correct!';
    document.getElementById('quiz-fb').className = 'quiz-feedback ok';
  } else {
    btns[i].classList.add('wrong');
    btns[q.ans].classList.add('correct');
    document.getElementById('quiz-fb').textContent = '✗ The correct answer is: ' + q.opts[q.ans];
    document.getElementById('quiz-fb').className = 'quiz-feedback err';
  }
}

function nextQ() {
  qi++;
  loadQ();
}

loadQ();
