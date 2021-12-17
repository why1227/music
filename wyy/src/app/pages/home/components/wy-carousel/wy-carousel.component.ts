import { Component, Input, OnInit, Output, TemplateRef, ViewChild, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WyCarouselComponent implements OnInit {
  @ViewChild('dot', { static: false }) dotRef: TemplateRef<any> | undefined;
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  constructor() { }

  ngOnInit(): void {
  }
  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type);
  }
}
