﻿#!/usr/bin/env node
//MariscoBot is under the GPL3+ License
//Copyright (C) Bruno Rasetti and Salvador Pardiñas 2016-2017

const Discord = require("discord.js");
const client = new Discord.Client();
const testFolder = 'C:\\Users\\rasetti\\Downloads\\Touhou\\Memes&Art\\Ultimate LoLK Marisa Edits folder\\Marisa face\\'
const testFolder2 = 'C:\\Users\\rasetti\\Downloads\\Touhou\\Memes&Art\\Chen\\Discord wife\\'
const testFolder3 = 'C:\\Users\\rasetti\\Downloads\\Touhou\\Memes&Art\\Drunktards in Eientei\\pls dont abuse\\pls dont abuse\\'
const fs = require('fs');
const readline = require('readline');
var user_array = [];
var tc = null;
var rl = readline.createInterface({
  input: process.stdin,
  output: process.sdout
});
var http = require('http');
var msg_to_reply;

const SPANISH = 0;
const ENGLISH = 1;
var LANG = ENGLISH;

var ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
var search = require('youtube-search');
var optsyt = {
  maxResults: 1,
  key: 'insertkeyhere' //Change this to your Youtube Key
};

var pho = Array;
fs.readdir(testFolder, (err, files) => {
	pho = files;
})

var pho2 = Array;
fs.readdir(testFolder2, (err, files) => {
        pho2 = files;
})

var pho3 = Array;
fs.readdir(testFolder3, (err, files) => {
	pho3 = files;
})

var MTalk = ["#Habla","#Talk"];
var MNoises = ["*RUIDOSOS RUIDOS DE MARISCO*", "*LOUD MARISCO NOISES*"];
var MSali = ["#SALI BICHO", "#OUTBEAST"];
var MAngry = ["*RUIDOS ENOJADOS DE MARISCO*", "*ANGRY MARISCO NOISES*"];
var MMarisa = ["#Marisa","#Marisa"];
var MPMari = ["Alabada sea Marisa", "Praise Mari"];
var MHecatia = ["#Hecatia","#Hecatia"];
var MBullying = ["*RUIDOS RUIDOSOS DE ACOSO*", "*LOUD BULLYING NOISES*"];
var MOhio = ["#OHIO", "#OHIO"];
var MGyate = ["algo en japonés no se preguntale a otro", "GYATE GYATE"];
var MDango = ["#Dango","#Dango"];
var MGMG = ["*Me Gusta Me Gusta*", "*MG MG*"];
var MSpread = ["#Extender Marisco", "#Spread Marisco"];
var MWaifu = ["#Waifu", "#Waifu"];
var MMokou = ["#Mokou", "#Mokou"];
var MHelp = ["#ayuda", "#help"];
var MCmds = ['Saludos mortales, los comandos son:\n"#Habla" para hacer que el Marisco te responda\n"#SALI BICHO" para que el Marisco te responda de forma agresiva\n"#Marisa" para alabar a Marisa\n"#Hecatia" para que el Marisco reconozca a su enemigo natural\n"#OHIO" para saludar al Marisco\n"#Dango" para alimentar al Marisco\n"#Extender Marisco" para esparcir el virus\n"#Waifu" para que el Marisco clarifique cual es la mejor waifu\n"#Mokou" para que el Marisco invoque memes chinos con traducciones defectuosas\n"M-play" para que el Marisco se mande un alto cumbion\nY "Danbooru:(Tag de danbooru)" para que el Marisco postee waifus en pelotas(NSFW)', 'Greetings mortals, the commands are as follows:\n"#Talk" to make Marisco answer\n"#OUTBEAST" to make Marisco angry at you\n"#Marisa" to hail Marisa\n"Hecatia" to make Marisco recognize her natural enemy\n"#OHIO" to greet Marisco\n"#Dango" to feed Marisco\n"#Spread Marisco" to spread the virus\n"#Waifu" to make Marisco clarify who\'s the best waifu\n"#Mokou" to make Marisco invoke chinkmemes with awful translations\n"M-play" to make Marisco play some nice traps\n"#8ball" to ask for Marisco\'s infinite wisdom about a yes or no question\nAnd "Danbooru: (Danbooru tag)" to make Marisco send waifu nudes(NSFW)']
var MSummon = ["Invocar Marisco", "Summon Marisco"]; //Not documented, do not fix
var MInvoked = ["Saludos mortales", "Greetings mortals"]; //Idem ^1
var MError = ["Todo mal, arreglame puto", "Shit's fucked, something went wrong, really wrong"];
var MStrike = ["OPORTUNIDAD ", "STRIKE "];
var MNoGrasaHere = [", SOLTÁ EL ARMA PUTO TENÉS 20 SEGUNDOS", ", DROP YOUR WEAPON, YOU HAVE 20 SECONDS TO COMPLY"];
var MNoPuto = [", DIJE SOLTÁ EL ARMA",", I SAID *DROP IT*"];
var MYes = ["Sí, palabra del Marisco", "Yes, Marisco has spoken"];
var MNo =  ["No, palabra del Marisco", "No, Marisco has spoken"];
var MusQueue = [];
var MConn = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
});

client.on('message', msg => {
  if(LANG === 1) console.log("TRUMP");
  if(LANG === 0) console.log("IRA M3N AQUÍ TENGO UNOS RICOS TAMALES");
  //if (msg.guild.id === "guildidhere") let LANG = 1;
  //console.log(msg);
  if (msg.content === "/dumpguildid") console.log("Guild ID is " + msg.guild.id + "\n");
  if (msg.content === MTalk[LANG]) msg.reply(MNoises[LANG]);
  if (msg.content === MSali[LANG]) msg.reply(MAngry[LANG]);
  if (msg.content === MMarisa[LANG]) msg.reply(MPMari[LANG]);
  if (msg.content === MHecatia[LANG]) msg.reply(MBullying[LANG]);
  if (msg.content === MOhio[LANG]) msg.reply(MGyate[LANG]);
  if (msg.content === MDango[LANG]) msg.reply(MGMG[LANG]);
  if (msg.content === MSpread[LANG]) {var item = pho[Math.floor(Math.random()*pho.length)];msg.channel.sendFile(testFolder+item);}
  if (msg.content === MWaifu[LANG]) {var item = pho2[Math.floor(Math.random()*pho2.length)];msg.channel.sendFile(testFolder2+item);}
  if (msg.content === MMokou[LANG]) {var item = pho3[Math.floor(Math.random()*pho3.length)];msg.channel.sendFile(testFolder3+item);}
  if (msg.content === MHelp[LANG]) msg.reply(MCmds[LANG]);
  if (msg.content === MSummon[LANG]) {tc = msg.channel; msg.reply(MInvoked[LANG]);} 
  if (msg.content.startsWith("#8ball")) {var rnd = Math.random() < 0.5; if(rnd){msg.reply(MNo[LANG]);};if(!rnd){msg.reply(MYes[LANG]);};}
  if (msg.content.startsWith('M-play')) {
	var chan;
	var msg_cut = msg.content.split(' ');
	msg_cut.splice(0,1);
	msg_cut = msg_cut.join(' ');
	chan = msg.channel.guild.channels.find('type', 'voice');
	MusQueue.push(msg_cut);
	console.log("Debug1");
	if(MConn == false)
	{
		console.log("Debug2");
		while(MusQueue.length != 0){
		setTimeout(function() {
			console.log("Debug3");
			if(MConn == false){
				console.log("Debug4");
				search(MusQueue[0], optsyt, function(err, results) {
					console.log("Debug5");
					if(err) msg.reply(MError[LANG] + err);
					else
					{
						MConn = true;
						msg.reply("Currently playing " + results[0].title);
						console.log(chan);
						chan.join().then(connection => {
							var stream = ytdl(results[0].link, {filter : 'audioonly'});
							var dispatcher = connection.playStream(stream, streamOptions);
	                	        	        var dispatcher = connection.playStream(stream, streamOptions);
							dispatcher.once('end', () => {
								MusQueue.splice(0,1);
								MConn = false;
								connection.disconnect();
										     });
										}).catch(console.error);
					}
										   });
			}
		}, (2*1000));
		}

	}
	else
	{
		msg.reply("Added " + msg_cut + "to queue");
	}
  }
  if(msg.content.startsWith("Danbooru:"))
  {
	var tag = msg.content.split(':').pop();
	msg_to_reply = msg;
	get_danbooru(tag);
  }
if(msg.content.indexOf(":v")!=-1)

{
	var usr_ind = find_user(user_array,msg.member.id);
	if(usr_ind == -1)
	{
		var mmb = msg.member;
		mmb.strike = 1;
		user_array.push(mmb);
		msg.reply(MStrike[LANG] + mmb.strike.toString() + MNoGrasaHere[LANG]);
	}
        else
	{
		var strk = user_array[usr_ind].strike + 1;
		if(strk == 3)
		{
			msg.reply("*OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*Marisco fhtagn ph'nglui mglw'nafh Marisco r'lyeh wgah'nagl fhtagn");
			msg.member.kick();
		}
		else
		{
			user_array[usr_ind].strike = strk;
			msg.reply(MStrike[LANG] + strk.toString() + MNoPuto[LANG]);
		}
	}


}

});
client.login('insertkeyhere'); //Change this to your Discord key

rl.on('line', (input) => {
   if(tc != null){
      tc.sendMessage(`${input}`);
   }
   else{
      console.log("There is no channel currently active\n");
   }
});

function get_danbooru(tag) {
    var pagenum = Math.floor(Math.random()*10);
    return http.get({
        host: 'danbooru.donmai.us',
        path: '/posts.json?tags='+tag+'&page='+pagenum
    }, function(response) {
	console.log(tag);
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {

            var parsed = JSON.parse(body);
	    var number = Math.floor(Math.random()*parsed.length);
	    console.log(number);

	    if(typeof parsed[number] != 'undefined')
	    {
		    var id = parsed[number].id;
	            msg_to_reply.reply("https://danbooru.donmai.us/posts/"+id);
	    }
	    else
	    {
		    msg_to_reply.reply("Your waifu remains unlewded. Feel free to lewd her yourself.");
	    }
        });
    });

}


function find_user(array, id)
{
	var arr_len = array.length;
	var user_index = null;
	for(i = 0; i < arr_len; i++)
	{
		if(array[i].id == id)
		{
			user_index = i;
			break;
		}
	}
	if(user_index === null)
	{
		return -1;
	}
	else
	{
		return user_index;
	}
}

