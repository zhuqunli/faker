import { Faker } from '..';
import ko from '../locales/ko';
import en from '../locales/en';

const faker = new Faker({
  locale: 'ko',
  localeFallback: 'en',
  locales: {
    ko,
    en,
  },
});

export = faker;
