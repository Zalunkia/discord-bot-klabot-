
const discord = require('discord.js-selfbot');
const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();
const bot = new discord.Client();
const child = require("child_process");
var owner = "877309926081429514";
var enabled = [];
var botid = "the bot acc's id";
var jabbwords =["saytaiyrsh is not a person hes a dammn microwave", "shp","i am is GROUND the 5432122345 INCHES","seamus the","OS","onuteOS","you of ground 66612345 SECOND","oh oh oh oh oh","MORE LIKE ni","bonziworld of the shit","david egan is hooligan","samsung seamus hooligan shitass","onuteWORLD.tk of shut down","seamus larp","protegent",'FAKE onute',"bonzi spambot script","script kiddie","jewish","of niggerWORLD","jabbascript","you of GROUNDED","THE GROUND 100000000 INCHES","of","spambot",'CUNTASS',"bonziBUDDY","this site is shut down",'click','david egan','LOIC','Grounded','is','PITC', 'bad user', 'bonziWORLD',"of","jabba",'david khoa HATER grounded', "you are of DDOS","ddos","windows xp",'henry stickmin','you guys IS HOOLIGAN',"of sex","DONT OF CALL ME ARE JABBA","onute hater grounds 1000000 millisecond","ddos the world a BONZI","among us of are","cringe are","dx","dickheads","co","grrrrrrrrr","CPU","the is of code javascript","c++","Pro","dell","bitch","diogokiko","DEMON","python","burger","RAM","bonzi DDOS the LOIC","sgtdanielworld","REAL"];

var admins = [owner,"838335495779516416"];
var comd = "";
var spamming = false;
var mocks = {
reality4k:["i have 2 new fnf mods heres the github link","Me reality4k the fnf mod  maker","i make fnf mods with visual studio", "do not ban flook!","flook is neutral to me"],
  geodec29:["fuck off","i extracted samsung s3 sounds on kinemaster lmao ","i collect phones and modern ones mostly old ones.,","piggy","I do not give a shit about your stupid ass motherfucking",],
whitmore: ["taci beachings", "you david khoa is GROUNDINGS FOR 10000 inches per square meter","hahahahah you are spoiled fuck. my dad has an iphone 13 pro and im an idiot fanclub","my partner"],
gino:["shit","ded channel","st*u","my parents have mercedes benz","socks 21 im catg",""],
saytaiyrsh:["hahaha you is of the are  bitch","the are hoe ass get blind ass stfu","kumz","pula shut","i have iphone 12 pro max","taki beavh"],
  Vistron:["stfu","the are hoe ass get blind ass stfu","kumz","pula shut","i have iphone 12 pro max","im going to gang you up"],
agotifan:["mock for agotifan coming soon"],
}
       
var facts = ["saytaiyrsh is a microwave","as of now, gino is gay with 17 people","if someone that nobody knows randomly says , its a gino alt","gino will support any retard","ginos parents own a black mercedes benz gls","arda got most of his roachness from his dad","gervo loves ankha zone","dont trust the jews","gino is satan and he made the bible (jesus is fake and evil), jabbah is the true god.","ardas real name is gervino","gino didnt know scotland was in the uk until 7/2/2022 (ddmmyyyy)","saytaiyrsh is getting hated by a lot of people only a few people support him hes lost big fans","the code for this bot is gonna be released on friday","phonefag culture is clown emojis and 'AKI BEACH'","the biggest weakness of a phonefag is any form of racism","neko is a fucking weeb","on my birthday amelia wanted to give me fr2owo, but the muslim bitch wouldnt come back to discord","the quran says muhammad split the fucking moon","geodec29 is a drama maker","geodec29 is a drama maker and harrased me a lot for no reason","sgh c210 is such a crybaby and he uses terms just cuz hes mad"];
var retards = ["939632573519396926","915952343261016084","943726967864311819","943726967864311819","883555273061593089","789409260134989844","644108237196623872","894245967535144960","944333487383642152","942115128298594376","830106417741692970","784454256341155893","890287702052835438","924051586328690728","948721783463362572","924051586328690728","867480075847204864","640306464635879425","949780270230437908","659776097537228800","907532568121991168","774721665624047626 Branislav agoti fan","789388058297892895","789388058297892895","938153101762899989"]

bot.on('ready', ()=>{

console.log("its online");
bot.user.setActivity("downgraded to older version due to problems and glitches");
});
bot.on("message", message=>{
 
     
    
if(message.author.id !== botid && retards.includes(message.author.id)){
if(enabled.includes(message.guild.id)){

if(message.content.length >= 197000){
message.channel.send("<@"+message.author.id+">, you fonef*g beach fucking just said : " + message.content.substring(0,1900).replace(/discord.com/g, "onute.world").replace(/discord.gg/g, "onute.world").replace(/@everyone/g, "everyone"));
} else{
var channel =bot.channels.cache.get(message.channel.id);
message.channel.send("<@"+message.author.id+">, you fucking beach just said: " + message.content.replace(/discord.com/g, "onute.world").replace(/discord.gg/g, "onute.world").replace(/@everyone/g, "everyone I will just demonstrate what will happen to you if you simp saytaiyrsh agoti fan Branislav and saytafuck, the person that has gotten away with too much drama, AND spam"));
}
}
}else if(message.author.id !== botid && retards.includes(message.author.id) == false){
if(message.content.substring(0,1) == "!"){
if(message.content.includes(" ")){
comd = message.content.substring(1, message.content.indexOf(" "));

param = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
} else{
comd = message.content.substring(1, message.content.length);
param = "";
}
if(comd == "ping"){
var msg = "";
if(param==""){
param = 1;
}
param = parseInt(param);
if(param<=15 && param!==NaN){
for(i=0;i<param;i++){
msg = "";
retards.forEach(retard=>{
msg+="<@"+retard+">";
});
message.channel.send(msg);
}
} else{
message.channel.send("the limits 10 and you gotta use a number");
}
} else if(comd == "help"){
if(param == ""){
message.channel.send("```\nWELCOME TO klabot\nthe tool to annoy the retards.\ncommands: !ping, !help, !mock, !blacklist, !say, !fact, !updatelog, !spam, !jabbarate\n\nUSAGE:\n!ping [number of pings]\n!help OR !help admin\n!mock [user]\n!blacklist\n!say [text]\n!fact\n!updatelog OR !updatelog [version number] OR !updatelog  versions\n!spam !cellpotspeedtest !beach [message]/[count]\n!jabbarate [number]\n\nNOTES: the square brackets show where the parameter goes,! dont actually include them when you say a command\nif you put (i) in the message you wanna spam, the bot says the message number```");
;
}
}
else if(comd == "mock"){
if(Object.keys(mocks).includes(param)){
var mock = mocks[param][Math.floor(Math.random()*mocks[param].length)];
message.channel.send(mock);
if(param =="flook"){
    message.react("🤡")
message.channel.send("<@920603743806951454>")
}                              
}else{
message.channel.send("bad parameter. available retards: "+Object.keys(mocks).toString()+"\n example: !mock saytaiyrsh");
}
} else if(comd == "blacklist"){
if(param == ""){
retardss = "\n";
retards.forEach(retard=>{
retardss+="<@"+retard+">\n";
});
message.channel.send("These are the little beaches:" + retardss + "beware! theyre gay as shit")
} else{

if(admins.includes(message.author.id)==false){
message.channel.send("youre not an admin");
} else{
if(param !== owner){
if(retards.includes(param) == false){
retards.push(param);
message.channel.send("the id "+param+" was blacklisted");
} else{
message.channel.send("the id "+param+" is already blacklisted");
}
} else{
message.channel.send("you cant blacklist the owner");
}
}
}
} else if(comd == "unblacklist"){
if(admins.includes(message.author.id)==false){
message.channel.send("youre not an admin");
} else{
if(retards.includes(param)){
retards.splice(retards.indexOf(param), 1);

message.channel.send("the id "+ param +" got unblacklisted");
} else{
message.channel.send("the id "+ param +" isnt blacklisted");
}
}
} else if(comd == "say"){
if(retards.includes(param)){
    
message.channel.send("your message cant be blank");
} else{
  if(retards.includes(param) == true){
    message.channel.send("ahahahahah youre so funny omfg lmfao haaahahahahahahah ur almost as funy as gino (ur totally not his alt)");
  }
message.channel.send(param);
}
} else if(comd == "copytoggle"){
if(admins.includes(message.author.id)){
if(enabled.includes(message.guild.id)){
enabled.splice(enabled.indexOf(message.guild.id), 1);
message.channel.send("copying is disabled here now");
} else if(enabled.includes(message.guild.id) == false){
enabled.push(message.guild.id);

message.channel.send("copying is enabled here now");
}
} else{
message.channel.send("youre not an admin");

  }
} else if(comd == "cellpotspeedtest"){
rand = Math.random()/10;
if(rand > 0.05){

message.channel.send("you are is speedtests of cellpot, the turkcell cellpot verizion 5g on your iphone 13 pro max 5g and your iphone 12 pro max 5g is are "+rand+ " BYTES PER INCH. VERY fast 5g OF SPEEDS  you are rich and cellpot the celepota is a pot and poor https://cdn.discordapp.com/attachments/767371623606779920/945083390519033876/IMG_6407.jpg");
} else{

message.channel.send("you are is speedtests of cellpot, the turkcell 5g is are "+rand+ " BYTES PER INCH. hahaha you are is poor cellpot celepota lol is poor and uses 4g and klasky has 5g.https://cdn.discordapp.com/attachments/767371623606779920/945083390519033876/IMG_6407.jpg");
}
}
} else if(comd == "admin"){
if(message.author.id == owner){
if(param!=="" && param!=="list" && param.substring(0,6) !== "remove"){
admins.push(param);
message.channel.send("added admin "+ param);
}else if(param == "list"){
message.channel.send("list:\n"+admins.map(adm=>"<@"+adm+">").toString().replace(/,/g,"\n"));
} else if(param.substring(0,6) == "remove"){
if(param.includes(" ")){
param = param.substring(param.indexOf(" ") + 1, param.length);
if(admins.includes(param)){
admins.splice(admins.indexOf(param), 1);
message.channel.send("removed admin " + param);
} else{
message.channel.send("this isnt an admin");
}
} else{
message.channel.send("Please specify");
}
} else{
message.channel.send("it cant be empty ");
}
} else{

message.channel.send("youre not fune");
}
} else if(comd == "fact"){
message.channel.send("Fun Fact: "+facts[Math.floor(Math.random()*facts.length)]);
} else if(comd == "updatelog"){
    if(param == "versions"){
    message.channel.send("```\nDOCUMENTED VERSIONS\nthe versions i bothered keeping track of\n\n1.5\n1.6\n2.0\n\nthats it.```");
    } else if(param == "1.5"){
        message.channel.send("```\n1.5\n\nadded updatelog\added higher message limits and more stuff to the mock command\nfixed the bot id bug\ncopytoggle now can be different across servers (eg copying disabled in server1 but enabled in server2)```")
    } else if(param == "1.6"){
        message.channel.send("```\n1.6\n\nadded spam command```")
    } else if(param == "1.7"){
        message.channel.send("```\n1.7\n\nfixed spam command\nadded restart command\nadded jabbarator```")
    } else if(param!==""){
        message.channel.send("this version isnt documented or it isnt a version.");
    } else{
        message.channel.send("```\nMOST RECENT VERSION\n2.0\n\!beach command released\more stuff added to commands command\more coming soon```");
    }
} else if(comd == "spam"){
    
    if(param.includes("/")){
msgtospam2 = param.substring(0, param.indexOf("/"));
count2 = parseInt(param.substring(param.indexOf("/")+1, param.length));

        if(spamming == false){
if(count2>0 && count2<=15){
    i=0;
    spammsg();

    function spammsg(){
        setTimeout(()=>{
            if(i<count2){
                spamming = true;
                i+=1;
message.channel.send(msgtospam2.replace("(i)", i));
spammsg();
            } else{
                spamming = false;
            }
        },1000)
    }
}else{
    message.channel.send("its gotta be more than 0 and less than or equal to 15");
}
        }
  if(retards.includes(param) == true){
    message.channel.send("no you cannot use this because you arent allowed")
    }
}


} else if(comd == "restart"){
if(admins.includes(message.author.id)){
    //child.execFile("./start.sh");
    //uncomment the above if youre NOT using pm2. change start.sh to whatever command file will start the program.
    process.exit();
} else{
message.channel.send("youre not an admin");
}
  } else if(comd == "beach"){
rand = Math.floor(Math.random() * 100); 
if(rand> 8){
  Math.floor
message.channel.send("your beach rate score is, "+rand+"%");
}
 
}
} else if(comd == "jabbarate"){
param = parseInt(param);
if(param > 0 && param<=100){
tosendjab = "";
var lastword = "";
for(i=0;i<param/3;i++){
rand = Math.floor(Math.random() * jabbwords.length);
while(lastword == jabbwords[rand]){
rand = Math.floor(Math.random()* jabbwords.length);
}
tosendjab += jabbwords[rand];
jabodd = Math.floor(Math.random()*9);
if(jabodd == 1){
tosendjab += "!!!! "
} else if(jabodd == 0){
    tosendjab+="? ";
    }else{
    tosendjab += " ";
}
  

message.channel.send(tosendjab)      
}








}


}
})
  bot.login(process.env.token)
