 function getCurrenciesQuery() {
    return '{                \
      storeConfig            \
      {                      \
        id                   \
        code                 \
        website_id           \
      }                      \
    }';
  }

    export default { getCurrenciesQuery }