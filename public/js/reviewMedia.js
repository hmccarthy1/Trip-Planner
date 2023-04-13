

var mediaURL;
var image;
const Caption = document.getElementById('caption').value;
const Review = 1;



async function getBase64(file)  {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      console.log(reader.result);
      mediaURL = reader.result;
      fetch('/api/reviewMedia', {
          method: 'POST', 
          body: JSON.stringify({
              mediaURL: mediaURL,
              Caption: Caption,
              Review: Review
          }),
    headers: { 'Content-Type': 'application/json' },

          
      })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 };

 var imagePromise = getBase64(image)
 
 document.getElementById('submit').addEventListener('click',async (event) => {
    event.preventDefault();


    var file = document.getElementById('file').files[0]
    getBase64(file);

})




