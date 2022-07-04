// route
var rGetPost = apiServer + "post/data/all";
// vue object
var postApp = new Vue({
  el: "#divDataPost",
  data: {
    dataPost: [],
  },
  methods: {},
});
// inisialiasi
var sendGetRequest = async () => {
  try {
    const resp = await axios.get(rGetPost);
    let postData = resp.data.post;
    let totalPost = postData.length;
    console.log(totalPost);
    postData.forEach(renderPost);
    function renderPost(item, index) {
      // console.log(postData[index]);
      postApp.dataPost.push({
        judul: postData[index].judul,
      });
      setTimeout(function(){
        $("#tblDataPost").dataTable();
      }, 1000);
    }
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

sendGetRequest();
