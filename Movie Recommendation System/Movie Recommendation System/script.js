// Script for index.html
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const recommendBtn = document.getElementById('recommend-btn');

    function showQuestion(questionId) {
        const questions = document.querySelectorAll('.question');
        questions.forEach(question => {
            if (question.id === questionId) {
                question.classList.add('active');
            } else {
                question.classList.remove('active');
            }
        });
    }

    function handleNextButtonClick(nextQuestionId) {
        const nextBtn = document.querySelector(`[data-next="${nextQuestionId}"]`);
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                showQuestion(nextQuestionId);
            });
        }
    }

    handleNextButtonClick('question-2');
    handleNextButtonClick('question-3');
    handleNextButtonClick('question-4');
    handleNextButtonClick('question-5');
    handleNextButtonClick('question-6');

    recommendBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const preferredGenre = document.getElementById('preferred-genre').value;
        const preferredYear = document.getElementById('preferred-year').value;
        const preferredRating = document.getElementById('preferred-rating').value;
        const preferredIndustry = document.getElementById('preferred-industry').value;

        const queryParams = new URLSearchParams({
            genre: preferredGenre,
            year: preferredYear,
            rating: preferredRating,
            industry: preferredIndustry
        });

        window.location.href = `recommendations.html?${queryParams.toString()}`;
    });

    showQuestion('question-1');
});
