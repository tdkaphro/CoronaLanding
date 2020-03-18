import { LandingService } from "./landing.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  types = [
    {
      id: 0,
      nom: "إحتكار"
    },
    {
      id: 1,
      nom: "عدم غلق"
    },
    {
      id: 2,
      nom: "مغادرة الحجر الصحي"
    },
    {
      id: 3,
      nom: "زيادة في الأسعار"
    }
  ];
  Gouvernorat = [
    {
      nom: "Ariana",
      subGouvernorat: [
        { nom: "Ariana Ville" },
        { nom: "Ettadhamen" },
        { nom: "Kalâat el-Andalous" },
        { nom: "La Soukra" },
        { nom: "Mnihla" },
        { nom: "Raoued" },
        { nom: "Sidi Thabet" }
      ]
    },
    {
      nom: "Béja",
      subGouvernorat: [
        { nom: "Amdoun" },
        { nom: "Béja Nord" },
        { nom: "Béja Sud" },
        { nom: "Goubellat" },
        { nom: "Medjez el-Bab" },
        { nom: "Nefza" },
        { nom: "Téboursouk" },
        { nom: "Testour" },
        { nom: "Thibar" }
      ]
    },
    {
      nom: "Ben Arous",
      subGouvernorat: [
        { nom: "Ben Arous" },
        { nom: "Bou Mhel el-Bassatine" },
        { nom: "El Mourouj" },
        { nom: "Ezzahra" },
        { nom: "Fouchana" },
        { nom: "Hammam Chott" },
        { nom: "Hammam Lif" },
        { nom: "Mohamedia" },
        { nom: "Medina Jedida" },
        { nom: "Mégrine" },
        { nom: "Mornag" },
        { nom: "Radès" }
      ]
    },
    {
      nom: "Bizerte",
      subGouvernorat: [
        { nom: "Bizerte Nord" },
        { nom: "Bizerte Sud" },
        { nom: "El Alia" },
        { nom: "Ghar El Melh" },
        { nom: "Ghezala" },
        { nom: "Joumine" },
        { nom: "Mateur" },
        { nom: "Menzel Bourguiba" },
        { nom: "Menzel Jemil" },
        { nom: "Ras Jebel" },
        { nom: "Sejnane" },
        { nom: "Tinja" },
        { nom: "Utique" },
        { nom: "Zarzouna" }
      ]
    },
    {
      nom: "Gabès",
      subGouvernorat: [
        { nom: "Gabès Médina" },
        { nom: "Gabès Ouest" },
        { nom: "Gabès Sud" },
        { nom: "Ghannouch" },
        { nom: "El Hamma" },
        { nom: "Matmata" },
        { nom: "Mareth" },
        { nom: "Menzel El Habib" },
        { nom: "Métouia" },
        { nom: "Nouvelle Matmata" }
      ]
    },
    {
      nom: "Gafsa",
      subGouvernorat: [
        { nom: "Belkhir" },
        { nom: "El Guettar" },
        { nom: "El Ksar" },
        { nom: "Gafsa Nord" },
        { nom: "Gafsa Sud" },
        { nom: "Mdhilla" },
        { nom: "Métlaoui" },
        { nom: "Moularès" },
        { nom: "Redeyef" },
        { nom: "Sened" },
        { nom: "Sidi Aïch" }
      ]
    },
    {
      nom: "Jendouba",
      subGouvernorat: [
        { nom: "Aïn Draham" },
        { nom: "Balta-Bou Aouane" },
        { nom: "Bou Salem" },
        { nom: "Fernana" },
        { nom: "Ghardimaou" },
        { nom: "Jendouba Sud" },
        { nom: "Jendouba Nord" },
        { nom: "Oued Meliz" },
        { nom: "Tabarka" }
      ]
    },
    {
      nom: "Kairouan",
      subGouvernorat: [
        { nom: "Bou Hajla" },
        { nom: "Chebika" },
        { nom: "Echrarda" },
        { nom: "El Alâa" },
        { nom: "Haffouz" },
        { nom: "Hajeb El Ayoun" },
        { nom: "Kairouan Nord" },
        { nom: "Kairouan Sud" },
        { nom: "Nasrallah" },
        { nom: "Oueslatia" },
        { nom: "Sbikha" }
      ]
    },
    {
      nom: "Kasserine",
      subGouvernorat: [
        { nom: "El Ayoun" },
        { nom: "Ezzouhour" },
        { nom: "Fériana" },
        { nom: "Foussana" },
        { nom: "Haïdra" },
        { nom: "Hassi El Ferid" },
        { nom: "Jedelienne" },
        { nom: "Kasserine Nord" },
        { nom: "Kasserine Sud" },
        { nom: "Majel Bel Abbès" },
        { nom: "Sbeïtla" },
        { nom: "Sbiba" },
        { nom: "Thala" }
      ]
    },
    {
      nom: "Kébili",
      subGouvernorat: [
        { nom: "Douz Nord" },
        { nom: "Douz Sud" },
        { nom: "Faouar" },
        { nom: "Kébili Nord" },
        { nom: "Kébili Sud" },
        { nom: "Souk Lahad" }
      ]
    },
    {
      nom: "Le Kef",
      subGouvernorat: [
        { nom: "Dahmani" },
        { nom: "Jérissa" },
        { nom: "El Ksour" },
        { nom: "Sers" },
        { nom: "Kalâat Khasba" },
        { nom: "Kalaat Senan" },
        { nom: "Kef Est" },
        { nom: "Kef Ouest" },
        { nom: "Nebeur" },
        { nom: "Sakiet Sidi Youssef" },
        { nom: "Tajerouine" }
      ]
    },
    {
      nom: "Mahdia",
      subGouvernorat: [
        { nom: "Bou Merdes" },
        { nom: "Chebba" },
        { nom: "Chorbane" },
        { nom: "El Jem" },
        { nom: "Essouassi" },
        { nom: "Hebira" },
        { nom: "Ksour Essef" },
        { nom: "Hebira" },
        { nom: "Mahdia" },
        { nom: "Melloulèche" },
        { nom: "Ouled Chamekh" },
        { nom: "Sidi Alouane" }
      ]
    },
    {
      nom: "La Manouba",
      subGouvernorat: [
        { nom: "Borj El Amri" },
        { nom: "Djedeida" },
        { nom: "Douar Hicher" },
        { nom: "El Batan" },
        { nom: "La Manouba" },
        { nom: "Mornaguia" },
        { nom: "Oued Ellil" },
        { nom: "Tebourba" }
      ]
    },
    {
      nom: "Médenine",
      subGouvernorat: [
        { nom: "Ben Gardane" },
        { nom: "Beni Khedache" },
        { nom: "Djerba - Ajim" },
        { nom: "Djerba - Houmt Souk" },
        { nom: "Djerba - Midoun" },
        { nom: "Médenine Nord" },
        { nom: "Médenine Sud" },
        { nom: "Sidi Makhlouf" },
        { nom: "Zarzis" }
      ]
    },
    {
      nom: "Monastir",
      subGouvernorat: [
        { nom: "Bekalta" },
        { nom: "Bembla" },
        { nom: "Beni Hassen" },
        { nom: "Jemmal" },
        { nom: "Ksar Hellal" },
        { nom: "Ksibet el-Médiouni" },
        { nom: "Moknine" },
        { nom: "Monastir" },
        { nom: "Ouerdanine" },
        { nom: "Sahline" },
        { nom: "Sayada-Lamta-Bou Hajar" },
        { nom: "Téboulba" },
        { nom: "Zéramdine" }
      ]
    },
    {
      nom: "Nabeul",
      subGouvernorat: [
        { nom: "Béni Khalled" },
        { nom: "Béni Khiar  " },
        { nom: "Bou Argoub" },
        { nom: "Dar Chaâbane El Fehri" },
        { nom: "El Haouaria" },
        { nom: "El Mida" },
        { nom: "Grombalia" },
        { nom: "Hammam Ghezèze" },
        { nom: "Hammamet" },
        { nom: "Kélibia" },
        { nom: "Korba" },
        { nom: "Menzel Bouzelfa" },
        { nom: "Menzel Temime" },
        { nom: "Nabeul" },
        { nom: "Soliman" },
        { nom: "Takelsa" }
      ]
    },
    {
      nom: "Sfax",
      subGouvernorat: [
        { nom: "Agareb" },
        { nom: "Bir Ali Ben Khalifa	" },
        { nom: "El Amra" },
        { nom: "El Hencha" },
        { nom: "Graïba" },
        { nom: "Jebiniana" },
        { nom: "Kerkennah" },
        { nom: "Mahrès" },
        { nom: "Menzel Chaker" },
        { nom: "Sakiet Eddaïer" },
        { nom: "Sakiet Ezzit" },
        { nom: "Sfax Ouest" },
        { nom: "Sfax Sud" },
        { nom: "Sfax Ville" },
        { nom: "Skhira" },
        { nom: "Thyna" }
      ]
    },
    {
      nom: "Sidi Bouzid",
      subGouvernorat: [
        { nom: "Bir El Hafey" },
        { nom: "Cebbala Ouled Asker" },
        { nom: "Jilma" },
        { nom: "Meknassy" },
        { nom: "Menzel Bouzaiane" },
        { nom: "Mezzouna" },
        { nom: "Ouled Haffouz" },
        { nom: "Regueb" },
        { nom: "Sidi Ali Ben Aoun" },
        { nom: "Sidi Bouzid Est" },
        { nom: "Sidi Bouzid Ouest" },
        { nom: "Souk Jedid" }
      ]
    },
    {
      nom: "Siliana",
      subGouvernorat: [
        { nom: "Bargou" },
        { nom: "Bou Arada" },
        { nom: "El Aroussa" },
        { nom: "El Krib" },
        { nom: "Gaâfour" },
        { nom: "Kesra" },
        { nom: "Makthar" },
        { nom: "Rouhia" },
        { nom: "Sidi Bou Rouis" },
        { nom: "Siliana Nord" },
        { nom: "Siliana Sud" }
      ]
    },
    {
      nom: "Sousse",
      subGouvernorat: [
        { nom: "Akouda" },
        { nom: "Bouficha" },
        { nom: "Enfida" },
        { nom: "Hammam Sousse" },
        { nom: "Hergla" },
        { nom: "Kalâa Kebira" },
        { nom: "Kalâa Seghira" },
        { nom: "Kondar" },
        { nom: "M'saken" },
        { nom: "Sidi Bou Ali" },
        { nom: "Sidi El Hani" },
        { nom: "Sousse Jawhara" },
        { nom: "Sousse Médina" },
        { nom: "Sousse Riadh" },
        { nom: "Sousse Sidi Abdelhamid" }
      ]
    },
    {
      nom: "Tataouine",
      subGouvernorat: [
        { nom: "Bir Lahmar" },
        { nom: "Dehiba" },
        { nom: "Ghomrassen" },
        { nom: "Remada" },
        { nom: "Smâr" },
        { nom: "Tataouine Nord" },
        { nom: "Tataouine Sud" }
      ]
    },
    {
      nom: "Tozeur",
      subGouvernorat: [
        { nom: "Degache" },
        { nom: "Hazoua" },
        { nom: "Nefta" },
        { nom: "Tameghza" },
        { nom: "Tozeur" }
      ]
    },
    {
      nom: "Tunis",
      subGouvernorat: [
        { nom: "Bab El Bhar" },
        { nom: "Bab Souika" },
        { nom: "Carthage" },
        { nom: "Cité El Khadra" },
        { nom: "Djebel Jelloud	" },
        { nom: "El Kabaria" },
        { nom: "El Menzah" },
        { nom: "El Omrane" },
        { nom: "El Omrane supérieur" },
        { nom: "El Ouardia" },
        { nom: "Ettahrir" },
        { nom: "Ezzouhour" },
        { nom: "Hraïria" },
        { nom: "La Goulette" },
        { nom: "La Marsa" },
        { nom: "Le Bardo" },
        { nom: "Le Kram" },
        { nom: "Médina" },
        { nom: "Séjoumi" },
        { nom: "Sidi El Béchir" },
        { nom: "Sidi Hassine" }
      ]
    },
    {
      nom: "Zaghouan",
      subGouvernorat: [
        { nom: "Bir Mcherga" },
        { nom: "El Fahs" },
        { nom: "Nadhour" },
        { nom: "Saouaf" },
        { nom: "Zaghouan" },
        { nom: "Zriba" }
      ]
    }
  ];
  Tickets = [];
  fileToUpload: File = null;

  selectedIndex: any;
  pageId = 0;
  public TicketForm: FormGroup;
  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private mainSerivce: LandingService
  ) { }
  ngOnInit(): void {
    this.TicketForm = this._formBuilder.group({
      state: ["", Validators.required],
      city: ["", Validators.required],
      locationDescription: ["", Validators.required],
      description: ["", Validators.required],
      type: [null, Validators.required],
      title: ["", Validators.required],
      media: ["", Validators.required],
      tel: [null],
      fullName: [""],
      madeBy: ["", [Validators.required]]
    });
  }
  changePage() {
    console.log("ee");
    this.pageId++;
    if (this.pageId == 1) {
      this.mainSerivce
        .getTicketsByStateAndCity(
          this.TicketForm.get("state").value,
          this.TicketForm.get("city").value
        )
        .subscribe(res => {
          this.Tickets = res;
          this.Tickets.forEach(element => {
            if (element.type == 0) {
              element.type = "إحتكار";
            }
            if (element.type == 1) {
              element.type = "عدم غلق";
            }
            if (element.type == 2) {
              element.type = "مغادرة الحجر الصحي";
            }
            if (element.type == 3) {
              element.type = "زيادة في الأسعار";
            }
          });
        });
    }
  }
  gouvernoratChange(e) {
    this.Gouvernorat.forEach((city, index) => {
      if (city.nom === e) {
        this.selectedIndex = index;
        console.log(index);
      }
    });
  }
  addTicket() {
    console.log(this.fileToUpload)
    this.mainSerivce.postFile(this.fileToUpload).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error);
      this.mainSerivce
        .ajouterTicket(this.TicketForm.getRawValue())
        .subscribe(res => {
/*           location.reload();
 */        });
    });
  }
  onFileChanged(files) {
    console.log(files)
    this.fileToUpload = files.target.files[0];
  }
  upvotePage() {
    this.pageId = 4;
  }
}
