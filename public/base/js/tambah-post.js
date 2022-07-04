// vue Object
var appAddArtikel = new Vue({
  el: "#divTambahArtikel",
  data: {},
  methods: {
    prosesAddArtikel: function () {
    //   console.log(editor.getData());
    let judul = document.querySelector("#txtJudul").value;
    },
  },
});

// inisialisasi 
var editor;
document.querySelector("#txtJudul").focus();

ClassicEditor.create(document.querySelector("#editor"))
  .then((newEditor) => {
    editor = newEditor;
  })
  .catch((error) => {
    console.error(error);
  });

function setSlug()
{
    let judul = document.querySelector("#txtJudul").value;
    let slug = slugify(judul);
    document.querySelector("#txtSlug").value = slug;
}