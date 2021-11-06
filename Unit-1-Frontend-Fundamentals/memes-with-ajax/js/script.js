$(() => {
   const $memeDiv = $("#memes");
   // $.ajax({url:'https://api.imgflip.com/get_memes'})
   // .then(result => result.json())
   // .then(items => data.push(items.memes))
   $.ajax({
      url: `https://api.imgflip.com/get_memes`,
   }).then(
      data => {
         // result var is holding the json object from the api
         data.data.memes.forEach(meme => {
            console.log(meme.url, "is my meme");
         });
         // display result

         render(data.data.memes);
      },
      error => {
         // display error message
         console.log(error);
      }
   );
   // result.data.memes is the arg -> data is the param for it
   function render(data) {
      const $ul = $("<ul></ul>");
      data.forEach(item => {
         const $img = $("<img />", {
            src: item.url,
            alt: item.name,
         });
         const $li = $("<li></li>");
         $li.append($img);
         $ul.append($li);
         $memeDiv.append($ul);
      });
   }
});
