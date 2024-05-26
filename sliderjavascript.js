document.getElementById("slider-left").addEventListener('click', function (event) 
{
    previousSlider();
});

document.getElementById("slider-right").addEventListener('click', function (event) 
{
    nextSlider();
});

function nextSlider()
{
    const activeElement=document.getElementsByClassName("legend-carousel__item--active")[0];
    const activeElementIndicator=document.getElementById(activeElement.id+"-indicators");
    const selectedNextSlide=document.getElementById(activeElement.getAttribute("data-nextSlider"));
    const selectedNextSlideIndicator=document.getElementById(selectedNextSlide.id+"-indicators");



    activeElement.classList.remove('legend-carousel__item--active');
    activeElementIndicator.classList.remove('legend-carousel__buttons--active');

    selectedNextSlide.classList.add('legend-carousel__item--active');
    selectedNextSlideIndicator.classList.add('legend-carousel__buttons--active');
}

function previousSlider()
{
    const activeElement=document.getElementsByClassName("legend-carousel__item--active")[0];
    const activeElementIndicator=document.getElementById(activeElement.id+"-indicators");
    const selectedNextSlide=document.getElementById(activeElement.getAttribute("data-previousSlider"));
    const selectedNextSlideIndicator=document.getElementById(selectedNextSlide.id+"-indicators");



    activeElement.classList.remove('legend-carousel__item--active');
    activeElementIndicator.classList.remove('legend-carousel__buttons--active');

    selectedNextSlide.classList.add('legend-carousel__item--active');
    selectedNextSlideIndicator.classList.add('legend-carousel__buttons--active');
}