const Discord = require('discord.js');

const client = new Discord.Client();

const token     = process.env.BOT_TOKEN;
var prefix      = "r!";
var mention     = "<@380821005700169729>";
var emojiRein   = "<:rein:368038551482400788>";
var theyaId     = "315190184935292928";

client.on('ready', () => {
    console.log("Bonjour, je suis Reinhardt.");
    client.user.setGame(":rein:");
});

client.on('message', message => {
    var msgc = message.content;
    var random = Math.floor((Math.random() * 50) + 1);
    var isTheya = message.author.id == theyaId;
    var demandeMariage = (msgc.includes("rein") || msgc.includes("Rein") || msgc.includes(mention) || msgc.includes(emojiRein))
                      && (msgc.includes('epouse') || msgc.includes('épouse') || msgc.includes('Epouse') || msgc.includes('Épouse'))
                      && (msgc.includes('moi'));
    var declaration   = ( msgc.includes("Rein") || msgc.includes("rein") || msgc.includes("Reinhardt") || msgc.includes("reinhardt") )
            && msgc.includes("je") && msgc.includes("t'aime");
    var reinMention   = msgc.includes("rein") || msgc.includes("Rein") || msgc.includes("reinhardt") || msgc.includes("Reinhardt") || msgc.includes(mention);
    var bonjour       = msgc.includes("bonjour") || msgc.includes("Bonjour");
    var bonneNuit     = msgc.includes("bonne nuit") || msgc.includes("Bonne nuit");
    var takumiMention = msgc.includes('takumi') || msgc.includes('Takumi') || msgc.includes('TAKUMI') || msgc.includes("<@380824964087021568>");

    var PV = message.channel.type = "dm";

    if (!message.author.bot) {

        if (PV) {
            console.log(message.author.username + " : " + msgc);
        }

        if (isTheya) {

            console.log(msgc);

            if (mention) {

                if (bonjour) {
                        message.channel.send("Bonjour ma mie. :heart:");
                } else if (bonneNuit) {
                    message.channel.send("Bonne nuit ma mie. :heart:");
                } else if (declaration) {
                    message.channel.send('Oh... ' + emojiRein + emojiRein + emojiRein
                    + ' Intéressant... ' + emojiRein + emojiRein + emojiRein + emojiRein + emojiRein);
                } else if (demandeMariage) {
                    message.channel.send("Oui. Marions-nous, ma mie.");
                }
            } else {
                random = Math.floor((Math.random() * 250) + 1);
                switch(random) {
                    case 1: message.channel.send("Je suis là mon amour."); break;
                    case 2: message.channel.send("Je vous aime Theya. :heart:"); break;
                    case 3: message.channel.send("I will remain with you—no matter the circumstances."); break;
                    case 4: message.channel.send("Theya j'ai eu un coup de foudre pour vous."); break;
                    case 5: message.channel.send("Theya vous êtes aussi lumineuse que la foudre."); break;
                }
            }

        }

    }

});

client.login(token);
