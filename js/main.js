// Заголовки по шагам
const stepTitles = {
    1: 'Заполни инфу о себе',
    2: 'Заполни инфу о себе',
    3: 'Заполни инфу о себе',
    4: 'Заполни инфу о себе',
    5: 'Заполни инфу о себе',
    6: 'Заполни инфу о себе',
    7: 'Загрузи свою фотку'
};

function goToStep(stepNumber) {
    // Удаляем active у всех шагов
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });

    // Добавляем active нужному
    const currentStep = document.getElementById(`step-${stepNumber}`);
    if (currentStep) {
        currentStep.classList.add('active');
    }

    // Меняем заголовок
    const title = document.getElementById('form-title');
    if (title && stepTitles[stepNumber]) {
        title.textContent = stepTitles[stepNumber];
    }
}

// При загрузке страницы активируем шаг 1 (если вдруг нет)
document.addEventListener('DOMContentLoaded', () => {
    goToStep(1);
});
document.querySelectorAll('.hobby-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active'); // переключает выбранность
    });
});

const btns = document.querySelectorAll('.content__tap-btn');
const slider = document.querySelector('.content__tap-slider');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Убираем класс у всех
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Двигаем ползунок
    slider.style.transform = `translateX(${index * 102}%)`;

    // Управляем контентом
    document.querySelector('.content__information').classList.toggle('active', index === 0);
    document.querySelector('.content__reviews').classList.toggle('active', index === 1);
  });
});






const openBtn = document.getElementById('openReviewBtn');
const modal = document.getElementById('modalReview');
const closeBtn = document.getElementById('modalClose');

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Чтобы клик вне модалки тоже закрывал её
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});


