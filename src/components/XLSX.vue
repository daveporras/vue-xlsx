<template>
  <div>
    <button @click="download()">Descargar Reservas</button>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

export default {
  name: 'xlsx-component',
  data () {
    return {
      reservas: [{
        'reserve': 'JHGHF84UTG94',
        'seat': '34',
        'dni': '11111111-1',
        'name': 'ELVER'
      }]
    }
  },
  methods: {
    download () {
      console.log(this.reservas)
      let columnas = ['reserve', 'seat', 'dni', 'name']
      var ws = XLSX.utils.json_to_sheet(this.reservas, {header: columnas})
      ws.A1.v = 'RESERVA'
      ws.B1.v = 'ASIENTO'
      ws.C1.v = 'RUT - PASAPORTE'
      ws.D1.v = 'NOMBRE DE PASAJERO'
      var wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Reservas')
      var wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'})
      function s2ab (s) {
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
        return buf
      }
      FileSaver.saveAs(new Blob([s2ab(wbout)], {type: 'application/octet-stream'}), 'reservasFile.xlsx')
    }
  }
}
</script>
