import PrazdnikiPoster from '@/assets/prazdniki.png';
import Meg2Poster from '@/assets/meg2.png';
import ZalozhnikiPoster from '@/assets/zhalozhniki.png';     
import LediPoster from '@/assets/ledi.png';

export const movies = [
  {
    id: 1,
    title: 'Праздники',
    age: '12+',
    genres: ['комедия'],
    poster: PrazdnikiPoster,
    isPremiere: true,
    sessions: [
      { time: '15:35', hall: 'Зал 2', price: 1700 },
      { time: '17:40', hall: 'Зал 3', price: 3080 },
      { time: '19:15', hall: 'Зал 4', price: 1700 },
      { time: '21:05', hall: 'Зал 3', price: 1700 },
      { time: '21:40', hall: 'Зал 4', price: 3080 },
      { time: '22:45', hall: 'Зал 3', price: 1700 },
    ],
  },
  {
    id: 2,
    title: 'Мег 2: Бездна',
    age: '16+',
    genres: ['экшн', 'триллер'],
    poster: Meg2Poster,
    isPremiere: false,
    sessions: [
      { time: '15:35', hall: 'Зал 2', price: 4000 },
      { time: '17:40', hall: 'Зал 2', price: 3080 },
      { time: '19:15', hall: 'Зал 3', price: 1700 },
    ],
  },
  {
    id: 3,
    title: 'Заложники',
    age: '16+',
    genres: ['драма', 'триллер'],
    poster: ZalozhnikiPoster,
    isPremiere: false,
    sessions: [
      { time: '16:10', hall: 'Зал 1', price: 4030 },
      { time: '21:30', hall: 'Зал 1', price: 3080 },
    ],
  },
  {
    id: 4,
    title: 'Леди Баг и Супер-Кот: Пробуждение силы',
    age: '6+',
    genres: ['фентези', 'боевик', 'мелодрама', 'мультфильм', 'комедия'],
    poster: LediPoster,
    isPremiere: false,
    sessions: [
      { time: '16:10', hall: 'Зал 1', price: 4030 },
      { time: '21:30', hall: 'Зал 1', price: 3080 },
    ],
  },
]
