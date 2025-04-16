
var testi = document.getElementById("123")


let recipies = {
    keksit: {
        Batch_Size: 20,
        Voi_g: 125,
        sokeri_dl: 2.5,
        muna_kpl: 1,
        Vanilijasokeri_tl: 1,
        kaneli_tl: 0.5,
        kaurahiutalaita_dl: 2.5,
        Vehnäjauhoja_dl: 2,
        leivinjauhe_tl: 0.333333333333333333333333333333
    },
    Letut: {
        Batch_Size: 60,
        muna_kpl: 3,
        Maito_dl: 6,
        Vehnäjauhoja_dl: 3,
        sokeri_rkl: 1,
        suola_tl: 1,
        juokseva_rasva: true
    },
    ritarit: {
        Batch_Size: 10,
        muna_kpl: 1,
        latte_kahvi_juoma_dl: 2,
        Vanilijasokeri_tl: 1,
        Pulla_g: 360,
        juokseva_rasva: true
    }
}
 
let Ohje = { 
    
    keksit : [{keksit: " Vaahdota huoneenlämpöinen voi ja sokeri "}, { keksit: " Sekoita joukkoon muna, vanilijasokeri ja kaneli "},{ keksit: " Lisää kuivat aineet seoksena ja sekoita taikinaksi "}, {keksit: "Leivo tangoksi ja paloittele 20-25 osaan. Pyöritä taikinapalat palloiksi ja laita ne väljästi leivinpaperille."}, {keksit: "Paista 175 asteessa uunin yläosassa n. 14 min."}, {keksit: "Jäähdytä ja tarjoa kahvipöydän herkkuina."}],
    letut : [{letut: "Vatkaa munien rakenne rikki kulhossa. Lisää taikinaan muut aineet ja vatkaa tasaiseksi. Anna turvota 30 min"}, {letut: "Paista taikinasta ohukaisia juoksevassa  rasvassa pannulla."}, {letut: "Tarjoa lisänä esim. sokeria, hilloa, sokeroitua marjasurvosta, jäätelöä tai kermavaahtoa sekä juomaksi maitoa."}],
    ritarit : [{ritarit: "Vatkaa munan rakenne rikki. Lisää maitokahvijuoma ja vaniljasokeri."},{ritarit: "Leikkaa pullapitko paksuhkoiksi viipaleiksi (10 - 12 viipaletta). Kasta pullaviipaleet muna-kahvimaidossa. Paista pullaviipaleet kauniin ruskeiksi juoksevassa rasvassa pannulla kummaltakin puolelta."},{ritarit: "Tarjoa vaahdotetun vispikerman ja kinuskikastikkeen kanssa jälkiruokana tai kahvin kanssa"},{ritarit: "Voit halutessasi tarjota Latte-ritareiden kanssa lisukkeena myös marjoja tai hedelmiä"}]
}

function myFunction() {
    var result = "";
    Ohje[document.getElementById("cars").value].forEach(function (d) {
      
      result += "<li>" + d[document.getElementById("cars").value];
});
    
    document.getElementById("demo").innerHTML = result
    Laskin()
  }

  function Laskin() {

    switch (document.getElementById("cars").value){
        case "keksit":
            document.getElementById("yes").style.display = "block"
            document.getElementById("keksikuva").style.visibility = "visible";
            document.getElementById("ritarikuva").style.visibility = "hidden";
            document.getElementById("lettukuva").style.visibility = "hidden";
            document.getElementById("aines1").style.display = "block"
            document.getElementById("aines2").style.display = "block"
            document.getElementById("aines3").style.display = "block"
            document.getElementById("aines4").style.display = "block"
            document.getElementById("aines5").style.display = "block"
            document.getElementById("aines6").style.display = "block"
            document.getElementById("aines7").style.display = "block"
            document.getElementById("aines8").style.display = "block"
            document.getElementById("aines9").style.display = "none"
            document.getElementById("aines10").style.display = "none"
            document.getElementById("aines11").style.display = "none"
            document.getElementById("aines12").style.display = "none"
 
            document.getElementById("aines01").style.display = "block"
            document.getElementById("aines21").style.display = "block"
            document.getElementById("aines31").style.display = "block"
            document.getElementById("aines41").style.display = "block"
            document.getElementById("aines51").style.display = "block"
            document.getElementById("aines61").style.display = "block"
            document.getElementById("aines71").style.display = "block"
            document.getElementById("aines81").style.display = "block"
            document.getElementById("aines91").style.display = "none"
            document.getElementById("aines101").style.display = "none"
            document.getElementById("aines111").style.display = "none"
            document.getElementById("aines121").style.display = "none"
            var a = [document.getElementById("aines1").value/125, document.getElementById("aines2").value/(2.5*20*4), document.getElementById("aines3").value/1, document.getElementById("aines4").value/(1*0.5), document.getElementById("aines5").value/(0.5*2.5), document.getElementById("aines6").value/(2.5*25), document.getElementById("aines7").value/(2*65), document.getElementById("aines8").value/(0.33*5)]
            var b = Math.min.apply(null, a)
            console.log(a)
            console.log(b)
            document.getElementById("maara").innerHTML = "Arvioitu valmistus määränne on " + String(Math.floor(b*20))
            return console.log(Math.floor(b*20));
 
        case "letut":
            document.getElementById("yes").style.display = "block"
            document.getElementById("keksikuva").style.visibility = "hidden";
            document.getElementById("ritarikuva").style.visibility = "hidden";
            document.getElementById("lettukuva").style.visibility = "visible";
            document.getElementById("aines1").style.display = "none"
            document.getElementById("aines2").style.display = "block"
            document.getElementById("aines3").style.display = "block"
            document.getElementById("aines4").style.display = "none"
            document.getElementById("aines5").style.display = "none"
            document.getElementById("aines6").style.display = "none"
            document.getElementById("aines7").style.display = "block"
            document.getElementById("aines8").style.display = "none"
            document.getElementById("aines9").style.display = "block"
            document.getElementById("aines10").style.display = "block"
            document.getElementById("aines11").style.display = "none"
            document.getElementById("aines12").style.display = "none"
 
            document.getElementById("aines01").style.display = "none"
            document.getElementById("aines21").style.display = "block"
            document.getElementById("aines31").style.display = "block"
            document.getElementById("aines41").style.display = "none"
            document.getElementById("aines51").style.display = "none"
            document.getElementById("aines61").style.display = "none"
            document.getElementById("aines71").style.display = "block"
            document.getElementById("aines81").style.display = "none"
            document.getElementById("aines91").style.display = "block"
            document.getElementById("aines101").style.display = "block"
            document.getElementById("aines111").style.display = "none"
            document.getElementById("aines121").style.display = "none"
            var c = [document.getElementById("aines2").value/(1*3*4), document.getElementById("aines3").value/3, document.getElementById("aines7").value/(3*65), document.getElementById("aines9").value/(0.6), document.getElementById("aines10").value/5]
            var d =Math.min.apply(null, c)
            console.log(c)
            console.log(d)
            document.getElementById("maara").innerHTML = "Arvioitu valmistus määränne on " + String(Math.floor(d*60))
            return console.log(Math.floor(d*60))
 
        case "ritarit":
            document.getElementById("yes").style.display = "block"
            document.getElementById("keksikuva").style.visibility = "hidden";
            document.getElementById("ritarikuva").style.visibility = "visible";
            document.getElementById("lettukuva").style.visibility = "hidden";
            document.getElementById("aines1").style.display = "none"
            document.getElementById("aines2").style.display = "none"
            document.getElementById("aines3").style.display = "block"
            document.getElementById("aines4").style.display = "block"
            document.getElementById("aines5").style.display = "none"
            document.getElementById("aines6").style.display = "none"
            document.getElementById("aines7").style.display = "none"
            document.getElementById("aines8").style.display = "none"
            document.getElementById("aines9").style.display = "none"
            document.getElementById("aines10").style.display = "none"
            document.getElementById("aines11").style.display = "block"
            document.getElementById("aines12").style.display = "block"
 
            document.getElementById("aines01").style.display = "none"
            document.getElementById("aines21").style.display = "none"
            document.getElementById("aines31").style.display = "block"
            document.getElementById("aines41").style.display = "block"
            document.getElementById("aines51").style.display = "none"
            document.getElementById("aines61").style.display = "none"
            document.getElementById("aines71").style.display = "none"
            document.getElementById("aines81").style.display = "none"
            document.getElementById("aines91").style.display = "none"
            document.getElementById("aines101").style.display = "none"
            document.getElementById("aines111").style.display = "block"
            document.getElementById("aines121").style.display = "block"
            var e = [document.getElementById("aines3").value/1, document.getElementById("aines4").value/0.5, document.getElementById("aines11").value/2, document.getElementById("aines12").value/360]
            var f = Math.min.apply(null, e)
            console.log(e)
            console.log(f)
            document.getElementById("maara").innerHTML = "Arvioitu valmistus määränne on " + String(Math.floor(f*10))
            return console.log(Math.floor(f*10))
    }
  }





