export const state = () => ({
  ratesApiUrl: 'https://www.cbr-xml-daily.ru/daily_json.js',
  currencies: [],
  currencyNamesByCode: {
    AUD: 'Австралийский доллар',
    AZN: 'Азербайджанский манат',
    GBP: 'Фунт стерлингов Соединенного королевства',
    AMD: 'Армянский драм',
    BYN: 'Белорусский рубль',
    BGN: 'Болгарский лев',
    BRL: 'Бразильский реал',
    HUF: 'Венгерский форинт',
    HKD: 'Гонконгский доллар',
    DKK: 'Датская крона',
    USD: 'Доллар США',
    EUR: 'Евро',
    INR: 'Индийская рупия',
    KZT: 'Казахстанский тенге',
    CAD: 'Канадский доллар',
    KGS: 'Киргизский сом',
    CNY: 'Китайский юань',
    MDL: 'Молдавский лей',
    NOK: 'Норвежская крона',
    PLN: 'Польский злотый',
    RON: 'Румынский лей',
    XDR: 'СДР (специальные права заимствования)',
    SGD: 'Сингапурский доллар',
    TJS: 'Таджикский сомони',
    TRY: 'Турецкая лира',
    TMT: 'Новый туркменский манат',
    UZS: 'Узбекский сум',
    UAH: 'Украинская гривна',
    CZK: 'Чешская крона',
    SEK: 'Шведская крона',
    CHF: 'Швейцарский франк',
    ZAR: 'Южноафриканский рэнд',
    KRW: 'Южнокорейская вона',
    JPY: 'Японская иена',
  },
});

const normalize = (str) => str.toLowerCase();

export const getters = {
  getCurrencies({ currencies }) {
    return currencies;
  },

  getCurrencyByInput: ({ currencies }) => (input) => {
    if (input.length < 3) return null;

    const ni = normalize(input);

    return currencies.find(
      c => (normalize(c.charCode) === ni || normalize(c.name) === ni)
    );
  },
};

export const mutations = {
  setCurrencies(state, { currencies }) {
    state.currencies = currencies;
  },
};

export const actions = {
  async nuxtServerInit({ state, commit }, { $axios, error }) {
    try {
      const { Valute } = await $axios.$get(state.ratesApiUrl);
      const currencies = Object.values(Valute)
        .map(({
          ID: id,
          CharCode: code,
          Nominal: nominal,
          Value: value,
        }) => ({
          id,
          code,
          nominal,
          name: state.currencyNamesByCode[code],
          value,
          roublesPerUnit: value / nominal,
          unitsPerRouble: nominal / value,
        }));
      commit('setCurrencies', { currencies });
    } catch (e) {
      error(e);
    }
  },
};
