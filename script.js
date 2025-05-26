const pages = document.getElementById('pages');
const recipe = document.getElementById('recipe');
const drop_down = document.getElementById('drop-down');
const drop_down_recipe = document.getElementById('drop-down-recipe');
const body = document.querySelector('body');

pages.addEventListener('click', () => {
    drop_down.classList.toggle("active");
});

recipe.addEventListener('click', () => {
    drop_down_recipe.classList.toggle("active2");
});

window.addEventListener('click', (e) => {
    if (
        !e.target.closest('.drop') &&
        !e.target.closest('#recipe') &&
        !e.target.closest('#pages')
    ) {
        drop_down.classList.remove("active");
        drop_down_recipe.classList.remove("active2");
    }
});
