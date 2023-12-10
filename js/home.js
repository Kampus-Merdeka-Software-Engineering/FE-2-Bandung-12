$(document).ready(function(){
    // Array untuk menyimpan URL gambar
    var images = [
      "https://drive.google.com/uc?export=view&id=1_lPy1JsckjIsNar7kSUrFRxIPMJb9u7a",
      "https://drive.google.com/uc?export=view&id=1_IVn0uLx2c4890r4bd8JRkVyH2_WsUdw/",
      "https://drive.google.com/uc?export=view&id=1_IVn0uLx2c4890r4bd8JRkVyH2_WsUdw/"
      // Tambahkan URL gambar berikutnya di sini
    ];
  
    // Inisialisasi slick carousel
    $('.gallery-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: true
    });
  
    // Tambahkan event click pada setiap gambar
    $('.slider-item').click(function() {
      // Ambil index gambar saat ini
      var currentIndex = $(this).index();
  
      // Geser ke gambar berikutnya
      $('.gallery-slider').slick('slickGoTo', currentIndex + 1);
  
      // Jika sudah mencapai gambar terakhir, geser kembali ke gambar pertama
      if (currentIndex === images.length - 1) {
        $('.gallery-slider').slick('slickGoTo', 0);
      }
    });
  });