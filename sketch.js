var documents, textColor, bgColor, fontSize, reset, spaces, boldB, val, italicB, ival, wcase, fVariant, hText
var qM, iM, spacS, countW, dotB, dotC,holder, countS, documentLLL, htmlL, drop, speech, speak, rec;
var simA, rS, ratePara, vS, volPara, stopS, add, add2, addB, symbol, font, txt, voiceSp;
var caretC, fontsD, database, ref;
function setup(){
  var firebaseConfig = {
    apiKey: "AIzaSyBNv1Z5lneIVPH6H2MjVKSNqSH8acmjtIs",
    authDomain: "tedit-9198d.firebaseapp.com",
    databaseURL: "https://tedit-9198d.firebaseio.com",
    projectId: "tedit-9198d",
    storageBucket: "tedit-9198d.appspot.com",
    messagingSenderId: "658121845865",
    appId: "1:658121845865:web:5fc25c54a086d45d4d46f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  ref = database.ref('Recent Fonts');
  //ref.on('value', gotRef);
speech = new p5.Speech("Microsoft David - English (United States)");
let lang = navigator.language || 'en-US';
rec = new p5.SpeechRec(lang, gotSpeech);
documents = select("#document");
documents.position(300,200);
qM = select("#q");
iM = select("#i");
textColor = select("#textColor");
textColor.size(100,20);
textColor.position(50,50);
bgColor = select("#bgColor");
bgColor.position(50,100);
bgColor.size(100,20);
fontSize = createSlider(12,100,12);
fontSize.position(160,50);
holder = 1;
reset = select("#reset");
reset.position(180,95);
boldB = select("#bold");
boldB.position(350,95);
italicB = select("#italic");
italicB.position(380,95);
qM.position(350,120);
iM.position(380,120);
wcase = select("#case");
wcase.position(450,95);
speak = select("#speak");
fontsD = select("#fontsD");
speak.position(260,95);
ival = 0;
val = 0;
countS = 0;
dotB = select("#dot");
dotB.position(405,120);
fVariant = createSelect();
fVariant.option("Normal");
fVariant.option("Small-caps");
fVariant.option("All-small-caps");
fVariant.option("Petite-caps");
fVariant.option("All-petite-caps");
fVariant.option("Unicase");
fVariant.option("Titling-caps");
fVariant.position(550,95);
fVariant.style("outline", "none");
spacS = createSelect();
spacS.style("outline", "none");
countW = select("#countW");
countW.position(720,95);
spacS.position(660,95);
htmlL = createP();
drop = select("#voices");
drop.position(300,50);
add = select("#add");
add.hide();
add.position(50,320);
add.size(200,30);
add2 = select("#add2");
add2.hide();
add2.position(50,370);
add2.size(200,30);
addB = select("#addB");
addB.position(50,410);
addB.hide();
symbol = select("#symbol");
symbol.position(150,415);
symbol.hide();
//documentLLL = [];
dotC = 0;
for(i=0; i<31; i+=2){
  spacS.option(i);
}
rS = select("#rate");
vS = select("#volume")
ratePara = createP();
ratePara.position(650,35);
rS.position(820,50);
vS.position(820,25);
volPara = createP();
volPara.position(650,10);
stopS = select("#stop");
stopS.position(210, 130);
txt =createFileInput(fileSelected);
txt.position(350,150);
caretC = select("#caret-color");
}

function draw(){
documents.style("caret-color", caretC.value());
txt.style("outline", "none");
txt.style("font-face", "Dubai");
hText = window.getSelection().toString();
documents.size(700,800);
speak.mousePressed(function(){
speech.setVoice(drop.value());
speech.setRate(rS.value());
speech.setVolume(vS.value());
speech.speak(documents.value());
//for(x=0; x<8000; x++){
//  setTimeout(function(){ documents.position(documents.x,documents.y+=0.05) },25)
//}
})
stopS.mousePressed(function(){
  speech.stop();
})
ratePara.html(" Speaking Speed Rate: "+rS.value());
volPara.html("Speaking Volume: "+vS.value());
//htmlL.html(hText);
spacS.style("background-color", "grey");
spacS.style("font-family", "Calibri");
fVariant.style("background-color", "grey");
fVariant.style("font-family", "Calibri");
textColor.style("border-radius", "0%");
bgColor.style("border-radius", "0%");
documents.style("color", textColor.value());
documents.style("background-color", bgColor.value());
documents.style("font-size", fontSize.value()+"px");
documentL = documents.value().split("");
documentLL = documents.value().split("");
documents.style("font-variant-caps", fVariant.value());
documents.style("text-transform", wcase.value());
documents.style("word-spacing", spacS.value()+"px");
documents.style("font-family", fontsD.value());
boldB.mousePressed(function(){
  val += 1;
})
italicB.mousePressed(function(){
  ival+=1;
})
qM.mousePressed(function(){
  documentL.push("?");
  documents.value(documentL.join(''));
})
iM.mousePressed(function(){
  documentL.push("!");
  documents.value(documentL.join(''));
})
for(i=0; i<documentL.length; i++){
  if(documentL[i]===" "|| documentL[i]==="."|| documentL[i]==="?"|| documentL[i]==="!"|| documentL[i]==="•"|| documentL[i]==="*"){
    countS++
    documentLL.pop();
  }
}
//console.log(documentLL);
//for(i=0; i<countS; i++){
//  removeS = documentLL.indexOf(" ");
  //documentLL = documentLL.splice(removeS);
//}
countW.value(documentLL.length);
if(symbol.value()==="1"){
  addB.html("Add");
}
if(symbol.value()==="2"){
  addB.html("Subtract");
}
if(symbol.value()==="3"){
  addB.html("Divide");
}
if(symbol.value()==="4"){
  addB.html("Multiply");
}


//console.log(countW.value());
//spaces = documentL.count(" ");
if(documentL.length>=1 && documentL.includes(" ") === true){
documentL[0]=documentL[0].toUpperCase();
documents.value(documentL.join(''));
}
for(i = 0; i<documentL.length; i++){
  if(documentL[i] === "i"){
    if(documentL[i-1] === " "){
      if(documentL[i+1] === "." ||documentL[i+1] === " " || documentL[i+1] === "?" ||documentL[i+1] === "!"){
        if(keyCode === 32 || keyCode === 13){
    documentL[i]="I";
    documents.value(documentL.join(''));
  }
  }
  }
  }
}
for(i = 0; i<documentL.length; i++){
  if(documentL[i-1] === " "){
    if(keyCode === 32 || keyCode === 13){
    if(documentL[i-2]==="." || documentL[i-2]==="!" || documentL[i-2]==="?"|| documentL[i-2]===" • "|| documentL[i-2]===" "){
    documentL[i]=documentL[i].toUpperCase();
    documents.value(documentL.join(''));
  }
  }
  }
}
for(i=0; i<documentL.length; i++){
  if(documentL[i-1]===" " && documentL[i]==="*" && keyCode === 32 || documentL[0]==="*"&& keyCode === 32){
    documentL[i]=" • ";
    documents.value(documentL.join(''));
  }
}
dotB.mousePressed(function(){
  dotC++;
})
addB.mousePressed(function(){
console.log(parseInt(add.value())+parseInt(add2.value()));
addB.hide();
add.hide();
add2.hide();
for(i=0; i<add.value().split("").length; i++){
documentL.pop();
}
if(symbol.value()==="1"){
documentL.push(parseFloat(add.value())+parseFloat(add2.value()));
documents.value(documentL.join(''));
}
if(symbol.value()==="2"){
documentL.push(parseFloat(add.value())-parseFloat(add2.value()));
documents.value(documentL.join(''));
addB.html("Subtract");
}
if(symbol.value()==="3"){
documentL.push(parseFloat(add.value())/parseFloat(add2.value()));
documents.value(documentL.join(''));
addB.html("Divide");
}
if(symbol.value()==="4"){
documentL.push(parseFloat(add.value())*parseFloat(add2.value()));
documents.value(documentL.join(''));
addB.html("Multiply");
}
symbol.hide();
})

if(val%2 !== 0){
  documents.style("fontWeight", "1000");
  boldB.style("background-color", "grey");
}
else{
  documents.style("fontWeight", "400");
  boldB.style("background-color", "white");
}
if(ival%2 !== 0){
  documents.style("font-style", "italic");
  italicB.style("background-color", "grey");
}
else{
  documents.style("font-style", "normal");
  italicB.style("background-color", "white");
}
}
function gotSpeech(){
  if(rec.resultValue === true){
    documents.value(document.value()+rec.resultString);

  }
  console.log(rec.resultString);
}
function keyPressed(event){
  if(event.ctrlKey && event.altKey){
    speech.speak(hText);
  }
  else if(isNaN(hText)===false && keyCode===18){
    add.show();
    add2.show();
    addB.show();
    symbol.show();
    add.value(hText);
    for(i=0; i<documentL.length; i++){
      if(documentL[i]===add.value()){
        documentL.pop();
      }
    }
    documents.value(documentL.join(''));
  }
}
function fileSelected(file){
  documents.value(file.data);
}
