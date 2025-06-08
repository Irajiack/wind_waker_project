document.getElementById("slider-left").addEventListener('click', function (event) 
{
    previousSlider();
});
document.getElementById("slider-left").addEventListener('keydown', function (event) 
{
    if (event.key === 'Enter') 
    {
        previousSlider();
    }
});

document.getElementById("slider-right").addEventListener('click', function (event) 
{
    nextSlider();
});

document.getElementById("slider-right").addEventListener('keydown', function (event) 
{
    if (event.key === 'Enter') 
    {
        nextSlider();
    }
});

function nextSlider()
{
    const activeElement=document.getElementsByClassName("legend-carousel__item--active")[0];
    const activeElementIndicator=document.getElementById(activeElement.id+"-indicators");
    const selectedNextSlide=document.getElementById(activeElement.getAttribute("data-nextSlider"));
    const selectedNextSlideIndicator=document.getElementById(selectedNextSlide.id+"-indicators");
    const selectedNextSlideCaption=document.getElementById(selectedNextSlide.id+"-caption");



    activeElement.classList.remove('legend-carousel__item--active');
    activeElementIndicator.classList.remove('legend-carousel__buttons--active');

    selectedNextSlide.classList.add('legend-carousel__item--active');
    selectedNextSlideIndicator.classList.add('legend-carousel__buttons--active');
    selectedNextSlideCaption.focus();

}

function previousSlider()
{
    const activeElement=document.getElementsByClassName("legend-carousel__item--active")[0];
    const activeElementIndicator=document.getElementById(activeElement.id+"-indicators");
    const selectedPreviousSlide=document.getElementById(activeElement.getAttribute("data-previousSlider"));
    const selectedPreviousSlideIndicator=document.getElementById(selectedPreviousSlide.id+"-indicators");
    const selectedPreviousSlideCaption=document.getElementById(selectedNextSlide.id+"-caption");



    activeElement.classList.remove('legend-carousel__item--active');
    activeElementIndicator.classList.remove('legend-carousel__buttons--active');

    selectedPreviousSlide.classList.add('legend-carousel__item--active');
    selectedPreviousSlideIndicator.classList.add('legend-carousel__buttons--active');
    selectedPreviousSlideCaption.focus();
}