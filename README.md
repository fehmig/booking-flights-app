# AppFellas Proje - Flight Booking App

Uygulama AppFellas firması için proje geliştirme aşamasında geliştirilmiştir. Uygulamanın amacı bir havalimanı
API’si ile basitçe uçuş bilgilerinin listelenebilmesi ve kullanıcı uçuş bilgilerinin basitçe
kaydedilmesini sağlayacak bir web uygulaması oluşturulmasıdır. Uygulamanın ara yüzü React ile geliştirilmiştir. Server kısmı için Node.js - Express kullanılmıştır. Veriler MongoDB üzerinde tutulup, kullanılmıştır.

State yönetimi için Redux kullanılmıştır. redux, react-redux, redux-thunk, @redux-devtools/extension kütüphaneleri ile mimari başarılı bir şekilde oluşturulmuştur.

Ara yüz iyileştirmeleri için CSS kodlarına ek olarak uyarı-bildirim bileşenleri için react-toastify, ikonlar için react-icons kütüphanesi kullanılmıştır. Animatik ikonlar CSS kodları ile oluşturulmuştur. Tasarım responsive olarak kodlanmıştır, mobil görünüm için uygundur.

Server kısmı MVC yapısına uygun olarak kodlanmıştır.

## Görseller

![Ekran Görüntüsü 1](./client/src/assets/screenshoots/home.png)
Ana ekran görünümü.

![Ekran Görüntüsü 2](./client/src/assets/screenshoots/home2.png)
Ana ekran görünümü (devam).

![Ekran Görüntüsü 3](./client/src/assets/screenshoots/search.png)
Filtreleme işlemleri.

![Ekran Görüntüsü 4](./client/src/assets/screenshoots/search2.png)
Filtreleme işlemleri.

![Ekran Görüntüsü 5](./client/src/assets/screenshoots/modal.png)
Rezervasyon yapmak için uçuş seçince çıkan onaylama modalı.

![Ekran Görüntüsü 6](./client/src/assets/screenshoots/modal2.png)
Rezervasyon onaylanınca çıkan yönlendirme modal içeriği.

![Ekran Görüntüsü 7](./client/src/assets/screenshoots/my-flights.png)
Rezervasyon yapılan uçuşların listelendiği "Uçuşlarım" ekranı.

![Ekran Görüntüsü 8](./client/src/assets/screenshoots/mobil.png)
Responsive mobil görünüm.

![Ekran Görüntüsü 9](./client/src/assets/screenshoots/mobil2.png)
Responsive mobil görünüm.

![Ekran Görüntüsü 10](./client/src/assets/screenshoots/mongodb.png)
Rezervasyonların kaydedildiği veritabanı.

![Ekran Görüntüsü 11](./client/src/assets/screenshoots/api.png)
Uçuşların listelendiği API.

## NOT

Uçuşlara ait bilgiler API de yer alan bilgilerle kısıtlanmak zorunda kalmıştır, özel durumlardan dolayı proje 2 gün içerisinde tamamlanmış olup API kullanımında problem yaşanmıştır. API'den ulaşılan bilgiler görsellere eklenmiştir, sadece bu bilgiler kullanılabilmiştir. Örneğin origin bilgisi isim olarak alınamamış kalkış ve varış havalimanı kodları kullanılarak bir mantık oluşturulmaya çalışılmıştır. Uçuşlara ait fiyat bilgisine ulaşılamamıştır.
Dolayısıyla filtreleme işlemleri kalkış-varış ve uçuş tarihleri üzerinden yapılabilmektedir.

## KULLANIM

Proje ana dizinindeyken server klasörüne girip terminal üzerinden "npm start" komutu ile server kısmı çalıştırılmalıdır. Server is running on:  5000
MongoDB Connected uyarıları konsolda görünüyorsa server başarılı bir şekilde çalışmaktadır.

Ara yüz kısmı için ana dizindeyken client klasörüne girip "npm start" komutu ile projeyi derleyebiliriz.

NOT: Proje klonlandığı takdirde "npm install" ile proejeye ait kütüphaneler yüklenmelidir. .env dosyasında yer alan bilgiler projenin ayağa kalkması için zorunludur bu sebeple GitHubda bulunmaktadır.
