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
      nom: "مغادرة الحجر الصحي",
      description: "Description"
    },
    {
      id: 4,
      nom: "عدم غلق",
      description: "Description"
    },
    {
      id: 3,
      nom: "خرق التعليمات",
      description: "Description"
    },
    {
      id: 1,
      nom: "زيادة في الأسعار",
      description: "Description"
    },
    {
      id: 2,
      nom: "إحتكار",
      description: "Description"
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
  pageHistory = 0;
  public type_id;
  public TicketForm: FormGroup;
  public Aprovel: FormGroup;
  public put_id: Number;
  public confirm_id: Number;
  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private mainSerivce: LandingService
  ) {}
  onFileChanged(files) {
    console.log(files);
    this.fileToUpload = files.target.files[0];
  }
  ngOnInit(): void {
    this.TicketForm = this._formBuilder.group({
      state: [null, Validators.required],
      city: [null, Validators.required],
      locationDescription: ["", Validators.required],
      description: ["", Validators.required],
      type: [null, Validators.required],
      title: ["", Validators.required],
      media: ["", Validators.required],
      tel: [null],
      fullName: [""],
      madeBy: ["", [Validators.required]]
    });

    this.Aprovel = this._formBuilder.group({
      comment: [""]
    });
  }

  Confirm(id, page) {
    this.confirm_id = id;
    this.changePage(page);
  }

  changePage(Id) {
    this.pageHistory = this.pageId;
    this.pageId = Id;

    if (this.pageId == 1) {
      this.mainSerivce
        .getTicketsByStateAndCity(
          this.TicketForm.get("state").value,
          this.TicketForm.get("city").value,
          this.type_id
        )
        .subscribe(res => {
          this.Tickets = res;
          if (this.pageId == 1 && this.Tickets.length == 0) {
            this.pageId++;
          }
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

  addComment() {
    this.mainSerivce
      .ajouterAprovel({
        description: this.Aprovel.get("comment").value,
        ticketId: this.confirm_id
      })
      .subscribe(res => {
        this.put_id = res[0].id;
        this.changePage(3);
      });
  }

  addTicket() {
    console.log("upload file");
    if (this.fileToUpload != null) {
      this.mainSerivce.postFile(this.fileToUpload).subscribe(data => {
        this.TicketForm.get("media").setValue(data.fileUrl.substr(12));
        this.mainSerivce
          .ajouterTicket({
            state: this.TicketForm.get("state").value,
            city: this.TicketForm.get("city").value,
            locationDescription: this.TicketForm.get("locationDescription")
              .value,
            description: this.TicketForm.get("description").value,
            type: this.type_id,
            title: this.TicketForm.get("title").value,
            madeBy: this.TicketForm.get("madeBy").value,
            media: this.TicketForm.get("media").value
          })
          .subscribe(res => {
            this.put_id = res[0].id;
            this.changePage(3);
          });
      });
    } else {
      this.mainSerivce
        .ajouterTicket({
          state: this.TicketForm.get("state").value,
          city: this.TicketForm.get("city").value,
          locationDescription: this.TicketForm.get("locationDescription").value,
          description: this.TicketForm.get("description").value,
          type: this.type_id,
          title: this.TicketForm.get("title").value,
          madeBy: this.TicketForm.get("madeBy").value
        })
        .subscribe(res => {
          this.put_id = res[0].id;
          this.changePage(3);
        });
    }
  }

  addInfo() {
    if (this.pageHistory == 2) {
      this.mainSerivce
        .UpdateTicket(this.put_id, {
          fullName: this.TicketForm.get("fullName").value,
          tel: this.TicketForm.get("tel").value
        })
        .subscribe(res => {
          location.reload();
        });
    } else {
      console.log(this.put_id);
      this.mainSerivce
        .UpdateAprovel(this.put_id, {
          fullName: this.TicketForm.get("fullName").value,
          tel: this.TicketForm.get("tel").value
        })
        .subscribe(res => {
          this.TicketForm.get("fullName").reset();
          this.TicketForm.get("tel").reset();
          this.Aprovel.reset();
          this.changePage(1);
        });
    }
  }

  Tabligh(id) {
    this.type_id = id;
    this.changePage(1);
  }

  getType(id: number) {
    return this.types.find(t => t.id == id).nom;
  }
  backPage() {
    switch (this.pageId) {
      case 6:
        this.changePage(0);
        this.TicketForm.reset();
        console.log("zae", this.TicketForm);
        break;
      case 1:
        this.changePage(6);
        this.resetTicketsForm();

        break;
      default:
        this.changePage(6);
        this.resetTicketsForm();

        break;
    }
  }

  resetTicketsForm() {
    Object.keys(this.TicketForm.controls).forEach(key => {
      if (!(key === "state" || key === "city")) {
        this.TicketForm.get(key).reset();
      }
    });
    this.Aprovel.reset();
  }
}
