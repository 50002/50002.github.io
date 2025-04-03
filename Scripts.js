
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
    
    document.getElementById("demo").innerHTML = result;
  }