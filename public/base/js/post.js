// route
var rGetPost = apiServer + "post/data/all";
var rProcessDelete = apiServer + "post/delete/process";
// vue object
var postApp = new Vue({
  el: "#divDataPost",
  data: {
    dataPost: [],
  },
  methods: {
    tambahPostAtc : function()
    {
        renderPage("app/post/tambah", "Tambah Artikel");
    },
    deleteAtc : function(idPost)
    {
      confirmQuest('warning', 'Konfirmasi', 'Hapus artikel ...?', function (x) {deleteConfirm(idPost)});
    }
  },
});
// inisialiasi

function deleteConfirm(idPost)
{
  $.post(rProcessDelete, {'idPost':idPost}, function(data){
    pesanUmumApp('success', 'Sukses !!!', 'Sukses menghapus artikel !!!');
    renderPage('app/post/data', 'Data Post');
  });
}

var getPostDataRequest = async () => {
  try {
    const resp = await axios.get(rGetPost);
    let postData = resp.data.post;
    let ordPost = 1;
    postData.forEach(renderPost);
    function renderPost(item, index) {
      postApp.dataPost.push({
        no : ordPost,
        judul: postData[index].judul,
        shortDeks : postData[index].short_deks,
        slug : postData[index].slug,
        writer : postData[index].writer,
        idPost : postData[index].id
      });
      setTimeout(function(){
        $("#tblDataPost").dataTable();
      }, 1000);
      ordPost++;
    }
  } catch (err) {
    console.error(err);
  }
};

getPostDataRequest();
