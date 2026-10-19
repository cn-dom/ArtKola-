# ArtKolač

Web aplikacija za naručivanje domaćih torti i kolača izrađenih isključivo po narudžbi.

## Koncept
- Kupac naručuje bez registracije.
- E-mail i telefon su obavezni.
- Plaćanje je isključivo pouzećem pri dostavi ili gotovinom pri preuzimanju.
- Kupac bira dostavu ili osobno preuzimanje.
- Dostava se računa prema udaljenosti.
- Svaka narudžba prvo ide na ručnu potvrdu administratoru.
- Administrator upravlja proizvodima, narudžbama, terminima, kapacitetom i dostavnim zonama.
- Posebna narudžba omogućuje slanje fotografije željene torte i dogovor cijene.

## Planirana struktura
- `frontend/` – React + Vite korisničko sučelje
- `backend/` – Node.js + Express API
- MongoDB – podaci o proizvodima i narudžbama

Projekt se razvija potpuno zasebno od PatriaSoul projekta.

## Fotografije proizvoda

Administracija podržava glavnu fotografiju proizvoda i više fotografija koraka pripreme. Za prijenos datoteka koristi se Cloudinary; bez konfiguracije je i dalje moguće ručno unijeti URL slike.

1. Napravi Cloudinary račun i u Media Library postavkama otvori **Upload presets**.
2. Napravi **Unsigned** upload preset za slike, ograniči ga na slikovne formate i postavi razumno ograničenje veličine datoteke.
3. U frontend okruženju postavi varijable:
   - `VITE_CLOUDINARY_CLOUD_NAME` — Cloudinary cloud name.
   - `VITE_CLOUDINARY_UPLOAD_PRESET` — naziv unsigned upload preseta.
4. Ponovno izgradi i objavi frontend. Ne stavljaj Cloudinary API secret u frontend niti u GitHub repozitorij.

U administraciji proizvoda odaberi glavnu fotografiju ili više fotografija pripreme. Nakon prijenosa URL-ovi se spremaju s proizvodom; za korake pripreme možeš izmijeniti opis uz svaki URL.
