import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs

export default {
  methods: {
    exportPdf() {
      switch (this.selectedJenis.id) {
        case 1:
          this.exportSektor()
          break
        case 2:
          this.exportTema()
          break
        case 3:
          this.exportTopik()
          break
        case 4:
          this.exportKontributor()
          break
        case 5:
          this.exportKap()
          break
        case 6:
          this.exportPkpt()
          break
      }
    },

    exportSektor() {
      this.loading = true
      const dataShow = this.jsonData.map((data) => {
        return [
          {
            text: data.idSektor,
          },
          {
            text: data.namaSektor,
            // fontSize: 8,
          },
          {
            text: data.deskripsi,
          },
          {
            text: data.pjDeputi,
          },
          {
            text: data.unitKerja,
          },
          {
            text: data.triwulan,
          },
        ]
      })

      dataShow.unshift([
        {
          text: 'Id Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Informasi Sektor Yang Diharapkan',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Kedeputian Koord Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Unit Kerja PJ Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'TW Pelaporan Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
      ])

      const docDef = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [17, 50, 17, 30],
        header: [
          {
            text: `${this.selectedJenis.deskripsi} - ${this.selectedUnitKerja.alias}`,
            fontSize: 14,
            bold: true,
            margin: [17, 20, 0, 3],
          },
        ],

        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text:
                  'Tanggal Cetak : ' +
                  new Date().toLocaleString('id') +
                  ' / oleh : ' +
                  localStorage.namaUser.split(' ').slice(0, 2).join(' ') +
                  ' (' +
                  localStorage.namaUnit +
                  ')',
                margin: [17, 0, 0, 0],
                fontSize: 7,
              },
              {
                text:
                  'halaman ke ' + currentPage.toString() + ' dari ' + pageCount,
                alignment: 'right',
                margin: [0, 0, 40, 0],
                fontSize: 7,
              },
            ],
          }
        },

        content: [
          {
            style: 'tableExample',
            color: '#444',
            fontSize: 9,
            table: {
              widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
              headerRows: 1,
              keepWithHeaderRows: 1,
              body: dataShow,
            },
            layout: {
              hLineWidth: function () {
                return 0.5
              },
              vLineWidth: function () {
                return 0
              },
              fillColor: function (rowIndex) {
                return rowIndex % 2 === 0 && rowIndex > 1 ? '#eeeeee' : null
              },
              paddingTop: function () {
                return 4
              },
              paddingBottom: function () {
                return 4
              },
            },
          },
        ],
      }

      this.loading = false

      pdfMake.createPdf(docDef).open()
    },

    exportTema() {
      this.loading = true
      const dataShow = this.jsonData.map((data) => {
        return [
          {
            text: data.idSektor,
          },
          {
            text: data.namaSektor,
            // fontSize: 8,
          },
          {
            text: data.idTema,
          },
          {
            text: data.namaTema,
          },
          {
            text: data.deskripsi,
          },
          {
            text: data.pjDeputi,
          },
          {
            text: data.unitKerja,
          },
          {
            text: data.triwulan,
          },
        ]
      })

      dataShow.unshift([
        {
          text: 'Id Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Id Tema',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Tema',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Informasi Tema Yang Diharapkan',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Kedeputian Koord Tema',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Unit Kerja PJ Tema',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'TW Pelaporan Tema',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
      ])

      const docDef = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [17, 50, 17, 30],
        header: [
          {
            text: `${this.selectedJenis.deskripsi} - ${this.selectedUnitKerja.alias}`,
            fontSize: 14,
            bold: true,
            margin: [17, 20, 0, 3],
          },
        ],

        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text:
                  'Tanggal Cetak : ' +
                  new Date().toLocaleString('id') +
                  ' / oleh : ' +
                  localStorage.namaUser.split(' ').slice(0, 2).join(' ') +
                  ' (' +
                  localStorage.namaUnit +
                  ')',
                margin: [17, 0, 0, 0],
                fontSize: 7,
              },
              {
                text:
                  'halaman ke ' + currentPage.toString() + ' dari ' + pageCount,
                alignment: 'right',
                margin: [0, 0, 40, 0],
                fontSize: 7,
              },
            ],
          }
        },

        content: [
          {
            style: 'tableExample',
            color: '#444',
            fontSize: 9,
            table: {
              widths: [
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
              ],
              headerRows: 1,
              keepWithHeaderRows: 1,
              body: dataShow,
            },
            layout: {
              hLineWidth: function () {
                return 0.5
              },
              vLineWidth: function () {
                return 0
              },
              fillColor: function (rowIndex) {
                return rowIndex % 2 === 0 && rowIndex > 1 ? '#eeeeee' : null
              },
              paddingTop: function () {
                return 4
              },
              paddingBottom: function () {
                return 4
              },
            },
          },
        ],
      }

      this.loading = false

      pdfMake.createPdf(docDef).open()
    },

    exportTopik() {
      this.loading = true
      const dataShow = this.jsonData.map((data) => {
        return [
          {
            text: data.idSektor,
          },
          {
            text: data.namaSektor,
            // fontSize: 8,
          },
          {
            text: data.idTema,
          },
          {
            text: data.namaTema,
          },
          {
            text: data.idTopik,
          },
          {
            text: data.namaTopik,
          },
          {
            text: data.deskripsi,
          },
          {
            text: data.pjDeputi,
          },
          {
            text: data.unitKerja,
          },
          {
            text: data.triwulan,
          },
        ]
      })

      dataShow.unshift([
        {
          text: 'Id Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Sektor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Id Tema',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Tema',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Id Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Informasi Topik Yang Diharapkan',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Kedeputian Koord Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Unit Kerja PJ Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'TW Pelaporan Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
      ])

      const docDef = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [17, 50, 17, 30],
        header: [
          {
            text: `${this.selectedJenis.deskripsi} - ${this.selectedUnitKerja.alias}`,
            fontSize: 14,
            bold: true,
            margin: [17, 20, 0, 3],
          },
        ],

        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text:
                  'Tanggal Cetak : ' +
                  new Date().toLocaleString('id') +
                  ' / oleh : ' +
                  localStorage.namaUser.split(' ').slice(0, 2).join(' ') +
                  ' (' +
                  localStorage.namaUnit +
                  ')',
                margin: [17, 0, 0, 0],
                fontSize: 7,
              },
              {
                text:
                  'halaman ke ' + currentPage.toString() + ' dari ' + pageCount,
                alignment: 'right',
                margin: [0, 0, 40, 0],
                fontSize: 7,
              },
            ],
          }
        },

        content: [
          {
            style: 'tableExample',
            color: '#444',
            fontSize: 9,
            table: {
              widths: [
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
              ],
              headerRows: 1,
              keepWithHeaderRows: 1,
              body: dataShow,
            },
            layout: {
              hLineWidth: function () {
                return 0.5
              },
              vLineWidth: function () {
                return 0
              },
              fillColor: function (rowIndex) {
                return rowIndex % 2 === 0 && rowIndex > 1 ? '#eeeeee' : null
              },
              paddingTop: function () {
                return 4
              },
              paddingBottom: function () {
                return 4
              },
            },
          },
        ],
      }

      this.loading = false

      pdfMake.createPdf(docDef).open()
    },

    exportKontributor() {
      const dataShow = this.jsonData.map((data) => {
        return [
          {
            text: data.idTopik,
          },
          {
            text: data.namaTopik,
          },
          {
            text: data.idKontributor,
          },
          {
            text: data.unitKontributor,
          },
          {
            text: data.deskripsi,
          },
          {
            text: data.pjDeputi,
          },
          {
            text: data.unitKerja,
          },
          {
            text: data.triwulan,
          },
        ]
      })

      dataShow.unshift([
        {
          text: 'Id Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Id Kontributor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Unit Kerja Kontributor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Informasi Kontributor Yang Diharapkan',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Kedeputian Koord Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Unit Kerja PJ Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'TW Pelaporan Kontributor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
      ])

      const docDef = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [17, 50, 17, 30],
        header: [
          {
            text: `${this.selectedJenis.deskripsi} - ${this.selectedUnitKerja.alias}`,
            fontSize: 14,
            bold: true,
            margin: [17, 20, 0, 3],
          },
        ],

        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text:
                  'Tanggal Cetak : ' +
                  new Date().toLocaleString('id') +
                  ' / oleh : ' +
                  localStorage.namaUser.split(' ').slice(0, 2).join(' ') +
                  ' (' +
                  localStorage.namaUnit +
                  ')',
                margin: [17, 0, 0, 0],
                fontSize: 7,
              },
              {
                text:
                  'halaman ke ' + currentPage.toString() + ' dari ' + pageCount,
                alignment: 'right',
                margin: [0, 0, 40, 0],
                fontSize: 7,
              },
            ],
          }
        },

        content: [
          {
            style: 'tableExample',
            color: '#444',
            fontSize: 9,
            table: {
              widths: [
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
              ],
              headerRows: 1,
              keepWithHeaderRows: 1,
              body: dataShow,
            },
            layout: {
              hLineWidth: function () {
                return 0.5
              },
              vLineWidth: function () {
                return 0
              },
              fillColor: function (rowIndex) {
                return rowIndex % 2 === 0 && rowIndex > 1 ? '#eeeeee' : null
              },
              paddingTop: function () {
                return 4
              },
              paddingBottom: function () {
                return 4
              },
            },
          },
        ],
      }

      pdfMake.createPdf(docDef).open()
    },

    exportKap() {
      const dataShow = this.jsonData.map((data) => {
        return [
          {
            text: data.idKap,
          },
          {
            text: data.namaKap,
          },
          {
            text: data.unitKerjaKap,
          },
          {
            text: data.idTopik,
          },
          {
            text: data.namaTopik,
          },
          {
            text: data.deskripsi,
          },
          {
            text: data.kontributors,
          },
        ]
      })

      dataShow.unshift([
        {
          text: 'Id Kap',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Kap',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Unit Kerja',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Id Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama Topik',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Informasi Yang Diharapkan',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Kontributor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
      ])

      const docDef = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [17, 50, 17, 30],
        header: [
          {
            text: `${this.selectedJenis.deskripsi} - ${this.selectedUnitKerja.alias}`,
            fontSize: 14,
            bold: true,
            margin: [17, 20, 0, 3],
          },
        ],

        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text:
                  'Tanggal Cetak : ' +
                  new Date().toLocaleString('id') +
                  ' / oleh : ' +
                  localStorage.namaUser.split(' ').slice(0, 2).join(' ') +
                  ' (' +
                  localStorage.namaUnit +
                  ')',
                margin: [17, 0, 0, 0],
                fontSize: 7,
              },
              {
                text:
                  'halaman ke ' + currentPage.toString() + ' dari ' + pageCount,
                alignment: 'right',
                margin: [0, 0, 40, 0],
                fontSize: 7,
              },
            ],
          }
        },

        content: [
          {
            style: 'tableExample',
            color: '#444',
            fontSize: 9,
            table: {
              widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 200],
              headerRows: 1,
              keepWithHeaderRows: 1,
              body: dataShow,
            },
            layout: {
              hLineWidth: function () {
                return 0.5
              },
              vLineWidth: function () {
                return 0
              },
              fillColor: function (rowIndex) {
                return rowIndex % 2 === 0 && rowIndex > 1 ? '#eeeeee' : null
              },
              // hLineColor: function (i, node) {
              //   return i === 0 || i === node.table.body.length
              //     ? 'black'
              //     : 'gray';
              // },
              // vLineColor: function (i, node) {
              //   return i === 0 || i === node.table.widths.length
              //     ? 'black'
              //     : 'gray';
              // },
              // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
              // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
              // paddingLeft: function (i, node) {
              //   return 20;
              // },
              // paddingRight: function(i, node) { return 4; },
              paddingTop: function () {
                return 4
              },
              paddingBottom: function () {
                return 4
              },
              // fillColor: function (rowIndex, node, columnIndex) { return null; }
            },
          },
        ],
        // styles: {
        //   headerPeriod: {
        //     alignment: 'right',
        //   },
        //   tableHeader: {
        //     alignment: 'center',
        //     fontSize: 8,
        //   },
        //   tableSubHeader: {
        //     alignment: 'left',
        //     fontSize: 8,
        //     bold: true,
        //   },
        // },
      }

      pdfMake.createPdf(docDef).open()
    },

    exportPkpt() {
      const dataShow = this.jsonData.map((data) => {
        return [
          {
            text: data.idKap,
            alignment: 'center',
          },
          {
            text: data.namaKap,
          },
          {
            text: data.namaUnitKerjaKap,
          },
          {
            text: data.idPkpt,
            alignment: 'center',
          },
          {
            text: data.namaRendalPelaporan,
            alignment: 'center',
          },
          {
            text: data.namaUnitKerjaPkpt,
            alignment: 'center',
          },
          {
            text: data.namaPkpt,
          },
          {
            text: data.namaBidwasPkpt,
          },
          {
            text: data.namaRmp,
          },
          {
            text: data.triwulan,
            alignment: 'center',
          },
          {
            text: data.sumberDana,
          },
          {
            text: data.jumlahDana,
          },
          {
            text: data.kdRo,
          },
          {
            text: data.namaRo,
          },
        ]
      })

      dataShow.unshift([
        {
          text: 'Id Kap',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama KAP',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'PJ KAP',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Id PKPT',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Rendal Pelaporan',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Unit Kerja PKPT',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama PKPT',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Bidang Pengawasan',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'RMP',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'TW Pelaporan Kontributor',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Sumber Dana',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Jumlah Dana',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Kode RO',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        {
          text: 'Nama RO',
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
      ])

      const docDef = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [17, 50, 17, 30],
        header: [
          {
            text: `${this.selectedJenis.deskripsi} - ${this.selectedUnitKerja.alias}`,
            fontSize: 14,
            bold: true,
            margin: [17, 20, 0, 3],
          },
        ],

        footer: function (currentPage, pageCount) {
          return {
            columns: [
              {
                text:
                  'Tanggal Cetak : ' +
                  new Date().toLocaleString('id') +
                  ' / oleh : ' +
                  localStorage.namaUser.split(' ').slice(0, 2).join(' ') +
                  ' (' +
                  localStorage.namaUnit +
                  ')',
                margin: [17, 0, 0, 0],
                fontSize: 7,
              },
              {
                text:
                  'halaman ke ' + currentPage.toString() + ' dari ' + pageCount,
                alignment: 'right',
                margin: [0, 0, 40, 0],
                fontSize: 7,
              },
            ],
          }
        },

        content: [
          {
            style: 'tableExample',
            color: '#444',
            fontSize: 9,
            table: {
              widths: [
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
                'auto',
              ],
              headerRows: 1,
              keepWithHeaderRows: 1,
              body: dataShow,
            },
            layout: {
              hLineWidth: function () {
                return 0.5
              },
              vLineWidth: function () {
                return 0
              },
              fillColor: function (rowIndex) {
                return rowIndex % 2 === 0 && rowIndex > 1 ? '#eeeeee' : null
              },
              paddingTop: function () {
                return 4
              },
              paddingBottom: function () {
                return 4
              },
            },
          },
        ],
      }

      pdfMake.createPdf(docDef).open()
    },
  },
}
