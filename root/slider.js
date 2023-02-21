
export class Slider {
    constructor() {
        this.slideCounter = 0;
    }

    prevSlider(slider) {
        if (this.slideCounter === 0) {
            this.slideCounter = 2;
        } else {
            this.slideCounter--
        }
        slider.style.transform = `translateX(-${this.slideCounter * 33.33}%)`;
    }


    nextSlider(slider) {
        if (this.slideCounter === 2) {
            this.slideCounter = 0
        } else {
            this.slideCounter++
        }
        slider.style.transform = `translateX(-${this.slideCounter * 33.33}%)`;
    }
}

