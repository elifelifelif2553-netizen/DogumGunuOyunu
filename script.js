function basla() {

    document.querySelector(".oyun").innerHTML = `

        <h1>❤️ Bölüm 1</h1>

        <h2>Beni ne kadar tanıyorsun?</h2>

        <p>
            Bakalım beni ne kadar iyi tanıyorsun. 😏
        </p>

        <button onclick="soru1()">
            Başlayalım ❤️
        </button>

    `;

}
function soru1() {

    document.querySelector(".oyun").innerHTML = `

        <h1>❤️ Soru 1</h1>

        <h2>İlk konuştuğumuzda bende dikkatini çeken neydi?</h2>

        <button onclick="dogruCevap()">
            Kalbimin iyi olması ❤️
        </button>

        <button onclick="yanlisCevap()">
            Gülüşüm 😊
        </button>

        <button onclick="yanlisCevap()">
            Sesim 🎵
        </button>

    `;

}
function dogruCevap() {

    document.querySelector(".oyun").innerHTML = `

        <h1>🎉 Doğru!</h1>

        <p>
            Beni gerçekten tanıyorsun. ❤️
        </p>

        <p>
            +1 ❤️
        </p>

        <button onclick="soru2()">
            Sonraki Soru ➡️
        </button>

    `;

}
function yanlisCevap() {

    document.querySelector(".oyun").innerHTML = `

        <h1>😏 Hmm...</h1>

        <p>
            O cevap değildi ama olsun. ❤️
        </p>

        <button onclick="soru1()">
            Tekrar Dene 🔄
        </button>

    `;

}
function soru2() {

    document.querySelector(".oyun").innerHTML = `

        <h1>❤️ Soru 2</h1>

        <h2>Birlikte en çok yapmak istediğimiz şey ne?</h2>

        <button onclick="dogruCevap2()">
            Birbirimize sarılmak 🤗❤️
        </button>

        <button onclick="yanlisCevap2()">
            Mutlu olmak 😊
        </button>

        <button onclick="yanlisCevap2()">
            Seyahat etmek ✈️
        </button>

    `;

}
function dogruCevap2() {

    document.querySelector(".oyun").innerHTML = `

        <h1>🥹 Doğru!</h1>

        <p>
            İşte bunu bilmeni bekliyordum. ❤️
        </p>

        <p>
            +1 ❤️
        </p>

        <button onclick="soru3()">
            Sonraki Soru ➡️
        </button>

    `;

}
function yanlisCevap2() {

    document.querySelector(".oyun").innerHTML = `

        <h1>😏 Olmadı!</h1>

        <p>
            Biraz daha düşün bakalım. ❤️
        </p>

        <button onclick="soru2()">
            Tekrar Dene 🔄
        </button>

    `;

}
function soru3() {

    document.querySelector(".oyun").innerHTML = `

        <h1>❤️ Soru 3</h1>

        <h2>Benim en sevdiğim şeylerden biri ne?</h2>

        <button onclick="dogruCevap3()">
            Seninle konuşmak ❤️
        </button>

        <button onclick="yanlisCevap3()">
            Senden iltifat almak 😏
        </button>

        <button onclick="yanlisCevap3()">
            Bana sinirlenmemen 😂
        </button>

    `;

}
function dogruCevap3() {

    document.querySelector(".oyun").innerHTML = `

        <h1>🎉 Tebrikler! ❤️</h1>

        <p>
            Bütün soruları tamamladın.
        </p>

        <p>
            ❤️ ❤️ ❤️
        </p>

        <p>
            Ama macera daha yeni başlıyor... 😏
        </p>

        <button onclick="bolum2()">
            Bölüm 2'ye Geç 🎮
        </button>

    `;

}
function yanlisCevap3() {

    document.querySelector(".oyun").innerHTML = `

        <h1>😂 Yanlış!</h1>

        <p>
            Gerçekten bunu mu düşündün? 😏❤️
        </p>

        <button onclick="soru3()">
            Tekrar Dene 🔄
        </button>

    `;

}
let kalpSayisi = 0;

function bolum2() {

    kalpSayisi = 0;

    document.querySelector(".oyun").innerHTML = `

        <h1>❤️ Bölüm 2</h1>

        <h2>Kalpleri Yakala!</h2>

        <p>
            Ekranda çıkan 10 kalbi yakala. 😏
        </p>

        <p id="sayac">
            ❤️ 0 / 10
        </p>

        <div id="oyunAlani"></div>

    `;

    kalpOlustur();

}
function kalpOlustur() {

    const oyunAlani = document.getElementById("oyunAlani");

    const kalp = document.createElement("div");

    kalp.innerHTML = "❤️";

    kalp.classList.add("yakalanacakKalp");

    kalp.style.left = Math.random() * 80 + "%";

    kalp.style.top = Math.random() * 70 + "%";

    kalp.onclick = function() {

        kalpSayisi++;

        document.getElementById("sayac").innerHTML =
            "❤️ " + kalpSayisi + " / 10";

        kalp.remove();

        if (kalpSayisi < 10) {

            kalpOlustur();

        } else {

            bolum2Tamamlandi();

        }

    };

    oyunAlani.appendChild(kalp);

}
function bolum2Tamamlandi() {

    document.querySelector(".oyun").innerHTML = `

        <h1>🎉 Başardın!</h1>

        <p>
            Bütün kalpleri yakaladın. ❤️
        </p>

        <p>
            Ama şimdi daha zor bir şey var... 😏
        </p>

        <button onclick="bolum3()">
            Bölüm 3'e Geç 🔐
        </button>

    `;

}
function bolum3() {

    document.querySelector(".oyun").innerHTML = `

        <h1>🔐 Bölüm 3</h1>

        <h2>Şifreyi Bul</h2>

        <p>
            Bizim için özel olan 4 haneli şifreyi bul bakalım. 😏❤️
        </p>

        <input 
            type="number" 
            id="sifre"
            placeholder="Şifreyi gir"
        >

        <br><br>

        <button onclick="sifreKontrol()">
            🔓 Aç
        </button>

        <p id="sifreMesaji"></p>

    `;
}

function sifreKontrol() {

    const sifre = document.getElementById("sifre").value;

    if (sifre === "2504") {

        finalEkrani();

    } else {

        document.getElementById("sifreMesaji").innerHTML =
            "😏 Hmm... Yanlış şifre. Biraz daha düşün ❤️";

    }

}

function finalEkrani() {

    document.querySelector(".oyun").innerHTML = `

        <div class="final">

            <div class="finalKalpler">
                ❤️ 💕 ❤️ 💗 ❤️
            </div>

            <h1>🎉 Oyunu tamamladın! 🎉</h1>

            <p>
                Ama aslında bütün bunların tek bir amacı vardı...
            </p>

            <h2>🎂 İYİ Kİ DOĞDUN SEVGİLİM ❤️</h2>
<img 
    src="fotograf.jpg" 
    class="finalFoto"
    alt="❤️"
>
           <p class="ozelMesaj">
    Seni herkesten ve her şeyden çok seviyorum. ❤️
    <br><br>
   İyi ki hayatımdasın, iyi ki yollarımız kesişmiş. <br> Sen benim en güzel tesadüfümsün. 🥹❤️ <br><br> İyi ki doğdun sevgilim. <br> İyi ki varsın, iyi ki benimlesin. ❤️ <br><br> Seni çok seviyorum. 🎂❤️
</p>

    <br>

<button onclick="location.reload()">
    🔄 Tekrar Oyna ❤️
</button>
            <button id="muzikButonu" onclick="muzigiBaslat()">
    🎵 Müziği Başlat
</button>

        </div>

    `;

}
let muzik = null;

function muzigiBaslat() {

    if (muzik === null) {

        muzik = new Audio("Buray_-_Sen_Sevda_misin_-_www.BiG.AZ.mp3");

        muzik.loop = true;

        muzik.volume = 0.5;

    }

    muzik.play()
        .then(() => {

            document.getElementById("muzikButonu").innerHTML =
                "🎵 Müzik Çalıyor ❤️";

        })
        .catch(() => {

            document.getElementById("muzikButonu").innerHTML =
                "🎵 Müziği Başlat";

        });

}
function girisKontrol() {

    const sifre = document.getElementById("girisSifresi").value;

    if (sifre === "1808") {

        document.getElementById("sifreEkrani").style.display = "none";

    } else {

        document.getElementById("girisMesaji").innerHTML =
            "😏 Hmm... Bu şifre değil. Tekrar dene ❤️";

    }

}