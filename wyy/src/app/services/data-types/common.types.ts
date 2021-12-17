//轮播图
export type Banner = {
  targetId: number,
  url: string,
  imageUrl: string,
}
//热门标签
export type HotTag = {
  id: number,
  name: string,
  position: number,
}
//歌单
export type SongSheet = {
  playCount: number,
  picUrl: string,
  id: number,
  name: string,
}

//歌手
export type Singer = {
  albumSize: number,
  picUrl: string,
  id: number,
  name: string,
}