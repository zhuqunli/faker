import { Faker } from '..';
import hy from '../locales/hy';
import en from '../locales/en';

const faker = new Faker({
  locale: 'hy',
  localeFallback: 'en',
  locales: {
    hy,
    en,
  },
});

export = faker;
