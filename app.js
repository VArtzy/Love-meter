const inama1 = document.querySelector('#nama1');
const inama2 = document.querySelector('#nama2');
const button = document.querySelector('.periksa');
const loading = document.querySelector('.loading');
const text1 = document.querySelector('#nama-pertama');
const text2 = document.querySelector('#nama-kedua');
const persen = document.querySelector('#persen');
const besaran = document.querySelector('#besaran');
const deskripsi = document.querySelector('#deskripsi');
const a1 = document.querySelector('.A1');
const a2 = document.querySelector('.A2');
const arr1 = document.querySelector('.arr1');
const arr2 = document.querySelector('.arr2');
const waktu_load = [1000, 2000, 3000, 4000, 5000];
const besarans = ['KWH', 'CM', 'Joule', 'N', 'M', 'm/s', 'm/s^2', 'mm', 's', 'J/s']
const q2q = document.querySelector('.Q2Q');
const footer = document.querySelector('footer');

function getPersen() {
    return Math.round(Math.random() * 100)
}

function getBesaran() {
    return `${Math.round(Math.random() * 1000)} ${besarans[Math.floor(Math.random()*besarans.length)]}`
}

function getDeskripsi(persen) {
    if(persen <= 10) {
        return 'Kamu tidak cocok untuk dia, silahkan cari yang lain! Kemungkinan penolakan: 99.9%.'
    } else if (persen > 10 && persen < 20) {
        return 'Mungkin ada rasa, tapi tak sejalan :(. Kemungkinan penolakan: 89%.'
    } else if (persen >= 20 && persen < 30) {
        return 'Tidak usah berkorban banyak, sudah pasti buka milikmu. Kemungkinan penolakan 77%.'
    } else if (persen >= 30 && persen < 40) {
        return 'Kamu bisa mendapatkannya, tetapi memerlukan effort lebih. Kemungkinan penolakan 69%.'
    } else if (persen >= 40 && persen < 50) {
        return 'Bisa jadi, semangat untuk mendapatkannya. Kemungkinan penolakan 50%.'
    } else if (persen >= 50 && persen < 60) {
        return 'Mungkin bisa jadi (?), sehidup semati. Kemungkinan penolakan 42%.'
    } else if (persen >= 60 && persen < 70) {
        return 'Hampir sempurna, berikan perhatian lebih. Kemungkinan penolakan 36%.'
    } else if (persen >= 70 && persen < 80) {
        return 'Sempurna! bisa jadi nih... (or is it?). Kemungkinan penolakan 25%.'
    } else if (persen >= 80 && persen < 90) {
        return 'Pasti cinta! can you feel it??? Kemungkinan penolakan 10%.'
    } else if (persen >= 90) {
        return 'Dia sangat menyukaimu! beritahu ia bahwa kamu suka dengannya. Kemungkinan penolakan: 0.98%.'
    } else {
        return 'tidak terdeteksi persen'
    }
}

function getQ1(persen) {
    if(persen < 50) {
        return 'Tidak'
    } else {
        return 'Ya'
    }
}

function getQ2(persen, nama1, nama2) {
    if(persen < 50) {
        return `${nama1} dan ${nama2} bukanlah 'Soulmates'...`
    } else {
        return `${nama1} dan ${nama2} adalah 'Soulmates'!`
    }
}

function animPersen(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.textContent = `${Math.floor(progress * (end - start) + start)}%`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }  

function reset() {
    inama1.value = ''
    inama2.value = ''
}

button.addEventListener('click', () => {
    document.getElementById("meteran").scrollIntoView({behavior: 'smooth'})
    let nama1 = inama1.value
    let nama2 = inama2.value
    if (!nama1 || !nama2) {alert('Tolong mengisikan kedua nama dahulu sebelum melakukan test love meter!'); return;}
    if (nama1 === nama2) {alert(`'Setiap orang pasti mencintai dirinya sendiri :3' - Anonim`); return;}
    if (nama1.length > 27 || nama2.length > 27) {alert(`'Nama terlalu panjang! Coba gunakan nama yang lebih pendek seperti panggilan/username!`); return;}
    let persens = getPersen()
    loading.classList.add('appear')
    setTimeout(() => {
    loading.classList.remove('appear')
    text1.textContent = nama1
    text2.textContent = nama2
    animPersen(persen, 0, persens, (10 * persens))
    besaran.textContent = `Menyukai sebesar: ${getBesaran()}`
    deskripsi.textContent = getDeskripsi(persens)
    q2q.textContent = `Ketahui bahwa ${nama1} dan ${nama2} adalah 'Soulmates'`
    a1.textContent = `${getQ1(persens)}`
    a2.textContent = `${getQ2(persens, nama1, nama2)}`
    reset()
    }, waktu_load[Math.floor(Math.random()*waktu_load.length)])
})

arr1.addEventListener('click', () => {
    a1.classList.toggle('appear');
})
arr2.addEventListener('click', () => {
    a2.classList.toggle('appear');
})

// resize event listener to detect change in screen height
window.addEventListener("resize", (e) => {
    footer.style.display = 'none';
  });