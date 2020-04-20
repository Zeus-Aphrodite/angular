import { Component, OnInit } from '@angular/core';

import { Song } from './song/song';

import { SongService } from './song/song.service';

@Component({
  selector: 'app-example-services',
  templateUrl: './example-services.component.html',
  styleUrls: ['./example-services.component.css']
})
export class ExampleServicesComponent implements OnInit {

  songs: Song[];
  songSelected: Song;
  yearSelected: number;
  toto = 'JGwWNGJdvx8';

  constructor(private songService: SongService) {
    this.yearSelected = 1;
  }

  ngOnInit() {
    this.getSongs(this.yearSelected);
  }

  getSongs(year: number): void {
    this.songs = this.songService.getSongs(year);
  }

  select(song: Song) {
    this.songSelected = song;
  }

  onChange($event: any) {
    this.yearSelected = $event.target.value;
    this.songs = this.songService.getSongs(this.yearSelected);
    this.songSelected = null;
  }

}
