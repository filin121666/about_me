import { Component, OnInit, OnDestroy, ElementRef, ViewChild, inject } from '@angular/core';
import { PageTitleComponent } from '../components/page-title/page-title.component';
import { PageTitleService } from '../services/page-title.service';

@Component({
    standalone: true,
    imports: [PageTitleComponent],
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
})

export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild('slides', { static: true }) slides!: ElementRef<HTMLDivElement>;
    @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;

    currentIndex = 0;
    autoPlayInterval: any;
    private pageTitleService = inject(PageTitleService);

    photos = [
        {
            avif: 'https://cdn.jsdelivr.net/gh/filin121666/about_me@gh-pages/my_photo1/my_photo1.avif',
            webp: 'https://cdn.jsdelivr.net/gh/filin121666/about_me@gh-pages/my_photo1/my_photo1.webp',
            jpg: 'https://cdn.jsdelivr.net/gh/filin121666/about_me@gh-pages/my_photo1/my_photo1.jpg',
            alt: 'my photo 1',
        },
        {
            avif: 'https://cdn.jsdelivr.net/gh/filin121666/about_me@gh-pages/my_photo2/my_photo2.avif',
            webp: 'https://cdn.jsdelivr.net/gh/filin121666/about_me@gh-pages/my_photo2/my_photo2.webp',
            jpg: 'https://cdn.jsdelivr.net/gh/filin121666/about_me@gh-pages/my_photo2/my_photo2.jpg',
            alt: 'my photo 2',
        }
    ];

    async ngOnInit() {
        this.pageTitleService.setPageTitle('home');
        this.startAutoPlay();
        window.addEventListener('resize', () => {
            this.goToSlide(this.currentIndex);
        });
    }

    ngOnDestroy() {
        this.stopAutoPlay();;
        window.removeEventListener('resize', () => {
            this.goToSlide(this.currentIndex);
        });
    }

    goToSlide(index: number) {
        const slideCount = this.photos.length;
        
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }

        this.currentIndex = index;
        if (this.slides && this.slider) {
            const slideWidth = this.slider.nativeElement.offsetWidth;
            this.slides.nativeElement.style.transform = `translateX(${-index * slideWidth}px)`;
        }
    }

    goToPrev() {
        this.goToSlide(this.currentIndex - 1);
    }

    goToNext() {
        this.goToSlide(this.currentIndex + 1);
    }

    startAutoPlay() {
        this.stopAutoPlay();
        
        this.autoPlayInterval = setInterval(() => {
            this.goToSlide(this.currentIndex + 1);
        }, 8000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    onMouseEnter(event?: Event) {
        this.stopAutoPlay();
    }

    onMouseLeave(event?: Event) {
        this.startAutoPlay();
    }

    onPhotoClick() {
        this.goToNext();
    }
}