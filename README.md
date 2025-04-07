Skip to content
Navigation Menu
JnrMert
login-form-cypress

Type / to search
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
login-form-cypress
/
Name your file...
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing file contents
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
eni başlayan bir projenin setup'ını yapmak ve login sayfasını hazırlamak sana düştü. 3 ana görevin var: Proje oluşturmak, test yazmak ve projeyi githuba yüklemek.

Bu görevleri bitirdiğinde, github adresini örnek formattaki gibi index.js dosyasına yazmayı unutma.


1. Proje oluşturulacak

Projeyi kendi bilgisayarınızda sıfırdan oluşturarak yapacaksın. (Tercihen vite ile)
Uygulamanızda bir Login formu (Login.jsx) ve geçici bir success sayfası (Success.jsx) olacak.
Componentleri "components" klasöründe oluşturmaya dikkat.

Login formu: email, şifre ve şartları kabul ediyorum alanından oluşacak.
Form alanları için validasyonlar eklenecek:
geçerli email (regex kullanılabilir),
strong password (regex kullanılabilir)
ve şartları kabul etmesi gerekecek.
tüm validasyonları geçer ise login butonu aktif olacak.

2. Cypress ile de 2 farklı senaryoda test yazılacak:

a) Başarılı form doldurulduğunda submit edebiliyorum:

success sayfasını açabiliyorum.
b) Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.

email yanlış girdim:

ekranda 1 tane hata mesajı var
ekranda doğru hata mesajı var
buton disabled durumda
email ve password yanlış

ekranda 2 tane hata mesajı var
ekranda password hata mesajı var
email ve password doğru ama kuralları kabul etmedim.

buton disabled mı

3. projeyi github’a yükleyeceksin

public olsun
en az 4 commit olsun
proje setup’ı bitince
login sayfası ve success sayfası bitince
form validasyonları eklenince
testler eklenince

İpucu: Zaman kazanmak için sprint 7 gün 3 gün projesinin form sayfasını kullanabilirsin.
Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
New File at / · JnrMert/login-form-cypress
