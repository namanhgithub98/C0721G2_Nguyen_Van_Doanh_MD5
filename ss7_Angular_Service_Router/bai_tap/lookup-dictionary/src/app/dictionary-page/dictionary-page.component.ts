import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: IWord[] = [];
  constructor(public dictionaryService: DictionaryService) {
    this.wordList = this.dictionaryService.findAll();
  }

  ngOnInit(): void {
  }

}
