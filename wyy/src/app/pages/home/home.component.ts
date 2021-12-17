import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Banner, HotTag, SongSheet } from 'src/app/services/data-types/common.types';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  banners: Banner[] | undefined;
  hotTags: HotTag[] | undefined;
  songSheetList: SongSheet[] | undefined;

  carouselActiveIndex = 0;
  constructor(private homeServe: HomeService, private singerServe: SingerService) {
  }
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel!: NzCarouselComponent;
  ngOnInit(): void {
    //轮播图
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    });
    //热门标签
    this.homeServe.getHotTags().subscribe(tags => {
      this.hotTags = tags;
    });
    //推荐歌单
    this.homeServe.getPersonalSheetList().subscribe(sheets => {
      this.songSheetList = sheets;
    });
    //入驻歌手
    this.singerServe.getEnterSinger().subscribe(singers => {
      console.log(singers);
    });
  }
  onBeforeChange(e: any) {
    this.carouselActiveIndex = e.to;
  }
  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }

}
