function colCreator(id, text, whichPage) {

    if (id.endsWith('.gif')) {fileType = 'gif'; lowresFileType = 'gif'; id = id.slice(0, -4);}
    else if (id.endsWith('.webm')) {fileType = 'webm'; lowresFileType = 'webm'; id = id.slice(0, -5);}
    else {fileType = 'png'; lowresFileType = 'webp'}
    

    var idDiv = document.getElementById(id);
    if (whichPage === 0) {pathToFile = 'images/art/'}
    else if (whichPage === 1) {pathToFile = 'images/snowy/'}

    if (fileType === 'webm') {idDiv.innerHTML = `
    <div class="col">
        <video controls width="160px">
            <source src="${pathToFile}lowres/${id}.webm" type="video/webm">
            Your browser does not support the video tag.
        </video><br>
        ${text}
        
    </div>`}

    else {idDiv.innerHTML = `
    <div class="col">
        <a target="_blank" href="${pathToFile}${id}.${fileType}"><img src="${pathToFile}lowres/${id}.${lowresFileType}"></a>
        ${text}
    </div>`}

}


if (document.getElementById('mainPage')) {

colCreator('practice', `
    Practice art of snowithy
    `, 0);

colCreator('raisepaw', `
    He issssss
    `, 0);

colCreator('snowyWiggle.gif',`
    Very wiggely snowy, created with <a href="https://wigglypaint.net/" target="_blank">wigglypaint.net/</a>
    `, 0);

colCreator('nervousMaid',`
    Another snowy maid lol, this time very tall
    `, 0);

colCreator('sweaterRemake',`
    Another remake, this time of the sweater one
    `, 0);

colCreator('suckmydick', `
    He is getting desperate
    `, 0);

colCreator('snowAtNightRemastered',`
    Remake of the snowy at night piece
    ` , 0);

colCreator('makeout2',`
    Part 2 of the previous make out piece
    ` , 0);

colCreator('snowySelfie',`
    He felt good enough to take a pic of himself (perspective testing)
    ` , 0);

colCreator('sleepi',`
    He's too sleepi for his own good
    ` , 0);

colCreator('nom',`
    Snowy nomming
    ` , 0);

colCreator('christmasRemake',`
    <br>Christmas art 2024 remake</a>
    ` , 0);

colCreator('pooter',`
    The 2 gay's playing games together 
    ` , 0);

    
colCreator('strangle',`
    Yosho strangeling snowy
    ` , 0);

colCreator('button2',`
    Button 2
    ` , 0);

colCreator('snowy_racism.gif',`
    Snowy version of <a href="https://tenor.com/view/racism-gif-25147153" target="_blank">this meme</a>
    ` , 0);

colCreator('beamStruggle',`
    Dragon Ball Z beam struggle
    ` , 0);

colCreator('snowymcdonalds',`
    Snowy workin minimum wage
    ` , 0);

colCreator('drawin',`
    He drawin in Snowy's irl room
    ` , 0);

colCreator('freestyling',`
    Always be sayin gay things
    ` , 0);

colCreator('eepy',`
    He is way to eepy
    ` , 0);

colCreator('yesgay',`
    He is gay
    ` , 0);

colCreator('redraw',`
    Redraw of the socks
    ` , 0);

colCreator('sit',`
    Sit
    ` , 0);

colCreator('hootersRemaster',`
    Hooters remaster
    ` , 0);

colCreator('flippingoff',`
    Snowy flipping off yosho
    ` , 0);

colCreator('piss',`
    lemonade (not piss)
    ` , 0);

colCreator('howtocat',`
    how to cat (he's not one)
    ` , 0);

colCreator('button',`
    Snowy pressing a button
    `, 0);

colCreator('sweater',`
    sweater
    `, 0);

colCreator('hooters',`
    Snowy working at femboy hooters
    `, 0);

colCreator('maidsnow',`
    Maid Snow
    `, 0);

colCreator('mew',`
    mew
    `, 0);

colCreator('noMewo',`
    No meow
    `, 0);

colCreator('mmmmeow.gif',`
    mmmmeow
    `, 0);
    
colCreator('mmmmShaders',`
    Shaders
    `, 0);

colCreator('sunset',`
    Sunset
    `, 0);

colCreator('seb',`
    seb qwq
    `, 0);

colCreator('sno',`
    sno
    `, 0);

colCreator('sadSno',`
    Sad sno
    `, 0);

colCreator('mhm',`
    mhm
    `, 0);

colCreator('sadSnoqwq',`
    Sad snow qwq
    `, 0);

colCreator('mewo',`
    mewo
    `, 0);

colCreator('wow',`
    wow.png
    `, 0);

colCreator('snowAtNight',`
    Snow at night
    `, 0);
    
colCreator('relac',`
    Snow relacing
    `, 0);

colCreator('head',`
    head
    `, 0);

colCreator('owo',`
    Snowy wearing the cute socks &#128563
    `, 0);

colCreator('whoIsThis',`
    who is this and what have you done with snowy
    `, 0);

colCreator('butWhen',`
    but when
    `, 0);

colCreator('earlySno',`
    early sno
    `, 0);

colCreator('firstsnowy',`
    Possibly first art of snowy
    `, 0);


//  yosho

colCreator('yoshoWiggle.gif',`
    Wiggely yosho, like the snowy one
    `, 0)


colCreator('yoshoKitchenLick',`
    Snowy lickin yosho uwu
    `, 0);

colCreator('yoshoValentines',`
    Valentines day gift
    `, 0);

colCreator('crack',`
    Yosho died qwq
    `, 0);

colCreator('king2',`
    Drawover #3
    `, 0);

colCreator('socks2',`
    Another redraw
    `, 0);

colCreator('yosho_racism.gif',`
    Yosho version of <a href="https://tenor.com/view/racism-gif-25147153" target="_blank">this meme</a>
    `, 0);


colCreator('girlboss',`
    Redraw of a previous yosho art
    `, 0);

colCreator('makeout',`
    owo
    `, 0);

colCreator('holdingHands',`
    They prob on a gay ass date together
    `, 0);

colCreator('cuddle',`
    Cuddle
    `, 0);

colCreator('timeofhislife',`
    He is not having the time of his life
    `, 0);

colCreator('browser',`
    He saw your browsing history
    `, 0);

colCreator('mcchair',`
    Drawover of a Minecraft screenshot
    `, 0);

colCreator('sunset3',`
    Sunset
    `, 0);

colCreator('boopqwq',`
    Snowy being rude booping me
    `, 0);

colCreator('yoshohl',`
    Yosho doing the <a href="https://combineoverwiki.net/wiki/Category:Half-Life_promotional_artwork#/media/File:Gordon_HL1_promo.jpg" target="_blank">
    Half Life 1 promotional artwork</a> pose
    `, 0);

colCreator('cum',`
    Comic part 1
    `, 0);

colCreator('cum2',`
    part 2
    `, 0);

colCreator('yoshohug',`
    Yosho hug
    `, 0);

colCreator('gta',`
    Yosho outrunning the cops in gta
    `, 0);

colCreator('maidowo',`
    Maid Yosho owo
    `, 0);

colCreator('snowy_is_a_peasent',`
    King Yosho
    `, 0);

colCreator('sixtyNine',`
    nice
    `, 0);

colCreator('yoshobday',`
    Birthday art
    `, 0);

colCreator('chistmas',`
    Christmas pfps for both of us
    `, 0);

colCreator('backrooms',`
    Yosho stuck in the backrooms
    `, 0);

colCreator('owo2',`
    Yosho bein a cute lil femboy
    `, 0);

colCreator('zerHug',`
    Yosho hugging zer
    `, 0);

colCreator('mad.gif',`
    Yosho mad at Snowy for mewoing
    `, 0);

colCreator('yoshoowo',`
    Yosho wearing the cute socks &#128563
    `, 0);

colCreator('chomp',`
    Yosho telling <a href="https://ninjago.fandom.com/wiki/Chompy" target="_blank">Chompy</a> to stand down<br>
    `, 0);

colCreator('noCute',`
    no cute
    `, 0);

colCreator('yoshoRun',`
    I'm not giving context
    `, 0);


//  sin


colCreator('jjk',`
    Jujutsu Kaisen
    `, 0);

colCreator('sinMeme',`
    Sin in a bathtub
    `, 0);

colCreator('sinBday',`
    Birthday art for Sin
    `, 0);

colCreator('sin',`
    Sin
    `, 0);

colCreator('furrySin',`
    Sin admitting he's a furry
    `, 0);

colCreator('sinCrabs',`
    Inside joke
    `, 0);

colCreator('sleepySin',`
    Sleepy Sin
    `, 0);

colCreator('sinInABoat',`
    Sin in a boat
    `, 0);


  //  others

colCreator('sleepiKyat', `
    Sleepi kyat
    `, 0);

colCreator('snowi',`
    Another art trade, but this time with another <a target="_blank" href="https://bsky.app/profile/snowiwakgoreng.bsky.social">snowi</a> lol
    `, 0);

colCreator('fren',`
    Another art trade
    `, 0);

colCreator('arttrade3',`
    Another art trade
    `, 0);

colCreator('friend',`
    Commision for a friend
    `, 0);

colCreator('aspen',`
    Art for Aspen
    `, 0);

colCreator('kyat',`
    Kyat
    `, 0);

colCreator('sunset2',`
    Sunset with shading
    `, 0);

colCreator('corn',`
    Corn
    `, 0);

colCreator('nova',`
    Nova
    `, 0);

colCreator('samyo',`
    Birthday gift for <a target="_blank" href="https://www.twitter.com/samyofox">Samyo</a>
    `, 0);

colCreator('midder',`
    Midder
    `, 0);

colCreator('midderGif.gif',`
    Midder
    `, 0);

colCreator('mid',`
    Mid
    `, 0);

colCreator('hugGrim',`
    Snow hugging Grimm
    `, 0);

colCreator('griimm',`
    Grimm
    `, 0);

colCreator('comission',`
    comission
    `, 0);

colCreator('arttrade2',`
    Art Trade #3
    `, 0);

colCreator('arttrade',`
    Art Trade #2
    `, 0);

colCreator('arttradeprobably1',`
    Art Trade #1
    `, 0);

colCreator('labcoat',`
    lab coat
    `, 0);

colCreator('fu',`
    f u
    `, 0);

colCreator('twin',`
    Snowy's twin
    `, 0);

colCreator('deadsona',`
    dead sona
    `, 0);

colCreator('tails',`
    Tails with a corrupted file
    `, 0);

colCreator('hug',`
    Someone hugging Snowy
    `, 0);

colCreator('mat',`
    mat
    `, 0);

colCreator('mcdonalds',`
    McDonalds oc
    `, 0);

colCreator('spazz',`
    batt
    `, 0);

colCreator('bunny',`
    bunny
    `, 0);

colCreator('eightPeeps',`
    8 peoples
    `, 0);

colCreator('whoThis',`
    who this
    `, 0);

colCreator('whoThis2',`
    who this 2
    `, 0);

colCreator('irlArt',`
    Irl art
    `, 0);

colCreator('bearr',`
    bearr
    `, 0);

colCreator('smashBALL',`
    Smash ball
    `, 0);

colCreator('hooman',`
    hooman
    `, 0);

colCreator('zero',`
    hooman 2.0
    `, 0);

colCreator('acr',`
    car
    `, 0);
    
}


//     snowy page


if (document.getElementById('snowyPage')) {

    colCreator('sticker', `
    <a href="https://t.me/addstickers/snowynewpack" target="_blank">Snowy stickerpack</a> by <a href="https://www.etsy.com/shop/V1RTUALTRAPP" target="_blank">V1RTUALTRAPP1</a> 
    `, 1); 

    colCreator('sticker2', `
    <a href="https://t.me/addstickers/yoshorandom" target="_blank">Snowy stickerpack #2</a> by PulexArt<br>
    <a href="https://www.pulexart.com/store/p80/Pride_Stickers_2023.html" target="_blank">(1)</a>
    <a href="https://www.pulexart.com/store/p97/Pride_Stickers_2024.html" target="_blank">(2)</a>
    <a href="https://www.pulexart.com/store/p26/australian-shepherd.html" target="_blank">(3)</a>
    <a href="https://www.pulexart.com/store/p91/Valentines_Stickers.html" target="_blank">(4)</a>

    `, 1); 

    colCreator('1', `
    Snowy headshot by a friend
    `, 1); 

    colCreator('real2', `
    Snowy headshot by someone who's username idr
    `, 1); 

    colCreator('maid1', `
    First ever maid snowy
    `, 1); 
 

    colCreator('2', `
    Long socks by <a href="https://gooseking.square.site" target="_blank">Gooseking</a>
    `, 1);

    colCreator('3', `
    Headshot by <a href="https://gooseking.square.site/" target="_blank">Gooseking</a>
    `, 1)

    colCreator('4', `
    Other headshot by <a href="https://www.etsy.com/shop/nepukamiArts" target="_blank">nepukamiArts</a>
    `, 1); 

    colCreator('5', `
    Brainfreeze by <u>@eggfry on Discord</u>
    `, 1); 

    colCreator('fleet', `
    Hallow purple, by <a href="https://www.bsky.app/profile/fleetforall.bsky.social" target="_blank">FleetForAll</a>
    `, 1);

    colCreator('sin1', `
    Maid Snowy by <a href="https://www.twitter.com/sinotus13" target="_blank">Sinotus</a>, <a href="images/snowy/sin1_alt.png">Alternate version.</a>
    `, 1); 

    colCreator('sin2', `
    Yosho hug by <a href="https://www.twitter.com/sinotus13" target="_blank">Sin</a>
    `, 1); 

    colCreator('kyat', `
    Yosho hug #2 by <a href="https://twitter.com/Kyat_Nguyen" target="_blank">Kyat</a>
    `, 1); 

    colCreator('V1RTUALTRAPP1', `
    Ych by <a href="https://www.etsy.com/shop/V1RTUALTRAPP" target="_blank">V1RTUALTRAPP</a>
    `, 1);

    colCreator('V1RTUALTRAPP2', `
    Ych by <a href="https://www.etsy.com/shop/V1RTUALTRAPP" target="_blank">V1RTUALTRAPP</a>
    `, 1);

    colCreator('V1RTUALTRAPP3', `
    Cuddle ych by <a href="https://www.etsy.com/shop/V1RTUALTRAPP" target="_blank">V1RTUALTRAPP</a>
    `, 1);

    colCreator('nyxie', `
    Icecream licc by <a href="https://www.etsy.com/shop/NyxieDraws" target="_blank">Nyxie</a>
    `, 1);

    colCreator('nyxie2', `
    Snowy grabbin yosho's cheecks, ych by <a target="_blank" href="https://www.etsy.com/shop/NyxieDraws">Nyxie</a>
    `, 1);

    colCreator('HanutedHarvest', `
    Cuddle commision by  <a href="https://www.etsy.com/shop/https://www.etsy.com/shop/HanutedHarvest" target="_blank">HanutedHarvest</a>
    `, 1);

    colCreator('irl', `
    Bug dawg snowy
    `, 1);

    colCreator('snowi', `
    Snowy talking and yosho listening (for the first time in 3 years), drawn by <a target="_blank" href="https://bsky.app/profile/snowiwakgoreng.bsky.social">Snowipawbs</a> lol.
    `, 1);

    colCreator('sirsquidbee', `
    Divorse selfiee!! ☆:.｡.o(≧▽≦)o.｡.:☆
    <br>by <a target="_blank" href="https://ko-fi.com/sirsquidbee">sirsquidbee</a>
    `, 1);

    colCreator('corn', `
    Headshot by <a target="_blank" href="https://twitter.com/CornTheRatKing">Corn</a>
    `, 1);

    colCreator('w1ndsher', `
    Starry headshot by <a target="blank" href="https://www.tiktok.com/@w1ndsher">w1ndsher</a>
    `, 1);

    colCreator('woo', `
    Woo, by <a target="_blank" href="https://www.etsy.com/people/leaannepeach">Maisie Peach</a>
    `, 1);

    colCreator('drPerky', `
    Dr. Perky (the real snowy), by <a target="_target" href="https://www.etsy.com/people/icrqdz0xpebt7mkv">V1RTUALTRAPP</a>
    `, 1)

    colCreator('chalk', `
    Snowy Yosho hug by <a href="https://bsky.app/profile/chalkolate.bsky.social" target="_blank">Chalk</a>
    `, 1);

    colCreator('reeky', `
    Winows xp paint snowy, by <a href="https://www.tiktok.com/@the_reeky?_r=1&_t=ZP-93StVZU8Xba" target="_blank">the_reeky</a>
    `, 1);

    colCreator('jack', `
    Huggggggg, by <a href="https://www.etsy.com/shop/JackofsometradesArt" target="_blank">JackofsometradesArt</a>
    `);

    colCreator('koiskastle', `
    Gay ass snowy, by <a href="https://www.tiktok.com/@koiskastle" target="_blank">koiskastle</a>
    `);

    colCreator('kyat2', `
    Snowy with his bone, drawn by <a href="https://twitter.com/Kyat_Nguyen" target="_blank">kyat</a> as well
    `);

    colCreator('iHeartPeeing', `
    I ❤️ peeing, drawn by <a href="https://x.com/drainddog" target="_blank">Drainddog</a>
    `)

}

