import { Faker } from '..';
import de_CH from '../locales/de_CH';
import en from '../locales/en';

const faker = new Faker({
  locale: 'de_CH',
  localeFallback: 'en',
  locales: {
    de_CH,
    en,
  },
});

export = faker;
