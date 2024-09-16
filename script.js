const wapper = document.querySelector('.wapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wapperRect = wapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click',() => {
    question.innerHTML = 'ဟုတ်ကဲ့..နောက်တစ်ခါမဆိုးတော့ပါဘူးနော်..';
});
noBtn.addEventListener('click',() => {
    const i = Math.floor(Math.random() * (wapperRect.width - noBtnRect.width)) +1;
    const j = Math.floor(Math.random() * (wapperRect.height - noBtnRect.height)) +1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});