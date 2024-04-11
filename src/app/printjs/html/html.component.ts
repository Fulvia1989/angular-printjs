import { Component, OnInit } from '@angular/core';
import print from "print-js";

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  candidato = {
    anagrafica: {
      "nome": "Marco",
      "cognome": "Izzo",
      "cf": "ZZIMRC80A01F205C",
      "extraTime": null,
      "presenza": "1",
      "dataNascita": "1980-01-01",
      "tutor": false,
      "pagamento": "0"
    },
    qrcode: {
      "img": "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",
      "imgType": "image/png"
    }
  };

  myStyle = `
.contenitore_qr_dati{
  display: grid;
  grid-template-columns: 10rem 10rem 20rem;
  grid-template-rows: none;
  grid-template-areas: "valori descrizione qrcode";
  justify-content: center;
}

.value{
  grid-area: valori;
}

.description{
  grid-area: descrizione;
}

.qr-container{
  grid-area: qrcode;
  justify-self: start;
  margin-left: 15px;
}

.qr-container img{
  width: auto;
}
`;

  constructor() { }

  ngOnInit(): void {
  }

  printHTML(){
    print({ 
      printable: 'print-area', 
      type: 'html',
      header: 'PrintJS - HTML',
      css:'assets/template-style.css'
      //style:this.myStyle 
    })
  }

}
