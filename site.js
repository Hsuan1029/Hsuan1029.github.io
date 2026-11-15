const titles = ["CENG0065 Applications of Digital Materials Manufacturing", "Introduction & Motivation", "Introduction & Motivation", "Methodology", "Methodology", "Algorithm", "Group Contribution (GC)", "What is SMD?", "What is SMD?", "CTST", "Validity of SMD + QM-DFT Methodology", "Methodology", "Methodology", "Algorithm", "Algorithm", "Main Results and Validation", "Main Results and Validation", "Conclusions", "Personal Highlight", "Personal Highlight", "Personal Highlight", "Reference", "Supplementary Information", "Supplementary Information Adopted from [3][9]", "Supplementary Information Adopted from [3][9]", "Supplementary Information (Adopted from [1])", "Supplementary Information (Adopted from [1])", "Supplementary Information (Adopted from [1])", "Supplementary Information (Adopted from [1])", "Supplementary Information (Adopted from [1])", "Supplementary Information (Adopted from [1])"];
let index = 0;
const slide = document.querySelector('#slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
function showSlide(change) {
 index = Math.max(0, Math.min(index + change, titles.length - 1));
 slide.src = 'assets/slides/slide-' + String(index + 1).padStart(2, '0') + '.jpg';
 slide.alt = 'Slide ' + (index + 1) + '. ' + titles[index];
 document.querySelector('#count').textContent = (index + 1) + ' / ' + titles.length;
 prev.disabled = index === 0;
 next.disabled = index === titles.length - 1;
}
prev.onclick = () => showSlide(-1);
next.onclick = () => showSlide(1);
document.querySelector('#play').onclick = () => {
 const player = document.createElement('iframe');
 player.src = 'https://www.youtube-nocookie.com/embed/KiV9a-d0rUI?autoplay=1';
 player.title = 'Observed Exposure Clearly Explained';
 player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
 player.referrerPolicy = 'strict-origin-when-cross-origin';
 document.querySelector('#video').replaceChildren(player);
 player.focus();
};
