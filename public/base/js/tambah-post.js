// route 
var rProsesAddArtikel = apiServer + "post/data/add";
// vue Object
var appAddArtikel = new Vue({
  el: "#divTambahArtikel",
  data: {},
  methods: {
    prosesAddArtikel: function () {
      //   console.log(editor.getData());
      let judul = document.querySelector("#txtJudul").value;
      let img = document.querySelector("#txtPreviewUpload").getAttribute("src");
      let isiArtikel = editor.getData();
      let slugData = slug;
      let writer = document.querySelector("#txtWriter").value;
      let kategori = document.querySelector("#txtKategori").value;
      let shortDeks = document.querySelector("#txtShortDeks").value;
      let imgCover = document.querySelector("#txtImgCover").value;
      if(judul.length < 1 || img.length < 1 || isiArtikel.length < 1 || writer.length < 1 || kategori === 'none' || shortDeks.length < 1){
        pesanUmumApp('warning', 'Isi field !!!', 'Harap isi seluruh field !!!');
      }else{
        let ds = {
          'ada_token' : 'ada token',
          'judul' : judul,
          'slug' : slugData,
          'short_deks' : shortDeks,
          'long_deks' : isiArtikel,
          'cover_homepage' : imgCover,
          'writer' : writer,
          'kategori' : kategori,
          'img' : img
        }
        confirmQuest('info', 'Konfirmasi', 'Proses tambah artikel ...?', function (x) {addConfirm(ds)});
      }
    },
  },
});

// inisialisasi
var editor;
var slug;
document.querySelector("#txtJudul").focus();

function addConfirm(ds)
{
  $.post(rProsesAddArtikel, ds, function(data){
    pesanUmumApp('success', 'Sukses !!!', 'Sukses menambahkan artikel !!!');
    renderPage('app/post/data', 'Data Post');
  });
}

ClassicEditor.create(document.querySelector("#editor"))
  .then((newEditor) => {
    editor = newEditor;
  })
  .catch((error) => {
    console.error(error);
  });

function setSlug() {
  let judul = document.querySelector("#txtJudul").value;
  slug = slugify(judul);
}

function setImg() {
  var citraInput = document.querySelector("#txtFoto");
  var preview = document.querySelector("#txtPreviewUpload");
  var fileGambar = new FileReader();
  fileGambar.readAsDataURL(citraInput.files[0]);
  fileGambar.onload = function (e) {
    let hasil = e.target.result;
    preview.src = hasil;
  };
  console.log("image ready to upload");
}
