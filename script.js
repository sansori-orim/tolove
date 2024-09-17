const wapper = document.querySelector('.wapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const img = document.querySelector('img');
const wapperRect = wapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click',() => {
    question.innerHTML = 'ရေးးး ပိုက်ပိုက်တေ စုထားတော့မယ်..'
    img.src = "st,small,507x507-pad,600x600,f8f8f8.jpg";
});
noBtn.addEventListener('mouseover',() => {
    const i = Math.floor(Math.random() * (wapperRect.width - noBtnRect.width)) +1;
    const j = Math.floor(Math.random() * (wapperRect.height - noBtnRect.height)) +1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
