// route
var rGetPost = apiServer + "post/data/all";
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
      console.log(idPost);
    }
  },
});
// inisialiasi
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
