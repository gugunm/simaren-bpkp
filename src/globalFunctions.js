export const func = {
  convertToRupiah: (payload) => {
    let rupiah = ''
    if (payload) {
      const angkarev = payload.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ','
      return (
        'Rp ' +
        rupiah
          .split('', rupiah.length - 1)
          .reverse()
          .join('')
      )
    }
    return 'Rp 0'
  },

  rupiahToNumber: (payload) => {
    return Number(payload.replace(/[^0-9.-]+/g, ''))
  },

  isGanjil(value) {
    return value % 2 == 1 ? true : false
  },

  isGenap(value) {
    return value % 2 == 0 ? true : false
  },

  isNullOfObjElement(obj) {
    return !Object.values(obj).some((element) => element == null)
  },

  isNipAllowToAdd() {
    const nipUserLogin = localStorage.getItem('nipbaru')
    const nipBaru = [
      {
        nipBaru: '19980101 202012 1 003',
        nama: 'Gugun Mediamer',
      },
      {
        nipBaru: '19920916 202012 1 007',
        nama: 'Amzar',
      },
      {
        nipBaru: '19841026 200602 1 003',
        nama: 'Galih',
      },
      {
        nipBaru: '19840325 200602 1 004',
        nama: 'Sholih',
      },
      {
        nipBaru: '19890110 201012 1 001',
        nama: 'Janson',
      },
      {
        nipBaru: '19860212 200701 1 004',
        nama: 'Alex',
      },
      {
        nipBaru: '19900704 201212 2 001',
        nama: 'Aulya',
      },
      {
        nipBaru: '19900704 201502 1 002',
        nama: 'Guntur',
      },
      {
        nipBaru: '19920312 201402 2 003',
        nama: 'Seya',
      },
    ]

    const listOfNipBaru = nipBaru.map((data) => {
      return data.nipBaru == nipUserLogin ? true : false
    })

    return listOfNipBaru.some((element) => element == true)
  },
}
