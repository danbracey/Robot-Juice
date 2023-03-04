$( document ).ready(function() {
    //Get the data from the server and save it into the promise variable
    let promise = $.ajax({
        url: "https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil"
    });
    //When the promise is completed, create a function with a data variable
    promise.done(function(data) {
        //Create a for loop and count the number of iterations (reviews)
        for(let i = 0; i < data.length; i++) {
            //Get the review avatar. There is no avatar link in the url, so using the same image each time with alt text
            let img = "<img src='images/reviewicon1.jpg' alt='Review Avatar'/>";
            let review = "<p>" + data[i].review + "</p>";
            let nickname = "<strong>" + data[i].nickname + "</strong>";
            //Create an empty rating variable
            let rating;
            //Using a switch statement,create and style the desired rating
            switch (parseInt(data[i].rating)) {
                case 1:
                    //Have one star styled red, the rest grey and so on...
                    rating = "<span class='total_rating'><span class='rating'>*</span>****</span>";
                    break;
                case 2:
                    rating = "<span class='total_rating'><span class='rating'>**</span>***</span>";
                    break;
                case 3:
                    rating = "<span class='total_rating'><span class='rating'>***</span>**</span>";
                    break;
                case 4:
                    rating = "<span class='total_rating'><span class='rating'>****</span>*</span>";
                    break;
                case 5:
                    rating = "<span class='total_rating'><span class='rating'>*****</span></span>";
                    break;
                default:
                    rating = "<span class='total_rating'><span class='rating'>*****</span></span>";
                    break;
            }
            //Add all elements together and append to HTML.
            $( "<div class='review'>" + img + "<div class='review_details'>" + rating + nickname + "</div>" + review + "</div>").appendTo( "#load_reviews" );
        }
    });
});